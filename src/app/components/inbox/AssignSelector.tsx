import React, { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { cn } from "../../lib/utils";
import { Agent, agents } from './data';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// --- Icons ---
function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
        <path d="M10.5 5.95C10.5 6.95406 10.1741 7.88156 9.625 8.63406L12.3944 11.4056C12.6678 11.6791 12.6678 12.1231 12.3944 12.3966C12.1209 12.67 11.6769 12.67 11.4034 12.3966L8.63406 9.625C7.88156 10.1741 6.95406 10.5 5.95 10.5C3.43656 10.5 1.4 8.46344 1.4 5.95C1.4 3.43656 3.43656 1.4 5.95 1.4C8.46344 1.4 10.5 3.43656 10.5 5.95ZM5.95 9.1C7.68906 9.1 9.1 7.68906 9.1 5.95C9.1 4.21094 7.68906 2.8 5.95 2.8C4.21094 2.8 2.8 4.21094 2.8 5.95C2.8 7.68906 4.21094 9.1 5.95 9.1Z" fill="#7A8890" />
      </svg>
    </div>
  );
}

function CheckSmall() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="#F9FAFB" />
      </svg>
    </div>
  );
}

interface AssignSelectorProps {
  children: React.ReactNode;
  currentAssignee?: string; // ID of agent currently assigned
  onAssign?: (agentId: string, note?: string) => void;
}

export function AssignSelector({ 
  children, 
  currentAssignee, 
  onAssign 
}: AssignSelectorProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'select' | 'confirm'>('select');
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(currentAssignee || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [comment, setComment] = useState('');

  // Reset state when opening/closing
  useEffect(() => {
    if (open) {
      setStep('select');
      setSelectedAgentId(currentAssignee || null);
      setSearchQuery('');
      setComment('');
    }
  }, [open, currentAssignee]);

  const handleSelect = (agentId: string) => {
    // If clicking the already selected agent, deselect? Or just keep selected?
    // Usually radio button behavior keeps it selected.
    // Toggle behavior if desired:
    // setSelectedAgentId(prev => prev === agentId ? null : agentId);
    setSelectedAgentId(agentId);
  };

  const handleNext = () => {
    if (selectedAgentId) {
      setStep('confirm');
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleFinalAssign = () => {
    if (selectedAgentId && onAssign) {
      onAssign(selectedAgentId, comment);
      setOpen(false);
    }
  };

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedAgent = agents.find(a => a.id === selectedAgentId);

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
          {step === 'select' ? (
            // --- FRAME 1: Select Agent ---
            <>
              <div className="flex flex-col gap-[24px] p-[16px]">
                {/* Search Bar */}
                <div className="bg-[#f2f3f3] rounded-[8px] w-full p-[8px] flex items-center gap-[6px]">
                  <SearchIcon />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for agents"
                    className="bg-transparent border-none outline-none w-full font-['Instrument_Sans'] text-[12px] text-[#404141] placeholder:text-[#a0a3a4] placeholder:opacity-60"
                  />
                </div>

                {/* Agents List */}
                <div className="flex flex-col gap-[8px] w-full">
                  <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
                    Agents
                  </p>
                  <div className="flex flex-col gap-[4px] max-h-[200px] overflow-y-auto scrollbar-hide -mx-1 px-1">
                    {filteredAgents.length > 0 ? (
                      filteredAgents.map((agent) => (
                        <div 
                          key={agent.id} 
                          className="flex items-center justify-between gap-[4px] w-full cursor-pointer hover:bg-gray-50 rounded-[6px] py-1"
                          onClick={() => handleSelect(agent.id)}
                        >
                          <div className="flex items-center gap-[8px] overflow-hidden">
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
                          
                          {/* Radio */}
                          <div className="flex items-center justify-center p-[4px] rounded-[100px] shrink-0">
                            {selectedAgentId === agent.id ? (
                              <div className="bg-[#0320f5] rounded-full size-[18px] relative flex items-center justify-center">
                                <div className="bg-white rounded-full size-[6px]" />
                              </div>
                            ) : (
                              <div className="rounded-full size-[18px] border border-[#4a5565]" />
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-[12px] text-gray-400 italic">No agents found</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex gap-[8px] items-center justify-end w-full p-[16px] pt-0">
                <button 
                  onClick={handleCancel}
                  className="bg-[#f4f7f8] px-[10px] py-[6px] rounded-[4px] border border-[#e8edf0] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:bg-[#e8edf0] transition-colors"
                >
                  <span className="font-['Instrument_Sans'] font-semibold text-[#0320f5] text-[14px] tracking-[0.07px] leading-[1.2]">
                    Cancel
                  </span>
                </button>

                <button 
                  onClick={handleNext}
                  disabled={!selectedAgentId}
                  className={cn(
                    "px-[10px] py-[6px] rounded-[4px] shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)] transition-colors",
                    selectedAgentId 
                      ? "bg-[#0320f5] hover:bg-blue-700 cursor-pointer" 
                      : "bg-gray-300 cursor-not-allowed"
                  )}
                >
                   <span className="font-['Instrument_Sans'] font-semibold text-[#fefefe] text-[14px] tracking-[0.07px] leading-[1.2]">
                    Assign
                  </span>
                </button>
              </div>
            </>
          ) : (
            // --- FRAME 2: Confirm / Note ---
            <>
              <div className="flex flex-col gap-[24px] p-[16px]">
                 {/* Assigned Agent Display */}
                 <div className="flex flex-col gap-[8px] w-full">
                    <p className="font-['Instrument_Sans'] font-normal text-[#777777] text-[12px] tracking-[0.06px]">
                      Assigned
                    </p>
                    {selectedAgent && (
                      <div className="flex items-center gap-[4px] w-full rounded-[6px]">
                         <div 
                            className="w-[20px] h-[20px] rounded-full flex items-center justify-center overflow-hidden shrink-0"
                            style={{ backgroundColor: selectedAgent.color }}
                          >
                              {selectedAgent.avatarUrl ? (
                                <ImageWithFallback src={selectedAgent.avatarUrl} alt={selectedAgent.initials} className="w-full h-full object-cover" />
                              ) : (
                                <span className="font-['Instrument_Sans'] font-normal text-[#202121] text-[12px] leading-[1.2] mix-blend-color-burn">
                                  {selectedAgent.initials}
                                </span>
                              )}
                          </div>
                          <p className="font-['Instrument_Sans'] font-normal text-[#202121] text-[14px] tracking-[0.07px] leading-[1.2]">
                            {selectedAgent.name}
                          </p>
                          <div className="flex items-center justify-center ml-auto p-[4px]">
                              <div className="bg-[#0320f5] rounded-[2px] size-[18px] relative flex items-center justify-center">
                                <CheckSmall />
                              </div>
                          </div>
                      </div>
                    )}
                 </div>

                 {/* Comment Input */}
                 <div className="flex flex-col gap-[8px] w-full">
                    <p className="font-['Instrument_Sans'] font-normal text-[#777777] text-[12px] tracking-[0.06px]">
                      Add a comment (optional)
                    </p>
                    <textarea 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add why you are assigning them this conversation"
                      className="bg-[#f2f3f3] rounded-[12px] w-full p-[12px] h-[106px] resize-none border border-transparent focus:border-[#e3e8f0] outline-none font-['Instrument_Sans'] text-[14px] text-[#121212] placeholder:text-[#121212] placeholder:opacity-30"
                    />
                 </div>
              </div>

              {/* Footer Actions */}
              <div className="flex gap-[8px] items-center justify-end w-full p-[16px] pt-0">
                <button 
                  onClick={handleCancel} // Should this go back? Figma says "Cancel". I'll stick to Cancel.
                  className="bg-[#f4f7f8] px-[10px] py-[6px] rounded-[4px] border border-[#e8edf0] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:bg-[#e8edf0] transition-colors"
                >
                  <span className="font-['Instrument_Sans'] font-semibold text-[#0320f5] text-[14px] tracking-[0.07px] leading-[1.2]">
                    Cancel
                  </span>
                </button>

                <button 
                  onClick={handleFinalAssign}
                  className="bg-[#0320f5] px-[10px] py-[6px] rounded-[4px] shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)] hover:bg-blue-700 transition-colors"
                >
                   <span className="font-['Instrument_Sans'] font-semibold text-[#fefefe] text-[14px] tracking-[0.07px] leading-[1.2]">
                    Assign
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
