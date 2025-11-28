import React from 'react';
import { 
  TagIcon, 
  PlusIcon,
  CaretDownIcon,
  WhatsAppIcon,
  InstagramIcon,
  MessengerIcon,
  CallIcon,
  EmailIcon,
  WebChatIcon,
  JiraIcon
} from './icons';
import { cn } from '../../lib/utils';
import { conversations, conversationMessages, Message, ChannelType } from './data';

// Icons for this specific component
const ChartSimpleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.6 3.15C5.6 2.57031 6.07031 2.1 6.65 2.1H7.35C7.92969 2.1 8.4 2.57031 8.4 3.15V10.85C8.4 11.4297 7.92969 11.9 7.35 11.9H6.65C6.07031 11.9 5.6 11.4297 5.6 10.85V3.15ZM2.1 7.35C2.1 6.77031 2.57031 6.3 3.15 6.3H3.85C4.42969 6.3 4.9 6.77031 4.9 7.35V10.85C4.9 11.4297 4.42969 11.9 3.85 11.9H3.15C2.57031 11.9 2.1 11.4297 2.1 10.85V7.35ZM10.15 3.5H10.85C11.4297 3.5 11.9 3.97031 11.9 4.55V10.85C11.9 11.4297 11.4297 11.9 10.85 11.9H10.15C9.57031 11.9 9.1 11.4297 9.1 10.85V4.55C9.1 3.97031 9.57031 3.5 10.15 3.5Z" fill="#EDCA4C"/></svg>
);

const SpinnerIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.05 2.45C8.05 2.17152 7.93938 1.90445 7.74246 1.70754C7.54555 1.51063 7.27848 1.4 7 1.4C6.72152 1.4 6.45445 1.51063 6.25754 1.70754C6.06063 1.90445 5.95 2.17152 5.95 2.45C5.95 2.72848 6.06063 2.99555 6.25754 3.19246C6.45445 3.38938 6.72152 3.5 7 3.5C7.27848 3.5 7.54555 3.38938 7.74246 3.19246C7.93938 2.99555 8.05 2.72848 8.05 2.45ZM8.05 11.55C8.05 11.2715 7.93938 11.0045 7.74246 10.8075C7.54555 10.6106 7.27848 10.5 7 10.5C6.72152 10.5 6.45445 10.6106 6.25754 10.8075C6.06063 11.0045 5.95 11.2715 5.95 11.55C5.95 11.8285 6.06063 12.0956 6.25754 12.2925C6.45445 12.4894 6.72152 12.6 7 12.6C7.27848 12.6 7.54555 12.4894 7.74246 12.2925C7.93938 12.0956 8.05 11.8285 8.05 11.55ZM2.45 8.05C2.72848 8.05 2.99555 7.93938 3.19246 7.74246C3.38938 7.54555 3.5 7.27848 3.5 7C3.5 6.72152 3.38938 6.45445 3.19246 6.25754C2.99555 6.06063 2.72848 5.95 2.45 5.95C2.17152 5.95 1.90445 6.06063 1.70754 6.25754C1.51063 6.45445 1.4 6.72152 1.4 7C1.4 7.27848 1.51063 7.54555 1.70754 7.74246C1.90445 7.93938 2.17152 8.05 2.45 8.05ZM12.6 7C12.6 6.72152 12.4894 6.45445 12.2925 6.25754C12.0956 6.06063 11.8285 5.95 11.55 5.95C11.2715 5.95 11.0045 6.06063 10.8075 6.25754C10.6106 6.45445 10.5 6.72152 10.5 7C10.5 7.27848 10.6106 7.54555 10.8075 7.74246C11.0045 7.93938 11.2715 8.05 11.55 8.05C11.8285 8.05 12.0956 7.93938 12.2925 7.74246C12.4894 7.54555 12.6 7.27848 12.6 7Z" fill="#AAACFF"/></svg>
);

const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.8937 10.6602C11.7592 10.6602 11.6303 10.6075 11.5352 10.5138C11.4401 10.42 11.3867 10.2928 11.3867 10.1602V5.36688L4.47708 12.1802C4.4151 12.246 4.33627 12.2941 4.24889 12.3195C4.1615 12.3448 4.06881 12.3465 3.98056 12.3242C3.89232 12.302 3.81179 12.2567 3.74747 12.1931C3.68315 12.1295 3.63741 12.05 3.61507 11.9629C3.59248 11.876 3.59406 11.7847 3.61964 11.6985C3.64522 11.6124 3.69385 11.5347 3.76043 11.4736L10.67 4.66022H5.80897C5.67448 4.66022 5.54551 4.60754 5.45042 4.51377C5.35533 4.42 5.3019 4.29283 5.3019 4.16022C5.3019 4.02761 5.35533 3.90043 5.45042 3.80666C5.54551 3.7129 5.67448 3.66022 5.80897 3.66022H11.8937C12.0282 3.66022 12.1572 3.7129 12.2523 3.80666C12.3474 3.90043 12.4008 4.02761 12.4008 4.16022V10.1602C12.4008 10.2928 12.3474 10.42 12.2523 10.5138C12.1572 10.6075 12.0282 10.6602 11.8937 10.6602Z" fill="#99A1AF"/></svg>
);

const EllipsisIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.4 8C2.4 7.2275 3.0275 6.6 3.8 6.6C4.5725 6.6 5.2 7.2275 5.2 8C5.2 8.7725 4.5725 9.4 3.8 9.4C3.0275 9.4 2.4 8.7725 2.4 8ZM6.6 8C6.6 7.2275 7.2275 6.6 8 6.6C8.7725 6.6 9.4 7.2275 9.4 8C9.4 8.7725 8.7725 9.4 8 9.4C7.2275 9.4 6.6 8.7725 6.6 8ZM12.2 6.6C12.9725 6.6 13.6 7.2275 13.6 8C13.6 8.7725 12.9725 9.4 12.2 9.4C11.4275 9.4 10.8 8.7725 10.8 8C10.8 7.2275 11.4275 6.6 12.2 6.6Z" fill="#99A1AF"/></svg>
);

const PaperclipIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.505 3.695C10.895 3.085 9.905 3.085 9.295 3.695L4.695 8.295C3.6425 9.3475 3.6425 11.0525 4.695 12.105C5.7475 13.1575 7.4525 13.1575 8.505 12.105L12.305 8.305C12.5775 8.0325 13.0225 8.0325 13.295 8.305C13.5675 8.5775 13.5675 9.0225 13.295 9.295L9.495 13.095C7.895 14.695 5.305 14.695 3.705 13.095C2.105 11.495 2.105 8.905 3.705 7.305L8.305 2.705C9.4625 1.5475 11.3375 1.5475 12.495 2.705C13.6525 3.8625 13.6525 5.7375 12.495 6.895L8.095 11.295C7.38 12.01 6.22 12.01 5.505 11.295C4.79 10.58 4.79 9.42 5.505 8.705L9.105 5.105C9.3775 4.8325 9.8225 4.8325 10.095 5.105C10.3675 5.3775 10.3675 5.8225 10.095 6.095L6.495 9.695C6.3275 9.8625 6.3275 10.1375 6.495 10.305C6.6625 10.4725 6.9375 10.4725 7.105 10.305L11.505 5.905C12.115 5.295 12.115 4.305 11.505 3.695Z" fill="#7A7D7D"/></svg>
);

const FormatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.64397 10.8115L2.3755 13.4068C2.31876 13.9553 2.76388 14.4255 3.31467 14.3989L5.86824 14.2756C6.09605 14.2646 6.3112 14.1676 6.47025 14.0042L11.574 8.75867C11.9184 8.40464 11.9134 7.83921 11.5627 7.49135L9.23693 5.18425C8.88441 4.83456 8.31536 4.8362 7.96486 5.18791L2.90185 10.2685C2.75623 10.4146 2.6652 10.6063 2.64397 10.8115Z" fill="#7A7D7D"/><path d="M13.9565 5.05184L11.6731 2.75092C11.3215 2.3966 10.7488 2.3959 10.3963 2.74936L9.64129 3.50645C9.29142 3.8573 9.2907 4.42488 9.63968 4.77661L11.9301 7.08506C12.2841 7.44185 12.8617 7.4398 13.2131 7.08049L13.961 6.31587C14.3052 5.96406 14.3031 5.40116 13.9565 5.05184Z" fill="#7A7D7D"/><path d="M3.79341 1.76128C3.89377 1.54624 4.19956 1.54624 4.29992 1.76128L4.84559 2.93049C4.87335 2.98997 4.92116 3.03779 4.98065 3.06555L6.14986 3.61122C6.3649 3.71158 6.3649 4.01736 6.14986 4.11772L4.98065 4.6634C4.92116 4.69116 4.87335 4.73897 4.84559 4.79845L4.29992 5.96766C4.19956 6.18271 3.89377 6.18271 3.79341 5.96766L3.24774 4.79845C3.21998 4.73897 3.17217 4.69116 3.11268 4.6634L1.94347 4.11772C1.72843 4.01736 1.72843 3.71158 1.94347 3.61122L3.11268 3.06555C3.17217 3.03779 3.21998 2.98997 3.24774 2.93049L3.79341 1.76128Z" fill="#7A7D7D"/></svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.21 0.9425C14.455 0.855 14.725 0.9175 14.91 1.1C15.095 1.2825 15.155 1.555 15.0675 1.8L10.6175 14.2225C10.4925 14.57 10.165 14.8 9.7975 14.8C9.4425 14.8 9.1225 14.585 8.99 14.2575L7.385 10.3075C7.2725 10.0325 7.3225 9.7175 7.515 9.4925L9.8775 6.6825C10.005 6.53 9.995 6.3075 9.855 6.1675C9.715 6.0275 9.49 6.0175 9.34 6.145L6.53 8.5025C6.3025 8.6925 5.99 8.7425 5.715 8.6325L1.7525 7.02C1.425 6.8875 1.21 6.5675 1.21 6.2125C1.21 5.845 1.44 5.5175 1.7875 5.3925L14.21 0.9425Z" fill="#FAFAFA"/></svg>
);

const FileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4.2 1.4C3.42781 1.4 2.8 2.02781 2.8 2.8V11.2C2.8 11.9722 3.42781 12.6 4.2 12.6H9.8C10.5722 12.6 11.2 11.9722 11.2 11.2V4.9H8.4C8.01281 4.9 7.7 4.58719 7.7 4.2V1.4H4.2ZM8.4 1.4V4.2H11.2L8.4 1.4ZM4.2 7C4.2 6.81435 4.27375 6.6363 4.40502 6.50502C4.5363 6.37375 4.71435 6.3 4.9 6.3C5.08565 6.3 5.2637 6.37375 5.39497 6.50502C5.52625 6.6363 5.6 6.81435 5.6 7C5.6 7.18565 5.52625 7.3637 5.39497 7.49497C5.2637 7.62625 5.08565 7.7 4.9 7.7C4.71435 7.7 4.5363 7.62625 4.40502 7.49497C4.27375 7.3637 4.2 7.18565 4.2 7ZM7.525 7.7C7.64094 7.7 7.74812 7.75687 7.81375 7.85094L9.73875 10.6509C9.81312 10.7581 9.81969 10.8981 9.76062 11.0119C9.70156 11.1256 9.58125 11.2 9.45 11.2H7.525H6.65H5.6H4.55C4.42312 11.2 4.30719 11.1322 4.24594 11.0228C4.18469 10.9134 4.18469 10.7778 4.25031 10.6706L5.30031 8.92062C5.36375 8.81562 5.4775 8.75 5.6 8.75C5.7225 8.75 5.83625 8.81344 5.89969 8.92062L6.17969 9.38875L7.23625 7.85312C7.30187 7.75906 7.40906 7.70219 7.525 7.70219V7.7Z" fill="#B1B3B4"/></svg>
);

function ChannelIcon({ type }: { type: ChannelType }) {
  switch (type) {
    case 'instagram': return <InstagramIcon className="w-3 h-3 text-[#364153]" />;
    case 'whatsapp': return <WhatsAppIcon className="w-3 h-3 text-[#364153]" />;
    case 'messenger': return <MessengerIcon className="w-3 h-3 text-[#364153]" />;
    case 'call': return <CallIcon className="w-3 h-3 text-[#364153]" />;
    case 'email': return <EmailIcon className="w-3 h-3 text-[#364153]" />;
    case 'webchat': return <WebChatIcon className="w-3 h-3 text-[#364153]" />;
    case 'jira': return <JiraIcon className="w-3 h-3 text-[#364153]" />;
    default: return null;
  }
}

function AssignButton() {
  return (
    <button className="flex items-center bg-[#f2f3f3] rounded-full p-1 border border-[#e3e3e4] gap-1">
      <div className="flex items-center -space-x-1">
        <div className="w-[18px] h-[18px] rounded-full bg-[#aaacff] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#202121]">P</div>
        <div className="w-[18px] h-[18px] rounded-full bg-[#e78f8f] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#202121]">N</div>
        <div className="w-[18px] h-[18px] rounded-full bg-[#fefefe] border-2 border-white flex items-center justify-center">
           {/* Use a placeholder image or icon */}
           <div className="w-full h-full rounded-full bg-gray-300" />
        </div>
      </div>
      <div className="rotate-180 text-[#7A7D7D] px-1">
        <CaretDownIcon className="w-3 h-3" />
      </div>
    </button>
  );
}

function HeaderAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-1 bg-white border border-[#e3e3e4] rounded-full px-2 py-1 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]">
      {icon}
      <span className="text-[12px] font-['Instrument_Sans'] font-semibold text-[#5e6060]">{label}</span>
    </div>
  );
}

interface ChatAreaProps {
  conversationId?: string;
  onToggleDetails?: () => void;
}

export function ChatArea({ conversationId = '2', onToggleDetails }: ChatAreaProps) {
  const conversation = conversations.find(c => c.id === conversationId) || conversations[1];
  const messages = conversationMessages[conversationId] || [];

  return (
    <div className="flex-1 flex flex-col h-full bg-white min-w-0">
      {/* Header */}
      <div className="h-[52px] border-b border-[#e3e3e4] flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <HeaderAction icon={<ChartSimpleIcon />} label="Medium" />
          <HeaderAction icon={<SpinnerIcon />} label="Inbox" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center p-1 bg-[#fefefe] rounded-full border border-[#e3e3e4] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]">
             <div className="w-4 h-4 flex items-center justify-center text-[#7A7D7D]"><TagIcon /></div>
          </div>
          <AssignButton />
          <button className="flex items-center gap-1 px-2 py-1 bg-white border border-[#e3e3e4] rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]">
            <span className="text-[12px] font-['Instrument_Sans'] font-semibold text-[#5e6060]">Assign</span>
          </button>
        </div>
      </div>

      {/* Topic */}
      <div className="h-[52px] border-b border-[#e3e3e4] flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h2 className="text-[18px] font-['Instrument_Sans'] font-semibold text-[#202121] truncate">
            {conversation.name}
          </h2>
          {/* Tag - Just hardcoded as account for now unless we add tags to data */}
          <div className="flex items-center gap-1 bg-[#fcf6e9] px-1.5 py-0.5 rounded-[6px]">
            <div className="w-3 h-3 text-[#E2C148]"><TagIcon /></div>
            <span className="text-[12px] font-['Instrument_Sans'] text-[#404141]">account</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 bg-white border border-[#edf1f4] rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]">
            <span className="text-[12px] font-['Instrument_Sans'] font-semibold text-[#4f595e]">Log to CRM</span>
            <ArrowUpRightIcon />
          </button>
          <button 
            onClick={onToggleDetails}
            className="p-1 bg-white border border-[#edf1f4] rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] hover:bg-gray-50"
          >
            <EllipsisIcon />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-white">
        <div className="flex flex-col gap-6 w-full max-w-[60%] mx-auto">
          {messages.length > 0 ? (
            messages.map((msg) => {
              // 1. Incoming Message
              if (msg.type === 'incoming') {
                return (
                  <div key={msg.id} className="flex items-start gap-3 max-w-[70%]">
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-[#202121] shrink-0"
                      style={{ backgroundColor: msg.sender?.avatarColor || '#ccc' }}
                    >
                      {msg.sender?.avatarText}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-[12px]">
                        <span className="font-bold text-[#7a7d7d] font-['Instrument_Sans']">{msg.sender?.name}</span>
                        <span className="text-[#7a7d7d] font-['Instrument_Sans']">via</span>
                        {msg.channel && <ChannelIcon type={msg.channel} />}
                      </div>
                      <div className="bg-[#f2f3f3] p-3 rounded-[16px] text-[12px] text-[#202121] font-['Instrument_Sans'] leading-relaxed">
                        {msg.html ? (
                          <div dangerouslySetInnerHTML={{ __html: msg.html }} />
                        ) : (
                          <p>{msg.text}</p>
                        )}
                        
                        {/* Attachments */}
                        {msg.attachments && msg.attachments.map((att, idx) => (
                          <div key={idx} className="mt-2 bg-white rounded-full border border-[#e3e3e4] px-2 py-1 flex items-center justify-between w-full">
                            <div className="flex items-center gap-1">
                              <FileIcon />
                              <span className="font-semibold text-[#5e6060]">{att.name}</span>
                            </div>
                            <span className="text-[#a0a3a4]">{att.size}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // 2. Outgoing Message (Me)
              if (msg.type === 'outgoing') {
                 // Internal notes by ME are also outgoing in structure but styled differently? 
                 // No, wait, type is 'outgoing' for public replies, 'internal' for internal notes.
                 return (
                  <div key={msg.id} className="flex flex-col items-end self-end max-w-[70%] gap-1">
                    <span className="text-[12px] text-[#7a7d7d] mr-2">You</span>
                    <div className="bg-[#d6d7ff] p-3 rounded-[16px] text-[12px] text-[#202121] font-['Instrument_Sans'] leading-relaxed">
                       {msg.html ? (
                          <div dangerouslySetInnerHTML={{ __html: msg.html }} />
                        ) : (
                          msg.text
                        )}
                    </div>
                  </div>
                 );
              }
              
              // 3. Internal Note
              if (msg.type === 'internal') {
                // Check if it's me or someone else
                if (msg.sender?.isMe) {
                  return (
                    <div key={msg.id} className="flex flex-col items-end self-end max-w-[70%] gap-1">
                      <div className="text-[12px] text-[#7a7d7d] mr-2">
                        <span className="font-bold">You</span> <span className="italic">(internal)</span>
                      </div>
                      <div className="bg-[#e9e9ff] p-2 px-3 rounded-full border border-[#8083ff] text-[12px] text-[#202121] font-['Instrument_Sans']">
                        {msg.html ? (
                          <div dangerouslySetInnerHTML={{ __html: msg.html }} />
                        ) : (
                          msg.text
                        )}
                      </div>
                    </div>
                  );
                } else {
                  // Other agent internal note (like Amanda)
                  return (
                    <div key={msg.id} className="flex items-start gap-3 max-w-[70%]">
                      <div 
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-[#202121] shrink-0"
                        style={{ backgroundColor: msg.sender?.avatarColor || '#ccc' }}
                      >
                        {msg.sender?.avatarText}
                      </div>
                      <div className="flex flex-col gap-1 items-start">
                        <div className="text-[12px] text-[#7a7d7d]">
                          <span className="font-bold">{msg.sender?.name}</span> <span className="italic">(internal)</span>
                        </div>
                        <div className="bg-[#fcfcfc] p-2 px-3 rounded-full border border-[#e3e3e4] text-[12px] text-[#202121] font-['Instrument_Sans']">
                           {msg.html ? (
                            <div dangerouslySetInnerHTML={{ __html: msg.html }} />
                          ) : (
                            msg.text
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              }

              // 4. System Event
              if (msg.type === 'system') {
                 return (
                  <div key={msg.id} className="flex flex-col items-center gap-2 my-2">
                    <div className="flex items-center gap-1 text-[12px]">
                      <span className="font-bold text-[#a0a3a4]">{msg.sender?.name}</span>
                      <span className="text-[#a0a3a4]">{msg.systemAction}</span>
                      {msg.systemBadge && (
                        <div 
                          className="px-1 py-0.5 rounded-[6px] flex items-center gap-1"
                          style={{ backgroundColor: msg.systemBadge.color }}
                        >
                          {/* Render icon based on string or generic fallback */}
                          {msg.systemBadge.icon === 'tag' && <div className="w-3 h-3 text-[#8990DF]"><TagIcon /></div>}
                          <span className="text-[#404141]">{msg.systemBadge.text}</span>
                        </div>
                      )}
                    </div>
                  </div>
                 );
              }

              return null;
            })
          ) : (
            <div className="flex items-center justify-center h-full text-[#7a7d7d]">
              No messages in this conversation
            </div>
          )}
        </div>
      </div>

      {/* Composer */}
      <div className="p-4 border-t border-[#e3e3e4] bg-white">
        <div className="bg-[#f2f3f3] rounded-[12px] p-2 w-full max-w-[60%] mx-auto">
          <textarea 
            className="w-full bg-transparent border-none resize-none focus:ring-0 text-[12px] font-['Instrument_Sans'] text-[#202121] placeholder:text-[#a0a3a4] min-h-[40px]"
            placeholder="Type a comment"
          />
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-200 rounded"><PaperclipIcon /></button>
              <button className="p-1 hover:bg-gray-200 rounded"><FormatIcon /></button>
            </div>
            <button className="bg-[#0320f5] text-white px-3 py-1.5 rounded-[4px] flex items-center gap-1 shadow-sm">
              <span className="text-[14px] font-semibold font-['Instrument_Sans']">Send</span>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
