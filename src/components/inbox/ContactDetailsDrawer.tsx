import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import svgPaths from '../../imports/svg-wwyqvjxvdp';
import contactCardSvgPaths from '../../imports/svg-ubi0zl9t5a';
import aiInsightsSvgPaths from '../../imports/svg-733glkh3j5';
import { Conversation } from './data';

// Icons for the Contact Card specifically (from new design)
const ContactIcons = {
  Call: () => (
    <svg className="size-[16px]" viewBox="0 0 16 16" fill="none">
      <path d={contactCardSvgPaths.p23476550} fill="#7A8890" />
    </svg>
  ),
  Ellipsis: () => (
    <svg className="size-[16px]" viewBox="0 0 16 16" fill="none">
      <path d={contactCardSvgPaths.p37a64e80} fill="#7A8890" />
    </svg>
  ),
  CaretUp: () => (
    <svg className="size-[16px]" viewBox="0 0 16 16" fill="none">
      <path d={contactCardSvgPaths.p3ffeb080} fill="#7A8890" />
    </svg>
  ),
  Profile: () => (
    <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
      <path d={contactCardSvgPaths.pe21e800} fill="#7A8890" />
    </svg>
  ),
  Mail: () => (
    <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
      <path d={contactCardSvgPaths.p37a7d980} fill="#7A8890" />
    </svg>
  ),
  Copy: () => (
    <svg className="size-[12px]" viewBox="0 0 9 10" fill="none">
      <path d={contactCardSvgPaths.p68a2700} fill="#A9BCC6" />
    </svg>
  ),
  Phone: () => (
    <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
      <path d={contactCardSvgPaths.p34da7700} fill="#7A8890" />
    </svg>
  ),
  Briefcase: () => (
    <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
      <path d={contactCardSvgPaths.p807e300} fill="#7A8890" />
    </svg>
  )
};

// Icons for AI Insights Card
const AIIcons = {
  Sparkles: () => (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={aiInsightsSvgPaths.p18b6e600} fill="url(#paint0_linear_17_9217)" fillOpacity="0.6" fillRule="evenodd" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_9217" x1="1.59913" x2="14.4009" y1="2.24579" y2="13.7542">
            <stop stopColor="#01F1B6" />
            <stop offset="1" stopColor="#0320F5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),
  CaretUp: () => (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={aiInsightsSvgPaths.p3ffeb080} fill="#7A8890" />
      </svg>
    </div>
  )
};

// Reuse icons from the SVG import for other sections
const Icons = {
  Copy: () => (
    <svg className="w-3 h-3 text-[#a9bcc6]" viewBox="0 0 9 10" fill="none">
      <path d={svgPaths.p68a2700} fill="currentColor" />
    </svg>
  ),
  Xmark: () => (
    <svg className="w-5 h-5 text-[#7a7d7d]" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p388d5580} fill="currentColor" />
    </svg>
  ),
  Call: () => (
    <svg className="w-4 h-4 text-[#7a8890]" viewBox="0 0 16 16" fill="none">
      <path d={svgPaths.p23476550} fill="currentColor" />
    </svg>
  ),
  Ellipsis: () => (
    <svg className="w-4 h-4 text-[#7a8890]" viewBox="0 0 16 16" fill="none">
      <path d={svgPaths.p37a64e80} fill="currentColor" />
    </svg>
  ),
  CaretUp: () => (
    <svg className="w-4 h-4 text-[#7a8890]" viewBox="0 0 16 16" fill="none">
      <path d={svgPaths.p3ffeb080} fill="currentColor" />
    </svg>
  ),
  Profile: () => (
    <svg className="w-3 h-3 text-[#7a8890]" viewBox="0 0 12 12" fill="none">
      <path d={svgPaths.pe21e800} fill="currentColor" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-3 h-3 text-[#7a8890]" viewBox="0 0 12 12" fill="none">
      <path d={svgPaths.p37a7d980} fill="currentColor" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-3 h-3 text-[#7a8890]" viewBox="0 0 12 12" fill="none">
      <path d={svgPaths.p34da7700} fill="currentColor" />
    </svg>
  ),
  Briefcase: () => (
    <svg className="w-3 h-3 text-[#7a8890]" viewBox="0 0 12 12" fill="none">
      <path d={svgPaths.p807e300} fill="currentColor" />
    </svg>
  ),
  AISparkles: () => (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <path clipRule="evenodd" d={svgPaths.p18b6e600} fill="url(#paint0_linear_sparkles)" fillOpacity="0.6" fillRule="evenodd" />
      <defs>
        <linearGradient id="paint0_linear_sparkles" x1="1.59913" x2="14.4009" y1="2.24579" y2="13.7542" gradientUnits="userSpaceOnUse">
          <stop stopColor="#01F1B6" />
          <stop offset="1" stopColor="#0320F5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Calendar: () => (
    <svg className="w-3.5 h-3.5 text-[#7a8890]" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p2ffbcb00} fill="currentColor" />
    </svg>
  ),
  Comments: () => (
    <svg className="w-3.5 h-3.5 text-[#7a8890]" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p2207f400} fill="currentColor" />
    </svg>
  ),
  Spinner: () => (
    <svg className="w-3.5 h-3.5 text-[#7a8890]" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p3c9a6400} fill="currentColor" />
    </svg>
  ),
  Ticket: () => (
    <svg className="w-3.5 h-3.5 text-[#7a8890]" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p13fa1900} fill="currentColor" />
    </svg>
  ),
  File: () => (
    <svg className="w-3.5 h-3.5 text-[#7a8890]" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p2470180} fill="currentColor" />
    </svg>
  ),
  FileImage: ({ color = '#7682E1' }: { color?: string }) => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p26921480} fill={color} />
    </svg>
  ),
  FilePdf: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p3712a400} fill="#18AF33" />
    </svg>
  )
};

function ExpandableSection({ title, icon, children, defaultExpanded = true }: { title: React.ReactNode, icon?: React.ReactNode, children: React.ReactNode, defaultExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="w-full bg-white rounded-[8px] shadow-sm p-2">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between mb-2"
      >
        <div className="flex items-center gap-1">
          {icon}
          {typeof title === 'string' ? (
             <span className="font-['Instrument_Sans'] font-semibold text-[12px] text-[#7a8890]">{title}</span>
          ) : title}
        </div>
        <div className={cn("text-[#7a8890] transition-transform", expanded ? "rotate-0" : "rotate-180")}>
          <Icons.CaretUp />
        </div>
      </button>
      {expanded && (
        <div className="animate-in fade-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

interface ContactDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  conversation: Conversation;
}

export function ContactDetailsDrawer({ isOpen, onClose, conversation }: ContactDetailsDrawerProps) {
  const [contactDetailsExpanded, setContactDetailsExpanded] = useState(true);
  
  if (!isOpen) return null;

  return (
    <div className="absolute top-2 right-2 bottom-2 w-[400px] bg-white rounded-lg shadow-2xl border border-[#e3e3e4] z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="h-[52px] shrink-0 border-b border-[#e3e3e4] flex items-center justify-between px-4 bg-white">
        <div className="flex flex-col">
          <span className="text-[12px] text-[#7a8890] font-['Instrument_Sans']">Conversation ID</span>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[12px] text-[#161a1c] font-['Instrument_Sans']">CONV2553-{conversation.id}</span>
            <button className="hover:bg-gray-100 p-0.5 rounded"><Icons.Copy /></button>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
          <Icons.Xmark />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex w-full border-b border-[#e3e3e4]">
        <button className="flex-1 py-3 text-[14px] font-semibold text-[#0320f5] font-['Instrument_Sans'] border-b-2 border-[#0320f5]">
          Summary
        </button>
        <button className="flex-1 py-3 text-[14px] font-semibold text-[#4f595e] font-['Instrument_Sans'] hover:bg-gray-50">
          Scores
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[rgb(255,255,255)] p-2 flex flex-col gap-2">
        
        {/* Contact Card (Redesigned) */}
        <div className="bg-[#edf1f4] rounded-[12px] w-full">
          <div className="flex flex-col items-center w-full h-fit">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-center p-[8px] relative w-full h-fit">
              {/* Header Frame1 */}
              <div className="content-stretch flex items-center justify-between relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 size-[32px]">
                     <div className="basis-0 bg-[#ffe2e2] grow min-h-px min-w-px relative rounded-[999px] shrink-0 w-full flex items-center justify-center" style={{ backgroundColor: conversation.avatarColor || '#ffe2e2' }}>
                         <div className="absolute flex flex-col font-['Source_Sans_Pro'] font-semibold justify-center leading-[0] left-1/2 mix-blend-color-burn not-italic text-[#161a1c] text-[13px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <p className="leading-[18px] whitespace-pre">{conversation.avatarText}</p>
                         </div>
                     </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start leading-[1.2] relative shrink-0 text-[12px] text-nowrap tracking-[0.06px] whitespace-pre">
                    <p className="font-['Instrument_Sans'] font-semibold relative shrink-0 text-[#161a1c]">
                      {conversation.contactName || conversation.name}
                    </p>
                    <p className="font-['Instrument_Sans'] font-normal opacity-50 relative shrink-0 text-[#4f595e]">
                      Found in 3 conversations
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                       <ContactIcons.Call />
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                       <ContactIcons.Ellipsis />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details Frame2 */}
              <div className="bg-white relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
                <div className="flex flex-col items-center h-fit">
                  <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[8px] relative w-full">
                    
                    {/* Header */}
                    <div 
                      className="content-stretch flex items-start justify-between relative shrink-0 w-full cursor-pointer"
                      onClick={() => setContactDetailsExpanded(!contactDetailsExpanded)}
                    >
                      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] text-nowrap tracking-[0.06px]">
                        Contact details
                      </p>
                      <div className={`content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0 transition-transform ${contactDetailsExpanded ? '' : 'rotate-180'}`}>
                        <div className="relative shrink-0 size-[16px]">
                           <ContactIcons.CaretUp />
                        </div>
                      </div>
                    </div>

                    {/* Details Grid */}
                    {contactDetailsExpanded && (
                    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] relative shrink-0 w-full">
                       {/* Name */}
                       <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                             <div className="relative shrink-0 size-[12px]">
                                <ContactIcons.Profile />
                             </div>
                             <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px]">Name</p>
                          </div>
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                             <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px]">
                               {conversation.name}
                             </p>
                          </div>
                       </div>

                       {/* Phone */}
                       <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                             <div className="relative shrink-0 size-[12px]">
                                <ContactIcons.Phone />
                             </div>
                             <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px]">Phone</p>
                          </div>
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                             <p className="font-['Instrument_Sans'] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre">
                               {conversation.contactDetails?.phone || '+254 700 112 233'}
                             </p>
                             <div className="relative shrink-0 size-[12px]">
                                <ContactIcons.Copy />
                             </div>
                          </div>
                       </div>

                       {/* Email */}
                       <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                             <div className="relative shrink-0 size-[12px]">
                                <ContactIcons.Mail />
                             </div>
                             <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px]">Email</p>
                          </div>
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                             <p className="font-['Instrument_Sans'] font-normal leading-[1.2] min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px]">
                               {conversation.contactDetails?.email || 'saitosama@gmail.com'}
                             </p>
                             <div className="relative shrink-0 size-[12px]">
                                <ContactIcons.Copy />
                             </div>
                          </div>
                       </div>

                       {/* Company */}
                       <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                             <div className="relative shrink-0 size-[12px]">
                                <ContactIcons.Briefcase />
                             </div>
                             <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px]">Company</p>
                          </div>
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                             <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px]">
                               {conversation.contactDetails?.company || 'N/A'}
                             </p>
                          </div>
                       </div>
                    </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* AI Insights Card (Redesigned) */}
        <div className="bg-white relative rounded-[12px] w-full">
          {/* Outer border gradient simulated with absolute div */}
          <div aria-hidden="true" className="absolute border-[#01f1b6] border-[3px] border-solid inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
              
              {/* Header */}
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                  <AIIcons.Sparkles />
                  <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre">
                    AI Insights
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0">
                  {/* We could make this collapsible, but design implies always open or just header? Let's assume collapsible for utility */}
                   <AIIcons.CaretUp />
                </div>
              </div>

              {/* Summary */}
              <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative rounded-[8px] shrink-0 text-[12px] tracking-[0.06px] w-full">
                <p className="font-['Instrument_Sans'] font-semibold opacity-60 relative shrink-0 text-[#161a1c] text-nowrap whitespace-pre">
                  Summary
                </p>
                <p className="font-['Instrument_Sans'] font-normal min-w-full relative shrink-0 text-[#4f595e] w-[min-content]">
                  {conversation.aiInsights?.summary || "No summary available for this conversation."}
                </p>
              </div>

              {/* Primary Topic */}
              <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative rounded-[8px] shrink-0 text-[12px] tracking-[0.06px] w-full">
                <p className="font-['Instrument_Sans'] font-semibold opacity-60 relative shrink-0 text-[#161a1c] text-nowrap whitespace-pre">
                  Primary Topic
                </p>
                <p className="font-['Instrument_Sans'] font-normal min-w-full relative shrink-0 text-[#4f595e] w-[min-content]">
                  {conversation.aiInsights?.primaryTopic || "N/A"}
                </p>
              </div>

              {/* Keywords */}
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre">
                  Keywords
                </p>
                <div className="content-center flex flex-wrap gap-[4px] items-center relative shrink-0 w-full">
                   {conversation.aiInsights?.keywords?.map((kw, i) => (
                    <div key={i} className="bg-[#e9e9ff] box-border content-stretch flex gap-[8px] items-center px-[6px] py-[4px] relative rounded-[6px] shrink-0">
                      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#5258fe] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre">
                        {kw}
                      </p>
                    </div>
                  )) || <span className="text-[12px] text-[#4f595e]">None</span>}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-[#edf1f4] relative rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre">
                        Next Steps
                      </p>
                    </div>
                    <ul className="block font-['Instrument_Sans'] font-normal leading-[0] min-w-full relative shrink-0 text-[#4f595e] text-[12px] tracking-[0.06px] w-[min-content]">
                       {conversation.aiInsights?.nextSteps?.map((step, i) => (
                        <li key={i} className={i < (conversation.aiInsights?.nextSteps?.length || 0) - 1 ? "mb-0 ms-[18px]" : "ms-[18px]"}>
                          <span className="leading-[1.2]">{step}</span>
                        </li>
                       )) || <li className="ms-[18px]"><span className="leading-[1.2]">No next steps</span></li>}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* More Details Section */}
        <ExpandableSection title="More details">
           <div className="grid grid-cols-[96px_1fr] gap-y-3 gap-x-2 items-center">
              {/* Assignee */}
              <div className="flex items-center gap-1 text-[12px] text-[#7a8890]">
                <div className="w-3.5 h-3.5"><svg viewBox="0 0 14 14" fill="none"><path d={svgPaths.p938b100} fill="currentColor" /></svg></div>
                Assignee
              </div>
              <div className="flex items-center gap-1 bg-[#edf1f4] p-1 rounded-[6px] w-fit">
                <div className="w-3.5 h-3.5 bg-[#7ba7f9] rounded-full flex items-center justify-center text-[10px] font-bold text-[#161a1c]">
                  {conversation.assignee ? conversation.assignee.charAt(0) : 'U'}
                </div>
                <span className="text-[12px] text-[#161a1c]">{conversation.assignee || 'Unassigned'}</span>
              </div>

              {/* Date Recorded */}
              <div className="flex items-center gap-1 text-[12px] text-[#7a8890]">
                <Icons.Calendar />
                Date recorded
              </div>
              <div className="bg-[#edf1f4] p-1 rounded-[6px] w-fit text-[12px] text-[#089d44]">
                {conversation.dateRecorded || 'Unknown'}
              </div>

              {/* Channel */}
              <div className="flex items-center gap-1 text-[12px] text-[#7a8890]">
                <Icons.Comments />
                Channel
              </div>
              <div className="bg-[#edf1f4] p-1 rounded-[6px] w-fit flex items-center gap-1">
                 {/* Simple dynamic icon color based on channel */}
                 <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p23476550} fill={conversation.channel === 'whatsapp' ? '#25D366' : '#FF6900'} />
                 </svg>
                 <span className="text-[12px] capitalize" style={{ color: conversation.channel === 'whatsapp' ? '#25D366' : '#FF6900' }}>
                   {conversation.channel}
                 </span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-1 text-[12px] text-[#7a8890]">
                <Icons.Spinner />
                Status
              </div>
              <div className="bg-[#edf1f4] p-1 rounded-[6px] w-fit flex items-center gap-1 text-[12px] text-[#5258fe]">
                <div className="w-3.5 h-3.5"><svg viewBox="0 0 14 14" fill="none"><path d={svgPaths.p3c9a6400} fill="currentColor" /></svg></div>
                {conversation.status || 'Open'}
              </div>

              {/* Attachments */}
              <div className="flex items-center gap-1 text-[12px] text-[#7a8890] self-start pt-1">
                <Icons.File />
                Attachments
              </div>
              <div className="flex flex-wrap gap-1">
                {/* Mock attachments */}
                 <div className="bg-[#edf1f4] p-1 rounded-[6px] flex items-center gap-1 text-[12px] text-[#4f595e]">
                    <Icons.FileImage />
                    DCS233...12.jpg
                 </div>
                 <div className="bg-[#edf1f4] p-1 rounded-[6px] flex items-center gap-1 text-[12px] text-[#4f595e]">
                    <Icons.FileImage color="#E176CA" />
                    img12.png
                 </div>
              </div>

              {/* Ticket */}
              <div className="flex items-center gap-1 text-[12px] text-[#7a8890]">
                <Icons.Ticket />
                Tracker ticket
              </div>
              <div className="bg-[#edf1f4] p-1 rounded-[6px] w-fit flex items-center gap-1 text-[12px] text-[#01b386]">
                <div className="w-3.5 h-3.5"><svg viewBox="0 0 14 14" fill="none"><path d={svgPaths.p13fa1900} fill="currentColor" /></svg></div>
                Create a tracker ticket
              </div>
           </div>
        </ExpandableSection>

      </div>
    </div>
  );
}
