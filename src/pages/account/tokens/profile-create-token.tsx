import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { type Policy } from "./types";
import { SelectTemplate } from "./components/select-template";
import { ConfigureToken } from "./components/configure-token";

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
    setPolicies(templatePolicies);
    setTokenType("template");
    setStep(2);
  };

  const handleCustomSelect = () => {
    setTokenType("custom");
    setPolicies([]);
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
