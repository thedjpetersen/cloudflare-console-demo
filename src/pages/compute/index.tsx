import { Outlet } from "react-router-dom";

export function ComputePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="w-full max-w-[1440px] mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Compute (Workers)</h1>
        <div className="grid gap-4">
          <div className="p-4 rounded-lg border bg-white">
            <h2 className="text-lg font-medium">Workers Overview</h2>
            <p className="text-gray-600 mt-2">
              Build and deploy serverless applications at the edge.
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
