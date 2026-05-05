import React from 'react';
import { 
  CaretDownIcon, 
  InstagramIcon, 
  WhatsAppIcon, 
  MessengerIcon, 
  CallIcon,
  EmailIcon,
  WebChatIcon,
  JiraIcon
} from './icons';
import { cn } from '../../lib/utils';
import { Conversation, conversations, ChannelType } from './data';

function ChannelIcon({ type }: { type: ChannelType }) {
  switch (type) {
    case 'instagram': return <InstagramIcon className="w-4 h-4 text-[#364153]" />;
    case 'whatsapp': return <WhatsAppIcon className="w-3 h-3 text-[#364153]" />;
    case 'messenger': return <MessengerIcon className="w-4 h-4 text-[#364153]" />;
    case 'call': return <CallIcon className="w-4 h-4 text-[#364153]" />;
    case 'email': return <EmailIcon className="w-4 h-4 text-[#364153]" />;
    case 'webchat': return <WebChatIcon className="w-4 h-4 text-[#364153]" />;
    case 'jira': return <JiraIcon className="w-4 h-4 text-[#364153]" />;
    default: return null;
  }
}

// Helper to render preview text with highlighted mentions
function renderPreview(text: string) {
  // Simple regex to find words starting with @
  // We split the text and check each part
  const parts = text.split(/(@\w+)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('@')) {
      return (
        <span key={index} className="text-[#0055FF] font-medium">
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

interface ConversationListProps {
  currentView?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export function ConversationList({ currentView = 'messages', selectedId, onSelect }: ConversationListProps) {
  // Filter logic
  const filteredConversations = conversations.filter(c => {
    if (currentView === 'messages') return true; // Show all
    if (currentView === 'mentions') return c.hasMention;
    if (currentView === 'assigned') return c.isAssigned;
    
    // Assume it's a channel filter
    return c.channel === currentView;
  });

  return (
    <div className="w-[240px] h-full bg-white border-r border-[#e3e3e4] flex flex-col min-w-[240px]">
      {/* Header */}
      <div className="h-[52px] border-b border-[#e3e3e4] flex items-center justify-between px-4">
        <button className="flex items-center gap-1 text-[#5e6060] font-['Instrument_Sans'] font-semibold text-[14px]">
          Open
          <div className="rotate-90 text-[#7A7D7D]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
        
        <button className="flex items-center gap-1 px-2 py-1 rounded-full border border-[#d1d5dc] bg-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]">
          <div className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.4 9.1V4.2C1.4 3.04062 2.34063 2.1 3.5 2.1H10.5C11.6594 2.1 12.6 3.04062 12.6 4.2V9.1C12.6 10.2594 11.6594 11.2 10.5 11.2H7.875C7.76125 11.2 7.65188 11.2372 7.56 11.305L5.04 13.195C4.94813 13.2628 4.83875 13.3 4.725 13.3C4.43406 13.3 4.2 13.0659 4.2 12.775V11.2H3.5C2.34063 11.2 1.4 10.2594 1.4 9.1Z" fill="#99A1AF"/>
            </svg>
            <span className="text-[12px] font-['Instrument_Sans'] font-semibold text-[#4a5565]">Default</span>
          </div>
          <div className="w-3 h-3 text-[#6A7282]">
            <CaretDownIcon />
          </div>
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conv) => (
            <div 
              key={conv.id}
              onClick={() => onSelect && onSelect(conv.id)}
              className={cn(
                "p-2 rounded-lg flex gap-2 cursor-pointer transition-colors",
                // Use selectedId to determine active state, fallback to conv.isActive for backward compat if needed
                (selectedId ? selectedId === conv.id : conv.id === '2') 
                  ? "bg-white shadow-sm border border-[#e3e3e4]" 
                  : "bg-white hover:bg-[#f2f3f3]"
              )}
            >
              {/* Avatar */}
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold text-[#202121]"
                style={{ backgroundColor: conv.avatarColor }}
              >
                {conv.avatarText}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-['Instrument_Sans'] font-semibold text-[12px] text-[#404141] truncate">
                    {conv.name}
                  </span>
                </div>
                <p className="text-[12px] font-['Instrument_Sans'] text-[#7a7d7d] line-clamp-2 leading-tight">
                  {renderPreview(conv.preview)}
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-col items-end justify-between shrink-0 h-full min-h-[40px]">
                <div className="w-4 h-4 flex items-center justify-center">
                  <ChannelIcon type={conv.channel} />
                </div>
                <span className="text-[12px] font-['Instrument_Sans'] text-[#7a7d7d]">
                  {conv.time}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-32 text-[#7a7d7d] text-[12px]">
            No conversations found
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#e3e3e4] flex justify-center">
        <button className="px-3 py-1 rounded-full border border-[#e3e3e4] bg-white text-[#5e6060] text-[12px] font-['Instrument_Sans'] font-semibold shadow-sm">
          Load more
        </button>
      </div>
    </div>
  );
}
