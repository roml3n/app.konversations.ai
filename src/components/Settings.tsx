import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { SettingsSidebar } from "./SettingsSidebar";
import { General } from "./settings/General";
import { Security } from "./settings/Security";
import { Notifications } from "./settings/Notifications";
import { Agents } from "./settings/Agents";
import { RolesAndPermissions } from "./settings/RolesAndPermissions";
import { RoleDetails } from "./settings/RoleDetails";
import { OrganizationProfile } from "./settings/OrganizationProfile";
import { DataRetention } from "./settings/DataRetention";
import { Billing } from "./settings/Billing";

export function Settings() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const view = searchParams.get("view") || "general";
  const roleId = searchParams.get("roleId");

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
                <div className="py-6 w-[60%] justify-center flex mx-auto">
                  <Notifications />
                </div>
              )}
              {view === "agents" && (
                <div className="py-6 w-[60%] justify-center flex mx-auto">
                  <Agents />
                </div>
              )}
              {view === "roles" && roleId && <RoleDetails />}
              {view === "roles" && !roleId && <RolesAndPermissions />}
              {view === "organization" && (
                <div className="w-full">
                  <OrganizationProfile />
                </div>
              )}
              {view === "data-retention" && (
                <div className="w-full">
                  <DataRetention />
                </div>
              )}
              {view === "billing" && (
                <div className="w-full h-full">
                  <Billing />
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