export function QueuesPage() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Queues</h2>
      <div className="grid gap-4">
        <div className="p-4 rounded-lg border bg-white">
          <h3 className="text-lg font-medium">Message Queue Management</h3>
          <p className="text-gray-600 mt-2">
            Manage asynchronous task processing with durable message queues.
          </p>
        </div>
      </div>
    </div>
  );
}
