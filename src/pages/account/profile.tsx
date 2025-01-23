import { Link, Outlet, useLocation } from "react-router-dom";

const tabs = [
  { name: "Preferences", href: "" },
  { name: "Authentication", href: "authentication" },
  { name: "API Tokens", href: "tokens" },
  { name: "Active Sessions", href: "sessions" },
];

export function ProfileLayout() {
  const location = useLocation();
  const basePath = "/account/profile";

  return (
    <div>
      {/* Secondary Navigation */}
      <div className="border-b bg-white">
        <div className="container mx-auto">
          <nav className="flex">
            {tabs.map((tab) => {
              const fullPath = `${basePath}${tab.href ? `/${tab.href}` : ""}`;
              const isActive =
                tab.href === ""
                  ? location.pathname === basePath
                  : location.pathname.startsWith(fullPath);

              return (
                <Link
                  key={tab.name}
                  to={fullPath}
                  className={`${
                    isActive
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800"
                  } relative min-w-0 flex-1 border-b-2 py-4 text-center text-sm font-medium hover:bg-gray-50 md:flex-none md:px-8`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab.name}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Child Routes */}
      <Outlet />
    </div>
  );
}

// This will be the default preferences page
export function PreferencesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Preferences</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="space-y-6">
        {/* Email Section */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Email Address
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                thedjpetersen@gmail.com (verified)
              </p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Change Email Address
            </button>
          </div>
        </div>

        {/* Appearance Section */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Appearance
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Select how you'd like the Cloudflare Dashboard to appear on
                  this device. Choose from light or dark themes, or opt to sync
                  with your operating system's settings.
                </p>
              </div>
              <select className="mt-2 block w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Language Preference
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  My preference for the language shown in the dashboard is:
                </p>
              </div>
              <select className="mt-2 block w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                <option>English</option>
              </select>
            </div>
          </div>
        </div>

        {/* Communication Section */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Communication Preferences
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Cloudflare may not send me emails
              </p>
            </div>
            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Edit
            </button>
          </div>
        </div>

        {/* Delete User */}
        <div className="pt-4">
          <button className="text-sm font-medium text-red-600 hover:text-red-700">
            Delete this user
          </button>
        </div>
      </div>
    </div>
  );
}
