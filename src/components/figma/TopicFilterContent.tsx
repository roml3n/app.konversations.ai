import { useState, useMemo } from 'react';
import { cn } from '../../lib/utils';
import svgPaths from '../../imports/svg-qtxf81v505';

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

interface TopicFilterContentProps {
  selectedTopics: string[];
  onTopicsChange: (topics: string[]) => void;
  onApply: () => void;
  onCancel?: () => void;
  className?: string;
}

const ALL_TOPICS = [
  "Topic 1",
  "Topic 2",
  "Topic 3",
  "Topic 4",
  "Topic 5",
  "Topic 6",
  "Topic 7",
  "Topic 8",
];

export function TopicFilterContent({ 
  selectedTopics, 
  onTopicsChange, 
  onApply, 
  className 
}: TopicFilterContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Internal state for the current selection before applying
  // But usually filter contents receive the current state. 
  // If we want "Apply" to confirm, we should probably keep local state.
  // The DateFilterContent did independent view states but `onRangeChange` updated parent state immediately? 
  // Let's check DateFilterContent again. 
  // It calls `onRangeChange` immediately on click. 
  // So "Apply" just closes the popover in the parent.
  // I will follow that pattern: assume `selectedTopics` is passed from parent and updating it updates parent state.
  // Or, strictly, "Apply" implies we commit changes then. 
  // But for now I'll mirror the DateFilter pattern where we update the state passed in.
  
  // Wait, DateFilterContent called `onRangeChange` on click. 
  // But typically "Apply" buttons mean "Commit these changes".
  // However, let's stick to the prop callback pattern.
  
  // Actually, to support "Cancel" or just clicking outside without applying, we usually need local state. 
  // But `DateFilterContent` seemed to update `range` prop directly via `onRangeChange`. 
  // I will do the same: direct update. 
  
  const filteredTopics = useMemo(() => {
    if (!searchQuery) return ALL_TOPICS;
    return ALL_TOPICS.filter(topic => 
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      onTopicsChange(selectedTopics.filter(t => t !== topic));
    } else {
      onTopicsChange([...selectedTopics, topic]);
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
          placeholder="Search for topics"
          className="bg-transparent border-none outline-none text-[14px] text-[#364153] placeholder:text-[#364153]/60 w-full font-['Instrument_Sans']"
        />
      </div>

      {/* Topics List */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[12px] text-[#6a7282] font-['Instrument_Sans'] leading-[1.2]">
          Recent topics
        </p>
        <div className="flex flex-col gap-[4px] w-full max-h-[200px] overflow-y-auto">
          {filteredTopics.map(topic => {
            const isSelected = selectedTopics.includes(topic);
            return (
              <button
                key={topic}
                onClick={() => toggleTopic(topic)}
                className="flex items-center gap-[8px] w-full hover:bg-gray-50 p-1 rounded cursor-pointer group"
              >
                {/* Checkbox */}
                <div className={cn(
                  "size-[18px] rounded-[2px] flex items-center justify-center shrink-0 transition-colors relative",
                  isSelected ? "bg-[#0320f5]" : "border-2 border-[#6a7282] group-hover:border-[#0320f5]"
                )}>
                  {isSelected && <CheckSmallIcon />}
                </div>
                
                {/* Label */}
                <span className="text-[14px] text-[#364153] font-['Instrument_Sans'] leading-[1.2] truncate">
                  {topic}
                </span>
              </button>
            );
          })}
          {filteredTopics.length === 0 && (
            <p className="text-[12px] text-gray-400 italic">No topics found</p>
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
