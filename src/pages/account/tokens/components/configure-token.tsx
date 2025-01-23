import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/ui/combobox";
import { Plus, ArrowLeft } from "lucide-react";
import { PERMISSION_GROUPS } from "../permission-groups";
import { type Policy } from "../types";

interface ConfigureTokenProps {
  tokenName: string;
  setTokenName: (name: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  policies: Policy[];
  setPolicies: (policies: Policy[]) => void;
  onBack: () => void;
  tokenType: "template" | "custom";
}

type PermissionGroup = {
  id: string;
  name: string;
  description: string;
  scopes: string[];
  label: string;
  type: string;
  rowId: number;
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
  // Get unique permission names and types
  const uniquePermissionNames = Array.from(
    new Set(PERMISSION_GROUPS.map((group: PermissionGroup) => group.name))
  );
  const uniquePermissionTypes = Array.from(
    new Set(PERMISSION_GROUPS.map((group: PermissionGroup) => group.type))
  );

  console.log(uniquePermissionNames);
  console.log(uniquePermissionTypes);

  const handlePermissionChange = (permission: string) => {
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
          <div className="flex gap-4 max-w-4xl">
            <Combobox
              options={uniquePermissionNames.map((name) => ({
                value: name,
                label: name,
              }))}
              value=""
              onValueChange={handlePermissionChange}
              placeholder="Select permission type"
              className="w-1/3"
            />
            <Combobox
              options={PERMISSION_GROUPS.map((group: PermissionGroup) => ({
                value: group.label,
                label: group.description,
              }))}
              value=""
              onValueChange={() => {}}
              placeholder="Select permission group"
              className="w-1/3"
            />
            <Combobox
              options={uniquePermissionTypes.map((type) => ({
                value: type,
                label: type,
              }))}
              value=""
              onValueChange={() => {}}
              placeholder="Select permission level"
              className="w-1/3"
            />
          </div>
          <Button type="button" variant="link" className="text-blue-600">
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
