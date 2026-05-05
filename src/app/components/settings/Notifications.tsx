import { useState } from "react";
import { Toggle } from "../ui/Toggle";

interface NotificationSetting {
  id: string;
  label: string;
  inApp: boolean;
  push: boolean;
  email: boolean;
}

export function Notifications() {
  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    {
      id: "audio-upload",
      label: "When a team member uploads audio",
      inApp: true,
      push: true,
      email: true,
    },
    {
      id: "audio-processing",
      label: "When audio processing is completed",
      inApp: true,
      push: false,
      email: true,
    },
    {
      id: "team-member",
      label: "When a new member joins the team",
      inApp: true,
      push: false,
      email: false,
    },
    {
      id: "conversation-assigned",
      label: "When a conversation is assigned to you",
      inApp: false,
      push: true,
      email: false,
    },
    {
      id: "sentiment-change",
      label: "When conversation sentiment changes to negative",
      inApp: true,
      push: true,
      email: false,
    },
    {
      id: "weekly-summary",
      label: "Weekly summary report available",
      inApp: false,
      push: false,
      email: true,
    },
    {
      id: "sla-threshold",
      label: "When SLA threshold is exceeded",
      inApp: false,
      push: false,
      email: true,
    },
    {
      id: "conversation-tagged",
      label: "When a conversation is tagged with a label",
      inApp: false,
      push: false,
      email: true,
    },
  ]);

  const handleToggle = (
    id: string,
    type: "inApp" | "push" | "email",
    value: boolean
  ) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, [type]: value }
          : notification
      )
    );
  };

  return (
    <div className="flex flex-col gap-[43px] items-end w-full max-w-[1200px] py-4">
      <p
        className="font-['Instrument_Sans'] text-[#5e6060] text-[16px] tracking-[0.08px] w-full"
        style={{
          fontVariationSettings: "'wdth' 100",
          fontWeight: 600,
        }}
      >
        My notifications
      </p>

      <div className="flex flex-col gap-[2px] items-end w-full">
        <div className="flex flex-col gap-[12px] w-full">
          {/* Header */}
          <div className="flex gap-[16px] items-center w-full">
            <p
              className="flex-1 font-['Instrument_Sans'] text-[#404141] text-[14px] tracking-[0.07px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 600,
              }}
            >
              Event
            </p>
            <div className="flex gap-[12px] items-center w-[213px]">
              <p
                className="flex-1 font-['Instrument_Sans'] text-[#404141] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                In-app
              </p>
              <p
                className="flex-1 font-['Instrument_Sans'] text-[#404141] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                Push
              </p>
              <p
                className="font-['Instrument_Sans'] text-[#404141] text-[14px] tracking-[0.07px] text-nowrap"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                Email
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-0 w-full relative">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 593 1"
              >
                <line
                  stroke="#E3E8F0"
                  x2="593"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Notification Settings List */}
          <div className="flex flex-col w-full">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between px-0 py-[16px] w-full"
              >
                <p
                  className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px] w-[303px]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    fontWeight: 400,
                  }}
                >
                  {notification.label}
                </p>
                <div className="flex items-center justify-between w-[213px]">
                  <Toggle
                    checked={notification.inApp}
                    onChange={(value) =>
                      handleToggle(notification.id, "inApp", value)
                    }
                  />
                  <Toggle
                    checked={notification.push}
                    onChange={(value) =>
                      handleToggle(notification.id, "push", value)
                    }
                  />
                  <Toggle
                    checked={notification.email}
                    onChange={(value) =>
                      handleToggle(notification.id, "email", value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Changes Button */}
        <button className="bg-[#0320f5] flex items-center justify-center px-4 py-[9px] rounded-[4px] relative shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] hover:bg-[#0218d0] transition-colors">
          <span
            className="font-['Instrument_Sans'] text-[#fefefe] text-[14px] tracking-[0.07px]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 600,
            }}
          >
            Save changes
          </span>
        </button>
      </div>
    </div>
  );
}
