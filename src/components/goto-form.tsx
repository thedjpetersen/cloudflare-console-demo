import { useCommand } from "@/hooks/use-command";

export function GotoForm({ ...props }: React.ComponentProps<"div">) {
  const { toggle } = useCommand();

  return (
    <div {...props}>
      <input
        type="search"
        placeholder="Go to..."
        className="rounded-md border px-3 py-1.5 text-sm"
        onClick={toggle}
        readOnly
      />
    </div>
  );
}
