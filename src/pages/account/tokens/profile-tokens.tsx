import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ProfileTokensPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">API Tokens</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your API tokens for programmatic access to Cloudflare
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <Button onClick={() => navigate("/account/profile/tokens/create")}>
          Create Token
        </Button>
      </div>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="p-4 border-b">
            <p className="text-sm text-gray-600">
              API Tokens allow you to interact with the Cloudflare API
              programmatically. Each token can be customized with specific
              permissions.
            </p>
          </div>

          {/* Placeholder for token list */}
          <div className="p-4">
            <p className="text-sm text-gray-500">No tokens created yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
