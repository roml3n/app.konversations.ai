import { useState } from 'react';
import { format } from 'date-fns';
import svgPaths from '../imports/svg-qweb8b8w3s';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { DateFilterContent, type DateRange } from "./figma/DateFilterContent";
import { TopicFilterContent } from "./figma/TopicFilterContent";
import { AgentFilterContent } from "./figma/AgentFilterContent";
import { MOCK_AGENTS, MOCK_TOPICS } from "../lib/mockData";
import { useFilters } from "../contexts/FilterContext";

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path d={svgPaths.pba9f400} fill="currentColor" className="text-foreground" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="basis-0 bg-muted grow max-w-[32px] min-h-px min-w-[32px] rounded-lg shrink-0">
      <div className="flex flex-row items-center max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center max-w-inherit min-w-inherit p-[8px] relative w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="calendar" opacity="0.6">
          <path d={svgPaths.p10e710c0} fill="currentColor" className="text-muted-foreground" />
        </g>
      </svg>
    </div>
  );
}

function CaretDownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-down">
          <path d={svgPaths.p3faa2700} fill="currentColor" className="text-muted-foreground/60" />
        </g>
      </svg>
    </div>
  );
}

function DateFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const { dateRange, setDateRange } = useFilters();

  const handleApply = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const getButtonText = () => {
    if (dateRange.from && dateRange.to) {
      return `${format(dateRange.from, 'MMM d, yyyy')} - ${format(dateRange.to, 'MMM d, yyyy')}`;
    }
    if (dateRange.label && dateRange.label !== 'Custom') {
      return dateRange.label;
    }
    return 'Select dates';
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="bg-card box-border content-stretch flex gap-2 items-center px-[10px] py-2 relative rounded-lg shrink-0 border border-border hover:bg-muted/50 transition-colors">
          <div className="content-stretch flex gap-x-1 items-center relative shrink-0">
            <CalendarIcon />
            <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-xs text-nowrap text-foreground tracking-[0.06px]">
              {getButtonText()}
            </p>
          </div>
          <CaretDownIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto border-none bg-transparent shadow-none" align="start">
        <DateFilterContent 
          range={dateRange} 
          onRangeChange={setDateRange} 
          onApply={handleApply} 
          onCancel={handleCancel} className="rounded-[4px]"
        />
      </PopoverContent>
    </Popover>
  );
}

function TopicsIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="square-poll-horizontal">
          <path d={svgPaths.p3b41c400} fill="currentColor" className="text-muted-foreground" />
        </g>
      </svg>
    </div>
  );
}

function TopicsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedTopics, setSelectedTopics } = useFilters();

  const handleApply = () => {
    setIsOpen(false);
  };

  const getButtonText = () => {
    if (selectedTopics.length === 0) return "All topics";
    if (selectedTopics.length === 1) {
      const topic = MOCK_TOPICS.find(t => t.id === selectedTopics[0]);
      return topic ? topic.name : "Unknown Topic";
    }
    return `${selectedTopics.length} topics`;
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="bg-card box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-lg shrink-0 border border-border hover:bg-muted/50 transition-colors">
          <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
            <TopicsIcon />
            <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-xs text-nowrap text-foreground tracking-[0.06px]">
              Topics
            </p>
          </div>
          <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-xs text-nowrap text-foreground tracking-[0.06px]">
            {getButtonText()}
          </p>
          <CaretDownIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto border-none bg-transparent shadow-none" align="start">
        <TopicFilterContent 
          selectedTopics={selectedTopics} 
          onTopicsChange={setSelectedTopics} 
          onApply={handleApply}
        />
      </PopoverContent>
    </Popover>
  );
}

function AgentIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="profile">
          <path d={svgPaths.p314d5100} fill="currentColor" className="text-muted-foreground" />
        </g>
      </svg>
    </div>
  );
}

function AgentFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedAgents, setSelectedAgents } = useFilters();

  const handleApply = () => {
    setIsOpen(false);
  };

  const getButtonText = () => {
    if (selectedAgents.length === 0) return "All agents";
    if (selectedAgents.length === 1) {
       const agent = MOCK_AGENTS.find(a => a.id === selectedAgents[0]);
       return agent ? agent.name : "Unknown Agent";
    }
    return `${selectedAgents.length} agents`;
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="bg-card box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-lg shrink-0 border border-border hover:bg-muted/50 transition-colors">
          <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
            <AgentIcon />
            <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-xs text-nowrap text-foreground tracking-[0.06px]">
              Agent
            </p>
          </div>
          <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-xs text-nowrap text-foreground tracking-[0.06px]">
            {getButtonText()}
          </p>
          <CaretDownIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto border-none bg-transparent shadow-none" align="start">
        <AgentFilterContent 
          selectedAgents={selectedAgents} 
          onAgentsChange={setSelectedAgents} 
          onApply={handleApply}
        />
      </PopoverContent>
    </Popover>
  );
}

function ExportIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-right-to-file">
          <path d={svgPaths.p2c9f8300} fill="currentColor" className="text-muted-foreground" />
        </g>
      </svg>
    </div>
  );
}

function ExportButton() {
  const { setDateRange, setSelectedTopics, setSelectedAgents, setSearchQuery } = useFilters();

  return (
    <button 
      onClick={() => {
        setDateRange({
          from: new Date(new Date().setDate(new Date().getDate() - 30)),
          to: new Date(),
          label: 'Last 30 days'
        });
        setSelectedTopics([]);
        setSelectedAgents([]);
        setSearchQuery("");
      }}
      className="bg-gradient-to-b box-border content-stretch flex from-white gap-[3px] items-center px-[10px] py-[8px] relative rounded-lg shrink-0 to-muted border border-border hover:shadow-md transition-all"
    >
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[14px]">
          <svg className="block size-full" fill="none" viewBox="0 0 14 14">
            <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground" />
          </svg>
        </div>
        <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-xs text-nowrap text-foreground tracking-[0.06px]">
          Clear filters
        </p>
      </div>
    </button>
  );
}

export function SubHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full bg-background px-6 py-3">
      <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
        <SearchBar />
        <DateFilter />
        <TopicsFilter />
        <AgentFilter />
      </div>
      <ExportButton />
    </div>
  );
}
