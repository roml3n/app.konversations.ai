import { useState } from "react";
import { Phone, Bell } from "lucide-react";
import { WorkforceHeader } from "./workforce/WorkforceHeader";
import { LiveMonitoring } from "./workforce/LiveMonitoring";
import { WorkforceTabs } from "./workforce/WorkforceTabs";
import { Forecasting } from "./workforce/Forecasting";
import { Scheduling } from "./workforce/Scheduling";

export function Workforce() {
  const [activeTab, setActiveTab] = useState<
    "real-time" | "forecasting" | "scheduling" | "reports"
  >("real-time");

  return (
    <div className="flex h-full flex-col bg-white overflow-hidden">
      <WorkforceHeader />

      <div className="flex flex-col gap-6 px-[30px] py-6 h-full overflow-auto">
        {/* Tab Navigation */}
        <WorkforceTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Content */}
        {activeTab === "real-time" && <LiveMonitoring />}
        {activeTab === "forecasting" && <Forecasting />}
        {activeTab === "scheduling" && <Scheduling />}
        {activeTab === "reports" && (
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            <p>Reports - Coming Soon</p>
          </div>
        )}
      </div>
    </div>
  );
}