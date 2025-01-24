import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronRight,
  Search,
  ChevronLeftIcon,
  ChevronRightIcon,
  Star,
  CheckCircle,
  Clock,
  Users,
  Tag,
} from "lucide-react";
import { newTokenTemplates, type TokenTemplate } from "../token-template-new";
import {
  communityTokenTemplates,
  type CommunityTokenTemplate,
} from "../token-template-community";
import { useState, useMemo } from "react";
import { type Policy } from "../types";
import { Combobox, type ComboboxOption } from "@/components/ui/combobox";

interface SelectTemplateProps {
  onTemplateSelect: (templateId: string, policies: Policy[]) => void;
  onCustomSelect: () => void;
}

type TemplateType = TokenTemplate | CommunityTokenTemplate;
type SortField = "stars" | "usageCount" | "name" | "lastUpdated";
type SortOrder = "asc" | "desc";

interface PermissionGroup {
  id: string;
  name: string;
}

interface PolicyWithPermissionGroups {
  effect: "allow" | "deny";
  resources: {
    [key: string]: "*";
  };
  permission_groups: PermissionGroup[];
}

interface PolicyWithPermissions {
  effect: "allow" | "deny";
  resources: {
    [key: string]: "*";
  };
  permissions: {
    id: string;
    name: string;
    description: string;
  }[];
}

type PolicyType = PolicyWithPermissionGroups | PolicyWithPermissions;

const sortOptions: ComboboxOption[] = [
  { value: "relevance", label: "Most Relevant" },
  { value: "stars-desc", label: "Highest Rated" },
  { value: "usageCount-desc", label: "Popular First" },
  { value: "lastUpdated-desc", label: "Recently Updated" },
];

export function SelectTemplate({
  onTemplateSelect,
  onCustomSelect,
}: SelectTemplateProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<"canned" | "community">("canned");
  const [sortField, setSortField] = useState<SortField>("stars");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortValue, setSortValue] = useState("stars-desc");
  const templatesPerPage = 10;

  // Get all unique tags from community templates
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    communityTokenTemplates.forEach((template) => {
      template.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  const tagOptions = useMemo(
    () => allTags.map((tag) => ({ value: tag, label: tag })),
    [allTags]
  );

  const templates =
    activeTab === "canned" ? newTokenTemplates : communityTokenTemplates;

  const filteredTemplates = useMemo(() => {
    let filtered = templates.filter(
      (template) =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        (isCommunityTemplate(template) &&
          template.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ))
    );

    if (activeTab === "community") {
      filtered = filtered.filter((template) => {
        if (!isCommunityTemplate(template)) return false;

        if (verifiedOnly && !template.verified) return false;

        if (selectedTags.length > 0) {
          return selectedTags.every((tag) => template.tags.includes(tag));
        }

        return true;
      });

      filtered.sort((a, b) => {
        if (!isCommunityTemplate(a) || !isCommunityTemplate(b)) return 0;

        const aValue = a[sortField];
        const bValue = b[sortField];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortOrder === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        }

        return 0;
      });
    }

    return filtered;
  }, [
    templates,
    searchQuery,
    activeTab,
    sortField,
    sortOrder,
    verifiedOnly,
    selectedTags,
  ]);

  const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage);
  const startIndex = (currentPage - 1) * templatesPerPage;
  const paginatedTemplates = filteredTemplates.slice(
    startIndex,
    startIndex + templatesPerPage
  );

  const toggleTemplate = (templateId: string) => {
    setExpandedTemplate(expandedTemplate === templateId ? null : templateId);
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      onTemplateSelect(templateId, template.policies as Policy[]);
    }
  };

  const handleSortChange = (value: string) => {
    const [field, order] = value.split("-") as [SortField, SortOrder];
    setSortField(field);
    setSortOrder(order);
    setSortValue(value);
  };

  function isCommunityTemplate(
    template: TemplateType
  ): template is CommunityTokenTemplate {
    return "tags" in template;
  }

  function isPolicyWithPermissions(
    policy: PolicyType
  ): policy is PolicyWithPermissions {
    return "permissions" in policy;
  }

  function isPolicyWithPermissionGroups(
    policy: PolicyType
  ): policy is PolicyWithPermissionGroups {
    return "permission_groups" in policy;
  }

  return (
    <div className="space-y-8 max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex items-end justify-between border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-1">
              Token Templates
            </h1>
            <p className="text-sm text-gray-500">
              Start with battle-tested configurations or explore community
              solutions
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onCustomSelect}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Create Custom Token
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-[240px] flex-shrink-0 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Source</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab("canned")}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeTab === "canned"
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Official Templates
                </button>
                <button
                  onClick={() => setActiveTab("community")}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeTab === "community"
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Community
                </button>
              </div>
            </div>

            {activeTab === "community" && (
              <>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">Sort</h3>
                  <Combobox
                    options={sortOptions}
                    value={sortValue}
                    onValueChange={handleSortChange}
                    placeholder="Sort by..."
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">Filter</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setVerifiedOnly(!verifiedOnly)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                        verifiedOnly
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <CheckCircle className="h-4 w-4" />
                      Verified Only
                    </button>
                  </div>
                  <Combobox
                    options={tagOptions}
                    value={selectedTags[0] || ""}
                    onValueChange={(value) => {
                      setSelectedTags(value ? [value] : []);
                      setCurrentPage(1);
                    }}
                    placeholder="Filter by tag..."
                    className="w-full"
                  />
                </div>
              </>
            )}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 bg-gray-50 border-0 placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-3">
              {paginatedTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`group rounded-lg border border-gray-200 transition-all duration-200 ${
                    selectedTemplate === template.id
                      ? "border-blue-500 shadow-sm"
                      : "hover:border-gray-300"
                  }`}
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => toggleTemplate(template.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {template.name}
                          </h3>
                          {isCommunityTemplate(template) &&
                            template.verified && (
                              <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            )}
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {template.description}
                        </p>

                        {isCommunityTemplate(template) && (
                          <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <img
                                src={template.author.avatarUrl}
                                alt={template.author.name}
                                className="h-5 w-5 rounded-full"
                              />
                              <span>{template.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Star className="h-3.5 w-3.5" />
                              <span>{template.stars}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5" />
                              <span>{template.usageCount} uses</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              <span>
                                {new Date(
                                  template.lastUpdated
                                ).toLocaleDateString(undefined, {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          </div>
                        )}

                        {isCommunityTemplate(template) && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {template.tags.map((tag) => (
                              <div
                                key={tag}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-50 text-xs text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedTags([tag]);
                                }}
                              >
                                <Tag className="h-3 w-3" />
                                {tag}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTemplateSelect(template.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Use Template
                        </Button>
                        {expandedTemplate === template.id ? (
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedTemplate === template.id && (
                    <div className="border-t border-gray-100 bg-gray-50 p-4 text-sm animate-in slide-in-from-top duration-200">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Included Policies
                      </h4>
                      <div className="space-y-4">
                        {(template.policies as PolicyType[]).map(
                          (policy, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <span className="capitalize font-medium">
                                  {policy.effect}
                                </span>
                                access to:
                              </div>
                              <div className="pl-4 space-y-1.5">
                                {Object.entries(policy.resources).map(
                                  ([resource, value]) => (
                                    <div
                                      key={resource}
                                      className="text-xs text-gray-600"
                                    >
                                      {resource}: {value}
                                    </div>
                                  )
                                )}
                              </div>
                              <div className="font-medium text-gray-700 mt-2">
                                Permissions:
                              </div>
                              <div className="pl-4 space-y-1.5">
                                {isPolicyWithPermissions(policy)
                                  ? policy.permissions.map((permission) => (
                                      <div
                                        key={permission.id}
                                        className="text-xs text-gray-600"
                                      >
                                        {permission.name} -{" "}
                                        {permission.description}
                                      </div>
                                    ))
                                  : isPolicyWithPermissionGroups(policy)
                                  ? policy.permission_groups.map((group) => (
                                      <div
                                        key={group.id}
                                        className="text-xs text-gray-600"
                                      >
                                        {group.name}
                                      </div>
                                    ))
                                  : null}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(
                    startIndex + templatesPerPage,
                    filteredTemplates.length
                  )}{" "}
                  of {filteredTemplates.length} templates
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    )
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
