import { Separator } from "@/components/ui/separator";

export function AppearancePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Appearance</h1>
          <p className="text-muted-foreground">
            Customize how Cloudflare Console looks on your device
          </p>
        </div>
        <Separator />
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Theme</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="light"
                  name="theme"
                  className="rounded-full"
                  defaultChecked
                />
                <label htmlFor="light" className="text-sm font-medium">
                  Light
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="dark"
                  name="theme"
                  className="rounded-full"
                />
                <label htmlFor="dark" className="text-sm font-medium">
                  Dark
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="system"
                  name="theme"
                  className="rounded-full"
                />
                <label htmlFor="system" className="text-sm font-medium">
                  System
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Font Size</h2>
            <div className="space-y-2">
              <label className="text-sm font-medium">Interface Scale</label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
