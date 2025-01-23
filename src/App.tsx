import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { CommandPalette } from "@/components/command-palette";
import { CommandProvider } from "@/hooks/use-command";
import { GotoForm } from "@/components/goto-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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
        <AppSidebar className="w-[280px] shrink-0" />
        <SidebarInset className="flex flex-1 flex-col">
          {/* Top Navigation Bar */}
          <header className="flex h-14 shrink-0 items-center justify-between border-b bg-white px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-2" />
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Workers & Pages</span>
                <span className="text-sm text-gray-500">/</span>
                <span className="text-sm text-gray-500">
                  cloudflare-console-demo
                </span>
              </div>
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
            {/* Secondary Navigation */}
            <header className="sticky top-0 z-10 flex h-12 shrink-0 items-center gap-2 border-b bg-white px-6">
              <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex items-center justify-between">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                          Building Your Application
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <div className="flex gap-6">
                    <a
                      href="#"
                      className="border-b-2 border-blue-500 px-1 py-3 text-sm font-medium text-blue-500"
                    >
                      Deployments
                    </a>
                    <a href="#" className="px-1 py-3 text-sm text-gray-600">
                      Metrics
                    </a>
                    <a href="#" className="px-1 py-3 text-sm text-gray-600">
                      Custom domains
                    </a>
                    <a href="#" className="px-1 py-3 text-sm text-gray-600">
                      Integrations
                    </a>
                    <a href="#" className="px-1 py-3 text-sm text-gray-600">
                      Settings
                    </a>
                  </div>
                </div>
              </div>
            </header>

            {/* Route Content */}
            <Routes>
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
