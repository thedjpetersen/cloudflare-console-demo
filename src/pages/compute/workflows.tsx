export function WorkflowsPage() {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold">Workflows</h2>
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
          Beta
        </span>
      </div>
      <div className="grid gap-4 mt-4">
        <div className="p-4 rounded-lg border bg-white">
          <h3 className="text-lg font-medium">Workflow Management</h3>
          <p className="text-gray-600 mt-2">
            Create and manage automated workflows for your applications.
          </p>
        </div>
      </div>
    </div>
  );
}
