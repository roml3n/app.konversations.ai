import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface TabNavigationProps {
  activeTab: 'executive' | 'channel' | 'agent';
}

const tabs = [
  { id: 'executive' as const, label: 'Executive Overview' },
  { id: 'channel' as const, label: 'Channel Performance' },
  { id: 'agent' as const, label: 'Agent Performance' },
];

export function TabNavigation({ activeTab }: TabNavigationProps) {
  const navigate = useNavigate();

  const handleTabChange = (tab: 'executive' | 'channel' | 'agent') => {
    navigate(`/insights?tab=${tab}`);
  };

  return (
    <div className="flex items-center gap-6 bg-card">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={`relative px-0 pb-3 pt-0 transition-colors ${
            activeTab === tab.id
              ? 'font-semibold text-primary'
              : 'font-normal text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className="relative z-10">{tab.label}</span>
          
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-x-0 -bottom-px h-[3px] rounded-t-full bg-primary"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}