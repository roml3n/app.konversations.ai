import React from 'react';
import { TagIcon, CaretDownIcon } from './icons';
import { LabelsSelector } from './LabelsSelector';
import { AssignSelector } from './AssignSelector';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { cn } from '../../lib/utils';

// Local Icons
const ChartSimpleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.6 3.15C5.6 2.57031 6.07031 2.1 6.65 2.1H7.35C7.92969 2.1 8.4 2.57031 8.4 3.15V10.85C8.4 11.4297 7.92969 11.9 7.35 11.9H6.65C6.07031 11.9 5.6 11.4297 5.6 10.85V3.15ZM2.1 7.35C2.1 6.77031 2.57031 6.3 3.15 6.3H3.85C4.42969 6.3 4.9 6.77031 4.9 7.35V10.85C4.9 11.4297 4.42969 11.9 3.85 11.9H3.15C2.57031 11.9 2.1 11.4297 2.1 10.85V7.35ZM10.15 3.5H10.85C11.4297 3.5 11.9 3.97031 11.9 4.55V10.85C11.9 11.4297 11.4297 11.9 10.85 11.9H10.15C9.57031 11.9 9.1 11.4297 9.1 10.85V4.55C9.1 3.97031 9.57031 3.5 10.15 3.5Z" fill="#EDCA4C"/></svg>
);

const SpinnerIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.05 2.45C8.05 2.17152 7.93938 1.90445 7.74246 1.70754C7.54555 1.51063 7.27848 1.4 7 1.4C6.72152 1.4 6.45445 1.51063 6.25754 1.70754C6.06063 1.90445 5.95 2.17152 5.95 2.45C5.95 2.72848 6.06063 2.99555 6.25754 3.19246C6.45445 3.38938 6.72152 3.5 7 3.5C7.27848 3.5 7.54555 3.38938 7.74246 3.19246C7.93938 2.99555 8.05 2.72848 8.05 2.45ZM8.05 11.55C8.05 11.2715 7.93938 11.0045 7.74246 10.8075C7.54555 10.6106 7.27848 10.5 7 10.5C6.72152 10.5 6.45445 10.6106 6.25754 10.8075C6.06063 11.0045 5.95 11.2715 5.95 11.55C5.95 11.8285 6.06063 12.0956 6.25754 12.2925C6.45445 12.4894 6.72152 12.6 7 12.6C7.27848 12.6 7.54555 12.4894 7.74246 12.2925C7.93938 12.0956 8.05 11.8285 8.05 11.55ZM2.45 8.05C2.72848 8.05 2.99555 7.93938 3.19246 7.74246C3.38938 7.54555 3.5 7.27848 3.5 7C3.5 6.72152 3.38938 6.45445 3.19246 6.25754C2.99555 6.06063 2.72848 5.95 2.45 5.95C2.17152 5.95 1.90445 6.06063 1.70754 6.25754C1.51063 6.45445 1.4 6.72152 1.4 7C1.4 7.27848 1.51063 7.54555 1.70754 7.74246C1.90445 7.93938 2.17152 8.05 2.45 8.05ZM12.6 7C12.6 6.72152 12.4894 6.45445 12.2925 6.25754C12.0956 6.06063 11.8285 5.95 11.55 5.95C11.2715 5.95 11.0045 6.06063 10.8075 6.25754C10.6106 6.45445 10.5 6.72152 10.5 7C10.5 7.27848 10.6106 7.54555 10.8075 7.74246C11.0045 7.93938 11.2715 8.05 11.55 8.05C11.8285 8.05 12.0956 7.93938 12.2925 7.74246C12.4894 7.54555 12.6 7.27848 12.6 7Z" fill="#AAACFF"/></svg>
);

function HeaderAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-1 bg-white border border-[#e3e3e4] rounded-full px-2 py-1 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]">
      {icon}
      <span className="text-[12px] font-['Instrument_Sans'] font-semibold text-[#5e6060]">{label}</span>
    </div>
  );
}

interface Assignee {
  id: string;
  initials?: string;
  color?: string;
  imgUrl?: string;
}

interface ConversationHeaderProps {
  priority?: string;
  status?: string;
  assignees?: Assignee[];
  labels?: string[];
}

export function ConversationHeader({ 
  priority = "Medium", 
  status = "Inbox",
  assignees = [
    { id: '1', initials: 'P', color: '#aaacff' },
    { id: '2', initials: 'N', color: '#e78f8f' },
    { id: '3', imgUrl: 'https://images.unsplash.com/photo-1650913406617-bd9b0ab07d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB1c2VyJTIwYXZhdGFyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MzE0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
  ],
  labels = []
}: ConversationHeaderProps) {
  return (
    <div className="h-[52px] border-b border-[#e3e3e4] flex items-center justify-between px-4 w-full">
        {/* Left Actions */}
        <div className="flex items-center gap-2">
          <HeaderAction icon={<ChartSimpleIcon />} label={priority} />
          <HeaderAction icon={<SpinnerIcon />} label={status} />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Label Selector */}
          <LabelsSelector selectedLabels={labels}>
            <button className="flex items-center justify-center p-1 bg-[#fefefe] rounded-full border border-[#e3e3e4] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] hover:bg-gray-50">
               <div className="w-4 h-4 flex items-center justify-center text-[#7A7D7D]"><TagIcon /></div>
            </button>
          </LabelsSelector>

          {/* Assign Button / Avatar Group */}
          <AssignSelector currentAssignees={assignees.map(a => a.id)}>
            <button className="flex items-center bg-[#f2f3f3] rounded-full p-1 border border-[#e3e3e4] gap-1 cursor-pointer hover:bg-gray-200">
                <div className="flex items-center -space-x-1">
                {assignees.map((assignee, index) => (
                    <div 
                        key={assignee.id || index}
                        className={cn(
                        "w-[18px] h-[18px] rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#202121] overflow-hidden",
                        !assignee.imgUrl && "bg-[#aaacff]" // fallback color if not provided
                        )}
                        style={{ backgroundColor: assignee.color }}
                    >
                        {assignee.imgUrl ? (
                            <ImageWithFallback src={assignee.imgUrl} alt="avatar" className="w-full h-full object-cover" />
                        ) : (
                            assignee.initials
                        )}
                    </div>
                ))}
                </div>
                <div className="rotate-180 text-[#7A7D7D] px-1">
                <CaretDownIcon className="w-3 h-3" />
                </div>
            </button>
          </AssignSelector>

          {/* Assign Text Button */}
          <button className="flex items-center gap-1 px-2 py-1 bg-white border border-[#e3e3e4] rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] hover:bg-gray-50">
            <span className="text-[12px] font-['Instrument_Sans'] font-semibold text-[#5e6060]">Assign</span>
          </button>
        </div>
    </div>
  );
}
