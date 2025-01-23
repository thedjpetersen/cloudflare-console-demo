import * as React from "react";
import { MdLanguage, MdSecurity, MdMonitorHeart } from "react-icons/md";
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

// Define types for navigation items
export type NavItem = {
  title: string;
  url: string;
  badge?: string;
  external?: boolean;
  isActive?: boolean;
  shortcut?: string;
  icon?: React.ReactNode;
};

export type NavSection = {
  title: string;
  url: string;
  badge?: string;
  items: NavItem[];
  icon?: React.ReactNode;
  section: string;
  shortcut?: string;
};

export type NavigationConfig = {
  versions: string[];
  navMain: NavSection[];
};

// This is the shared navigation configuration
export const navigationConfig: NavigationConfig = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    // Web & Domains group
    {
      title: "Websites",
      url: "/websites",
      items: [],
      icon: <MdLanguage className="w-5 h-5" />,
      section: "web",
      shortcut: "⌘W",
    },
    {
      title: "Discover",
      url: "/discover",
      items: [],
      icon: <HiMiniMagnifyingGlass className="w-5 h-5" />,
      section: "web",
      shortcut: "⌘D",
    },
    {
      title: "Domain Registration",
      url: "/domains",
      icon: <HiMiniGlobeAmericas className="w-5 h-5" />,
      section: "web",
      items: [
        {
          title: "Manage Domains",
          url: "/domains/manage",
        },
        {
          title: "Transfer Domains",
          url: "/domains/transfer",
        },
        {
          title: "Register Domains",
          url: "/domains/register",
        },
      ],
    },
    // Analytics & Security group
    {
      title: "Analytics & Logs",
      url: "/analytics",
      icon: <HiMiniChartBar className="w-5 h-5" />,
      section: "security",
      shortcut: "⌘A",
      items: [
        {
          title: "Account Analytics",
          url: "/analytics/account",
          badge: "Beta",
          shortcut: "⌘⇧A",
        },
        {
          title: "Web Analytics",
          url: "/analytics/web",
        },
        {
          title: "Carbon Impact Report",
          url: "/analytics/carbon",
        },
        {
          title: "Magic Monitoring",
          url: "/analytics/monitoring",
        },
      ],
    },
    {
      title: "Security Center",
      url: "/security",
      icon: <HiMiniShieldCheck className="w-5 h-5" />,
      section: "security",
      shortcut: "⌘K",
      items: [
        {
          title: "Security Insights",
          url: "/security/insights",
          shortcut: "⌘⇧S",
        },
        {
          title: "Infrastructure",
          url: "/security/infrastructure",
        },
        {
          title: "Investigate",
          url: "/security/investigate",
        },
        {
          title: "Blocked Content",
          url: "/security/blocked",
          badge: "New",
        },
      ],
    },
    {
      title: "Trace",
      url: "/trace",
      badge: "Beta",
      icon: <MdMonitorHeart className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "WAF",
      url: "/waf",
      icon: <HiMiniBolt className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "Turnstile",
      url: "/turnstile",
      icon: <PiRobot className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "IP Addresses",
      url: "/ip-addresses",
      icon: <HiMiniCpuChip className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "Zero Trust",
      url: "/zero-trust",
      icon: <MdSecurity className="w-5 h-5" />,
      section: "security",
      items: [],
    },
    {
      title: "Email Security",
      url: "/email-security",
      icon: <PiEnvelope className="w-5 h-5" />,
      section: "security",
      items: [
        {
          title: "Overview",
          url: "/email-security/overview",
        },
        {
          title: "Zero Trust Email Security",
          url: "/email-security/zero-trust",
          external: true,
        },
        {
          title: "Retro Scan",
          url: "/email-security/retro-scan",
        },
      ],
    },
    // Compute & Storage group
    {
      title: "Compute (Workers)",
      url: "/compute",
      icon: <PiCode className="w-5 h-5" />,
      section: "compute",
      shortcut: "⌘C",
      items: [
        {
          title: "Workers & Pages",
          url: "/compute/workers",
          shortcut: "⌘⇧W",
        },
        {
          title: "Durable Objects",
          url: "/compute/durable-objects",
        },
        {
          title: "Workflows",
          url: "/compute/workflows",
          badge: "Beta",
        },
        {
          title: "Browser Rendering",
          url: "/compute/browser-rendering",
        },
        {
          title: "Plans",
          url: "/compute/plans",
        },
      ],
    },
    {
      title: "Workers for Platforms",
      url: "/platforms",
      icon: <HiMiniSquares2X2 className="w-5 h-5" />,
      section: "compute",
      items: [],
    },
    {
      title: "Storage & Databases",
      url: "/storage",
      icon: <PiDatabase className="w-5 h-5" />,
      section: "compute",
      items: [
        {
          title: "KV",
          url: "/storage/kv",
        },
        {
          title: "D1 SQL Database",
          url: "/storage/d1",
        },
        {
          title: "Hyperdrive",
          url: "/storage/hyperdrive",
        },
        {
          title: "Queues",
          url: "/storage/queues",
        },
      ],
    },
    {
      title: "R2 Object Storage",
      url: "/r2",
      icon: <HiMiniCloud className="w-5 h-5" />,
      section: "compute",
      items: [
        {
          title: "Overview",
          url: "/r2/overview",
        },
        {
          title: "Data Migration",
          url: "/r2/migration",
        },
      ],
    },
    {
      title: "AI",
      url: "/ai",
      icon: <PiBrain className="w-5 h-5" />,
      section: "compute",
      shortcut: "⌘I",
      items: [
        {
          title: "Workers AI",
          url: "/ai/workers",
          shortcut: "⌘⇧I",
        },
        {
          title: "Vectorize",
          url: "/ai/vectorize",
        },
        {
          title: "AI Gateway",
          url: "/ai/gateway",
        },
      ],
    },
    // Media Services group
    {
      title: "Stream",
      url: "/stream",
      icon: <PiVideoCamera className="w-5 h-5" />,
      section: "media",
      items: [
        {
          title: "Plans",
          url: "/stream/plans",
        },
      ],
    },
    {
      title: "Images",
      url: "/images",
      icon: <PiImage className="w-5 h-5" />,
      section: "media",
      items: [
        {
          title: "Overview",
          url: "/images/overview",
        },
        {
          title: "Transformations",
          url: "/images/transformations",
        },
        {
          title: "Plans",
          url: "/images/plans",
        },
      ],
    },
    {
      title: "Calls",
      url: "/calls",
      badge: "Beta",
      icon: <HiMiniPhone className="w-5 h-5" />,
      section: "media",
      items: [],
    },
    // Account Management group
    {
      title: "Manage Account",
      url: "/account",
      icon: <HiMiniUserGroup className="w-5 h-5" />,
      section: "account",
      items: [
        {
          title: "Members",
          url: "/account/members",
          isActive: true,
          shortcut: "⌘M",
        },
        {
          title: "Account API Tokens",
          url: "/account/tokens",
        },
        {
          title: "Audit Log",
          url: "/account/audit",
        },
        {
          title: "Billing",
          url: "/account/billing",
          shortcut: "⌘B",
        },
        {
          title: "Configurations",
          url: "/account/config",
          shortcut: "⌘S",
        },
      ],
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: <HiMiniBell className="w-5 h-5" />,
      section: "account",
      items: [],
    },
    {
      title: "Bulk Redirects",
      url: "/redirects",
      icon: <PiArrowsLeftRight className="w-5 h-5" />,
      section: "account",
      items: [],
    },
  ],
};
