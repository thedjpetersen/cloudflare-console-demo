import { useCommand } from "@/hooks/use-command";
import { navigationConfig, NavItem } from "@/config/navigation";
import { useMemo, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

// Helper to get the full path of an item
function getItemPath(item: NavItem, parentTitle?: string): string {
  return parentTitle ? `${parentTitle} → ${item.title}` : item.title;
}

// Helper to flatten navigation with full paths
function flattenNavigation() {
  const items: Array<{ path: string; item: NavItem }> = [];

  navigationConfig.navMain.forEach((section) => {
    // Add the section itself if it has a shortcut
    if (section.shortcut) {
      items.push({
        path: section.title,
        item: {
          title: section.title,
          url: section.url,
          shortcut: section.shortcut,
          icon: section.icon,
        } as NavItem,
      });
    }

    // Add all nested items with their full path
    section.items.forEach((item) => {
      items.push({
        path: getItemPath(item, section.title),
        item: item,
      });
    });
  });

  return items;
}

export function CommandPalette() {
  const { isOpen, setIsOpen } = useCommand();
  const [search, setSearch] = useState("");

  // Get all flattened items with their full paths
  const allItems = useMemo(() => flattenNavigation(), []);

  // Filter items based on search
  const filteredItems = useMemo(() => {
    if (!search) {
      // When no search, show only items with shortcuts
      return allItems.filter(({ item }) => item.shortcut);
    }

    const searchLower = search.toLowerCase();
    return allItems.filter(({ path }) =>
      path.toLowerCase().includes(searchLower)
    );
  }, [allItems, search]);

  // Helper to highlight matching text
  const highlightMatch = (text: string) => {
    if (!search) return text;

    const index = text.toLowerCase().indexOf(search.toLowerCase());
    if (index === -1) return text;

    return (
      <>
        {text.slice(0, index)}
        <span className="bg-yellow-200 text-yellow-900">
          {text.slice(index, index + search.length)}
        </span>
        {text.slice(index + search.length)}
      </>
    );
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading={search ? "Search Results" : "Quick Actions"}>
          {filteredItems.map(({ path, item }) => (
            <CommandItem key={path}>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span className="flex-1">{highlightMatch(path)}</span>
              {item.shortcut && (
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              )}
              {item.badge && (
                <span className="ml-2 rounded-full bg-primary/20 px-1.5 py-0.5 text-xs text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
