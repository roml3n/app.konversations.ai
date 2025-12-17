import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { SettingsSidebar } from "./SettingsSidebar";
import { General } from "./settings/General";
import { Security } from "./settings/Security";

export function Settings() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const view = searchParams.get("view") || "general";

  return (
    <div className="flex h-full w-full bg-white overflow-hidden rounded-lg border border-[#e3e3e4]">
      <div className="flex w-full h-full">
        {/* Fixed Sidebar */}
        <SettingsSidebar activeView={view} />

        {/* Scrollable Content Area */}
        <div className="flex flex-col h-full w-full flex-1 overflow-hidden">
          {/* Fixed Header */}
          <div className="shrink-0">
            <Header title="Settings" />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto flex justify-center">
            <div className="w-full max-w-[980px] pb-16">
              {view === "general" && (
                <div className="py-6 w-[60%] justify-center flex mx-auto">
                  <General />
                </div>
              )}
              {view === "security" && (
                <div className="py-6 w-[60%] justify-center flex mx-auto">
                  <Security />
                </div>
              )}
              {view === "notifications" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    Notifications - Coming Soon
                  </p>
                </div>
              )}
              {view === "agents" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    Agents - Coming Soon
                  </p>
                </div>
              )}
              {view === "roles" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    Roles and Permissions - Coming Soon
                  </p>
                </div>
              )}
              {view === "organization" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    Organization Profile - Coming Soon
                  </p>
                </div>
              )}
              {view === "data-retention" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    Data Retention - Coming Soon
                  </p>
                </div>
              )}
              {view === "billing" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    Billing and Usage - Coming Soon
                  </p>
                </div>
              )}
              {view === "system-status" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    System Status - Coming Soon
                  </p>
                </div>
              )}
              {view === "integrations" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    Integrations - Coming Soon
                  </p>
                </div>
              )}
              {view === "webhooks" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    Webhooks - Coming Soon
                  </p>
                </div>
              )}
              {view === "api-keys" && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-[#7a8890]">
                    API Keys - Coming Soon
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}