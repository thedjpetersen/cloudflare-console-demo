import { Separator } from "@/components/ui/separator";

export function AccountHomePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Account Home</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">Account Overview</h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Account Type</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Member Since</span>
                <span className="font-medium">January 2024</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">Security</h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Two-Factor Auth</span>
                <span className="text-green-600 font-medium">Enabled</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Login</span>
                <span className="font-medium">Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
