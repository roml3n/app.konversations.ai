import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { TabNavigation } from './components/TabNavigation';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { ChannelPerformance } from './components/ChannelPerformance';
import { FilterProvider } from './contexts/FilterContext';
import { Inbox } from './components/Inbox';

export default function App() {
  const [activeModule, setActiveModule] = useState('insights');
  const [activeTab, setActiveTab] = useState<'executive' | 'channel' | 'agent'>('executive');

  return (
    <FilterProvider>
      <div className="flex h-screen w-screen overflow-hidden bg-[#010a78]">
        <Sidebar activeItem={activeModule} onItemClick={setActiveModule} />
        
        {activeModule === 'insights' ? (
          <div className="flex flex-1 flex-col overflow-hidden m-2 rounded-lg p-0">
            <Header />
            <SubHeader />
            
            <div className="flex flex-1 flex-col gap-6 overflow-auto bg-[rgb(255,255,255)] px-6 py-6">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
              
              <div className="animate-fadeIn pb-10">
                {activeTab === 'executive' && <ExecutiveOverview />}
                {activeTab === 'channel' && <ChannelPerformance />}
                {activeTab === 'agent' && (
                  <div className="flex items-center justify-center py-20 text-muted-foreground">
                    <p>Agent Performance - Coming Soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : activeModule === 'inbox' ? (
          <div className="flex flex-1 flex-col overflow-hidden m-2 rounded-lg p-0 bg-white">
            <Inbox />
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center m-2 rounded-lg bg-white">
            <p className="text-muted-foreground">Module Coming Soon</p>
          </div>
        )}
      </div>
    </FilterProvider>
  );
}
