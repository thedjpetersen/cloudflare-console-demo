export type BasePermission = {
  id: string;
  name: string;
  description: string;
  type:
    | "read"
    | "edit"
    | "revoke"
    | "shield"
    | "send"
    | "dex"
    | "edit_publish"
    | "report"
    | "revoke"
    | "run";
};

export type PermissionScope =
  | "com.cloudflare.api.user"
  | "com.cloudflare.api.account"
  | "com.cloudflare.api.account.zone";

export interface Permission extends BasePermission {
  scope: PermissionScope;
}

// User Permissions
export type UserPermissionName =
  | "API Tokens Read"
  | "API Tokens Edit"
  | "Memberships Read"
  | "Memberships Edit"
  | "User Details Read"
  | "User Details Edit";

export const USER_PERMISSIONS: Record<UserPermissionName, Permission> = {
  "API Tokens Read": {
    id: "usr_api_token_read",
    name: "API Tokens Read",
    description: "Grants read access to user's API tokens.",
    scope: "com.cloudflare.api.user",
    type: "read",
  },
  "API Tokens Edit": {
    id: "usr_api_token_write",
    name: "API Tokens Edit",
    description: "Grants write access to user's API tokens.",
    scope: "com.cloudflare.api.user",
    type: "edit",
  },
  "Memberships Read": {
    id: "usr_membership_read",
    name: "Memberships Read",
    description: "Grants read access to a user's account memberships.",
    scope: "com.cloudflare.api.user",
    type: "read",
  },
  "Memberships Edit": {
    id: "usr_membership_write",
    name: "Memberships Edit",
    description: "Grants write access to a user's account memberships.",
    scope: "com.cloudflare.api.user",
    type: "edit",
  },
  "User Details Read": {
    id: "usr_details_read",
    name: "User Details Read",
    description: "Grants read access to user details.",
    scope: "com.cloudflare.api.user",
    type: "read",
  },
  "User Details Edit": {
    id: "usr_details_write",
    name: "User Details Edit",
    description: "Grants write access to user details.",
    scope: "com.cloudflare.api.user",
    type: "edit",
  },
};

// Account Permissions
export type AccountPermissionName =
  | "Access: Apps and Policies Read"
  | "Access: Apps and Policies Edit"
  | "Access: Apps and Policies Revoke"
  | "Access: Audit Logs Read"
  | "Access: Custom Pages Read"
  | "Access: Custom Pages Edit"
  | "Access: Device Posture Read"
  | "Access: Device Posture Edit"
  | "Access: Mutual TLS Certificates Read"
  | "Access: Mutual TLS Certificates Edit"
  | "Access: Organizations, Identity Providers, and Groups Read"
  | "Access: Organizations, Identity Providers, and Groups Edit"
  | "Access: Organizations, Identity Providers, and Groups Revoke"
  | "Access: Service Tokens Read"
  | "Access: Service Tokens Edit"
  | "Access: SSH Auditing Read"
  | "Access: SSH Auditing Edit"
  | "Account Analytics Read"
  | "Account Custom Pages Read"
  | "Account Custom Pages Edit"
  | "Account Filter Lists Read"
  | "Account Filter Lists Edit"
  | "Account Firewall Access Rules Read"
  | "Account Firewall Access Rules Edit"
  | "Account Rulesets Read"
  | "Account Rulesets Edit"
  | "Account Settings Read"
  | "Account Settings Edit"
  | "Account: SSL and Certificates Read"
  | "Account: SSL and Certificates Edit"
  | "Account WAF Read"
  | "Account WAF Edit"
  | "Address Maps Edit"
  | "Address Maps Read"
  | "Allow Request Tracer Read"
  | "API Gateway Read"
  | "API Gateway Edit"
  | "Billing Read"
  | "Billing Edit"
  | "Bulk URL Redirects Read"
  | "Bulk URL Redirects Edit"
  | "China Network Steering Read"
  | "China Network Steering Edit"
  | "Cloudchamber Read"
  | "Cloudchamber Edit"
  | "Cloudflare Calls Read"
  | "Cloudflare Calls Edit"
  | "Cloudflare DEX Read"
  | "Cloudflare DEX Edit"
  | "Cloudflare Images Read"
  | "Cloudflare Images Edit"
  | "Cloudflare One Connector: cloudflared Read"
  | "Cloudflare One Connector: cloudflared Edit"
  | "Cloudflare One Connector: WARP Read"
  | "Cloudflare One Connector: WARP Edit"
  | "Cloudflare One Connectors Read"
  | "Cloudflare One Connectors Edit"
  | "Cloudflare One Networks Read"
  | "Cloudflare One Networks Edit"
  | "Cloudflare Pages Read"
  | "Cloudflare Pages Edit"
  | "Cloudflare Tunnel Read"
  | "Cloudflare Tunnel Edit"
  | "Cloudforce One Read"
  | "Cloudforce One Edit"
  | "Cloud Email Security Read"
  | "Email Security Edit"
  | "Constellation Read"
  | "Constellation Edit"
  | "D1 Read"
  | "D1 Edit"
  | "DDoS Botnet Feed Read"
  | "DDoS Botnet Feed Edit"
  | "DDoS Protection Read"
  | "DDoS Protection Edit"
  | "DNS Firewall Read"
  | "DNS Firewall Edit"
  | "Email Routing Addresses Read"
  | "Email Routing Addresses Edit"
  | "Hyperdrive Read"
  | "Hyperdrive Edit"
  | "Intel Read"
  | "Intel Edit"
  | "Integration Edit"
  | "IOT Read"
  | "IOT Edit"
  | "IP Prefixes: Read"
  | "IP Prefixes: Edit"
  | "IP Prefixes: BGP On Demand Read"
  | "IP Prefixes: BGP On Demand Edit"
  | "L3/4 DDoS Managed Ruleset Read"
  | "L3/4 DDoS Managed Ruleset Edit"
  | "Load Balancing: Monitors and Pools Read"
  | "Load Balancing: Monitors and Pools Edit"
  | "Logs Read"
  | "Logs Edit"
  | "Magic Firewall Read"
  | "Magic Firewall Edit"
  | "Magic Firewall Packet Captures - Read PCAPs API"
  | "Magic Firewall Packet Captures - Edit PCAPs API"
  | "Magic Network Monitoring Read"
  | "Magic Network Monitoring Edit"
  | "Magic Transit Read"
  | "Magic Transit Edit"
  | "Notifications Read"
  | "Notifications Edit"
  | "Page Shield Read"
  | "Page Shield Edit"
  | "Pipelines Read"
  | "Pipelines Edit"
  | "Pub/Sub Read"
  | "Pub/Sub Edit"
  | "Queues Read"
  | "Queues Edit"
  | "Rule Policies Read"
  | "Rule Policies Edit"
  | "Stream Read"
  | "Stream Edit"
  | "Transform Rules Read"
  | "Transform Rules Edit"
  | "Turnstile Read"
  | "Turnstile Edit"
  | "URL Scanner Read"
  | "URL Scanner Edit"
  | "Vectorize Read"
  | "Vectorize Edit"
  | "Workers Edit"
  | "Workers Read"
  | "Workers AI Read"
  | "Workers AI Edit"
  | "Workers CI Read"
  | "Workers CI Edit"
  | "Workers KV Storage Read"
  | "Workers KV Storage Edit"
  | "Workers R2 Storage Read"
  | "Workers R2 Storage Edit"
  | "Workers Scripts Read"
  | "Workers Scripts Edit"
  | "Workers Tail Read"
  | "Zero Trust Read"
  | "Zero Trust Report"
  | "Zero Trust Edit"
  | "Zero Trust PII Read"
  | "Zero Trust PII Edit"
  | "Zero Trust Seats Edit";

export const ACCOUNT_PERMISSIONS: Record<AccountPermissionName, Permission> = {
  "Access: Apps and Policies Read": {
    id: "acc_access_apps_read",
    name: "Access: Apps and Policies Read",
    description: "Grants read access to Cloudflare Access account resources.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Access: Apps and Policies Edit": {
    id: "acc_access_apps_write",
    name: "Access: Apps and Policies Edit",
    description: "Grants write access to Cloudflare Access account resources.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Access: Apps and Policies Revoke": {
    id: "acc_access_apps_revoke",
    name: "Access: Apps and Policies Revoke",
    description: "Grants revoke access to Cloudflare Access account resources.",
    scope: "com.cloudflare.api.account",
    type: "revoke",
  },
  "Access: Custom Pages Read": {
    id: "acc_access_custom_pages_read",
    name: "Access: Custom Pages Read",
    description: "Grants read access to Access custom pages.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Access: Custom Pages Edit": {
    id: "acc_access_custom_pages_write",
    name: "Access: Custom Pages Edit",
    description: "Grants write access to Access custom pages.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Access: Device Posture Read": {
    id: "acc_access_device_posture_read",
    name: "Access: Device Posture Read",
    description: "Grants read access to device posture settings.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Access: Device Posture Edit": {
    id: "acc_access_device_posture_write",
    name: "Access: Device Posture Edit",
    description: "Grants write access to device posture settings.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Access: Audit Logs Read": {
    id: "acc_audit_logs_read",
    name: "Access: Audit Logs Read",
    description: "Grants read access to Cloudflare Access audit logs.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Access: Mutual TLS Certificates Read": {
    id: "acc_mutual_tls_certs_read",
    name: "Access: Mutual TLS Certificates Read",
    description: "Grants read access to Mutual TLS Certificates.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Access: Mutual TLS Certificates Edit": {
    id: "acc_mutual_tls_certs_write",
    name: "Access: Mutual TLS Certificates Edit",
    description: "Grants write access to Mutual TLS Certificates.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Access: Organizations, Identity Providers, and Groups Read": {
    id: "acc_orgs_read",
    name: "Access: Organizations, Identity Providers, and Groups Read",
    description:
      "Grants read access to organizations, identity providers, and groups.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Access: Organizations, Identity Providers, and Groups Edit": {
    id: "acc_orgs_write",
    name: "Access: Organizations, Identity Providers, and Groups Edit",
    description:
      "Grants write access to organizations, identity providers, and groups.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Access: Organizations, Identity Providers, and Groups Revoke": {
    id: "acc_orgs_revoke",
    name: "Access: Organizations, Identity Providers, and Groups Revoke",
    description:
      "Grants revoke access to organizations, identity providers, and groups.",
    scope: "com.cloudflare.api.account",
    type: "revoke",
  },
  "Access: Service Tokens Read": {
    id: "acc_service_tokens_read",
    name: "Access: Service Tokens Read",
    description: "Grants read access to service tokens.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Access: Service Tokens Edit": {
    id: "acc_service_tokens_write",
    name: "Access: Service Tokens Edit",
    description: "Grants write access to service tokens.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Access: SSH Auditing Read": {
    id: "acc_ssh_auditing_read",
    name: "Access: SSH Auditing Read",
    description: "Grants read access to SSH Auditing.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Access: SSH Auditing Edit": {
    id: "acc_ssh_auditing_write",
    name: "Access: SSH Auditing Edit",
    description: "Grants write access to SSH Auditing.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Account Analytics Read": {
    id: "acc_analytics_read",
    name: "Account Analytics Read",
    description: "Grants read access to account analytics.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Account Settings Read": {
    id: "acc_settings_read",
    name: "Account Settings Read",
    description: "Grants read access to account settings.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Account Settings Edit": {
    id: "acc_settings_write",
    name: "Account Settings Edit",
    description: "Grants write access to account settings.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Account WAF Read": {
    id: "acc_waf_read",
    name: "Account WAF Read",
    description: "Grants read access to account WAF.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Account WAF Edit": {
    id: "acc_waf_write",
    name: "Account WAF Edit",
    description: "Grants write access to account WAF.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Billing Read": {
    id: "acc_billing_read",
    name: "Billing Read",
    description: "Grants read access to billing information.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Billing Edit": {
    id: "acc_billing_write",
    name: "Billing Edit",
    description: "Grants write access to billing information.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare One Networks Read": {
    id: "acc_one_networks_read",
    name: "Cloudflare One Networks Read",
    description: "Grants read access to Cloudflare One networks.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare One Networks Edit": {
    id: "acc_one_networks_write",
    name: "Cloudflare One Networks Edit",
    description: "Grants write access to Cloudflare One networks.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Workers KV Storage Read": {
    id: "acc_workers_kv_read",
    name: "Workers KV Storage Read",
    description: "Grants read access to Workers KV storage.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Workers KV Storage Edit": {
    id: "acc_workers_kv_write",
    name: "Workers KV Storage Edit",
    description: "Grants write access to Workers KV storage.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Workers Scripts Read": {
    id: "acc_workers_scripts_read",
    name: "Workers Scripts Read",
    description: "Grants read access to Workers scripts.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Workers Scripts Edit": {
    id: "acc_workers_scripts_write",
    name: "Workers Scripts Edit",
    description: "Grants write access to Workers scripts.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Zero Trust Seats Edit": {
    id: "acc_zero_trust_seats_write",
    name: "Zero Trust Seats Edit",
    description: "Grants write access to Zero Trust seats.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Account Custom Pages Read": {
    id: "acc_custom_pages_read",
    name: "Account Custom Pages Read",
    description: "Grants read access to account custom pages.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Account Custom Pages Edit": {
    id: "acc_custom_pages_write",
    name: "Account Custom Pages Edit",
    description: "Grants write access to account custom pages.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Account Filter Lists Read": {
    id: "acc_filter_lists_read",
    name: "Account Filter Lists Read",
    description: "Grants read access to account filter lists.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Account Filter Lists Edit": {
    id: "acc_filter_lists_write",
    name: "Account Filter Lists Edit",
    description: "Grants write access to account filter lists.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Account Firewall Access Rules Read": {
    id: "acc_firewall_rules_read",
    name: "Account Firewall Access Rules Read",
    description: "Grants read access to account firewall rules.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Account Firewall Access Rules Edit": {
    id: "acc_firewall_rules_write",
    name: "Account Firewall Access Rules Edit",
    description: "Grants write access to account firewall rules.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Account Rulesets Read": {
    id: "acc_rulesets_read",
    name: "Account Rulesets Read",
    description: "Grants read access to account rulesets.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Account Rulesets Edit": {
    id: "acc_rulesets_write",
    name: "Account Rulesets Edit",
    description: "Grants write access to account rulesets.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Account: SSL and Certificates Read": {
    id: "acc_ssl_certs_read",
    name: "Account: SSL and Certificates Read",
    description: "Grants read access to account SSL certificates.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Account: SSL and Certificates Edit": {
    id: "acc_ssl_certs_write",
    name: "Account: SSL and Certificates Edit",
    description: "Grants write access to account SSL certificates.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "API Gateway Read": {
    id: "acc_api_gateway_read",
    name: "API Gateway Read",
    description: "Grants read access to API Gateway.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "API Gateway Edit": {
    id: "acc_api_gateway_write",
    name: "API Gateway Edit",
    description: "Grants write access to API Gateway.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Logs Read": {
    id: "acc_logs_read",
    name: "Logs Read",
    description: "Grants read access to logs.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Logs Edit": {
    id: "acc_logs_write",
    name: "Logs Edit",
    description: "Grants write access to logs.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Allow Request Tracer Read": {
    id: "acc_request_tracer_read",
    name: "Allow Request Tracer Read",
    description: "Grants read access to request tracer.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Bulk URL Redirects Read": {
    id: "acc_bulk_redirects_read",
    name: "Bulk URL Redirects Read",
    description: "Grants read access to bulk URL redirects.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Bulk URL Redirects Edit": {
    id: "acc_bulk_redirects_write",
    name: "Bulk URL Redirects Edit",
    description: "Grants write access to bulk URL redirects.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "China Network Steering Read": {
    id: "acc_china_network_read",
    name: "China Network Steering Read",
    description: "Grants read access to China network steering.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "China Network Steering Edit": {
    id: "acc_china_network_write",
    name: "China Network Steering Edit",
    description: "Grants write access to China network steering.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare One Connector: cloudflared Read": {
    id: "acc_cloudflared_read",
    name: "Cloudflare One Connector: cloudflared Read",
    description: "Grants read access to cloudflared connector.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare One Connector: cloudflared Edit": {
    id: "acc_cloudflared_write",
    name: "Cloudflare One Connector: cloudflared Edit",
    description: "Grants write access to cloudflared connector.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare One Connector: WARP Read": {
    id: "acc_warp_read",
    name: "Cloudflare One Connector: WARP Read",
    description: "Grants read access to WARP connector.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare One Connector: WARP Edit": {
    id: "acc_warp_write",
    name: "Cloudflare One Connector: WARP Edit",
    description: "Grants write access to WARP connector.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare One Connectors Read": {
    id: "acc_one_connectors_read",
    name: "Cloudflare One Connectors Read",
    description: "Grants read access to Cloudflare One connectors.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare One Connectors Edit": {
    id: "acc_one_connectors_write",
    name: "Cloudflare One Connectors Edit",
    description: "Grants write access to Cloudflare One connectors.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare Pages Read": {
    id: "acc_pages_read",
    name: "Cloudflare Pages Read",
    description: "Grants read access to Cloudflare Pages.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare Pages Edit": {
    id: "acc_pages_write",
    name: "Cloudflare Pages Edit",
    description: "Grants write access to Cloudflare Pages.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare Tunnel Read": {
    id: "acc_tunnel_read",
    name: "Cloudflare Tunnel Read",
    description: "Grants read access to Cloudflare Tunnel.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare Tunnel Edit": {
    id: "acc_tunnel_write",
    name: "Cloudflare Tunnel Edit",
    description: "Grants write access to Cloudflare Tunnel.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Address Maps Edit": {
    id: "acc_address_maps_write",
    name: "Address Maps Edit",
    description: "Grants write access to address maps.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Address Maps Read": {
    id: "acc_address_maps_read",
    name: "Address Maps Read",
    description: "Grants read access to address maps.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudchamber Read": {
    id: "acc_cloudchamber_read",
    name: "Cloudchamber Read",
    description: "Grants read access to Cloudchamber.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudchamber Edit": {
    id: "acc_cloudchamber_write",
    name: "Cloudchamber Edit",
    description: "Grants write access to Cloudchamber.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare Calls Read": {
    id: "acc_calls_read",
    name: "Cloudflare Calls Read",
    description: "Grants read access to Cloudflare Calls.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare Calls Edit": {
    id: "acc_calls_write",
    name: "Cloudflare Calls Edit",
    description: "Grants write access to Cloudflare Calls.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare DEX Read": {
    id: "acc_dex_read",
    name: "Cloudflare DEX Read",
    description: "Grants read access to Cloudflare DEX.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare DEX Edit": {
    id: "acc_dex_write",
    name: "Cloudflare DEX Edit",
    description: "Grants write access to Cloudflare DEX.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudflare Images Read": {
    id: "acc_images_read",
    name: "Cloudflare Images Read",
    description: "Grants read access to Cloudflare Images.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudflare Images Edit": {
    id: "acc_images_write",
    name: "Cloudflare Images Edit",
    description: "Grants write access to Cloudflare Images.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloudforce One Read": {
    id: "acc_cloudforce_one_read",
    name: "Cloudforce One Read",
    description: "Grants read access to Cloudforce One.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Cloudforce One Edit": {
    id: "acc_cloudforce_one_write",
    name: "Cloudforce One Edit",
    description: "Grants write access to Cloudforce One.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Cloud Email Security Read": {
    id: "acc_email_security_read",
    name: "Cloud Email Security Read",
    description: "Grants read access to Cloud Email Security.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Email Security Edit": {
    id: "acc_email_security_write",
    name: "Email Security Edit",
    description: "Grants write access to Email Security.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Constellation Read": {
    id: "acc_constellation_read",
    name: "Constellation Read",
    description: "Grants read access to Constellation.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Constellation Edit": {
    id: "acc_constellation_write",
    name: "Constellation Edit",
    description: "Grants write access to Constellation.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "D1 Read": {
    id: "acc_d1_read",
    name: "D1 Read",
    description: "Grants read access to D1.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "D1 Edit": {
    id: "acc_d1_write",
    name: "D1 Edit",
    description: "Grants write access to D1.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "DDoS Botnet Feed Read": {
    id: "acc_ddos_botnet_read",
    name: "DDoS Botnet Feed Read",
    description: "Grants read access to DDoS Botnet Feed.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "DDoS Botnet Feed Edit": {
    id: "acc_ddos_botnet_write",
    name: "DDoS Botnet Feed Edit",
    description: "Grants write access to DDoS Botnet Feed.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "DDoS Protection Read": {
    id: "acc_ddos_protection_read",
    name: "DDoS Protection Read",
    description: "Grants read access to DDoS Protection.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "DDoS Protection Edit": {
    id: "acc_ddos_protection_write",
    name: "DDoS Protection Edit",
    description: "Grants write access to DDoS Protection.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "DNS Firewall Read": {
    id: "acc_dns_firewall_read",
    name: "DNS Firewall Read",
    description: "Grants read access to DNS Firewall.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "DNS Firewall Edit": {
    id: "acc_dns_firewall_write",
    name: "DNS Firewall Edit",
    description: "Grants write access to DNS Firewall.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Email Routing Addresses Read": {
    id: "acc_email_routing_addresses_read",
    name: "Email Routing Addresses Read",
    description: "Grants read access to Email Routing Addresses.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Email Routing Addresses Edit": {
    id: "acc_email_routing_addresses_write",
    name: "Email Routing Addresses Edit",
    description: "Grants write access to Email Routing Addresses.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Hyperdrive Read": {
    id: "acc_hyperdrive_read",
    name: "Hyperdrive Read",
    description: "Grants read access to Hyperdrive.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Hyperdrive Edit": {
    id: "acc_hyperdrive_write",
    name: "Hyperdrive Edit",
    description: "Grants write access to Hyperdrive.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Intel Read": {
    id: "acc_intel_read",
    name: "Intel Read",
    description: "Grants read access to Intel.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Intel Edit": {
    id: "acc_intel_write",
    name: "Intel Edit",
    description: "Grants write access to Intel.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Integration Edit": {
    id: "acc_integration_write",
    name: "Integration Edit",
    description: "Grants write access to Integration.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "IOT Read": {
    id: "acc_iot_read",
    name: "IOT Read",
    description: "Grants read access to IOT.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "IOT Edit": {
    id: "acc_iot_write",
    name: "IOT Edit",
    description: "Grants write access to IOT.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "IP Prefixes: Read": {
    id: "acc_ip_prefixes_read",
    name: "IP Prefixes: Read",
    description: "Grants read access to IP Prefixes.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "IP Prefixes: Edit": {
    id: "acc_ip_prefixes_write",
    name: "IP Prefixes: Edit",
    description: "Grants write access to IP Prefixes.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "IP Prefixes: BGP On Demand Read": {
    id: "acc_bgp_read",
    name: "IP Prefixes: BGP On Demand Read",
    description: "Grants read access to BGP On Demand.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "IP Prefixes: BGP On Demand Edit": {
    id: "acc_bgp_write",
    name: "IP Prefixes: BGP On Demand Edit",
    description: "Grants write access to BGP On Demand.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "L3/4 DDoS Managed Ruleset Read": {
    id: "acc_l34_ddos_read",
    name: "L3/4 DDoS Managed Ruleset Read",
    description: "Grants read access to L3/4 DDoS Managed Ruleset.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "L3/4 DDoS Managed Ruleset Edit": {
    id: "acc_l34_ddos_write",
    name: "L3/4 DDoS Managed Ruleset Edit",
    description: "Grants write access to L3/4 DDoS Managed Ruleset.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Load Balancing: Monitors and Pools Read": {
    id: "acc_lb_monitors_pools_read",
    name: "Load Balancing: Monitors and Pools Read",
    description: "Grants read access to Load Balancing Monitors and Pools.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Load Balancing: Monitors and Pools Edit": {
    id: "acc_lb_monitors_pools_write",
    name: "Load Balancing: Monitors and Pools Edit",
    description: "Grants write access to Load Balancing Monitors and Pools.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Magic Firewall Read": {
    id: "acc_magic_firewall_read",
    name: "Magic Firewall Read",
    description: "Grants read access to Magic Firewall.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Magic Firewall Edit": {
    id: "acc_magic_firewall_write",
    name: "Magic Firewall Edit",
    description: "Grants write access to Magic Firewall.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Magic Firewall Packet Captures - Read PCAPs API": {
    id: "acc_magic_firewall_pcaps_read",
    name: "Magic Firewall Packet Captures - Read PCAPs API",
    description: "Grants read access to Magic Firewall PCAPs.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Magic Firewall Packet Captures - Edit PCAPs API": {
    id: "acc_magic_firewall_pcaps_write",
    name: "Magic Firewall Packet Captures - Edit PCAPs API",
    description: "Grants write access to Magic Firewall PCAPs.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Magic Network Monitoring Read": {
    id: "acc_magic_network_monitoring_read",
    name: "Magic Network Monitoring Read",
    description: "Grants read access to Magic Network Monitoring.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Magic Network Monitoring Edit": {
    id: "acc_magic_network_monitoring_write",
    name: "Magic Network Monitoring Edit",
    description: "Grants write access to Magic Network Monitoring.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Magic Transit Read": {
    id: "acc_magic_transit_read",
    name: "Magic Transit Read",
    description: "Grants read access to Magic Transit.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Magic Transit Edit": {
    id: "acc_magic_transit_write",
    name: "Magic Transit Edit",
    description: "Grants write access to Magic Transit.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Notifications Read": {
    id: "acc_notifications_read",
    name: "Notifications Read",
    description: "Grants read access to Notifications.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Notifications Edit": {
    id: "acc_notifications_write",
    name: "Notifications Edit",
    description: "Grants write access to Notifications.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Page Shield Read": {
    id: "acc_page_shield_read",
    name: "Page Shield Read",
    description: "Grants read access to Page Shield.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Page Shield Edit": {
    id: "acc_page_shield_write",
    name: "Page Shield Edit",
    description: "Grants write access to Page Shield.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Pipelines Read": {
    id: "acc_pipelines_read",
    name: "Pipelines Read",
    description: "Grants read access to Pipelines.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Pipelines Edit": {
    id: "acc_pipelines_write",
    name: "Pipelines Edit",
    description: "Grants write access to Pipelines.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Pub/Sub Read": {
    id: "acc_pubsub_read",
    name: "Pub/Sub Read",
    description: "Grants read access to Pub/Sub.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Pub/Sub Edit": {
    id: "acc_pubsub_write",
    name: "Pub/Sub Edit",
    description: "Grants write access to Pub/Sub.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Queues Read": {
    id: "acc_queues_read",
    name: "Queues Read",
    description: "Grants read access to Queues.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Queues Edit": {
    id: "acc_queues_write",
    name: "Queues Edit",
    description: "Grants write access to Queues.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Rule Policies Read": {
    id: "acc_rule_policies_read",
    name: "Rule Policies Read",
    description: "Grants read access to Rule Policies.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Rule Policies Edit": {
    id: "acc_rule_policies_write",
    name: "Rule Policies Edit",
    description: "Grants write access to Rule Policies.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Stream Read": {
    id: "acc_stream_read",
    name: "Stream Read",
    description: "Grants read access to Stream.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Stream Edit": {
    id: "acc_stream_write",
    name: "Stream Edit",
    description: "Grants write access to Stream.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Transform Rules Read": {
    id: "acc_transform_rules_read",
    name: "Transform Rules Read",
    description: "Grants read access to Transform Rules.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Transform Rules Edit": {
    id: "acc_transform_rules_write",
    name: "Transform Rules Edit",
    description: "Grants write access to Transform Rules.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Turnstile Read": {
    id: "acc_turnstile_read",
    name: "Turnstile Read",
    description: "Grants read access to Turnstile.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Turnstile Edit": {
    id: "acc_turnstile_write",
    name: "Turnstile Edit",
    description: "Grants write access to Turnstile.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "URL Scanner Read": {
    id: "acc_url_scanner_read",
    name: "URL Scanner Read",
    description: "Grants read access to URL Scanner.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "URL Scanner Edit": {
    id: "acc_url_scanner_write",
    name: "URL Scanner Edit",
    description: "Grants write access to URL Scanner.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Vectorize Read": {
    id: "acc_vectorize_read",
    name: "Vectorize Read",
    description: "Grants read access to Vectorize.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Vectorize Edit": {
    id: "acc_vectorize_write",
    name: "Vectorize Edit",
    description: "Grants write access to Vectorize.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Workers AI Read": {
    id: "acc_workers_ai_read",
    name: "Workers AI Read",
    description: "Grants read access to Workers AI.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Workers AI Edit": {
    id: "acc_workers_ai_write",
    name: "Workers AI Edit",
    description: "Grants write access to Workers AI.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Workers CI Read": {
    id: "acc_workers_ci_read",
    name: "Workers CI Read",
    description: "Grants read access to Workers CI.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Workers CI Edit": {
    id: "acc_workers_ci_write",
    name: "Workers CI Edit",
    description: "Grants write access to Workers CI.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Workers Tail Read": {
    id: "acc_workers_tail_read",
    name: "Workers Tail Read",
    description: "Grants read access to Workers Tail.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Zero Trust Read": {
    id: "acc_zero_trust_read",
    name: "Zero Trust Read",
    description: "Grants read access to Zero Trust.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Zero Trust Report": {
    id: "acc_zero_trust_report",
    name: "Zero Trust Report",
    description: "Grants access to Zero Trust reports.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Zero Trust Edit": {
    id: "acc_zero_trust_write",
    name: "Zero Trust Edit",
    description: "Grants write access to Zero Trust.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Zero Trust PII Read": {
    id: "acc_zero_trust_pii_read",
    name: "Zero Trust PII Read",
    description: "Grants read access to Zero Trust PII.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Zero Trust PII Edit": {
    id: "acc_zero_trust_pii_write",
    name: "Zero Trust PII Edit",
    description: "Grants write access to Zero Trust PII.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Workers R2 Storage Read": {
    id: "acc_workers_r2_read",
    name: "Workers R2 Storage Read",
    description: "Grants read access to Workers R2 storage.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
  "Workers R2 Storage Edit": {
    id: "acc_workers_r2_write",
    name: "Workers R2 Storage Edit",
    description: "Grants write access to Workers R2 storage.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Workers Edit": {
    id: "acc_workers_write",
    name: "Workers Edit",
    description: "Grants write access to Workers.",
    scope: "com.cloudflare.api.account",
    type: "edit",
  },
  "Workers Read": {
    id: "acc_workers_read",
    name: "Workers Read",
    description: "Grants read access to Workers.",
    scope: "com.cloudflare.api.account",
    type: "read",
  },
};

// Zone Permissions
export type ZonePermissionName =
  | "Access: Apps and Policies Read"
  | "Access: Apps and Policies Edit"
  | "Access: Apps and Policies Revoke"
  | "Analytics Read"
  | "API Gateway Read"
  | "API Gateway Edit"
  | "Apps Edit"
  | "Bot Management Read"
  | "Bot Management Edit"
  | "Bot Management Feedback Read"
  | "Bot Management Feedback Edit"
  | "Cache Purge"
  | "Cache Rules Read"
  | "Cache Rules Edit"
  | "Cloud Connector Read"
  | "Cloud Connector Edit"
  | "Config Rules Read"
  | "Config Rules Edit"
  | "Custom Errors Read"
  | "Custom Errors Edit"
  | "Custom Error Rules Read"
  | "Custom Error Rules Edit"
  | "Custom Pages Read"
  | "Custom Pages Edit"
  | "DMARC Management Read"
  | "DMARC Management Edit"
  | "DNS Read"
  | "DNS Write"
  | "Email Routing Rules Read"
  | "Email Routing Rules Edit"
  | "Firewall Services Read"
  | "Firewall Services Edit"
  | "Health Checks Read"
  | "Health Checks Edit"
  | "HTTP DDoS Managed Ruleset Read"
  | "HTTP DDoS Managed Ruleset Edit"
  | "Load Balancers Read"
  | "Load Balancers Edit"
  | "Logs Read"
  | "Logs Edit"
  | "Managed Headers Read"
  | "Managed Headers Edit"
  | "Origin Rules Read"
  | "Origin Rules Edit"
  | "Page Rules Read"
  | "Page Rules Edit"
  | "Page Shield Read"
  | "Page Shield Edit"
  | "Response Compression Read"
  | "Response Compression Edit"
  | "Sanitize Read"
  | "Sanitize Edit"
  | "Single Redirect Read"
  | "Single Redirect Edit"
  | "SSL and Certificates Read"
  | "SSL and Certificates Edit"
  | "Transform Rules Read"
  | "Transform Rules Edit"
  | "Waiting Room Read"
  | "Waiting Room Edit"
  | "Web3 Hostnames Read"
  | "Web3 Hostnames Edit"
  | "Workers Routes Read"
  | "Workers Routes Edit"
  | "Zaraz Read"
  | "Zaraz Edit"
  | "Zone Read"
  | "Zone Edit"
  | "Zone Settings Read"
  | "Zone Settings Edit"
  | "Zone Versioning Read"
  | "Zone Versioning Edit"
  | "Zone WAF Read"
  | "Zone WAF Edit";

export const ZONE_PERMISSIONS: Record<ZonePermissionName, Permission> = {
  "Access: Apps and Policies Read": {
    id: "zone_access_apps_read",
    name: "Access: Apps and Policies Read",
    description: "Grants read access to Cloudflare Access zone resources.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Access: Apps and Policies Edit": {
    id: "zone_access_apps_write",
    name: "Access: Apps and Policies Edit",
    description: "Grants write access to Cloudflare Access zone resources.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Access: Apps and Policies Revoke": {
    id: "zone_access_apps_revoke",
    name: "Access: Apps and Policies Revoke",
    description: "Grants revoke access to Cloudflare Access zone resources.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Analytics Read": {
    id: "zone_analytics_read",
    name: "Analytics Read",
    description: "Grants read access to analytics.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "API Gateway Read": {
    id: "zone_api_gateway_read",
    name: "API Gateway Read",
    description: "Grants read access to API Gateway.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "API Gateway Edit": {
    id: "zone_api_gateway_write",
    name: "API Gateway Edit",
    description: "Grants write access to API Gateway.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Apps Edit": {
    id: "zone_apps_write",
    name: "Apps Edit",
    description: "Grants write access to Apps.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Bot Management Read": {
    id: "zone_bot_management_read",
    name: "Bot Management Read",
    description: "Grants read access to Bot Management.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Bot Management Edit": {
    id: "zone_bot_management_write",
    name: "Bot Management Edit",
    description: "Grants write access to Bot Management.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Bot Management Feedback Read": {
    id: "zone_bot_management_feedback_read",
    name: "Bot Management Feedback Read",
    description: "Grants read access to Bot Management Feedback.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Bot Management Feedback Edit": {
    id: "zone_bot_management_feedback_write",
    name: "Bot Management Feedback Edit",
    description: "Grants write access to Bot Management Feedback.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Cache Purge": {
    id: "zone_cache_purge",
    name: "Cache Purge",
    description: "Grants access to purge cache.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Cache Rules Read": {
    id: "zone_cache_rules_read",
    name: "Cache Rules Read",
    description: "Grants read access to Cache Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Cache Rules Edit": {
    id: "zone_cache_rules_write",
    name: "Cache Rules Edit",
    description: "Grants write access to Cache Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Cloud Connector Read": {
    id: "zone_cloud_connector_read",
    name: "Cloud Connector Read",
    description: "Grants read access to Cloud Connector.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Cloud Connector Edit": {
    id: "zone_cloud_connector_write",
    name: "Cloud Connector Edit",
    description: "Grants write access to Cloud Connector.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Config Rules Read": {
    id: "zone_config_rules_read",
    name: "Config Rules Read",
    description: "Grants read access to Config Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Config Rules Edit": {
    id: "zone_config_rules_write",
    name: "Config Rules Edit",
    description: "Grants write access to Config Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Custom Errors Read": {
    id: "zone_custom_errors_read",
    name: "Custom Errors Read",
    description: "Grants read access to Custom Errors.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Custom Errors Edit": {
    id: "zone_custom_errors_write",
    name: "Custom Errors Edit",
    description: "Grants write access to Custom Errors.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Custom Error Rules Read": {
    id: "zone_custom_error_rules_read",
    name: "Custom Error Rules Read",
    description: "Grants read access to Custom Error Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Custom Error Rules Edit": {
    id: "zone_custom_error_rules_write",
    name: "Custom Error Rules Edit",
    description: "Grants write access to Custom Error Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Custom Pages Read": {
    id: "zone_custom_pages_read",
    name: "Custom Pages Read",
    description: "Grants read access to Custom Pages.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Custom Pages Edit": {
    id: "zone_custom_pages_write",
    name: "Custom Pages Edit",
    description: "Grants write access to Custom Pages.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "DMARC Management Read": {
    id: "zone_dmarc_management_read",
    name: "DMARC Management Read",
    description: "Grants read access to DMARC Management.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "DMARC Management Edit": {
    id: "zone_dmarc_management_write",
    name: "DMARC Management Edit",
    description: "Grants write access to DMARC Management.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "DNS Read": {
    id: "zone_dns_read",
    name: "DNS Read",
    description: "Grants read access to DNS.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "DNS Write": {
    id: "zone_dns_write",
    name: "DNS Write",
    description: "Grants write access to DNS.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Email Routing Rules Read": {
    id: "zone_email_routing_rules_read",
    name: "Email Routing Rules Read",
    description: "Grants read access to Email Routing Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Email Routing Rules Edit": {
    id: "zone_email_routing_rules_write",
    name: "Email Routing Rules Edit",
    description: "Grants write access to Email Routing Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Firewall Services Read": {
    id: "zone_firewall_read",
    name: "Firewall Services Read",
    description: "Grants read access to Firewall Services.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Firewall Services Edit": {
    id: "zone_firewall_write",
    name: "Firewall Services Edit",
    description: "Grants write access to Firewall Services.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Health Checks Read": {
    id: "zone_health_checks_read",
    name: "Health Checks Read",
    description: "Grants read access to Health Checks.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Health Checks Edit": {
    id: "zone_health_checks_write",
    name: "Health Checks Edit",
    description: "Grants write access to Health Checks.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "HTTP DDoS Managed Ruleset Read": {
    id: "zone_http_ddos_read",
    name: "HTTP DDoS Managed Ruleset Read",
    description: "Grants read access to HTTP DDoS Managed Ruleset.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "HTTP DDoS Managed Ruleset Edit": {
    id: "zone_http_ddos_write",
    name: "HTTP DDoS Managed Ruleset Edit",
    description: "Grants write access to HTTP DDoS Managed Ruleset.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Load Balancers Read": {
    id: "zone_lb_read",
    name: "Load Balancers Read",
    description: "Grants read access to Load Balancers.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Load Balancers Edit": {
    id: "zone_lb_write",
    name: "Load Balancers Edit",
    description: "Grants write access to Load Balancers.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Logs Read": {
    id: "zone_logs_read",
    name: "Logs Read",
    description: "Grants read access to Logs.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Logs Edit": {
    id: "zone_logs_write",
    name: "Logs Edit",
    description: "Grants write access to Logs.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Managed Headers Read": {
    id: "zone_managed_headers_read",
    name: "Managed Headers Read",
    description: "Grants read access to Managed Headers.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Managed Headers Edit": {
    id: "zone_managed_headers_write",
    name: "Managed Headers Edit",
    description: "Grants write access to Managed Headers.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Origin Rules Read": {
    id: "zone_origin_rules_read",
    name: "Origin Rules Read",
    description: "Grants read access to Origin Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Origin Rules Edit": {
    id: "zone_origin_rules_write",
    name: "Origin Rules Edit",
    description: "Grants write access to Origin Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Page Rules Read": {
    id: "zone_page_rules_read",
    name: "Page Rules Read",
    description: "Grants read access to Page Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Page Rules Edit": {
    id: "zone_page_rules_write",
    name: "Page Rules Edit",
    description: "Grants write access to Page Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Page Shield Read": {
    id: "zone_page_shield_read",
    name: "Page Shield Read",
    description: "Grants read access to Page Shield.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Page Shield Edit": {
    id: "zone_page_shield_write",
    name: "Page Shield Edit",
    description: "Grants write access to Page Shield.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Response Compression Read": {
    id: "zone_response_compression_read",
    name: "Response Compression Read",
    description: "Grants read access to Response Compression.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Response Compression Edit": {
    id: "zone_response_compression_write",
    name: "Response Compression Edit",
    description: "Grants write access to Response Compression.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Sanitize Read": {
    id: "zone_sanitize_read",
    name: "Sanitize Read",
    description: "Grants read access to Sanitize.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Sanitize Edit": {
    id: "zone_sanitize_write",
    name: "Sanitize Edit",
    description: "Grants write access to Sanitize.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Single Redirect Read": {
    id: "zone_single_redirect_read",
    name: "Single Redirect Read",
    description: "Grants read access to Single Redirect.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Single Redirect Edit": {
    id: "zone_single_redirect_write",
    name: "Single Redirect Edit",
    description: "Grants write access to Single Redirect.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "SSL and Certificates Read": {
    id: "zone_ssl_read",
    name: "SSL and Certificates Read",
    description: "Grants read access to SSL and Certificates.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "SSL and Certificates Edit": {
    id: "zone_ssl_write",
    name: "SSL and Certificates Edit",
    description: "Grants write access to SSL and Certificates.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Transform Rules Read": {
    id: "zone_transform_rules_read",
    name: "Transform Rules Read",
    description: "Grants read access to Transform Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Transform Rules Edit": {
    id: "zone_transform_rules_write",
    name: "Transform Rules Edit",
    description: "Grants write access to Transform Rules.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Waiting Room Read": {
    id: "zone_waiting_room_read",
    name: "Waiting Room Read",
    description: "Grants read access to Waiting Room.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Waiting Room Edit": {
    id: "zone_waiting_room_write",
    name: "Waiting Room Edit",
    description: "Grants write access to Waiting Room.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Web3 Hostnames Read": {
    id: "zone_web3_hostnames_read",
    name: "Web3 Hostnames Read",
    description: "Grants read access to Web3 Hostnames.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Web3 Hostnames Edit": {
    id: "zone_web3_hostnames_write",
    name: "Web3 Hostnames Edit",
    description: "Grants write access to Web3 Hostnames.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Workers Routes Read": {
    id: "zone_workers_routes_read",
    name: "Workers Routes Read",
    description: "Grants read access to Workers Routes.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Workers Routes Edit": {
    id: "zone_workers_routes_write",
    name: "Workers Routes Edit",
    description: "Grants write access to Workers Routes.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Zaraz Read": {
    id: "zone_zaraz_read",
    name: "Zaraz Read",
    description: "Grants read access to Zaraz.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Zaraz Edit": {
    id: "zone_zaraz_write",
    name: "Zaraz Edit",
    description: "Grants write access to Zaraz.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Zone Read": {
    id: "zone_read",
    name: "Zone Read",
    description: "Grants read access to Zone.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Zone Edit": {
    id: "zone_write",
    name: "Zone Edit",
    description: "Grants write access to Zone.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Zone Settings Read": {
    id: "zone_settings_read",
    name: "Zone Settings Read",
    description: "Grants read access to Zone Settings.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Zone Settings Edit": {
    id: "zone_settings_write",
    name: "Zone Settings Edit",
    description: "Grants write access to Zone Settings.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Zone Versioning Read": {
    id: "zone_versioning_read",
    name: "Zone Versioning Read",
    description: "Grants read access to Zone Versioning.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Zone Versioning Edit": {
    id: "zone_versioning_write",
    name: "Zone Versioning Edit",
    description: "Grants write access to Zone Versioning.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
  "Zone WAF Read": {
    id: "zone_waf_read",
    name: "Zone WAF Read",
    description: "Grants read access to Zone WAF.",
    scope: "com.cloudflare.api.account.zone",
    type: "read",
  },
  "Zone WAF Edit": {
    id: "zone_waf_write",
    name: "Zone WAF Edit",
    description: "Grants write access to Zone WAF.",
    scope: "com.cloudflare.api.account.zone",
    type: "edit",
  },
};

// Helper type for all permission names
export type PermissionName =
  | UserPermissionName
  | AccountPermissionName
  | ZonePermissionName;

// Helper function to get all permissions
export const getAllPermissions = (): Record<PermissionName, Permission> => ({
  ...USER_PERMISSIONS,
  ...ACCOUNT_PERMISSIONS,
  ...ZONE_PERMISSIONS,
});

// Helper function to get permissions by scope
export const getPermissionsByScope = (scope: PermissionScope): Permission[] => {
  return Object.values(getAllPermissions()).filter(
    (permission) => permission.scope === scope
  );
};

// Helper function to find permission by ID
export const findPermissionById = (id: string): Permission | undefined => {
  return Object.values(getAllPermissions()).find(
    (permission) => permission.id === id
  );
};

// Helper function to check if a permission is read-only
export const isReadOnlyPermission = (permission: Permission): boolean => {
  return permission.name.toLowerCase().includes("read");
};

// Helper function to group permissions by their prefix (e.g., "Access:", "Workers", etc.)
export const groupPermissionsByPrefix = (): Record<string, Permission[]> => {
  const permissions = getAllPermissions();
  const grouped: Record<string, Permission[]> = {};

  Object.values(permissions).forEach((permission) => {
    const prefix = permission.name.split(":")[0].trim();
    if (!grouped[prefix]) {
      grouped[prefix] = [];
    }
    grouped[prefix].push(permission);
  });

  return grouped;
};

// Types for permission request/response payloads
export interface PermissionRequest {
  ids: string[];
  scope?: PermissionScope;
}

export interface PermissionResponse {
  success: boolean;
  permissions: Permission[];
  errors?: string[];
}
