export const tokenTemplates = [
  {
    id: "dns_editor",
    name: "Edit zone DNS",
    description: "Modify DNS records and zone settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "c8fed203ed3043cba015a93ad1616f1f",
            name: "Zone Settings Edit",
          },
          {
            id: "82e64a83756745bbbb1c9c2701bf816b",
            name: "DNS Edit",
          },
        ],
      },
    ],
  },
  {
    id: "billing_viewer",
    name: "Read billing info",
    description: "View billing information and invoices",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "b6bf5740e1914d76b9864a32cdae3046",
            name: "Billing Read",
          },
        ],
      },
    ],
  },
  {
    id: "analytics_viewer",
    name: "Read analytics and logs",
    description: "Access analytics data and log information",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "ed07f6c337da4195b4e72a1fb2c6bcae",
            name: "Analytics Read",
          },
          {
            id: "d2d9e8934c3e4f88b1a3c2e3f3b1f9c4",
            name: "Logs Read",
          },
        ],
      },
    ],
  },
  {
    id: "workers_developer",
    name: "Edit Cloudflare Workers",
    description: "Manage and deploy Workers scripts",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "3e7c9f85f9404e6bb6270f7f549d1b3a",
            name: "Workers Edit",
          },
          {
            id: "5d2be39c6e584bbb8d48c3736d04c436",
            name: "Workers KV Edit",
          },
        ],
      },
    ],
  },
  {
    id: "security_admin",
    name: "Security Administrator",
    description: "Manage WAF, rate limiting, and security settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "e6d2666161e84845a636613608cee8d2",
            name: "WAF Edit",
          },
          {
            id: "c3f8659d2c264c50a83b6851cb7ae867",
            name: "Rate Limiting Edit",
          },
          {
            id: "4d326eb4d1af4e30a6c9f809d5652459",
            name: "Firewall Edit",
          },
        ],
      },
    ],
  },
  {
    id: "workers_ai",
    name: "Workers AI",
    description: "Access and manage Workers AI features",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "7b7219e59f244a5c8a3e747168d55d2a",
            name: "Workers AI Edit",
          },
        ],
      },
    ],
  },
  {
    id: "load_balancing",
    name: "Edit load balancing configuration",
    description: "Configure load balancers and pools",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "9f2de67ab7874c93a3c3a61698bd7ff5",
            name: "Load Balancer Edit",
          },
        ],
      },
    ],
  },
  {
    id: "wordpress",
    name: "WordPress",
    description: "Manage WordPress sites and settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "2f9f62c54e974a8e9f8ed618d2ae27b2",
            name: "WordPress Edit",
          },
        ],
      },
    ],
  },
  {
    id: "stream_images",
    name: "Read and write to Cloudflare Stream and Images",
    description: "Manage streaming content and image assets",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "1d88b2c89f724759a96e361fe3d03c38",
            name: "Stream Edit",
          },
          {
            id: "6e7c99ff1e8c4c31a37804e388f81c7a",
            name: "Images Edit",
          },
        ],
      },
    ],
  },
  {
    id: "radar",
    name: "Read Cloudflare Radar data",
    description: "Access Cloudflare Radar analytics and insights",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "8b4d61e3f2e24d67b1f7c1e9b7f8e9d0",
            name: "Radar Read",
          },
        ],
      },
    ],
  },
  {
    id: "create_tokens",
    name: "Create Additional Tokens",
    description: "Create and manage API tokens",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.user.*": "*",
        },
        permission_groups: [
          {
            id: "5d31a8e4c2984c1f9d5a1f3e7b8c9d0a",
            name: "Token Edit",
          },
        ],
      },
    ],
  },
  {
    id: "read_all",
    name: "Read all resources",
    description: "Read-only access to all Cloudflare resources",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "c8fed203ed3043cba015a93ad1616f1f",
            name: "Account Read",
          },
          {
            id: "ed07f6c337da4195b4e72a1fb2c6bcae",
            name: "Analytics Read",
          },
          {
            id: "b6bf5740e1914d76b9864a32cdae3046",
            name: "Billing Read",
          },
        ],
      },
    ],
  },
  {
    id: "r2_admin",
    name: "R2 Storage Administrator",
    description: "Full access to R2 storage buckets and operations",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "1bc87e7eb5c94e7ea29f6c7e8f7d6e5c",
            name: "R2 Edit",
          },
          {
            id: "4a3b2c1d0e9f8g7h6i5j4k3l2m1n0o9",
            name: "R2 Tokens Edit",
          },
        ],
      },
    ],
  },
  {
    id: "pages_developer",
    name: "Pages Developer",
    description: "Deploy and manage Cloudflare Pages sites",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4",
            name: "Pages Edit",
          },
          {
            id: "2a1b3c4d5e6f7g8h9i0j1k2l3m4n5o6",
            name: "Pages Deployment Edit",
          },
        ],
      },
    ],
  },
  {
    id: "queues_admin",
    name: "Queue Administrator",
    description: "Manage Cloudflare Queues and message processing",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2",
            name: "Queues Edit",
          },
          {
            id: "3e7c9f85f9404e6bb6270f7f549d1b3a",
            name: "Workers Read",
          },
        ],
      },
    ],
  },
  {
    id: "d1_database",
    name: "D1 Database Manager",
    description: "Manage D1 SQL databases and operations",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9",
            name: "D1 Edit",
          },
          {
            id: "3e7c9f85f9404e6bb6270f7f549d1b3a",
            name: "Workers Read",
          },
        ],
      },
    ],
  },
  {
    id: "dns_manager",
    name: "DNS Manager",
    description: "Full DNS and SSL/TLS certificate management",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "82e64a83756745bbbb1c9c2701bf816b",
            name: "DNS Edit",
          },
          {
            id: "9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4",
            name: "SSL Edit",
          },
          {
            id: "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6",
            name: "Certificate Edit",
          },
        ],
      },
    ],
  },
  {
    id: "cache_optimizer",
    name: "Cache Optimizer",
    description: "Manage caching rules and configuration",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7",
            name: "Cache Edit",
          },
          {
            id: "3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8",
            name: "Page Rules Edit",
          },
        ],
      },
    ],
  },
  {
    id: "zero_trust",
    name: "Zero Trust Administrator",
    description: "Manage Zero Trust security policies and access",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9",
            name: "Zero Trust Edit",
          },
          {
            id: "5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0",
            name: "Access Edit",
          },
          {
            id: "6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1",
            name: "Gateway Edit",
          },
        ],
      },
    ],
  },
  {
    id: "email_routing",
    name: "Email Routing Manager",
    description: "Configure email routing and security settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2",
            name: "Email Edit",
          },
          {
            id: "8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3",
            name: "Email Routing Edit",
          },
          {
            id: "9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4",
            name: "Email Security Edit",
          },
        ],
      },
    ],
  },
  {
    id: "spectrum_admin",
    name: "Spectrum Administrator",
    description: "Manage Spectrum applications and TCP/UDP traffic",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5",
            name: "Spectrum Edit",
          },
          {
            id: "1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6",
            name: "Spectrum Analytics Read",
          },
        ],
      },
    ],
  },
  {
    id: "teams_manager",
    name: "Teams Manager",
    description: "Manage team members and access policies",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7",
            name: "Teams Edit",
          },
          {
            id: "3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8",
            name: "Members Edit",
          },
          {
            id: "4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9",
            name: "Account Roles Read",
          },
        ],
      },
    ],
  },
  {
    id: "audit_viewer",
    name: "Audit Log Viewer",
    description: "View audit logs and security events",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0",
            name: "Audit Logs Read",
          },
          {
            id: "6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
            name: "Security Events Read",
          },
        ],
      },
    ],
  },
  {
    id: "ci_deployment",
    name: "CI/CD Pipeline",
    description: "Automated deployment permissions for CI/CD workflows",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2",
            name: "Workers Edit",
          },
          {
            id: "8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3",
            name: "Pages Edit",
          },
          {
            id: "9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4",
            name: "KV Edit",
          },
        ],
      },
    ],
  },
  {
    id: "monitoring_integration",
    name: "Monitoring Integration",
    description: "Read-only access for external monitoring tools",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5",
            name: "Health Checks Read",
          },
          {
            id: "1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6",
            name: "Analytics Read",
          },
          {
            id: "2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7",
            name: "Workers Analytics Read",
          },
        ],
      },
    ],
  },
  {
    id: "backup_automation",
    name: "Backup Automation",
    description: "Permissions for automated backup systems",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8",
            name: "R2 Edit",
          },
          {
            id: "4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9",
            name: "DNS Read",
          },
          {
            id: "5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0",
            name: "Workers KV Read",
          },
        ],
      },
      {
        effect: "deny",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1",
            name: "Zone Settings Edit",
          },
        ],
      },
    ],
  },
  {
    id: "staging_environment",
    name: "Staging Environment",
    description: "Full access to staging/development resources",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2",
            name: "Workers Dev Edit",
          },
          {
            id: "8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3",
            name: "Pages Dev Edit",
          },
        ],
      },
      {
        effect: "deny",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4",
            name: "Production Access",
          },
        ],
      },
    ],
  },
  {
    id: "load_testing",
    name: "Load Testing",
    description: "Permissions for performance testing tools",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5",
            name: "Load Balancers Read",
          },
          {
            id: "1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6",
            name: "Analytics Read",
          },
        ],
      },
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7",
            name: "Rate Limiting Edit",
          },
        ],
      },
    ],
  },
  {
    id: "cdn_optimization",
    name: "CDN Optimization",
    description: "Manage CDN and performance settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8",
            name: "Cache Edit",
          },
          {
            id: "4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9",
            name: "Tiered Caching Edit",
          },
          {
            id: "5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0",
            name: "Argo Edit",
          },
        ],
      },
      {
        effect: "deny",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1",
            name: "Account Settings Edit",
          },
        ],
      },
    ],
  },
  {
    id: "serverless_data",
    name: "Serverless Data Management",
    description: "Manage all serverless data stores",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2",
            name: "Workers KV Edit",
          },
          {
            id: "8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3",
            name: "D1 Edit",
          },
          {
            id: "9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4",
            name: "R2 Edit",
          },
          {
            id: "0m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5",
            name: "Durable Objects Edit",
          },
        ],
      },
    ],
  },
  {
    id: "api_gateway",
    name: "API Gateway Configuration",
    description: "Manage API shield and gateway settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6",
            name: "API Shield Edit",
          },
          {
            id: "2o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7",
            name: "Transform Rules Edit",
          },
          {
            id: "3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8",
            name: "Workers Edit",
          },
        ],
      },
    ],
  },
  {
    id: "edge_testing",
    name: "Edge Testing",
    description: "Test deployments across edge locations",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9",
            name: "Workers Edit",
          },
          {
            id: "5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0",
            name: "Workers Test Edit",
          },
        ],
      },
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1",
            name: "Analytics Read",
          },
        ],
      },
    ],
  },
  {
    id: "disaster_recovery",
    name: "Disaster Recovery",
    description: "Emergency access for disaster recovery",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2",
            name: "DNS Edit",
          },
          {
            id: "8u9v0w1x2y3z4a5b6c7d8e9f0g1h2i3",
            name: "Load Balancer Edit",
          },
          {
            id: "9v0w1x2y3z4a5b6c7d8e9f0g1h2i3j4",
            name: "SSL Edit",
          },
          {
            id: "0w1x2y3z4a5b6c7d8e9f0g1h2i3j4k5",
            name: "Backup Edit",
          },
        ],
      },
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "1x2y3z4a5b6c7d8e9f0g1h2i3j4k5l6",
            name: "Account Emergency Access",
          },
        ],
      },
    ],
  },
  {
    id: "ml_training",
    name: "ML Training Pipeline",
    description: "Access for ML model training and deployment",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "2y3z4a5b6c7d8e9f0g1h2i3j4k5l6m7",
            name: "Workers AI Edit",
          },
          {
            id: "3z4a5b6c7d8e9f0g1h2i3j4k5l6m7n8",
            name: "R2 Edit",
          },
          {
            id: "4a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9",
            name: "Workers Edit",
          },
        ],
      },
    ],
  },
  {
    id: "security_scanner",
    name: "Security Scanner Integration",
    description: "Access for security scanning tools",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p0",
            name: "WAF Read",
          },
          {
            id: "6c7d8e9f0g1h2i3j4k5l6m7n8o9p0q1",
            name: "Firewall Read",
          },
          {
            id: "7d8e9f0g1h2i3j4k5l6m7n8o9p0q1r2",
            name: "Security Events Read",
          },
          {
            id: "8e9f0g1h2i3j4k5l6m7n8o9p0q1r2s3",
            name: "Audit Logs Read",
          },
        ],
      },
      {
        effect: "deny",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "9f0g1h2i3j4k5l6m7n8o9p0q1r2s3t4",
            name: "Zone Settings Edit",
          },
        ],
      },
    ],
  },
  {
    id: "game_server",
    name: "Game Server Integration",
    description: "Manage game server connections and Spectrum protocols",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
            name: "Spectrum Edit",
          },
          {
            id: "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7",
            name: "Load Balancers Edit",
          },
          {
            id: "c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8",
            name: "Workers Edit",
          },
          {
            id: "d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9",
            name: "Queues Edit",
          },
        ],
      },
    ],
  },
  {
    id: "content_delivery",
    name: "Content Delivery Pipeline",
    description: "Optimize and manage content delivery workflow",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
            name: "Stream Edit",
          },
          {
            id: "f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1",
            name: "Images Edit",
          },
          {
            id: "g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2",
            name: "R2 Edit",
          },
          {
            id: "h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3",
            name: "Cache Rules Edit",
          },
        ],
      },
    ],
  },
  {
    id: "migration_tool",
    name: "Migration Assistant",
    description: "Permissions for data migration tools",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4",
            name: "DNS Edit",
          },
          {
            id: "j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5",
            name: "Workers KV Edit",
          },
          {
            id: "k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",
            name: "D1 Edit",
          },
          {
            id: "l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7",
            name: "R2 Edit",
          },
        ],
      },
    ],
  },
  {
    id: "chatbot_integration",
    name: "Chatbot Integration",
    description: "Access for AI chatbot deployments",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8",
            name: "Workers AI Edit",
          },
          {
            id: "n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9",
            name: "Workers Edit",
          },
          {
            id: "o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0",
            name: "D1 Edit",
          },
          {
            id: "p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1",
            name: "Queues Edit",
          },
        ],
      },
    ],
  },
  {
    id: "cdn_prefetcher",
    name: "CDN Prefetch Optimizer",
    description: "Manage predictive content loading",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2",
            name: "Cache Rules Edit",
          },
          {
            id: "r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3",
            name: "Workers Edit",
          },
          {
            id: "s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4",
            name: "Analytics Read",
          },
          {
            id: "t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5",
            name: "Argo Edit",
          },
        ],
      },
    ],
  },
  {
    id: "video_platform",
    name: "Video Platform Integration",
    description: "Manage video streaming and processing",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6",
            name: "Stream Edit",
          },
          {
            id: "v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7",
            name: "Workers Edit",
          },
          {
            id: "w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8",
            name: "R2 Edit",
          },
          {
            id: "x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9",
            name: "Cache Edit",
          },
        ],
      },
    ],
  },
  {
    id: "ddos_response",
    name: "DDoS Response System",
    description: "Automated DDoS mitigation controls",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0",
            name: "DDoS Edit",
          },
          {
            id: "z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1",
            name: "Rate Limiting Edit",
          },
          {
            id: "a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2",
            name: "Firewall Edit",
          },
        ],
      },
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3",
            name: "Analytics Read",
          },
        ],
      },
    ],
  },
  {
    id: "ab_testing",
    name: "A/B Testing Framework",
    description: "Manage split testing configurations",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4",
            name: "Workers Edit",
          },
          {
            id: "d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5",
            name: "Workers KV Edit",
          },
          {
            id: "e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6",
            name: "Analytics Read",
          },
          {
            id: "f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7",
            name: "Transform Rules Edit",
          },
        ],
      },
    ],
  },
  {
    id: "iot_gateway",
    name: "IoT Gateway Manager",
    description: "Manage IoT device connections and data",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8",
            name: "Spectrum Edit",
          },
          {
            id: "h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9",
            name: "Workers Edit",
          },
          {
            id: "i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0",
            name: "Queues Edit",
          },
          {
            id: "j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1",
            name: "D1 Edit",
          },
        ],
      },
    ],
  },
  {
    id: "seo_tools",
    name: "SEO Tools Integration",
    description: "Access for SEO monitoring and optimization",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.zone.*": "*",
        },
        permission_groups: [
          {
            id: "k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2",
            name: "Workers Edit",
          },
          {
            id: "l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3",
            name: "Cache Read",
          },
          {
            id: "m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4",
            name: "Analytics Read",
          },
          {
            id: "n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5",
            name: "Page Rules Read",
          },
        ],
      },
    ],
  },
  {
    id: "static_publisher",
    name: "Static Site Publisher",
    description: "Automated static site deployment system",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6",
            name: "Pages Edit",
          },
          {
            id: "p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7",
            name: "Workers Edit",
          },
          {
            id: "q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8",
            name: "R2 Edit",
          },
          {
            id: "r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9",
            name: "KV Edit",
          },
        ],
      },
    ],
  },
  {
    id: "compliance_audit",
    name: "Compliance Audit System",
    description: "Access for compliance monitoring tools",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0",
            name: "Audit Logs Read",
          },
          {
            id: "t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1",
            name: "WAF Read",
          },
          {
            id: "u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2",
            name: "Access Read",
          },
          {
            id: "v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3",
            name: "Certificates Read",
          },
        ],
      },
    ],
  },
  {
    id: "web3_gateway",
    name: "Web3 Gateway",
    description: "Manage Web3 gateways and blockchain connections",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9",
            name: "Web3 Edit",
          },
          {
            id: "y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0",
            name: "Workers Edit",
          },
          {
            id: "z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1",
            name: "R2 Edit",
          },
        ],
      },
    ],
  },
  {
    id: "cdn_analytics",
    name: "CDN Analytics Platform",
    description: "Advanced CDN analytics and reporting",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2",
            name: "Analytics Read",
          },
          {
            id: "b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3",
            name: "Logs Read",
          },
          {
            id: "c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4",
            name: "Cache Analytics Read",
          },
          {
            id: "d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5",
            name: "Radar Read",
          },
        ],
      },
    ],
  },
  {
    id: "mobile_sdk",
    name: "Mobile SDK Integration",
    description: "Access for mobile app SDK integration",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6",
            name: "Mobile SDK Edit",
          },
          {
            id: "f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7",
            name: "Workers Edit",
          },
          {
            id: "g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8",
            name: "Analytics Read",
          },
        ],
      },
    ],
  },
  {
    id: "ssl_manager",
    name: "SSL Certificate Manager",
    description: "Manage SSL/TLS certificates and settings",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3",
            name: "SSL Edit",
          },
          {
            id: "i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4",
            name: "Certificates Edit",
          },
          {
            id: "j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5",
            name: "Custom Certificates Edit",
          },
        ],
      },
    ],
  },
  {
    id: "image_pipeline",
    name: "Image Processing Pipeline",
    description: "Image optimization and processing workflow",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",
            name: "Images Edit",
          },
          {
            id: "l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7",
            name: "R2 Edit",
          },
          {
            id: "m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8",
            name: "Workers Edit",
          },
          {
            id: "n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9",
            name: "Stream Edit",
          },
        ],
      },
    ],
  },
  {
    id: "dns_automation",
    name: "DNS Automation System",
    description: "Automated DNS management and updates",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0",
            name: "DNS Edit",
          },
          {
            id: "p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1",
            name: "Zone Edit",
          },
          {
            id: "q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2",
            name: "DNS Analytics Read",
          },
        ],
      },
    ],
  },
  {
    id: "performance_monitor",
    name: "Performance Monitoring",
    description: "Monitor and analyze performance metrics",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3",
            name: "Performance Read",
          },
          {
            id: "s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4",
            name: "Analytics Read",
          },
          {
            id: "t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5",
            name: "RUM Read",
          },
        ],
      },
    ],
  },
  {
    id: "bot_platform",
    name: "Bot Platform Manager",
    description: "Manage bot detection and mitigation",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2",
            name: "Bot Management Edit",
          },
          {
            id: "v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3",
            name: "Firewall Edit",
          },
          {
            id: "w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4",
            name: "Analytics Read",
          },
        ],
      },
    ],
  },
  {
    id: "streaming_analytics",
    name: "Streaming Analytics",
    description: "Analytics for streaming content",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5",
            name: "Stream Read",
          },
          {
            id: "y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6",
            name: "Analytics Read",
          },
          {
            id: "z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7",
            name: "Logs Read",
          },
        ],
      },
    ],
  },
  {
    id: "zone_migration",
    name: "Zone Migration Tool",
    description: "Tools for zone transfers and migration",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8",
            name: "Zone Edit",
          },
          {
            id: "b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9",
            name: "DNS Edit",
          },
          {
            id: "c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0",
            name: "SSL Edit",
          },
          {
            id: "d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1",
            name: "Page Rules Edit",
          },
        ],
      },
    ],
  },
  {
    id: "waf_manager",
    name: "WAF Rule Manager",
    description: "Manage WAF rules and configurations",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2",
            name: "WAF Edit",
          },
          {
            id: "f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3",
            name: "Firewall Edit",
          },
          {
            id: "g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4",
            name: "Security Level Edit",
          },
        ],
      },
    ],
  },
  {
    id: "api_monitoring",
    name: "API Monitoring System",
    description: "Monitor API performance and security",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5",
            name: "API Shield Read",
          },
          {
            id: "i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6",
            name: "Analytics Read",
          },
          {
            id: "j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7",
            name: "Logs Read",
          },
        ],
      },
    ],
  },
  {
    id: "tunnel_manager",
    name: "Tunnel Configuration",
    description: "Manage tunnel connections and routing",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8",
            name: "Tunnels Edit",
          },
          {
            id: "l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9",
            name: "WARP Edit",
          },
          {
            id: "m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0",
            name: "Network Edit",
          },
        ],
      },
    ],
  },
  {
    id: "billing_automation",
    name: "Billing Automation",
    description: "Automated billing and usage monitoring",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1",
            name: "Billing Read",
          },
          {
            id: "o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2",
            name: "Usage Read",
          },
          {
            id: "p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3",
            name: "Subscriptions Read",
          },
        ],
      },
    ],
  },
  {
    id: "cache_purge",
    name: "Cache Purge Automation",
    description: "Automated cache purging system",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4",
            name: "Cache Edit",
          },
          {
            id: "r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5",
            name: "Purge Edit",
          },
          {
            id: "s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6",
            name: "Zones Read",
          },
        ],
      },
    ],
  },
  {
    id: "rules_engine",
    name: "Rules Engine Manager",
    description: "Manage transform and page rules",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7",
            name: "Transform Rules Edit",
          },
          {
            id: "u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8",
            name: "Page Rules Edit",
          },
          {
            id: "v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9",
            name: "Rulesets Edit",
          },
        ],
      },
    ],
  },
  {
    id: "load_balancer_analytics",
    name: "Load Balancer Analytics",
    description: "Monitor load balancer performance",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0",
            name: "Load Balancers Read",
          },
          {
            id: "x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1",
            name: "Health Checks Read",
          },
          {
            id: "y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2",
            name: "Analytics Read",
          },
        ],
      },
    ],
  },
  {
    id: "domain_manager",
    name: "Domain Management System",
    description: "Comprehensive domain management",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3",
            name: "Domains Edit",
          },
          {
            id: "a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4",
            name: "DNS Edit",
          },
          {
            id: "b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5",
            name: "SSL Edit",
          },
          {
            id: "c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6",
            name: "Registrar Edit",
          },
        ],
      },
    ],
  },
  {
    id: "security_automation",
    name: "Security Automation Platform",
    description: "Automated security response system",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7",
            name: "WAF Edit",
          },
          {
            id: "e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8",
            name: "Firewall Edit",
          },
          {
            id: "f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9",
            name: "DDoS Edit",
          },
          {
            id: "g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0",
            name: "Security Level Edit",
          },
        ],
      },
    ],
  },
  {
    id: "cost_optimization",
    name: "Cost Optimization Tools",
    description: "Monitor and optimize resource usage",
    policies: [
      {
        effect: "allow",
        resources: {
          "com.cloudflare.api.account.*": "*",
        },
        permission_groups: [
          {
            id: "h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1",
            name: "Billing Read",
          },
          {
            id: "i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2",
            name: "Usage Read",
          },
          {
            id: "j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3",
            name: "Analytics Read",
          },
          {
            id: "k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4",
            name: "Workers Read",
          },
        ],
      },
    ],
  },
];
