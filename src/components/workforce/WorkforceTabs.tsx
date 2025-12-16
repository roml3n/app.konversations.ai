import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface WorkforceTabsProps {
  activeTab: 'real-time' | 'forecasting' | 'scheduling' | 'reports';
}

const tabs = [
  { id: 'real-time' as const, label: 'Real-time' },
  { id: 'forecasting' as const, label: 'Forecasting' },
  { id: 'scheduling' as const, label: 'Scheduling' },
  { id: 'reports' as const, label: 'Reports' },
];

export function WorkforceTabs({ activeTab }: WorkforceTabsProps) {
  const navigate = useNavigate();

  const handleTabChange = (tab: 'real-time' | 'forecasting' | 'scheduling' | 'reports') => {
    navigate(`/workforce?tab=${tab}`);
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
              layoutId="activeWorkforceTab"
              className="absolute inset-x-0 -bottom-px h-[3px] rounded-t-full bg-primary"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}