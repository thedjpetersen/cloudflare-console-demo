import {
  HiMiniComputerDesktop,
  HiMiniDevicePhoneMobile,
} from "react-icons/hi2";

const sessions = [
  {
    id: 1,
    device: "MacBook Pro",
    type: "desktop",
    location: "San Francisco, US",
    lastActive: "Active now",
    isCurrent: true,
  },
  {
    id: 2,
    device: "iPhone 13",
    type: "mobile",
    location: "San Francisco, US",
    lastActive: "2 hours ago",
    isCurrent: false,
  },
];

export function SessionsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Active Sessions
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your active sessions across all devices
        </p>
      </div>

      <div className="space-y-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="overflow-hidden rounded-lg border bg-white shadow-sm"
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  {session.type === "desktop" ? (
                    <HiMiniComputerDesktop className="h-6 w-6 text-gray-600" />
                  ) : (
                    <HiMiniDevicePhoneMobile className="h-6 w-6 text-gray-600" />
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-medium text-gray-900">
                      {session.device}
                    </h2>
                    {session.isCurrent && (
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                        Current session
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                    <span>{session.location}</span>
                    <span>•</span>
                    <span>{session.lastActive}</span>
                  </div>
                </div>
              </div>
              {!session.isCurrent && (
                <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  End Session
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="pt-4">
          <button className="text-sm font-medium text-red-600 hover:text-red-700">
            End all other sessions
          </button>
        </div>
      </div>
    </div>
  );
}
