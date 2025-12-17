import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShieldAlt,
  faBell,
  faUsers,
  faIdCard,
  faBuilding,
  faFileShield,
  faCoins,
  faFlagCheckered,
  faPlug,
  faLink,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  id: string;
  label: string;
  icon: any;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "Account Settings",
    items: [
      { id: "general", label: "General", icon: faUser },
      { id: "security", label: "Security", icon: faShieldAlt },
      {
        id: "notifications",
        label: "Notifications",
        icon: faBell,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      { id: "agents", label: "Agents", icon: faUsers },
      {
        id: "roles",
        label: "Roles and Permissions",
        icon: faIdCard,
      },
    ],
  },
  {
    title: "Admin",
    items: [
      {
        id: "organization",
        label: "Organization Profile",
        icon: faBuilding,
      },
      {
        id: "data-retention",
        label: "Data Retention",
        icon: faFileShield,
      },
      {
        id: "billing",
        label: "Billing and Usage",
        icon: faCoins,
      },
      {
        id: "system-status",
        label: "System Status",
        icon: faFlagCheckered,
      },
    ],
  },
  {
    title: "Extensions",
    items: [
      {
        id: "integrations",
        label: "Integrations",
        icon: faPlug,
      },
      { id: "webhooks", label: "Webhooks", icon: faLink },
      { id: "api-keys", label: "API Keys", icon: faKey },
    ],
  },
];

interface SettingsSidebarProps {
  activeView: string;
}

export function SettingsSidebar({
  activeView,
}: SettingsSidebarProps) {
  const navigate = useNavigate();

  const handleMenuClick = (id: string) => {
    navigate(`/settings?view=${id}`);
  };

  return (
    <div className="bg-[#f4f7f8] flex flex-col gap-6 h-screen px-[8px] py-[24px] relative shrink-0 w-fit border-r border-[#edf1f4]">
      {/* Header */}
      <div className="flex items-center justify-start pl-3 relative shrink-0">
        <p
          className="font-['Instrument_Sans'] relative shrink-0 text-[#161a1c] text-[16px] text-nowrap tracking-[0.08px]"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: 600,
          }}
        >
          Settings
        </p>
      </div>

      {/* Menu Sections */}
      <div className="flex flex-col gap-6 overflow-y-auto">
        {menuSections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col gap-2"
          >
            {/* Section Title */}
            <div className="flex items-center justify-start pl-3 pr-0 py-0 relative shrink-0">
              <p
                className="font-['Instrument_Sans'] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                {section.title}
              </p>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-2">
              {section.items.map((item) => {
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={`flex items-center justify-between p-2 relative rounded-lg shrink-0 w-full transition-colors ${
                      isActive
                        ? "bg-[#e3e3e4]"
                        : "bg-[#f4f7f8] hover:bg-[#ebeef0]"
                    }`}
                  >
                    <div className="flex gap-1 items-center min-h-px min-w-px relative shrink-0 flex-1">
                      <div className="flex flex-col items-start p-1 relative shrink-0">
                        <FontAwesomeIcon
                          icon={item.icon}
                          className={`w-[14px] h-[14px] ${
                            isActive
                              ? "text-[#01B386]"
                              : "text-[#01B386]"
                          }`}
                        />
                      </div>
                      <p
                        className={`font-['Instrument_Sans'] relative shrink-0 text-[14px] text-nowrap tracking-[0.07px] ${
                          isActive
                            ? "text-[#202121]"
                            : "text-[#7a8890]"
                        }`}
                        style={{
                          fontVariationSettings: "'wdth' 100",
                          fontWeight: 400,
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}