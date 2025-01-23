import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { CommandPalette } from "@/components/command-palette";
import { CommandProvider } from "@/hooks/use-command";
import { GotoForm } from "@/components/goto-form";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Import page components
import { WebsitesPage } from "@/pages/websites";
import { DiscoverPage } from "@/pages/discover";
import { DomainsPage } from "@/pages/domains";
import { ManageDomainsPage } from "@/pages/domains/manage";
import { TransferDomainsPage } from "@/pages/domains/transfer";
import { RegisterDomainsPage } from "@/pages/domains/register";
import { AnalyticsPage } from "@/pages/analytics";
import { SecurityPage } from "@/pages/security";
import { TracePage } from "@/pages/trace";
import { WAFPage } from "@/pages/waf";
import { TurnstilePage } from "@/pages/turnstile";
import { IPAddressesPage } from "@/pages/ip-addresses";
import { ZeroTrustPage } from "@/pages/zero-trust";
import { EmailSecurityPage } from "@/pages/email-security";
import { EmailSecurityOverviewPage } from "@/pages/email-security/overview";
import { EmailSecurityRetroScanPage } from "@/pages/email-security/retro-scan";
import { ComputePage } from "@/pages/compute";
import { WorkersAndPagesPage } from "@/pages/compute/workers";
import { DurableObjectsPage } from "@/pages/compute/durable-objects";
import { WorkflowsPage } from "@/pages/compute/workflows";
import { BrowserRenderingPage } from "@/pages/compute/browser-rendering";
import { ComputePlansPage } from "@/pages/compute/plans";
import { StoragePage } from "@/pages/storage";
import { KVPage } from "@/pages/storage/kv";
import { D1Page } from "@/pages/storage/d1";
import { HyperdrivePage } from "@/pages/storage/hyperdrive";
import { QueuesPage } from "@/pages/storage/queues";
import { TokensPage } from "@/pages/account/tokens";
import { CreateTokenPage } from "@/pages/account/tokens/create";

// Move Dashboard content to a separate component
function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="w-full max-w-[1440px] mx-auto">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="aspect-video h-12 w-full rounded-lg bg-muted/50"
          />
        ))}
      </div>
    </div>
  );
}

// Create a layout component that will wrap all routes
function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar className="shrink-0" />
        <SidebarInset className="flex flex-1 flex-col">
          {/* Top Navigation Bar */}
          <header className="flex h-14 shrink-0 items-center justify-between border-b bg-white px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-2" />
              <Separator orientation="vertical" className="h-4" />
            </div>
            <div className="flex items-center gap-4">
              <GotoForm />
              <button className="rounded-md border px-3 py-1.5 text-sm">
                Add
              </button>
              <button className="text-sm">Support</button>
              <button className="text-sm">English</button>
              <button className="rounded-full bg-gray-100 p-2">
                {/* User icon placeholder */}
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-auto bg-gray-50">
            {/* Route Content */}
            <Routes>
              <Route path="/" element={<Navigate to="/websites" replace />} />

              {/* Web & Domains */}
              <Route path="/websites" element={<WebsitesPage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/domains" element={<DomainsPage />}>
                <Route index element={<Navigate to="manage" replace />} />
                <Route path="manage" element={<ManageDomainsPage />} />
                <Route path="transfer" element={<TransferDomainsPage />} />
                <Route path="register" element={<RegisterDomainsPage />} />
              </Route>

              {/* Analytics & Security */}
              <Route path="/analytics/*" element={<AnalyticsPage />} />
              <Route path="/security/*" element={<SecurityPage />} />
              <Route path="/trace" element={<TracePage />} />
              <Route path="/waf" element={<WAFPage />} />
              <Route path="/turnstile" element={<TurnstilePage />} />
              <Route path="/ip-addresses" element={<IPAddressesPage />} />
              <Route path="/zero-trust" element={<ZeroTrustPage />} />
              <Route path="/email-security" element={<EmailSecurityPage />}>
                <Route index element={<Navigate to="overview" replace />} />
                <Route
                  path="overview"
                  element={<EmailSecurityOverviewPage />}
                />
                <Route
                  path="retro-scan"
                  element={<EmailSecurityRetroScanPage />}
                />
              </Route>

              {/* Compute & Storage */}
              <Route path="/compute" element={<ComputePage />}>
                <Route index element={<Navigate to="workers" replace />} />
                <Route path="workers" element={<WorkersAndPagesPage />} />
                <Route
                  path="durable-objects"
                  element={<DurableObjectsPage />}
                />
                <Route path="workflows" element={<WorkflowsPage />} />
                <Route
                  path="browser-rendering"
                  element={<BrowserRenderingPage />}
                />
                <Route path="plans" element={<ComputePlansPage />} />
              </Route>
              <Route
                path="/platforms"
                element={<div>Workers for Platforms</div>}
              />

              {/* Storage */}
              <Route path="/storage" element={<StoragePage />}>
                <Route index element={<Navigate to="kv" replace />} />
                <Route path="kv" element={<KVPage />} />
                <Route path="d1" element={<D1Page />} />
                <Route path="hyperdrive" element={<HyperdrivePage />} />
                <Route path="queues" element={<QueuesPage />} />
              </Route>

              {/* R2 Storage */}
              <Route path="/r2">
                <Route index element={<Navigate to="overview" replace />} />
                <Route path="overview" element={<div>R2 Overview</div>} />
                <Route path="migration" element={<div>Data Migration</div>} />
              </Route>

              {/* AI */}
              <Route path="/ai">
                <Route index element={<Navigate to="workers" replace />} />
                <Route path="workers" element={<div>Workers AI</div>} />
                <Route path="vectorize" element={<div>Vectorize</div>} />
                <Route path="gateway" element={<div>AI Gateway</div>} />
              </Route>

              {/* Media Services */}
              <Route path="/stream">
                <Route index element={<Navigate to="overview" replace />} />
                <Route path="overview" element={<div>Stream Overview</div>} />
                <Route path="plans" element={<div>Stream Plans</div>} />
              </Route>
              <Route path="/images">
                <Route index element={<Navigate to="overview" replace />} />
                <Route path="overview" element={<div>Images Overview</div>} />
                <Route
                  path="transformations"
                  element={<div>Image Transformations</div>}
                />
                <Route path="plans" element={<div>Image Plans</div>} />
              </Route>
              <Route path="/calls" element={<div>Calls</div>} />

              {/* Account Management */}
              <Route path="/account">
                <Route index element={<Navigate to="members" replace />} />
                <Route path="members" element={<div>Members</div>} />
                <Route path="tokens">
                  <Route index element={<TokensPage />} />
                  <Route path="create" element={<CreateTokenPage />} />
                </Route>
                <Route path="audit" element={<div>Audit Log</div>} />
                <Route path="billing" element={<div>Billing</div>} />
                <Route path="config" element={<div>Configurations</div>} />
              </Route>
              <Route path="/notifications" element={<div>Notifications</div>} />
              <Route path="/redirects" element={<div>Bulk Redirects</div>} />

              <Route path="/dashboard" element={<DashboardContent />} />
            </Routes>
          </div>

          {/* Footer */}
          <footer className="flex h-12 shrink-0 items-center justify-between border-t bg-white px-6 text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <a href="#">Support</a>
              <a href="#">System Status</a>
              <a href="#">Careers</a>
              <a href="#">Terms of Use</a>
              <a href="#">Report Security Issues</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="flex items-center gap-4">
              <span>© 2025 Cloudflare, Inc.</span>
            </div>
          </footer>
        </SidebarInset>
      </div>
      <CommandPalette />
    </SidebarProvider>
  );
}

function App() {
  return (
    <Router>
      <CommandProvider>
        <AppLayout />
      </CommandProvider>
    </Router>
  );
}

export default App;
