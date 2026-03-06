import { useLocation } from "react-router-dom";
import { BillingTabs } from "./BillingTabs";
import { BillingOverview } from "./billing/BillingOverview";
import { BillingUsage } from "./billing/BillingUsage";
import { BillingHistory } from "./billing/BillingHistory";

export function Billing() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get("billingTab") || "overview";

  return (
    <div className="flex flex-col w-full h-full">
      {/* Tab Navigation */}
      <div className="px-[30px] pt-8">
        <BillingTabs />
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && <BillingOverview />}
      {activeTab === "usage" && <BillingUsage />}
      {activeTab === "billing-history" && <BillingHistory />}
    </div>
  );
}