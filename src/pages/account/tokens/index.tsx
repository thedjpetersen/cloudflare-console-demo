import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function TokensPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">API Tokens</h1>
        <Button onClick={() => navigate("/account/tokens/create")}>
          Create Token
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <p className="text-sm text-gray-600">
            API Tokens allow you to interact with the Cloudflare API
            programmatically.
          </p>
        </div>

        {/* Placeholder for token list */}
        <div className="p-4">
          <p className="text-sm text-gray-500">No tokens created yet.</p>
        </div>
      </div>
    </div>
  );
}
