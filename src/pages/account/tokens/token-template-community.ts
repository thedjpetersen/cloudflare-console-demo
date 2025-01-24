import { Permission } from "./api-permissions";

interface Author {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface CommunityTokenTemplate {
  id: string;
  name: string;
  description: string;
  policies: {
    effect: "allow" | "deny";
    resources: {
      [key: string]: "*";
    };
    permissions: Permission[];
  }[];
  // Community specific metadata
  author: Author;
  stars: number;
  usageCount: number;
  createdAt: string;
  lastUpdated: string;
  tags: string[];
  verified: boolean;
}

export const communityTokenTemplates: CommunityTokenTemplate[] = [
  {
    id: "nextjs_deployment",
    name: "Next.js Deployment",
    description:
      "Permissions needed for deploying and managing Next.js applications",
    author: {
      id: "user_123",
      name: "Sarah Chen",
      avatarUrl: "https://github.com/sarahchen.png",
    },
    stars: 342,
    usageCount: 1205,
    createdAt: "2024-01-15T00:00:00Z",
    lastUpdated: "2024-03-10T00:00:00Z",
    tags: ["nextjs", "pages", "deployment", "frontend"],
    verified: true,
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_pages_read",
            name: "Cloudflare Pages Read",
            description: "Grants read access to Cloudflare Pages.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_pages_write",
            name: "Cloudflare Pages Edit",
            description: "Grants write access to Cloudflare Pages.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_workers_read",
            name: "Workers Read",
            description: "Grants read access to Workers.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
        ],
      },
    ],
  },
  {
    id: "security_auditor",
    name: "Security Auditor",
    description: "Read-only access to security features for auditing purposes",
    author: {
      id: "user_456",
      name: "Michael Rodriguez",
      avatarUrl: "https://github.com/mrodriguez.png",
    },
    stars: 289,
    usageCount: 892,
    createdAt: "2024-02-01T00:00:00Z",
    lastUpdated: "2024-03-15T00:00:00Z",
    tags: ["security", "audit", "monitoring", "read-only"],
    verified: true,
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_waf_read",
            name: "WAF Read",
            description: "Grants read access to WAF.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_firewall_read",
            name: "Firewall Read",
            description: "Grants read access to Firewall.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_logs_read",
            name: "Logs Read",
            description: "Grants read access to logs.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
        ],
      },
    ],
  },
  {
    id: "cdn_optimizer",
    name: "CDN Optimization",
    description: "Manage caching and CDN optimization settings",
    author: {
      id: "user_789",
      name: "Emma Wilson",
      avatarUrl: "https://github.com/ewilson.png",
    },
    stars: 156,
    usageCount: 443,
    createdAt: "2024-02-15T00:00:00Z",
    lastUpdated: "2024-03-12T00:00:00Z",
    tags: ["cdn", "caching", "performance", "optimization"],
    verified: false,
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_cache_rules_read",
            name: "Cache Rules Read",
            description: "Grants read access to Cache Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_cache_rules_write",
            name: "Cache Rules Edit",
            description: "Grants write access to Cache Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_response_compression_read",
            name: "Response Compression Read",
            description: "Grants read access to Response Compression.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_response_compression_write",
            name: "Response Compression Edit",
            description: "Grants write access to Response Compression.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "ai_platform_dev",
    name: "AI Platform Developer",
    description: "Access to Workers AI and related services for AI development",
    author: {
      id: "user_101",
      name: "Alex Kumar",
      avatarUrl: "https://github.com/alexk.png",
    },
    stars: 423,
    usageCount: 1876,
    createdAt: "2024-01-20T00:00:00Z",
    lastUpdated: "2024-03-18T00:00:00Z",
    tags: ["ai", "workers", "development", "machine-learning"],
    verified: true,
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_workers_ai_read",
            name: "Workers AI Read",
            description: "Grants read access to Workers AI.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_workers_ai_write",
            name: "Workers AI Edit",
            description: "Grants write access to Workers AI.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_workers_read",
            name: "Workers Read",
            description: "Grants read access to Workers.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_workers_write",
            name: "Workers Edit",
            description: "Grants write access to Workers.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
];
