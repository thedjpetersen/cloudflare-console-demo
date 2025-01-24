import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { type Policy } from "./types";
import { SelectTemplate } from "./components/select-template";
import { ConfigureToken } from "./components/configure-token";
import { newTokenTemplates } from "./token-template-new";

export function ProfileCreateTokenPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [tokenType, setTokenType] = useState<"template" | "custom" | null>(
    null
  );
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [tokenName, setTokenName] = useState("");

  const handleTemplateSelect = (
    templateId: string,
    templatePolicies: Policy[]
  ) => {
    // Find the template to get its name
    const template = newTokenTemplates.find(
      (t: { id: string }) => t.id === templateId
    );
    if (template) {
      setTokenName(template.name);
    }
    setPolicies(templatePolicies);
    setTokenType("template");
    setStep(2);
  };

  const handleCustomSelect = () => {
    setTokenType("custom");
    setPolicies([]);
    setTokenName("");
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setTokenType(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle token creation here
    console.log("Creating token:", { tokenName, policies });
  };

  return (
    <div className="container mx-auto py-8">
      {step === 1 && (
        <div className="mb-8 border-b border-gray-100 pb-6">
          <div className="mx-auto max-w-5xl px-8">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Create API Token
                </h1>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/account/profile/tokens")}
                  className="text-sm text-gray-500 hover:text-gray-900 group h-8 transition-colors"
                >
                  <span className="mr-1">←</span>
                  <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Back to Tokens
                  </span>
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Select a template to get started or create a custom token from
                scratch
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-5xl px-8">
        {step === 1 ? (
          <SelectTemplate
            onTemplateSelect={handleTemplateSelect}
            onCustomSelect={handleCustomSelect}
          />
        ) : (
          <ConfigureToken
            policies={policies}
            setPolicies={setPolicies}
            tokenName={tokenName}
            setTokenName={setTokenName}
            onBack={handleBack}
            onSubmit={handleSubmit}
            tokenType={tokenType as "template" | "custom"}
          />
        )}
      </div>
    </div>
  );
}
