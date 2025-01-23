import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export function CreateTokenPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/account/tokens")}
          className="text-sm"
        >
          ← Back to Tokens
        </Button>
        <h1 className="text-2xl font-semibold">Create API Token</h1>
      </div>

      <div className="max-w-2xl">
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Token Name
              </label>
              <Input
                placeholder="Enter a name for your token"
                className="max-w-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Token Permissions
              </label>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  Select the permissions for this token. You can grant access to
                  specific Cloudflare products and features.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="submit">Create Token</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/account/tokens")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
