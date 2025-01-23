import { Search } from "lucide-react";
import { useCommand } from "@/hooks/use-command";

import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const { toggle } = useCommand();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toggle();
  };

  return (
    <form {...props} onSubmit={onSubmit}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Perform an action
          </Label>
          <SidebarInput
            id="search"
            placeholder="Perform an action... ⌘K"
            className="pl-8"
            onClick={toggle}
            readOnly
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
