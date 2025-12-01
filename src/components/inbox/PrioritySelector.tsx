import React, { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { cn } from "../../lib/utils";

const SVG_PATH = "M5.6 3.15C5.6 2.57031 6.07031 2.1 6.65 2.1H7.35C7.92969 2.1 8.4 2.57031 8.4 3.15V10.85C8.4 11.4297 7.92969 11.9 7.35 11.9H6.65C6.07031 11.9 5.6 11.4297 5.6 10.85V3.15ZM2.1 7.35C2.1 6.77031 2.57031 6.3 3.15 6.3H3.85C4.42969 6.3 4.9 6.77031 4.9 7.35V10.85C4.9 11.4297 4.42969 11.9 3.85 11.9H3.15C2.57031 11.9 2.1 11.4297 2.1 10.85V7.35ZM10.15 3.5H10.85C11.4297 3.5 11.9 3.97031 11.9 4.55V10.85C11.9 11.4297 11.4297 11.9 10.85 11.9H10.15C9.57031 11.9 9.1 11.4297 9.1 10.85V4.55C9.1 3.97031 9.57031 3.5 10.15 3.5Z";

function PriorityIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
        <path d={SVG_PATH} fill={color} />
      </svg>
    </div>
  );
}

const PRIORITIES = [
  { label: 'High', color: '#E7A188' },
  { label: 'Medium', color: '#EDCA4C' },
  { label: 'Low', color: '#92D0A8' },
];

interface PrioritySelectorProps {
  children: React.ReactNode;
  currentPriority?: string;
  onPriorityChange?: (priority: string) => void;
}

export function PrioritySelector({ 
  children, 
  currentPriority = 'Medium', 
  onPriorityChange 
}: PrioritySelectorProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (priority: string) => {
    onPriorityChange?.(priority);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="cursor-pointer">
            {children}
        </div>
      </PopoverTrigger>
      <PopoverContent 
        className="p-[16px] w-[200px] rounded-[16px] border border-[rgba(0,0,0,0.1)] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] bg-white" 
        align="start"
        sideOffset={8}
      >
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
            Priority
          </p>
          <div className="flex flex-col gap-[4px]">
            {PRIORITIES.map((p) => (
              <div 
                key={p.label}
                className={cn(
                    "flex items-center gap-[4px] px-[6px] py-[4px] rounded-[88px] cursor-pointer transition-colors hover:bg-gray-100",
                    currentPriority === p.label && "bg-gray-50" // Optional active state
                )}
                onClick={() => handleSelect(p.label)}
              >
                <PriorityIcon color={p.color} />
                <p className="font-['Instrument_Sans'] font-semibold text-[#5e6060] text-[14px] tracking-[0.07px]">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}