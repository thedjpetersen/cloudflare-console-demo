import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Combobox } from "@/components/ui/combobox";
import {
  Plus,
  X,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";
import { tokenTemplates } from "./token-templates";

type Policy = {
  effect: "allow" | "deny";
  resources: { [key: string]: string };
  permission_groups: Array<{
    id: string;
    name: string;
  }>;
};

export function ProfileCreateTokenPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [tokenType, setTokenType] = useState<"template" | "custom" | null>(
    null
  );
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [tokenName, setTokenName] = useState("");

  const resourceOptions = [
    { value: "com.cloudflare.api.account.*", label: "Account" },
    { value: "com.cloudflare.api.account.zone.*", label: "Zone" },
    { value: "com.cloudflare.api.user.*", label: "User" },
  ];

  const permissionGroupOptions = [
    { value: "DNS Edit", label: "DNS Edit" },
    { value: "Zone Settings Edit", label: "Zone Settings Edit" },
    { value: "SSL Edit", label: "SSL Edit" },
    { value: "Workers Edit", label: "Workers Edit" },
    { value: "Workers KV Edit", label: "Workers KV Edit" },
    { value: "Workers AI Edit", label: "Workers AI Edit" },
    { value: "Analytics Read", label: "Analytics Read" },
    { value: "Billing Read", label: "Billing Read" },
    { value: "Cache Edit", label: "Cache Edit" },
    { value: "Load Balancers Edit", label: "Load Balancers Edit" },
  ];

  const effectOptions = [
    { value: "allow", label: "Allow" },
    { value: "deny", label: "Deny" },
  ];

  const filteredTemplates = tokenTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addPolicy = () => {
    setPolicies([
      ...policies,
      {
        effect: "allow",
        resources: { "com.cloudflare.api.account.*": "*" },
        permission_groups: [],
      },
    ]);
  };

  const removePolicy = (index: number) => {
    setPolicies(policies.filter((_, i) => i !== index));
  };

  const updatePolicy = (
    index: number,
    field: keyof Policy,
    value: Policy[keyof Policy] | string
  ) => {
    setPolicies(
      policies.map((p, i) => (i === index ? { ...p, [field]: value } : p))
    );
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = tokenTemplates.find((t) => t.id === templateId);
    if (template) {
      setPolicies(template.policies as Policy[]);
      setTokenType("template");
      setStep(2);
    }
  };

  const handleNext = () => {
    if (step === 1 && tokenType) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setTokenType(null);
      setSelectedTemplate(null);
    }
  };

  const toggleTemplate = (templateId: string) => {
    setExpandedTemplate(expandedTemplate === templateId ? null : templateId);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 ml-[100px]">
        <div>
          <Button
            variant="ghost"
            onClick={() => navigate("/account/profile/tokens")}
            className="text-sm"
          >
            ← Back to Tokens
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create API Token
          </h1>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Select a template to get started or create a custom token from scratch
        </p>
      </div>

      <div className="max-w-3xl ml-[100px]">
        {step === 1 ? (
          <div className="space-y-6">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-medium mb-4">
                  API token templates
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Get started with a few pre-configured permissions.
                </p>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="space-y-2">
                  {filteredTemplates.map((template) => (
                    <div
                      key={template.id}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div
                        className={`p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between ${
                          selectedTemplate === template.id
                            ? "bg-blue-50 border-blue-500"
                            : ""
                        }`}
                        onClick={() => toggleTemplate(template.id)}
                      >
                        <div className="flex-1">
                          <h3 className="font-medium">{template.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {template.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTemplateSelect(template.id);
                            }}
                          >
                            Use Template
                          </Button>
                          {expandedTemplate === template.id ? (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                      {expandedTemplate === template.id && (
                        <div className="p-4 bg-gray-50 border-t">
                          <h4 className="text-sm font-medium mb-2">
                            Included Policies:
                          </h4>
                          <div className="space-y-4">
                            {template.policies.map((policy, index) => (
                              <div key={index} className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <span className="capitalize font-medium">
                                    {policy.effect}
                                  </span>
                                  access to resources:
                                </div>
                                <div className="pl-4 space-y-1">
                                  {Object.entries(policy.resources).map(
                                    ([resource, value]) => (
                                      <div
                                        key={resource}
                                        className="text-sm text-gray-600"
                                      >
                                        {resource}: {value}
                                      </div>
                                    )
                                  )}
                                </div>
                                <div className="text-sm text-gray-600 font-medium mt-2">
                                  Permission Groups:
                                </div>
                                <div className="pl-4 space-y-1">
                                  {policy.permission_groups.map((group) => (
                                    <div
                                      key={group.id}
                                      className="text-sm text-gray-600"
                                    >
                                      {group.name}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-lg font-medium mb-2">Custom token</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Create a custom API token by configuring your policies and
                  token settings by hand.
                </p>
                <Button
                  onClick={() => {
                    setTokenType("custom");
                    setPolicies([]);
                    handleNext();
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Create Custom Token
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Token Name
                </label>
                <Input
                  placeholder="Enter a name for your token"
                  className="max-w-md"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Choose a descriptive name for this token
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Token Policies
                </label>
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <p className="text-sm text-gray-600 mb-4">
                    {tokenType === "template"
                      ? "Review and customize the template policies"
                      : "Configure the policies for this token"}
                  </p>

                  {policies.map((policy, index) => (
                    <div
                      key={index}
                      className="space-y-3 p-4 border rounded-lg"
                    >
                      <div className="flex gap-3 items-start">
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-1">
                            Effect
                          </label>
                          <Combobox
                            options={effectOptions}
                            value={policy.effect}
                            onValueChange={(value) =>
                              updatePolicy(index, "effect", value)
                            }
                            placeholder="Select effect..."
                          />
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removePolicy(index)}
                          className="shrink-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Resources
                        </label>
                        <Combobox
                          options={resourceOptions}
                          value={Object.keys(policy.resources)[0]}
                          onValueChange={(value) =>
                            updatePolicy(index, "resources", { [value]: "*" })
                          }
                          placeholder="Select resource..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Permission Groups
                        </label>
                        <div className="space-y-2">
                          {policy.permission_groups.map((group, groupIndex) => (
                            <div
                              key={group.id}
                              className="flex gap-2 items-center"
                            >
                              <div className="flex-1">
                                <Combobox
                                  options={permissionGroupOptions}
                                  value={group.name}
                                  onValueChange={(value) => {
                                    const newGroups = [
                                      ...policy.permission_groups,
                                    ];
                                    newGroups[groupIndex] = {
                                      ...group,
                                      name: value,
                                    };
                                    updatePolicy(
                                      index,
                                      "permission_groups",
                                      newGroups
                                    );
                                  }}
                                  placeholder="Select permission group..."
                                />
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                  const newGroups =
                                    policy.permission_groups.filter(
                                      (_, i) => i !== groupIndex
                                    );
                                  updatePolicy(
                                    index,
                                    "permission_groups",
                                    newGroups
                                  );
                                }}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              const newGroups = [
                                ...policy.permission_groups,
                                {
                                  id: crypto.randomUUID(),
                                  name: "",
                                },
                              ];
                              updatePolicy(
                                index,
                                "permission_groups",
                                newGroups
                              );
                            }}
                            className="w-full"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Permission Group
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={addPolicy}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Policy
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit">Create Token</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/account/profile/tokens")}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
