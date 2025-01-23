export function TracePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Trace</h1>
          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
            Beta
          </span>
        </div>
        <div className="grid gap-4 mt-4">
          <div className="p-4 rounded-lg border bg-white">
            <h2 className="text-lg font-medium">Performance Monitoring</h2>
            <p className="text-gray-600 mt-2">
              Monitor and analyze your application's performance metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
