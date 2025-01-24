import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/ui/combobox";
import { Plus, ArrowLeft, Trash2, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Policy } from "../types";
import { useState, useEffect } from "react";
import {
  type PermissionScope,
  type BasePermission,
  getAllPermissions,
  getPermissionsByScope,
  isReadOnlyPermission,
} from "../api-permissions";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { JsonView } from "./json-view";
import { toast } from "sonner";

interface PermissionRow {
  id: string;
  scope: string;
  permissionName: string;
  permissionType: BasePermission["type"];
}

interface ConfigureTokenProps {
  tokenName: string;
  setTokenName: (name: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  policies: Policy[];
  setPolicies: (
    policies: Policy[] | ((currentPolicies: Policy[]) => Policy[])
  ) => void;
  onBack: () => void;
  tokenType: "template" | "custom";
}

type ZoneResourceRow = {
  id: string;
  inclusionType: string;
  zoneScope: string;
  account: string;
};

type IpFilterRow = {
  id: string;
  operator: string;
  ipAddress: string;
};

const SCOPE_OPTIONS = [
  { value: "account", label: "Account" },
  { value: "zone", label: "Zone" },
  { value: "user", label: "User" },
];

const mapPoliciesToPermissionRows = (policies: Policy[]): PermissionRow[] => {
  return policies.flatMap((policy) => {
    // Determine scope from resources
    const resourceKey = Object.keys(policy.resources)[0] || "";
    let scope = "";
    if (resourceKey.includes("account.zone")) {
      scope = "zone";
    } else if (resourceKey.includes("account")) {
      scope = "account";
    } else if (resourceKey.includes("user")) {
      scope = "user";
    }

    // Map each permission to a row
    return policy.permissions.map((permission) => ({
      id: permission.id,
      scope,
      permissionName: permission.name,
      permissionType: permission.type,
    }));
  });
};

export function ConfigureToken({
  tokenName,
  setTokenName,
  onSubmit,
  policies,
  setPolicies,
  onBack,
  tokenType,
}: ConfigureTokenProps) {
  const [permissionRows, setPermissionRows] = useState<PermissionRow[]>([
    { id: "1", scope: "", permissionName: "", permissionType: "read" as const },
  ]);
  const [zoneRows, setZoneRows] = useState<ZoneResourceRow[]>([
    { id: "1", inclusionType: "include", zoneScope: "all", account: "account" },
  ]);
  const [ipFilterRows, setIpFilterRows] = useState<IpFilterRow[]>([
    { id: "1", operator: "is_not_in", ipAddress: "" },
  ]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [isJsonView, setIsJsonView] = useState(false);
  const [jsonConfig, setJsonConfig] = useState("");

  // Sync permission rows with policies when they change
  useEffect(() => {
    if (policies.length > 0) {
      const newRows = mapPoliciesToPermissionRows(policies);
      setPermissionRows(
        newRows.length > 0
          ? newRows
          : [{ id: "1", scope: "", permissionName: "", permissionType: "read" }]
      );
    }
  }, [policies]);

  // Filter permission groups based on selected scope
  const getPermissionOptions = (scope: string) => {
    const scopeMap = {
      account: "com.cloudflare.api.account",
      zone: "com.cloudflare.api.account.zone",
      user: "com.cloudflare.api.user",
    };

    const permissions = getPermissionsByScope(
      scopeMap[scope as keyof typeof scopeMap] as PermissionScope
    );

    return permissions
      .map((permission) => ({
        value: permission.name,
        label: permission.name,
        type: isReadOnlyPermission(permission) ? "read" : "edit",
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  };

  const handleScopeChange = (scope: string, rowId: string) => {
    setPermissionRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              scope,
              permissionName: "",
              permissionType: "read" as const,
            }
          : row
      )
    );

    // Clear existing policies for this row
    setPolicies((currentPolicies) => {
      const scopeMap = {
        account: "com.cloudflare.api.account.*",
        zone: "com.cloudflare.api.account.zone.*",
        user: "com.cloudflare.api.user.*",
      };

      const targetScope = scopeMap[scope as keyof typeof scopeMap];
      const existingPolicy = currentPolicies.find(
        (p) => Object.keys(p.resources)[0] === targetScope
      );

      if (existingPolicy) {
        return currentPolicies.map((policy) =>
          Object.keys(policy.resources)[0] === targetScope
            ? {
                ...policy,
                permissions: policy.permissions.filter((p) => p.id !== rowId),
              }
            : policy
        );
      }

      return currentPolicies;
    });
  };

  const handlePermissionChange = (value: string, rowId: string) => {
    const allPermissions = getAllPermissions();
    const selectedPermission = Object.values(allPermissions).find(
      (p) => p.name === value
    );

    if (!selectedPermission) return;

    setPermissionRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              permissionName: selectedPermission.name,
              permissionType: selectedPermission.type,
            }
          : row
      )
    );

    // Update policies
    const row = permissionRows.find((r) => r.id === rowId);
    if (!row) return;

    const scopeMap = {
      account: "com.cloudflare.api.account.*",
      zone: "com.cloudflare.api.account.zone.*",
      user: "com.cloudflare.api.user.*",
    };

    setPolicies((currentPolicies) => {
      const targetScope = scopeMap[row.scope as keyof typeof scopeMap];
      const existingPolicy = currentPolicies.find(
        (p) => Object.keys(p.resources)[0] === targetScope
      );

      if (existingPolicy) {
        return currentPolicies.map((policy) =>
          Object.keys(policy.resources)[0] === targetScope
            ? {
                ...policy,
                permissions: [
                  ...policy.permissions.filter((p) => p.id !== rowId),
                  { ...selectedPermission },
                ],
              }
            : policy
        );
      }

      // Create new policy if one doesn't exist for this scope
      return [
        ...currentPolicies,
        {
          effect: "allow",
          resources: { [targetScope]: "*" },
          permissions: [{ ...selectedPermission }],
        },
      ];
    });
  };

  const getTypeOptions = (permissionName: string) => {
    const allPermissions = getAllPermissions();
    const permission = Object.values(allPermissions).find(
      (p) => p.name === permissionName
    );

    if (!permission) {
      return [{ value: "read" as const, label: "Read" }];
    }

    // Map permission types to their display labels
    const typeLabels: Record<string, string> = {
      read: "Read",
      edit: "Edit",
      revoke: "Revoke",
      shield: "Shield",
      send: "Send",
      dex: "DEX",
      edit_publish: "Edit & Publish",
      report: "Report",
      run: "Run",
    };

    // Return an option for the permission's type
    return [
      {
        value: permission.type,
        label: typeLabels[permission.type] || permission.type,
      },
    ];
  };

  const handleTypeChange = (
    value:
      | "read"
      | "edit"
      | "revoke"
      | "shield"
      | "send"
      | "dex"
      | "edit_publish"
      | "report"
      | "run",
    rowId: string
  ) => {
    setPermissionRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, permissionType: value } : row
      )
    );

    // Update policies with new type
    const row = permissionRows.find((r) => r.id === rowId);
    if (!row) return;

    const scopeMap = {
      account: "com.cloudflare.api.account.*",
      zone: "com.cloudflare.api.account.zone.*",
      user: "com.cloudflare.api.user.*",
    };

    const targetScope = scopeMap[row.scope as keyof typeof scopeMap];
    if (!targetScope) return;

    const allPermissions = getAllPermissions();
    const selectedPermission = Object.values(allPermissions).find(
      (p) => p.name === row.permissionName
    );
    if (!selectedPermission) return;

    setPolicies((currentPolicies) => {
      return [
        ...currentPolicies,
        {
          effect: "allow",
          resources: { [targetScope]: "*" },
          permissions: [{ ...selectedPermission, type: value }],
        },
      ];
    });
  };

  const addPermissionRow = () => {
    setPermissionRows((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        scope: "",
        permissionName: "",
        permissionType: "read" as const,
      },
    ]);
  };

  const removePermissionRow = (id: string) => {
    if (permissionRows.length > 1) {
      setPermissionRows((prev) => prev.filter((row) => row.id !== id));
    }
  };

  const handleDateRangeSelect = (days: number) => {
    const start = new Date();
    const end = new Date();
    end.setDate(end.getDate() + days);

    setStartDate(start.toISOString().split("T")[0]);
    setEndDate(end.toISOString().split("T")[0]);
  };

  const clearDateRange = () => {
    setStartDate("");
    setEndDate("");
  };

  const addZoneRow = () => {
    setZoneRows((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        inclusionType: "include",
        zoneScope: "all",
        account: "account",
      },
    ]);
  };

  const removeZoneRow = (id: string) => {
    if (zoneRows.length > 1) {
      setZoneRows((prev) => prev.filter((row) => row.id !== id));
    }
  };

  const addIpFilterRow = () => {
    setIpFilterRows((prev) => [
      ...prev,
      { id: Math.random().toString(), operator: "is_not_in", ipAddress: "" },
    ]);
  };

  const removeIpFilterRow = (id: string) => {
    if (ipFilterRows.length > 1) {
      setIpFilterRows((prev) => prev.filter((row) => row.id !== id));
    }
  };

  const handleIpAddressChange = (value: string, id: string) => {
    setIpFilterRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ipAddress: value } : row))
    );
  };

  const handleOperatorChange = (value: string, id: string) => {
    setIpFilterRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, operator: value } : row))
    );
  };

  // Function to convert form state to JSON
  const getJsonConfig = () => {
    const config = {
      name: tokenName,
      policies: policies,
      not_before: startDate ? new Date(startDate).toISOString() : undefined,
      expires_on: endDate ? new Date(endDate).toISOString() : undefined,
      condition: ipFilterRows.some((row) => row.ipAddress)
        ? {
            "request.ip": {
              in: ipFilterRows
                .filter((row) => row.operator === "is_in" && row.ipAddress)
                .map((row) => row.ipAddress),
              not_in: ipFilterRows
                .filter((row) => row.operator === "is_not_in" && row.ipAddress)
                .map((row) => row.ipAddress),
            },
          }
        : undefined,
    };
    return JSON.stringify(config, null, 2);
  };

  // Function to parse JSON and update form state
  const updateFromJson = (jsonString: string) => {
    try {
      // First validate that it's valid JSON
      const config = JSON.parse(jsonString);

      // Basic schema validation
      if (typeof config !== "object") {
        throw new Error("Configuration must be an object");
      }

      // Update token name
      if (config.name && typeof config.name !== "string") {
        throw new Error("Token name must be a string");
      }
      if (config.name) {
        setTokenName(config.name);
      }

      // Update policies
      if (config.policies && !Array.isArray(config.policies)) {
        throw new Error("Policies must be an array");
      }
      if (config.policies) {
        setPolicies(config.policies);
      }

      // Update dates
      if (config.not_before) {
        const notBeforeDate = new Date(config.not_before);
        if (isNaN(notBeforeDate.getTime())) {
          throw new Error("Invalid not_before date format");
        }
        setStartDate(notBeforeDate.toISOString().split("T")[0]);
      }

      if (config.expires_on) {
        const expiresDate = new Date(config.expires_on);
        if (isNaN(expiresDate.getTime())) {
          throw new Error("Invalid expires_on date format");
        }
        setEndDate(expiresDate.toISOString().split("T")[0]);
      }

      // Update IP filters
      if (config.condition?.["request.ip"]) {
        const { in: inList = [], not_in: notInList = [] } =
          config.condition["request.ip"];

        if (!Array.isArray(inList) || !Array.isArray(notInList)) {
          throw new Error("IP lists must be arrays");
        }

        const newIpRows: IpFilterRow[] = [];

        inList.forEach((ip: string) => {
          if (typeof ip !== "string") {
            throw new Error("IP addresses must be strings");
          }
          newIpRows.push({
            id: Math.random().toString(),
            operator: "is_in",
            ipAddress: ip,
          });
        });

        notInList.forEach((ip: string) => {
          if (typeof ip !== "string") {
            throw new Error("IP addresses must be strings");
          }
          newIpRows.push({
            id: Math.random().toString(),
            operator: "is_not_in",
            ipAddress: ip,
          });
        });

        if (newIpRows.length === 0) {
          newIpRows.push({ id: "1", operator: "is_not_in", ipAddress: "" });
        }

        setIpFilterRows(newIpRows);
      }

      // Show success message
      toast.success("Configuration updated successfully");
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      toast.error(
        `Failed to parse JSON: ${
          error instanceof Error ? error.message : "Invalid JSON"
        }`
      );
    }
  };

  // Update the isJsonView state handler
  const handleJsonViewToggle = (enabled: boolean) => {
    if (enabled) {
      // When entering JSON view, just update the JSON string
      setJsonConfig(getJsonConfig());
    } else {
      // When exiting JSON view, parse and update the form state
      updateFromJson(jsonConfig);
    }
    setIsJsonView(enabled);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center py-4 px-1 border-b">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 -ml-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium">
            Back to {tokenType === "template" ? "Templates" : "Custom"}
          </span>
        </Button>
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg">
          <Label
            htmlFor="json-toggle"
            className="text-sm text-gray-600 font-medium"
          >
            JSON View
          </Label>
          <Switch
            id="json-toggle"
            checked={isJsonView}
            onCheckedChange={handleJsonViewToggle}
            className="data-[state=checked]:bg-blue-600"
          />
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        {isJsonView ? (
          <JsonView
            jsonConfig={jsonConfig}
            onJsonChange={(newJson: string) => {
              setJsonConfig(newJson);
            }}
          />
        ) : (
          <>
            {/* Token Name Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Token name</h3>
              <p className="text-sm text-gray-600">
                Give your API token a descriptive name.
              </p>
              <Input
                placeholder="Enter token name"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                className="max-w-lg"
              />
            </div>

            {/* Permissions Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Permissions</h3>
              <p className="text-sm text-gray-600">
                Select edit or read permissions to apply to your accounts or
                websites for this token.
              </p>
              {permissionRows.map((row) => (
                <div key={row.id} className="flex gap-4 max-w-4xl items-center">
                  <Combobox
                    options={SCOPE_OPTIONS}
                    value={row.scope}
                    onValueChange={(value) => handleScopeChange(value, row.id)}
                    placeholder="Select scope"
                    className="w-1/3"
                  />
                  <Combobox
                    options={row.scope ? getPermissionOptions(row.scope) : []}
                    value={row.permissionName}
                    onValueChange={(value) =>
                      handlePermissionChange(value, row.id)
                    }
                    placeholder="Select permission"
                    className="w-1/3"
                    disabled={!row.scope}
                  />
                  <Combobox
                    options={getTypeOptions(row.permissionName)}
                    value={row.permissionType}
                    onValueChange={(value) => {
                      handleTypeChange(
                        value as
                          | "read"
                          | "edit"
                          | "revoke"
                          | "shield"
                          | "send"
                          | "dex"
                          | "edit_publish"
                          | "report"
                          | "run",
                        row.id
                      );
                    }}
                    placeholder="Select type"
                    className="w-1/3"
                    disabled={!row.permissionName}
                  />
                  {permissionRows.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => removePermissionRow(row.id)}
                      className="p-2"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="link"
                className="text-blue-600"
                onClick={addPermissionRow}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add more
              </Button>
            </div>

            {/* Zone Resources Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Zone Resources</h3>
              <p className="text-sm text-gray-600">
                Select zones to include or exclude.
              </p>
              {zoneRows.map((row) => (
                <div key={row.id} className="flex gap-4 max-w-4xl items-center">
                  <Combobox
                    options={[{ value: "include", label: "Include" }]}
                    value={row.inclusionType}
                    onValueChange={(value) =>
                      setZoneRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? { ...r, inclusionType: value } : r
                        )
                      )
                    }
                    placeholder="Select inclusion type"
                    className="w-1/3"
                  />
                  <Combobox
                    options={[
                      { value: "all", label: "All zones from an account" },
                    ]}
                    value={row.zoneScope}
                    onValueChange={(value) =>
                      setZoneRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? { ...r, zoneScope: value } : r
                        )
                      )
                    }
                    placeholder="Select zone scope"
                    className="w-1/3"
                  />
                  <Combobox
                    options={[
                      {
                        value: "account",
                        label: "Thedjpetersen@gmail.com's Account",
                      },
                    ]}
                    value={row.account}
                    onValueChange={(value) =>
                      setZoneRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? { ...r, account: value } : r
                        )
                      )
                    }
                    placeholder="Select account"
                    className="w-1/3"
                  />
                  {zoneRows.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => removeZoneRow(row.id)}
                      className="p-2"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="link"
                className="text-blue-600"
                onClick={addZoneRow}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add more
              </Button>
            </div>

            {/* Client IP Address Filtering Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                Client IP Address Filtering
              </h3>
              <p className="text-sm text-gray-600">
                Select IP addresses or ranges of IP addresses to filter. This
                filter limits the client IP addresses that can use the API token
                with Cloudflare. By default, this token will apply to all
                addresses.
              </p>
              {ipFilterRows.map((row) => (
                <div key={row.id} className="flex gap-4 max-w-4xl items-center">
                  <Combobox
                    options={[
                      { value: "is_not_in", label: "Is not in" },
                      { value: "is_in", label: "Is in" },
                    ]}
                    value={row.operator}
                    onValueChange={(value) =>
                      handleOperatorChange(value, row.id)
                    }
                    placeholder="Select operator"
                    className="w-1/3"
                  />
                  <Input
                    placeholder="e.g. 192.168.1.88"
                    className="w-2/3"
                    value={row.ipAddress}
                    onChange={(e) =>
                      handleIpAddressChange(e.target.value, row.id)
                    }
                  />
                  {ipFilterRows.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => removeIpFilterRow(row.id)}
                      className="p-2"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="link"
                className="text-blue-600"
                onClick={addIpFilterRow}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add more
              </Button>
            </div>

            {/* TTL Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">TTL</h3>
              <p className="text-sm text-gray-600">
                Define how long this token will stay active.
              </p>
              <div className="flex items-center gap-2 max-w-lg">
                <Input
                  type="date"
                  className="justify-center"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <span>to</span>
                <Input
                  type="date"
                  className="justify-center"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="p-4">
                      <Clock className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleDateRangeSelect(7)}>
                      7 days
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDateRangeSelect(30)}>
                      30 days
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDateRangeSelect(90)}>
                      90 days
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDateRangeSelect(365)}
                    >
                      1 year
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearDateRange}
                  type="button"
                >
                  Clear
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Continue to summary</Button>
        </div>
      </form>
    </div>
  );
}
