import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronRight,
  Search,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { tokenTemplates } from "../token-templates";
import { useState } from "react";
import { type Policy } from "../types";

interface SelectTemplateProps {
  onTemplateSelect: (templateId: string, policies: Policy[]) => void;
  onCustomSelect: () => void;
}

export function SelectTemplate({
  onTemplateSelect,
  onCustomSelect,
}: SelectTemplateProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 10;

  const filteredTemplates = tokenTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    const template = tokenTemplates.find((t) => t.id === templateId);
    if (template) {
      onTemplateSelect(templateId, template.policies as Policy[]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-medium mb-4">API token templates</h2>
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
            {paginatedTemplates.map((template) => (
              <div
                key={template.id}
                className="border rounded-lg overflow-hidden"
              >
                <div
                  className={`p-3 cursor-pointer hover:bg-gray-50 flex items-center justify-between group ${
                    selectedTemplate === template.id
                      ? "bg-blue-50 border-blue-500"
                      : ""
                  }`}
                  onClick={() => toggleTemplate(template.id)}
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{template.name}</h3>
                    <p className="text-xs text-gray-500">
                      {template.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click for details
                    </span>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTemplateSelect(template.id);
                      }}
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
                {expandedTemplate === template.id && (
                  <div className="p-3 bg-gray-50 border-t text-sm">
                    <h4 className="font-medium mb-2">Included Policies:</h4>
                    <div className="space-y-3">
                      {template.policies.map((policy, index) => (
                        <div key={index} className="space-y-1">
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
                                  className="text-xs text-gray-600"
                                >
                                  {resource}: {value}
                                </div>
                              )
                            )}
                          </div>
                          <div className="text-sm text-gray-600 font-medium mt-1">
                            Permission Groups:
                          </div>
                          <div className="pl-4 space-y-1">
                            {policy.permission_groups.map((group) => (
                              <div
                                key={group.id}
                                className="text-xs text-gray-600"
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4 border-t pt-4">
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

        <div className="border-t pt-6">
          <h2 className="text-lg font-medium mb-2">Custom token</h2>
          <p className="text-sm text-gray-500 mb-4">
            Create a custom API token by configuring your policies and token
            settings by hand.
          </p>
          <Button onClick={onCustomSelect} variant="outline" className="w-full">
            Create Custom Token
          </Button>
        </div>
      </div>
    </div>
  );
}
