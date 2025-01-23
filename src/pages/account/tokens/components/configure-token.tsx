import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/ui/combobox";
import { Plus, ArrowLeft, Trash2 } from "lucide-react";
import { PERMISSION_GROUPS } from "../permission-groups";
import { type Policy } from "../types";
import { useState } from "react";

interface ConfigureTokenProps {
  tokenName: string;
  setTokenName: (name: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  policies: Policy[];
  setPolicies: (policies: Policy[]) => void;
  onBack: () => void;
  tokenType: "template" | "custom";
}

type PermissionRow = {
  id: string;
  scope: string;
  permissionName: string;
  permissionType: string;
};

const SCOPE_OPTIONS = [
  { value: "account", label: "Account" },
  { value: "zone", label: "Zone" },
  { value: "user", label: "User" },
];

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
    { id: "1", scope: "", permissionName: "", permissionType: "" },
  ]);

  // Filter permission groups based on selected scope
  const getPermissionOptions = (scope: string) => {
    const scopeMap = {
      account: "com.cloudflare.api.account",
      zone: "com.cloudflare.api.account.zone",
      user: "com.cloudflare.api.user",
    };

    return PERMISSION_GROUPS.filter((group) =>
      group.scopes.includes(scopeMap[scope as keyof typeof scopeMap])
    ).map((group) => ({
      value: group.label,
      label: group.description,
      type: group.type,
    }));
  };

  const handleScopeChange = (scope: string, rowId: string) => {
    console.log(`handleScopeChange: ${scope} ${rowId}`);
    setPermissionRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? { ...row, scope, permissionName: "", permissionType: "" }
          : row
      )
    );
  };

  const handlePermissionChange = (permission: string, rowId: string) => {
    const row = permissionRows.find((r) => r.id === rowId);
    if (!row) return;

    const permissionGroup = PERMISSION_GROUPS.find(
      (g) => g.label === permission
    );
    if (!permissionGroup) return;

    setPermissionRows((prevRows) =>
      prevRows.map((r) =>
        r.id === rowId
          ? {
              ...r,
              permissionName: permission,
              permissionType: "read", // Default to read
            }
          : r
      )
    );

    // Update policies
    const newPolicy: Policy = {
      effect: "allow",
      resources: { "com.cloudflare.api": "*" },
      permission_groups: [
        {
          id: Math.random().toString(),
          name: permission,
        },
      ],
    };
    setPolicies([...policies, newPolicy]);
  };

  const getTypeOptions = (permissionName: string) => {
    const permissionGroup = PERMISSION_GROUPS.find(
      (g) => g.label === permissionName
    );

    // Always include Read
    const options = [{ value: "read", label: "Read" }];

    // Only include Edit if the permission type includes "edit"
    if (permissionGroup && permissionGroup.type === "edit") {
      options.push({ value: "edit", label: "Edit" });
    }

    return options;
  };

  const handleTypeChange = (type: string, rowId: string) => {
    setPermissionRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, permissionType: type } : row
      )
    );
  };

  const addPermissionRow = () => {
    setPermissionRows((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        scope: "",
        permissionName: "",
        permissionType: "",
      },
    ]);
  };

  const removePermissionRow = (id: string) => {
    if (permissionRows.length > 1) {
      setPermissionRows((prev) => prev.filter((row) => row.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-blue-600 hover:underline flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back {tokenType === "template" ? "to Templates" : "to Custom"}
        </Button>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
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
                onValueChange={(value) => handlePermissionChange(value, row.id)}
                placeholder="Select permission"
                className="w-1/3"
                disabled={!row.scope}
              />
              <Combobox
                options={getTypeOptions(row.permissionName)}
                value={row.permissionType}
                onValueChange={(value) => handleTypeChange(value, row.id)}
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
          <div className="flex gap-4 max-w-4xl">
            <Combobox
              options={[{ value: "include", label: "Include" }]}
              value="include"
              onValueChange={() => {}}
              placeholder="Select inclusion type"
              className="w-1/3"
            />
            <Combobox
              options={[{ value: "all", label: "All zones from an account" }]}
              value="all"
              onValueChange={() => {}}
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
              value="account"
              onValueChange={() => {}}
              placeholder="Select account"
              className="w-1/3"
            />
          </div>
          <Button type="button" variant="link" className="text-blue-600">
            <Plus className="h-4 w-4 mr-1" />
            Add more
          </Button>
        </div>

        {/* Client IP Address Filtering Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Client IP Address Filtering</h3>
          <p className="text-sm text-gray-600">
            Select IP addresses or ranges of IP addresses to filter. This filter
            limits the client IP addresses that can use the API token with
            Cloudflare. By default, this token will apply to all addresses.
          </p>
          <div className="flex gap-4 max-w-4xl">
            <Combobox
              options={[{ value: "is_not_in", label: "Is not in" }]}
              value="is_not_in"
              onValueChange={() => {}}
              placeholder="Select operator"
              className="w-1/3"
            />
            <Input placeholder="e.g. 192.168.1.88" className="w-2/3" />
          </div>
          <Button type="button" variant="link" className="text-blue-600">
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
            <Input type="date" className="w-1/2" />
            <span>to</span>
            <Input type="date" className="w-1/2" />
          </div>
        </div>

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
