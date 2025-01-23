import * as React from "react";
import { MdChevronRight } from "react-icons/md";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { CloudflareLogo } from "./cloudflare-logo";
import { navigationConfig } from "@/config/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="px-4 py-2">
              <CloudflareLogo />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator className="my-2 mx-4 bg-border/60" />
      <SidebarContent className="gap-0">
        {navigationConfig.navMain.map((item, index) => {
          // Add separator if the section changes
          const showSeparator =
            index > 0 &&
            item.section !== navigationConfig.navMain[index - 1].section;

          return (
            <React.Fragment key={item.title}>
              {showSeparator && (
                <Separator className="my-2 mx-4 bg-border/60" />
              )}
              <Collapsible
                title={item.title}
                defaultOpen
                className="group/collapsible"
              >
                <SidebarGroup>
                  <SidebarGroupLabel
                    asChild
                    className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <CollapsibleTrigger>
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </span>
                      {item.items.length > 0 && (
                        <MdChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      )}
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu className="pl-7">
                        {item.items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={item.isActive}>
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            </React.Fragment>
          );
        })}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
