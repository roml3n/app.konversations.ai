import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Bell } from "lucide-react";
import { WorkforceHeader } from "./workforce/WorkforceHeader";
import { LiveMonitoring } from "./workforce/LiveMonitoring";
import { WorkforceTabs } from "./workforce/WorkforceTabs";
import { Forecasting } from "./workforce/Forecasting";
import { Scheduling } from "./workforce/Scheduling";
import { Reports } from "./workforce/Reports";

export function Workforce() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get('tab') || 'real-time';
  const activeTab = ['real-time', 'forecasting', 'scheduling', 'reports'].includes(tab) 
    ? tab as "real-time" | "forecasting" | "scheduling" | "reports" 
    : "real-time";

  return (
    <div className="flex h-full flex-col bg-white overflow-hidden">
      <WorkforceHeader />

      <div className="flex flex-col gap-6 px-[30px] py-6 h-full overflow-auto">
        {/* Tab Navigation */}
        <WorkforceTabs
          activeTab={activeTab}
        />

        {/* Content */}
        {activeTab === "real-time" && <LiveMonitoring />}
        {activeTab === "forecasting" && <Forecasting />}
        {activeTab === "scheduling" && <Scheduling />}
        {activeTab === "reports" && <Reports />}
      </div>
    </div>
  );
}