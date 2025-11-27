import { useState, useMemo } from 'react';
import { cn } from '../../lib/utils';
import svgPaths from '../../imports/svg-o0tf84h1yh';
import { MOCK_AGENTS } from '../../lib/mockData';

import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

// --- Icons ---

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
        <path d={svgPaths.p257c3080} fill="currentColor" className="text-[#6A7282]" />
      </svg>
    </div>
  );
}

function CheckSmallIcon() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p1f089400} fill="currentColor" className="text-white" />
      </svg>
    </div>
  );
}

// --- Types ---

interface AgentFilterContentProps {
  selectedAgents: string[]; // IDs of selected agents
  onAgentsChange: (agentIds: string[]) => void;
  onApply: () => void;
  className?: string;
}

export function AgentFilterContent({ 
  selectedAgents, 
  onAgentsChange, 
  onApply, 
  className 
}: AgentFilterContentProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = useMemo(() => {
    if (!searchQuery) return MOCK_AGENTS;
    return MOCK_AGENTS.filter(agent => 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleAgent = (agentId: string) => {
    if (selectedAgents.includes(agentId)) {
      onAgentsChange(selectedAgents.filter(id => id !== agentId));
    } else {
      onAgentsChange([...selectedAgents, agentId]);
    }
  };

  return (
    <div className={cn("bg-white rounded-[16px] p-[16px] flex flex-col gap-[24px] w-[280px] shadow-lg border border-gray-100", className)}>
      
      {/* Search Bar */}
      <div className="bg-gray-100 rounded-[8px] w-full px-[6px] py-[6px] flex items-center gap-[4px]">
        <div className="p-[4px] opacity-50">
          <SearchIcon />
        </div>
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for agents"
          className="bg-transparent border-none outline-none text-[14px] text-[#364153] placeholder:text-[#364153]/60 w-full font-['Instrument_Sans']"
        />
      </div>

      {/* Agents List */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[12px] text-[#6a7282] font-['Instrument_Sans'] leading-[1.2]">
          Agents
        </p>
        <div className="flex flex-col gap-[8px] w-full max-h-[200px] overflow-y-auto">
          {filteredAgents.map(agent => {
            const isSelected = selectedAgents.includes(agent.id);
            return (
              <button
                key={agent.id}
                onClick={() => toggleAgent(agent.id)}
                className="flex items-center gap-[8px] w-full hover:bg-gray-50 p-1 rounded cursor-pointer group"
              >
                {/* Checkbox */}
                <div className={cn(
                  "size-[18px] rounded-[2px] flex items-center justify-center shrink-0 transition-colors relative",
                  isSelected ? "bg-[#0320f5]" : "border-2 border-[#6a7282] group-hover:border-[#0320f5]"
                )}>
                  {isSelected && <CheckSmallIcon />}
                </div>

                {/* Avatar */}
                {agent.avatarUrl ? (
                  <div className="rounded-full size-[20px] overflow-hidden shrink-0">
                     <ImageWithFallback 
                       src={agent.avatarUrl} 
                       alt={agent.name} 
                       className="size-full object-cover"
                     />
                  </div>
                ) : (
                  <div 
                    className="rounded-full size-[20px] flex items-center justify-center shrink-0"
                    style={{ backgroundColor: agent.color }}
                  >
                     <span className="text-[10px] font-['Instrument_Sans'] text-[#1e2939] mix-blend-color-burn leading-none">
                       {agent.initial}
                     </span>
                  </div>
                )}
                
                {/* Name */}
                <span className="text-[14px] text-[#364153] font-['Instrument_Sans'] leading-[1.2] truncate">
                  {agent.name}
                </span>
              </button>
            );
          })}
          {filteredAgents.length === 0 && (
            <p className="text-[12px] text-gray-400 italic">No agents found</p>
          )}
        </div>
      </div>

      {/* Apply Button */}
      <div className="flex justify-end">
        <button 
          onClick={onApply}
          className="bg-[#0320f5] text-white text-[14px] font-semibold font-['Instrument_Sans'] rounded-[4px] px-[16px] py-[9px] shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)] hover:bg-[#0320f5]/90 transition-colors"
        >
          Apply
        </button>
      </div>

    </div>
  );
}
