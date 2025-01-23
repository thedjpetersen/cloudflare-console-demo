import * as React from "react";
import {
  MdChevronRight,
  MdLanguage,
  MdSecurity,
  MdMonitorHeart,
} from "react-icons/md";
import {
  HiMiniGlobeAmericas,
  HiMiniMagnifyingGlass,
  HiMiniChartBar,
  HiMiniShieldCheck,
  HiMiniCpuChip,
  HiMiniBolt,
  HiMiniCloud,
  HiMiniSquares2X2,
  HiMiniPhone,
  HiMiniUserGroup,
  HiMiniBell,
} from "react-icons/hi2";
import {
  PiDatabase,
  PiRobot,
  PiEnvelope,
  PiCode,
  PiBrain,
  PiVideoCamera,
  PiImage,
  PiArrowsLeftRight,
} from "react-icons/pi";

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

// Define types for navigation items
type NavItem = {
  title: string;
  url: string;
  badge?: string;
  external?: boolean;
  isActive?: boolean;
};

type NavSection = {
  title: string;
  url: string;
  badge?: string;
  items: NavItem[];
  icon?: React.ReactNode;
  section: string;
};

// This is sample data.
const data: { versions: string[]; navMain: NavSection[] } = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    // Web & Domains group
    {
      title: "Websites",
      url: "#",
      items: [],
      icon: <MdLanguage className="w-5 h-5" />,
      section: "web",
    },
    {
      title: "Discover",
      url: "#",
      items: [],
      icon: <HiMiniMagnifyingGlass className="w-5 h-5" />,
      section: "web",
    },
    {
      title: "Domain Registration",
      url: "#",
      icon: <HiMiniGlobeAmericas className="w-5 h-5" />,
      section: "web",
      items: [
        {
          title: "Manage Domains",
          url: "#",
        },
        {
          title: "Transfer Domains",
          url: "#",
        },
        {
          title: "Register Domains",
          url: "#",
        },
      ],
    },
    // Analytics & Security group
    {
      title: "Analytics & Logs",
      url: "#",
      icon: <HiMiniChartBar className="w-5 h-5" />,
      section: "security",
      items: [
        {
          title: "Account Analytics",
          url: "#",
          badge: "Beta",
        },
        {
          title: "Web Analytics",
          url: "#",
        },
        {
          title: "Carbon Impact Report",
          url: "#",
        },
        {
          title: "Magic Monitoring",
          url: "#",
        },
      ],
    },
    {
      title: "Security Center",
      url: "#",
      icon: <HiMiniShieldCheck className="w-5 h-5" />,
      section: "security",
      items: [
        {
          title: "Security Insights",
          url: "#",
        },
        {
          title: "Infrastructure",
          url: "#",
        },
        {
          title: "Investigate",
          url: "#",
        },
        {
          title: "Blocked Content",
          url: "#",
          badge: "New",
        },
      ],
    },
    {
      title: "Trace",
      url: "#",
      badge: "Beta",
      icon: <MdMonitorHeart className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "WAF",
      url: "#",
      icon: <HiMiniBolt className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "Turnstile",
      url: "#",
      icon: <PiRobot className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "IP Addresses",
      url: "#",
      icon: <HiMiniCpuChip className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "Zero Trust",
      url: "#",
      icon: <MdSecurity className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "Email Security",
      url: "#",
      icon: <PiEnvelope className="w-5 h-5" />,
      section: "security",
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Zero Trust Email Security",
          url: "#",
          external: true,
        },
        {
          title: "Retro Scan",
          url: "#",
        },
      ],
    },
    // Compute & Storage group
    {
      title: "Compute (Workers)",
      url: "#",
      icon: <PiCode className="w-5 h-5" />,
      section: "compute",
      items: [
        {
          title: "Workers & Pages",
          url: "#",
        },
        {
          title: "Durable Objects",
          url: "#",
        },
        {
          title: "Workflows",
          url: "#",
          badge: "Beta",
        },
        {
          title: "Browser Rendering",
          url: "#",
        },
        {
          title: "Plans",
          url: "#",
        },
      ],
    },
    {
      title: "Workers for Platforms",
      url: "#",
      icon: <HiMiniSquares2X2 className="w-5 h-5" />,
      section: "compute",
      items: [],
    },
    {
      title: "Storage & Databases",
      url: "#",
      icon: <PiDatabase className="w-5 h-5" />,
      section: "compute",
      items: [
        {
          title: "KV",
          url: "#",
        },
        {
          title: "D1 SQL Database",
          url: "#",
        },
        {
          title: "Hyperdrive",
          url: "#",
        },
        {
          title: "Queues",
          url: "#",
        },
      ],
    },
    {
      title: "R2 Object Storage",
      url: "#",
      icon: <HiMiniCloud className="w-5 h-5" />,
      section: "compute",
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Data Migration",
          url: "#",
        },
      ],
    },
    {
      title: "AI",
      url: "#",
      icon: <PiBrain className="w-5 h-5" />,
      section: "compute",
      items: [
        {
          title: "Workers AI",
          url: "#",
        },
        {
          title: "Vectorize",
          url: "#",
        },
        {
          title: "AI Gateway",
          url: "#",
        },
      ],
    },
    // Media Services group
    {
      title: "Stream",
      url: "#",
      icon: <PiVideoCamera className="w-5 h-5" />,
      section: "media",
      items: [
        {
          title: "Plans",
          url: "#",
        },
      ],
    },
    {
      title: "Images",
      url: "#",
      icon: <PiImage className="w-5 h-5" />,
      section: "media",
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Transformations",
          url: "#",
        },
        {
          title: "Plans",
          url: "#",
        },
      ],
    },
    {
      title: "Calls",
      url: "#",
      badge: "Beta",
      icon: <HiMiniPhone className="w-5 h-5" />,
      section: "media",
      items: [],
    },
    // Account Management group
    {
      title: "Manage Account",
      url: "#",
      icon: <HiMiniUserGroup className="w-5 h-5" />,
      section: "account",
      items: [
        {
          title: "Members",
          url: "#",
          isActive: true,
        },
        {
          title: "Account API Tokens",
          url: "#",
        },
        {
          title: "Audit Log",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Configurations",
          url: "#",
        },
      ],
    },
    {
      title: "Notifications",
      url: "#",
      icon: <HiMiniBell className="w-5 h-5" />,
      section: "account",
      items: [],
    },
    {
      title: "Bulk Redirects",
      url: "#",
      icon: <PiArrowsLeftRight className="w-5 h-5" />,
      section: "account",
      items: [],
    },
  ],
};

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
        {data.navMain.map((item, index) => {
          // Add separator if the section changes
          const showSeparator =
            index > 0 && item.section !== data.navMain[index - 1].section;

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
