import React, { useState } from "react";
import {
  InboxIcon,
  MessagesIcon,
  MentionsIcon,
  AssignedIcon,
  CaretDownIcon,
  PlusIcon,
  EmailIcon,
  WebChatIcon,
  CallIcon,
  WhatsAppIcon,
  InstagramIcon,
  MessengerIcon,
  JiraIcon,
  TagIcon,
} from "./icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { cn } from "../../lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  isActive?: boolean;
  onClick?: () => void;
}

function SidebarItem({
  icon,
  label,
  count,
  isActive,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between px-2 py-1 rounded-lg transition-colors group",
        isActive ? "bg-[#e3e3e4]" : "hover:bg-[#e3e3e4]/50",
      )}
    >
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center text-[#7A8890]">
          {icon}
        </div>
        <span
          className={cn(
            "text-[14px] font-['Instrument_Sans'] leading-tight",
            isActive
              ? "font-semibold text-[#4f595e]"
              : "font-normal text-[#4f595e]",
          )}
        >
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className="text-[14px] font-['Instrument_Sans'] font-semibold text-[#4f595e]">
          {count}
        </span>
      )}
    </button>
  );
}

interface ChannelItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function ChannelItem({
  icon,
  label,
  isActive,
  onClick,
}: ChannelItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors",
        isActive ? "bg-[#e3e3e4]" : "hover:bg-[#e3e3e4]/50",
      )}
    >
      <div className="w-4 h-4 text-[#7A8890] flex items-center justify-center">
        {icon}
      </div>
      <span
        className={cn(
          "text-[14px] font-['Instrument_Sans'] leading-tight",
          isActive
            ? "font-semibold text-[#4f595e]"
            : "font-normal text-[#4f595e]",
        )}
      >
        {label}
      </span>
    </button>
  );
}

interface LabelItemProps {
  label: string;
  color: string;
  bgColor: string;
}

function LabelItem({ label, color, bgColor }: LabelItemProps) {
  return (
    <button className="w-full flex items-center justify-between px-2 py-1 rounded-lg hover:bg-[#e3e3e4]/50 transition-colors group">
      <div className="flex items-center gap-2">
        <div
          className="px-1 py-0.5 rounded-[6px] flex items-center gap-1"
          style={{ backgroundColor: bgColor }}
        >
          <div
            className="w-3 h-3 flex items-center justify-center"
            style={{ color }}
          >
            <TagIcon />
          </div>
          <span className="text-[12px] font-['Instrument_Sans'] font-normal text-[#4f595e]">
            {label}
          </span>
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M7 2.8C7.3866 2.8 7.7 3.1134 7.7 3.5C7.7 3.8866 7.3866 4.2 7 4.2C6.6134 4.2 6.3 3.8866 6.3 3.5C6.3 3.1134 6.6134 2.8 7 2.8ZM7 6.3C7.3866 6.3 7.7 6.6134 7.7 7C7.7 7.3866 7.3866 7.7 7 7.7C6.6134 7.7 6.3 7.3866 6.3 7C6.3 6.6134 6.6134 6.3 7 6.3ZM7 9.8C7.3866 9.8 7.7 10.1134 7.7 10.5C7.7 10.8866 7.3866 11.2 7 11.2C6.6134 11.2 6.3 10.8866 6.3 10.5C6.3 10.1134 6.6134 9.8 7 9.8Z"
            fill="#7A8890"
          />
        </svg>
      </div>
    </button>
  );
}

interface InboxSidebarProps {
  activeView?: string;
  onViewSelect?: (view: string) => void;
}

export function InboxSidebar({
  activeView = "messages",
  onViewSelect,
}: InboxSidebarProps) {
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);
  const [isLabelsOpen, setIsLabelsOpen] = useState(true);

  return (
    <div className="w-[200px] shrink-0 h-full bg-[#f4f7f8] border-r border-[#e8edf0] flex flex-col py-[24px] px-[8px] overflow-y-auto">
      {/* Title */}
      <div className="flex items-center gap-2 mb-8 px-3">
        <h1 className="text-[20px] font-['Instrument_Sans'] font-semibold text-[#161a1c]">
          Inbox
        </h1>
      </div>

      {/* Main Links */}
      <div className="flex flex-col gap-1 mb-8">
        <SidebarItem
          icon={<InboxIcon />}
          label="Messages"
          count={23}
          isActive={activeView === "messages"}
          onClick={() => onViewSelect?.("messages")}
        />
        <SidebarItem
          icon={<MentionsIcon />}
          label="Mentions"
          count={4}
          isActive={activeView === "mentions"}
          onClick={() => onViewSelect?.("mentions")}
        />
        <SidebarItem
          icon={<AssignedIcon />}
          label="Assigned to me"
          count={2}
          isActive={activeView === "assigned"}
          onClick={() => onViewSelect?.("assigned")}
        />
      </div>

      {/* Channels */}
      <div className="mb-6">
        <Collapsible
          open={isChannelsOpen}
          onOpenChange={setIsChannelsOpen}
        >
          <div
            className="flex items-center justify-between mb-2 px-3 group cursor-pointer"
            onClick={() => setIsChannelsOpen(!isChannelsOpen)}
          >
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-3.5 h-3.5 text-[#7A8890] transition-transform",
                  isChannelsOpen ? "" : "-rotate-90",
                )}
              >
                <CaretDownIcon />
              </div>
              <span className="text-[14px] font-['Instrument_Sans'] font-normal text-[#161a1c] opacity-60">
                Channels
              </span>
            </div>
            <button className="text-[#7A8890] opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-3.5 h-3.5">
                <PlusIcon />
              </div>
            </button>
          </div>

          <CollapsibleContent className="flex flex-col gap-1 pl-4">
            <ChannelItem
              icon={<EmailIcon />}
              label="Email"
              isActive={activeView === "email"}
              onClick={() => onViewSelect?.("email")}
            />
            <ChannelItem
              icon={<WebChatIcon />}
              label="Web Chat"
              isActive={activeView === "webchat"}
              onClick={() => onViewSelect?.("webchat")}
            />
            <ChannelItem
              icon={<CallIcon />}
              label="Calls"
              isActive={activeView === "call"}
              onClick={() => onViewSelect?.("call")}
            />
            <ChannelItem
              icon={<WhatsAppIcon />}
              label="WhatsApp"
              isActive={activeView === "whatsapp"}
              onClick={() => onViewSelect?.("whatsapp")}
            />
            <ChannelItem
              icon={<InstagramIcon />}
              label="Instagram"
              isActive={activeView === "instagram"}
              onClick={() => onViewSelect?.("instagram")}
            />
            <ChannelItem
              icon={<MessengerIcon />}
              label="Messenger"
              isActive={activeView === "messenger"}
              onClick={() => onViewSelect?.("messenger")}
            />
            <ChannelItem
              icon={<JiraIcon />}
              label="Jira"
              isActive={activeView === "jira"}
              onClick={() => onViewSelect?.("jira")}
            />
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Labels */}
      <div>
        <Collapsible
          open={isLabelsOpen}
          onOpenChange={setIsLabelsOpen}
        >
          <div
            className="flex items-center justify-between mb-2 px-3 group cursor-pointer"
            onClick={() => setIsLabelsOpen(!isLabelsOpen)}
          >
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-3.5 h-3.5 text-[#7A8890] transition-transform",
                  isLabelsOpen ? "" : "-rotate-90",
                )}
              >
                <CaretDownIcon />
              </div>
              <span className="text-[14px] font-['Instrument_Sans'] font-normal text-[#161a1c] opacity-60">
                Labels
              </span>
            </div>
            <button className="text-[#7A8890] opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-3.5 h-3.5">
                <PlusIcon />
              </div>
            </button>
          </div>

          <CollapsibleContent className="flex flex-col gap-1 pl-4">
            <LabelItem
              label="account"
              color="#D08700"
              bgColor="rgba(202,172,65,0.2)"
            />
            <LabelItem
              label="auth"
              color="#5258FE"
              bgColor="rgba(90,90,205,0.2)"
            />
            <LabelItem
              label="billing"
              color="#E53E3E"
              bgColor="rgba(229,62,62,0.2)"
            />
            <LabelItem
              label="settings"
              color="#01B386"
              bgColor="rgba(72,187,121,0.2)"
            />
            <LabelItem
              label="notifications"
              color="#FF6900"
              bgColor="rgba(222,107,32,0.2)"
            />
            <LabelItem
              label="preferences"
              color="#CD5AB6"
              bgColor="rgba(205,90,182,0.2)"
            />
            <LabelItem
              label="support"
              color="#48C3E2"
              bgColor="rgba(72,195,226,0.2)"
            />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}