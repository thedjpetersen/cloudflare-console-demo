import { Separator } from "@/components/ui/separator";

export function BillingPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Billing</h1>
          <p className="text-muted-foreground">
            Manage your billing information and view invoices
          </p>
        </div>
        <Separator />
        <div className="space-y-8">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Current Plan</h2>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Free Plan</p>
                  <p className="text-sm text-muted-foreground">
                    Basic features for personal projects
                  </p>
                </div>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Billing History</h2>
            <div className="rounded-lg border">
              <div className="p-4 text-center text-sm text-muted-foreground">
                No billing history available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
