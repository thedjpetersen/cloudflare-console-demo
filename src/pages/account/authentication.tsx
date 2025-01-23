export function AuthenticationPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Authentication</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your authentication methods and security settings
        </p>
      </div>

      <div className="space-y-6">
        {/* Two-Factor Authentication */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Two-Factor Authentication
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Enable 2FA
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Password</h2>
              <p className="mt-1 text-sm text-gray-500">
                Last changed 3 months ago
              </p>
            </div>
            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Change Password
            </button>
          </div>
        </div>

        {/* Security Keys */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Security Keys
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Use security keys as a second factor
              </p>
            </div>
            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Add Security Key
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
