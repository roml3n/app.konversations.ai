import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";
import { TabNavigation } from "./components/TabNavigation";
import { ExecutiveOverview } from "./components/ExecutiveOverview";
import { ChannelPerformance } from "./components/ChannelPerformance";
import { FilterProvider } from "./contexts/FilterContext";
import { Inbox } from "./components/Inbox";
import { Workforce } from "./components/Workforce";

function InsightsModule() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab") || "executive";
  const activeTab = ["executive", "channel", "agent"].includes(
    tab,
  )
    ? (tab as "executive" | "channel" | "agent")
    : "executive";

  return (
    <div className="flex flex-1 flex-col overflow-hidden m-2 rounded-lg p-0">
      <Header title="Insights" />
      <SubHeader />

      <div className="flex flex-1 flex-col gap-6 overflow-auto bg-[rgb(255,255,255)] px-6 py-6">
        <TabNavigation activeTab={activeTab} />

        <div className="animate-fadeIn pb-10">
          {activeTab === "executive" && <ExecutiveOverview />}
          {activeTab === "channel" && <ChannelPerformance />}
          {activeTab === "agent" && (
            <div className="flex items-center justify-center py-20 text-muted-foreground">
              <p>Agent Performance - Coming Soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const activeModule =
    location.pathname.split("/")[1] || "insights";

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#010a78]">
      <Sidebar activeItem={activeModule} />

      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/insights?tab=executive" replace />
          }
        />
        <Route path="/insights" element={<InsightsModule />} />
        <Route
          path="/inbox"
          element={
            <div className="flex flex-1 flex-col overflow-hidden m-2 rounded-lg p-0 bg-white">
              <Inbox />
            </div>
          }
        />
        <Route
          path="/workforce"
          element={
            <div className="flex flex-1 flex-col overflow-hidden m-2 rounded-lg p-0 bg-white">
              <Workforce />
            </div>
          }
        />
        <Route
          path="/conversations"
          element={
            <div className="flex flex-1 items-center justify-center m-2 rounded-lg bg-white">
              <p className="text-muted-foreground">
                Conversations Module - Coming Soon
              </p>
            </div>
          }
        />
        <Route
          path="/learning"
          element={
            <div className="flex flex-1 items-center justify-center m-2 rounded-lg bg-white">
              <p className="text-muted-foreground">
                Learning Module - Coming Soon
              </p>
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="flex flex-1 items-center justify-center m-2 rounded-lg bg-white">
              <p className="text-muted-foreground">
                Settings Module - Coming Soon
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <AppContent />
      </FilterProvider>
    </BrowserRouter>
  );
}