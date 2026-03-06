import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { id: 'overview' as const, label: 'Overview' },
  { id: 'usage' as const, label: 'Usage' },
  { id: 'billing-history' as const, label: 'Billing History' },
];

export function BillingTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get('billingTab') || 'overview';

  const handleTabChange = (tab: string) => {
    searchParams.set('billingTab', tab);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex items-center gap-0">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={`relative px-4 pb-[14px] pt-0 transition-colors ${
            activeTab === tab.id
              ? 'text-primary'
              : 'text-[#7a8890] hover:text-foreground'
          }`}
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          <span className="relative z-10">{tab.label}</span>
          
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeBillingTab"
              className="absolute inset-x-0 -bottom-px h-[3px] rounded-t-full bg-primary"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
