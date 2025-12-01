import React, { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { cn } from "../../lib/utils";
import svgPaths from "../../imports/svg-miy9vgi7c2";
import { Agent, agents } from './data';
import { ImageWithFallback } from '../figma/ImageWithFallback';

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

function CheckSmall() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p1f089400} fill="#F9FAFB" />
      </svg>
    </div>
  );
}

interface AssignSelectorProps {
  children: React.ReactNode;
  currentAssignees?: string[]; // IDs of agents currently assigned
  onAssignChange?: (agentIds: string[]) => void;
}

export function AssignSelector({ 
  children, 
  currentAssignees = [], 
  onAssignChange 
}: AssignSelectorProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(currentAssignees);
  const [searchQuery, setSearchQuery] = useState('');

  // Reset selected when opening/closing or props change
  useEffect(() => {
    if (open) {
      setSelected(currentAssignees);
    }
  }, [open, currentAssignees]);

  const toggleAgent = (agentId: string) => {
    let newSelected;
    if (selected.includes(agentId)) {
      newSelected = selected.filter(id => id !== agentId);
    } else {
      newSelected = [...selected, agentId];
    }
    setSelected(newSelected);
  };

  const handleCancel = () => {
    setSelected(currentAssignees);
    setOpen(false);
  };

  const handleAdd = () => {
    onAssignChange?.(selected);
    setOpen(false);
  };

  // Filter agents based on search
  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Agents currently selected (for the top section visual)
  const selectedAgents = agents.filter(agent => selected.includes(agent.id));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent 
        className="p-0 w-[300px] rounded-[16px] border-none shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] bg-white" 
        align="end"
        sideOffset={8}
      >
        <div className="flex flex-col h-full">
            <div className="flex flex-col gap-[16px] p-[16px]">
                
                {/* Search Bar */}
                <div className="bg-[#f2f3f3] rounded-[8px] w-full p-[6px] flex items-center gap-[4px]">
                    <div className="opacity-50 p-1">
                         <SearchIcon />
                    </div>
                    <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for agents"
                        className="bg-transparent border-none outline-none w-full font-['Instrument_Sans'] text-[12px] text-[#404141] placeholder:text-[#404141] placeholder:opacity-60"
                    />
                </div>

                {/* Section: Agents in this conversation (Avatar Stack) */}
                <div className="flex flex-col gap-[8px] w-full">
                    <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
                        Agents in this conversation
                    </p>
                    {selectedAgents.length > 0 ? (
                        <div className="flex items-center pl-0 pr-[4px] py-0">
                            {selectedAgents.map((agent, index) => (
                                <div 
                                    key={agent.id}
                                    className={cn(
                                        "w-[18px] h-[18px] rounded-full border-2 border-[#fefefe] flex items-center justify-center overflow-hidden shrink-0",
                                        index !== 0 && "ml-[-4px]"
                                    )}
                                    style={{ backgroundColor: agent.color }}
                                >
                                    {agent.avatarUrl ? (
                                        <ImageWithFallback src={agent.avatarUrl} alt={agent.initials} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="font-['Source_Sans_Pro'] font-semibold text-[#202121] text-[10px] mix-blend-color-burn">
                                            {agent.initials}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-[12px] text-gray-300 italic h-[18px] flex items-center">No agents selected</p>
                    )}
                </div>

                {/* Section: Add more agents (List) */}
                <div className="flex flex-col gap-[8px] w-full">
                    <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
                        Add more agents
                    </p>
                    <div className="flex flex-col gap-[4px] max-h-[200px] overflow-y-auto scrollbar-hide -mr-2 pr-2">
                        {filteredAgents.length > 0 ? (
                            filteredAgents.map((agent) => (
                                <AgentItem 
                                    key={agent.id} 
                                    agent={agent} 
                                    isSelected={selected.includes(agent.id)} 
                                    onClick={() => toggleAgent(agent.id)}
                                />
                            ))
                        ) : (
                            <p className="text-[12px] text-gray-400 italic pl-1">No matching agents found</p>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Footer Actions */}
            <div className="flex gap-[8px] items-center justify-end w-full p-[16px] pt-0">
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

function AgentItem({ agent, isSelected, onClick }: { agent: Agent, isSelected: boolean, onClick: () => void }) {
    return (
        <div 
            className="flex items-center justify-between gap-[4px] w-full cursor-pointer hover:bg-gray-50 rounded-[6px] py-1"
            onClick={onClick}
        >
            <div className="flex items-center gap-[8px] overflow-hidden">
                {/* Avatar */}
                <div 
                    className="w-[20px] h-[20px] rounded-full flex items-center justify-center overflow-hidden shrink-0"
                    style={{ backgroundColor: agent.color }}
                >
                     {agent.avatarUrl ? (
                        <ImageWithFallback src={agent.avatarUrl} alt={agent.initials} className="w-full h-full object-cover" />
                    ) : (
                        <span className="font-['Instrument_Sans'] font-normal text-[#202121] text-[12px] leading-[1.2] mix-blend-color-burn">
                            {agent.initials}
                        </span>
                    )}
                </div>
                
                <p className="font-['Instrument_Sans'] font-normal text-[#202121] text-[14px] tracking-[0.07px] truncate leading-[1.2]">
                    {agent.name}
                </p>
            </div>
            
            {/* Checkbox */}
            <div className="flex items-center justify-center p-[4px] rounded-[100px] shrink-0">
                {isSelected ? (
                    <div className="bg-[#0320f5] rounded-[2px] size-[18px] relative flex items-center justify-center">
                        <CheckSmall />
                    </div>
                ) : (
                    <div className="relative rounded-[2px] size-[18px]">
                        <div className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
                    </div>
                )}
            </div>
        </div>
    )
}
