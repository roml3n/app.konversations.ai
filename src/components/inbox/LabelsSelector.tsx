import React, { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { cn } from "../../lib/utils";
import svgPaths from "../../imports/svg-fj1eikzggx";

// --- Icons ---
function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
        <path d={svgPaths.p257c3080} fill="#7A8890" />
      </svg>
    </div>
  );
}

function CreateLabelIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p89c4b60} fill="#7A7D7D" />
      </svg>
    </div>
  );
}

function LabelIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p306c3500} fill={color} />
      </svg>
    </div>
  );
}

function CheckSmall() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p1f089400} fill="#F9FAFB" />
      </svg>
    </div>
  );
}

// --- Data ---
interface Label {
  id: string;
  name: string;
  color: string;
}

const AVAILABLE_LABELS: Label[] = [
  { id: 'account', name: 'account', color: '#CAAC41' },
  { id: 'auth', name: 'auth', color: '#5865C6' },
  { id: 'billing', name: 'billing', color: '#E53E3E' },
  { id: 'settings', name: 'settings', color: '#48BB79' },
  { id: 'notifications', name: 'notifications', color: '#DE6B20' },
  { id: 'preferences', name: 'preferences', color: '#CD5AB6' },
  { id: 'support', name: 'support', color: '#44B4F5' },
];

interface LabelsSelectorProps {
  children: React.ReactNode;
  selectedLabels?: string[];
  onLabelsChange?: (labels: string[]) => void;
}

export function LabelsSelector({ 
  children, 
  selectedLabels = ['account', 'auth'], // Defaulting to match screenshot somewhat
  onLabelsChange 
}: LabelsSelectorProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(selectedLabels);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync external props to state if they change
  useEffect(() => {
    setSelected(selectedLabels);
  }, [selectedLabels]);

  const toggleLabel = (labelId: string) => {
    let newSelected;
    if (selected.includes(labelId)) {
      newSelected = selected.filter(id => id !== labelId);
    } else {
      newSelected = [...selected, labelId];
    }
    setSelected(newSelected);
  };

  const handleAdd = () => {
    onLabelsChange?.(selected);
    setOpen(false);
  };

  const handleCancel = () => {
    setSelected(selectedLabels); // Reset to initial
    setOpen(false);
  };

  const filteredLabels = AVAILABLE_LABELS.filter(label => 
    label.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent 
        className="p-0 w-[300px] rounded-[16px] border-none shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] bg-white" 
        align="start"
        sideOffset={8}
      >
        <div className="flex flex-col gap-[24px] p-[16px]">
            
            {/* Search Bar */}
            <div className="bg-[#f2f3f3] rounded-[8px] w-full p-[8px] flex items-center gap-[6px]">
                <SearchIcon />
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for labels"
                    className="bg-transparent border-none outline-none w-full font-['Instrument_Sans'] text-[12px] text-[#202121] placeholder:text-[#a0a3a4] placeholder:opacity-60"
                />
            </div>

            {/* Create New Label */}
            <div className="flex gap-[8px] items-center w-full cursor-pointer hover:opacity-70 transition-opacity">
                <CreateLabelIcon />
                <p className="font-['Instrument_Sans'] font-normal text-[#5e6060] text-[14px] tracking-[0.07px]">
                    Create new label
                </p>
            </div>

            {/* All Labels List */}
            <div className="flex flex-col gap-[8px] w-full max-h-[300px] overflow-y-auto scrollbar-hide">
                <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
                    All labels
                </p>
                
                <div className="flex flex-col gap-[4px]">
                    {filteredLabels.length > 0 ? (
                        filteredLabels.map((label) => {
                            const isSelected = selected.includes(label.id);
                            return (
                                <div 
                                    key={label.id} 
                                    className="flex items-center justify-between gap-[8px] w-full py-1 cursor-pointer hover:bg-gray-50 rounded px-1 -mx-1"
                                    onClick={() => toggleLabel(label.id)}
                                >
                                    <div className="flex items-center gap-[8px] overflow-hidden">
                                        <LabelIcon color={label.color} />
                                        <p className="font-['Instrument_Sans'] font-normal text-[#5e6060] text-[14px] tracking-[0.07px] truncate">
                                            {label.name}
                                        </p>
                                    </div>
                                    
                                    {/* Checkbox */}
                                    <div className={cn(
                                        "flex items-center justify-center p-[4px] rounded-[100px] shrink-0",
                                    )}>
                                        {isSelected ? (
                                            <div className="bg-[#0320f5] rounded-[2px] size-[18px] relative">
                                                <CheckSmall />
                                            </div>
                                        ) : (
                                            <div className="rounded-[2px] size-[18px] border-2 border-[#4a5565] box-border" />
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-[12px] text-gray-400 italic">No labels found</p>
                    )}
                </div>
                
                {/* Scrollbar visual if needed - Figma had a grey bar but native scroll is better for UX usually. 
                    The Figma design shows a custom scrollbar pill. 
                    I'll rely on default scrolling behavior but ensure max-height.
                */}
            </div>

            {/* Footer Actions */}
            <div className="flex gap-[8px] items-center justify-end w-full pt-2">
                {/* Cancel Button */}
                <button 
                    onClick={handleCancel}
                    className="bg-[#f4f7f8] px-[10px] py-[6px] rounded-[4px] border border-[#e8edf0] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:bg-[#e8edf0] transition-colors"
                >
                    <span className="font-['Instrument_Sans'] font-semibold text-[#0320f5] text-[14px] tracking-[0.07px] leading-[1.2]">
                        Cancel
                    </span>
                </button>

                {/* Add Button */}
                <button 
                    onClick={handleAdd}
                    className="bg-[#0320f5] px-[10px] py-[6px] rounded-[4px] shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)] hover:bg-blue-700 transition-colors"
                >
                     <span className="font-['Instrument_Sans'] font-semibold text-[#fefefe] text-[14px] tracking-[0.07px] leading-[1.2]">
                        Add
                    </span>
                </button>
            </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
