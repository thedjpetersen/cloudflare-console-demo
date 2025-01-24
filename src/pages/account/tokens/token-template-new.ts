import { Permission } from "./api-permissions";

export interface TokenTemplate {
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
}

export const newTokenTemplates: TokenTemplate[] = [
  {
    id: "dns_management",
    name: "DNS Management",
    description: "Full DNS and zone management capabilities",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_dns_read",
            name: "DNS Read",
            description: "Grants read access to DNS.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_dns_write",
            name: "DNS Write",
            description: "Grants write access to DNS.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_settings_read",
            name: "Zone Settings Read",
            description: "Grants read access to Zone Settings.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_settings_write",
            name: "Zone Settings Edit",
            description: "Grants write access to Zone Settings.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "security_admin",
    name: "Security Administration",
    description: "Manage WAF, firewall, and security settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_waf_read",
            name: "Zone WAF Read",
            description: "Grants read access to Zone WAF.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_waf_write",
            name: "Zone WAF Edit",
            description: "Grants write access to Zone WAF.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_firewall_read",
            name: "Firewall Services Read",
            description: "Grants read access to Firewall Services.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_firewall_write",
            name: "Firewall Services Edit",
            description: "Grants write access to Firewall Services.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "workers_platform",
    name: "Workers Platform",
    description: "Full access to Workers and related services",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
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
          {
            id: "acc_workers_kv_read",
            name: "Workers KV Storage Read",
            description: "Grants read access to Workers KV storage.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_workers_kv_write",
            name: "Workers KV Storage Edit",
            description: "Grants write access to Workers KV storage.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
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
        ],
      },
    ],
  },
  {
    id: "zero_trust_admin",
    name: "Zero Trust Administration",
    description: "Manage Zero Trust security and access policies",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_access_apps_read",
            name: "Access: Apps and Policies Read",
            description:
              "Grants read access to Cloudflare Access account resources.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_access_apps_write",
            name: "Access: Apps and Policies Edit",
            description:
              "Grants write access to Cloudflare Access account resources.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_zero_trust_read",
            name: "Zero Trust Read",
            description: "Grants read access to Zero Trust.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_zero_trust_write",
            name: "Zero Trust Edit",
            description: "Grants write access to Zero Trust.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "analytics_viewer",
    name: "Analytics Viewer",
    description: "View analytics and logs across all services",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "acc_analytics_read",
            name: "Account Analytics Read",
            description: "Grants read access to account analytics.",
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
          {
            id: "zone_analytics_read",
            name: "Analytics Read",
            description: "Grants read access to analytics.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
        ],
      },
    ],
  },
  {
    id: "r2_storage",
    name: "R2 Storage Management",
    description: "Manage R2 storage buckets and operations",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_workers_r2_read",
            name: "Workers R2 Storage Read",
            description: "Grants read access to Workers R2 storage.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_workers_r2_write",
            name: "Workers R2 Storage Edit",
            description: "Grants write access to Workers R2 storage.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "pages_deployment",
    name: "Pages Deployment",
    description: "Deploy and manage Cloudflare Pages sites",
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
        ],
      },
    ],
  },
  {
    id: "stream_platform",
    name: "Stream Platform",
    description: "Manage streaming content and delivery",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_stream_read",
            name: "Stream Read",
            description: "Grants read access to Stream.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_stream_write",
            name: "Stream Edit",
            description: "Grants write access to Stream.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "load_balancing",
    name: "Load Balancing",
    description: "Configure and monitor load balancers",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_lb_read",
            name: "Load Balancers Read",
            description: "Grants read access to Load Balancers.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_lb_write",
            name: "Load Balancers Edit",
            description: "Grants write access to Load Balancers.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_health_checks_read",
            name: "Health Checks Read",
            description: "Grants read access to Health Checks.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_health_checks_write",
            name: "Health Checks Edit",
            description: "Grants write access to Health Checks.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "ssl_management",
    name: "SSL Management",
    description: "Manage SSL certificates and settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_ssl_read",
            name: "SSL and Certificates Read",
            description: "Grants read access to SSL and Certificates.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_ssl_write",
            name: "SSL and Certificates Edit",
            description: "Grants write access to SSL and Certificates.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "ddos_protection",
    name: "DDoS Protection",
    description: "Manage DDoS protection settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_ddos_protection_read",
            name: "DDoS Protection Read",
            description: "Grants read access to DDoS Protection.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_ddos_protection_write",
            name: "DDoS Protection Edit",
            description: "Grants write access to DDoS Protection.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_ddos_botnet_read",
            name: "DDoS Botnet Feed Read",
            description: "Grants read access to DDoS Botnet Feed.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
        ],
      },
    ],
  },
  {
    id: "email_security",
    name: "Email Security",
    description: "Manage email security and routing",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_email_security_read",
            name: "Cloud Email Security Read",
            description: "Grants read access to Cloud Email Security.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_email_security_write",
            name: "Email Security Edit",
            description: "Grants write access to Email Security.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_email_routing_addresses_read",
            name: "Email Routing Addresses Read",
            description: "Grants read access to Email Routing Addresses.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_email_routing_addresses_write",
            name: "Email Routing Addresses Edit",
            description: "Grants write access to Email Routing Addresses.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "images_platform",
    name: "Images Platform",
    description: "Manage Cloudflare Images service",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_images_read",
            name: "Cloudflare Images Read",
            description: "Grants read access to Cloudflare Images.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_images_write",
            name: "Cloudflare Images Edit",
            description: "Grants write access to Cloudflare Images.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "d1_database",
    name: "D1 Database",
    description: "Manage D1 SQL databases",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_d1_read",
            name: "D1 Read",
            description: "Grants read access to D1.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_d1_write",
            name: "D1 Edit",
            description: "Grants write access to D1.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "queues_platform",
    name: "Queues Platform",
    description: "Manage message queues and processing",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_queues_read",
            name: "Queues Read",
            description: "Grants read access to Queues.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_queues_write",
            name: "Queues Edit",
            description: "Grants write access to Queues.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "billing_management",
    name: "Billing Management",
    description: "View and manage billing information",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_billing_read",
            name: "Billing Read",
            description: "Grants read access to billing information.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_billing_write",
            name: "Billing Edit",
            description: "Grants write access to billing information.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "api_shield",
    name: "API Shield",
    description: "Manage API security and gateway settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_api_gateway_read",
            name: "API Gateway Read",
            description: "Grants read access to API Gateway.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_api_gateway_write",
            name: "API Gateway Edit",
            description: "Grants write access to API Gateway.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "cache_management",
    name: "Cache Management",
    description: "Manage caching rules and settings",
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
        ],
      },
    ],
  },
  {
    id: "page_shield",
    name: "Page Shield",
    description: "Manage Page Shield security features",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "acc_page_shield_read",
            name: "Page Shield Read",
            description: "Grants read access to Page Shield.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_page_shield_write",
            name: "Page Shield Edit",
            description: "Grants write access to Page Shield.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "zone_page_shield_read",
            name: "Page Shield Read",
            description: "Grants read access to Page Shield.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_page_shield_write",
            name: "Page Shield Edit",
            description: "Grants write access to Page Shield.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "user_management",
    name: "User Management",
    description: "Manage user details and memberships",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.user": "*",
        },
        permissions: [
          {
            id: "usr_membership_read",
            name: "Memberships Read",
            description: "Grants read access to a user's account memberships.",
            scope: "com.cloudflare.api.user",
            type: "read",
          },
          {
            id: "usr_membership_write",
            name: "Memberships Edit",
            description: "Grants write access to a user's account memberships.",
            scope: "com.cloudflare.api.user",
            type: "edit",
          },
          {
            id: "usr_details_read",
            name: "User Details Read",
            description: "Grants read access to user details.",
            scope: "com.cloudflare.api.user",
            type: "read",
          },
          {
            id: "usr_details_write",
            name: "User Details Edit",
            description: "Grants write access to user details.",
            scope: "com.cloudflare.api.user",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_security",
    name: "Zone Security Manager",
    description: "Manage zone-level security features",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_waf_read",
            name: "Zone WAF Read",
            description: "Grants read access to Zone WAF.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_waf_write",
            name: "Zone WAF Edit",
            description: "Grants write access to Zone WAF.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_firewall_read",
            name: "Firewall Services Read",
            description: "Grants read access to Firewall Services.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_firewall_write",
            name: "Firewall Services Edit",
            description: "Grants write access to Firewall Services.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_managed_headers_read",
            name: "Managed Headers Read",
            description: "Grants read access to Managed Headers.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_managed_headers_write",
            name: "Managed Headers Edit",
            description: "Grants write access to Managed Headers.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "serverless_platform",
    name: "Serverless Platform",
    description: "Manage all serverless computing resources",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
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
          {
            id: "acc_workers_r2_read",
            name: "Workers R2 Storage Read",
            description: "Grants read access to Workers R2 storage.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_workers_r2_write",
            name: "Workers R2 Storage Edit",
            description: "Grants write access to Workers R2 storage.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_d1_read",
            name: "D1 Read",
            description: "Grants read access to D1.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_d1_write",
            name: "D1 Edit",
            description: "Grants write access to D1.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_queues_read",
            name: "Queues Read",
            description: "Grants read access to Queues.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_queues_write",
            name: "Queues Edit",
            description: "Grants write access to Queues.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "media_platform",
    name: "Media Platform",
    description: "Manage media streaming and image services",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_stream_read",
            name: "Stream Read",
            description: "Grants read access to Stream.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_stream_write",
            name: "Stream Edit",
            description: "Grants write access to Stream.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_images_read",
            name: "Cloudflare Images Read",
            description: "Grants read access to Cloudflare Images.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_images_write",
            name: "Cloudflare Images Edit",
            description: "Grants write access to Cloudflare Images.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_performance",
    name: "Zone Performance",
    description: "Manage zone performance settings",
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
    id: "access_platform",
    name: "Access Platform",
    description: "Manage Access applications and policies",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account": "*",
        },
        permissions: [
          {
            id: "acc_access_apps_read",
            name: "Access: Apps and Policies Read",
            description:
              "Grants read access to Cloudflare Access account resources.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_access_apps_write",
            name: "Access: Apps and Policies Edit",
            description:
              "Grants write access to Cloudflare Access account resources.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
          {
            id: "acc_access_custom_pages_read",
            name: "Access: Custom Pages Read",
            description: "Grants read access to Access custom pages.",
            scope: "com.cloudflare.api.account",
            type: "read",
          },
          {
            id: "acc_access_custom_pages_write",
            name: "Access: Custom Pages Edit",
            description: "Grants write access to Access custom pages.",
            scope: "com.cloudflare.api.account",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_rules",
    name: "Zone Rules Manager",
    description: "Manage zone rules and transforms",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_transform_rules_read",
            name: "Transform Rules Read",
            description: "Grants read access to Transform Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_transform_rules_write",
            name: "Transform Rules Edit",
            description: "Grants write access to Transform Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_page_rules_read",
            name: "Page Rules Read",
            description: "Grants read access to Page Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_page_rules_write",
            name: "Page Rules Edit",
            description: "Grants write access to Page Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_dns_advanced",
    name: "Advanced DNS Management",
    description: "Advanced DNS and zone configuration",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_dns_read",
            name: "DNS Read",
            description: "Grants read access to DNS.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_dns_write",
            name: "DNS Write",
            description: "Grants write access to DNS.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_settings_read",
            name: "Zone Settings Read",
            description: "Grants read access to Zone Settings.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_settings_write",
            name: "Zone Settings Edit",
            description: "Grants write access to Zone Settings.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_ssl_read",
            name: "SSL and Certificates Read",
            description: "Grants read access to SSL and Certificates.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_ssl_write",
            name: "SSL and Certificates Edit",
            description: "Grants write access to SSL and Certificates.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_monitoring",
    name: "Zone Monitoring",
    description: "Monitor zone health and analytics",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_analytics_read",
            name: "Analytics Read",
            description: "Grants read access to analytics.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_health_checks_read",
            name: "Health Checks Read",
            description: "Grants read access to Health Checks.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_logs_read",
            name: "Logs Read",
            description: "Grants read access to Logs.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
        ],
      },
    ],
  },
  {
    id: "zone_waiting_room",
    name: "Waiting Room Manager",
    description: "Manage waiting room configuration",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_waiting_room_read",
            name: "Waiting Room Read",
            description: "Grants read access to Waiting Room.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_waiting_room_write",
            name: "Waiting Room Edit",
            description: "Grants write access to Waiting Room.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_custom_pages",
    name: "Custom Pages Manager",
    description: "Manage custom error and branded pages",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_custom_pages_read",
            name: "Custom Pages Read",
            description: "Grants read access to Custom Pages.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_custom_pages_write",
            name: "Custom Pages Edit",
            description: "Grants write access to Custom Pages.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_custom_error_rules_read",
            name: "Custom Error Rules Read",
            description: "Grants read access to Custom Error Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_custom_error_rules_write",
            name: "Custom Error Rules Edit",
            description: "Grants write access to Custom Error Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_redirect",
    name: "Redirect Manager",
    description: "Manage URL redirects and routing",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_single_redirect_read",
            name: "Single Redirect Read",
            description: "Grants read access to Single Redirect.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_single_redirect_write",
            name: "Single Redirect Edit",
            description: "Grants write access to Single Redirect.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_web3",
    name: "Web3 Gateway Manager",
    description: "Manage Web3 gateway settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_web3_hostnames_read",
            name: "Web3 Hostnames Read",
            description: "Grants read access to Web3 Hostnames.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_web3_hostnames_write",
            name: "Web3 Hostnames Edit",
            description: "Grants write access to Web3 Hostnames.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_workers",
    name: "Workers Routes Manager",
    description: "Manage Workers routes and scripts",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_workers_routes_read",
            name: "Workers Routes Read",
            description: "Grants read access to Workers Routes.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_workers_routes_write",
            name: "Workers Routes Edit",
            description: "Grants write access to Workers Routes.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_zaraz",
    name: "Zaraz Manager",
    description: "Manage Zaraz configuration",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_zaraz_read",
            name: "Zaraz Read",
            description: "Grants read access to Zaraz.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_zaraz_write",
            name: "Zaraz Edit",
            description: "Grants write access to Zaraz.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_versioning",
    name: "Zone Versioning Manager",
    description: "Manage zone version control",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_versioning_read",
            name: "Zone Versioning Read",
            description: "Grants read access to Zone Versioning.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_versioning_write",
            name: "Zone Versioning Edit",
            description: "Grants write access to Zone Versioning.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_email",
    name: "Email Routing Manager",
    description: "Manage email routing configuration",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_email_routing_rules_read",
            name: "Email Routing Rules Read",
            description: "Grants read access to Email Routing Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_email_routing_rules_write",
            name: "Email Routing Rules Edit",
            description: "Grants write access to Email Routing Rules.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_dmarc",
    name: "DMARC Manager",
    description: "Manage DMARC email security",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_dmarc_management_read",
            name: "DMARC Management Read",
            description: "Grants read access to DMARC Management.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_dmarc_management_write",
            name: "DMARC Management Edit",
            description: "Grants write access to DMARC Management.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_sanitize",
    name: "Sanitize Manager",
    description: "Manage content sanitization rules",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_sanitize_read",
            name: "Sanitize Read",
            description: "Grants read access to Sanitize.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_sanitize_write",
            name: "Sanitize Edit",
            description: "Grants write access to Sanitize.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_bot_management",
    name: "Bot Management",
    description: "Manage bot detection and mitigation",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_bot_management_read",
            name: "Bot Management Read",
            description: "Grants read access to Bot Management.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_bot_management_write",
            name: "Bot Management Edit",
            description: "Grants write access to Bot Management.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
          {
            id: "zone_bot_management_feedback_read",
            name: "Bot Management Feedback Read",
            description: "Grants read access to Bot Management Feedback.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_bot_management_feedback_write",
            name: "Bot Management Feedback Edit",
            description: "Grants write access to Bot Management Feedback.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
  {
    id: "zone_ddos",
    name: "DDoS Manager",
    description: "Manage HTTP DDoS protection",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone": "*",
        },
        permissions: [
          {
            id: "zone_http_ddos_read",
            name: "HTTP DDoS Managed Ruleset Read",
            description: "Grants read access to HTTP DDoS Managed Ruleset.",
            scope: "com.cloudflare.api.account.zone",
            type: "read",
          },
          {
            id: "zone_http_ddos_write",
            name: "HTTP DDoS Managed Ruleset Edit",
            description: "Grants write access to HTTP DDoS Managed Ruleset.",
            scope: "com.cloudflare.api.account.zone",
            type: "edit",
          },
        ],
      },
    ],
  },
];
