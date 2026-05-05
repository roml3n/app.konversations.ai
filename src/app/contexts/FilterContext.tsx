import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { MOCK_INSIGHTS, type Insight } from '../lib/mockData';
import { DateRange } from '../components/figma/DateFilterContent';
import { isWithinInterval, startOfDay, endOfDay } from 'date-fns';

interface FilterContextType {
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
  selectedAgents: string[];
  setSelectedAgents: (agents: string[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredInsights: Insight[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  // Default to last 30 days
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(),
    label: 'Last 30 days'
  });
  
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = useMemo(() => {
    return MOCK_INSIGHTS.filter(insight => {
      // Date Filter
      if (dateRange.from && dateRange.to) {
        const insightDate = new Date(insight.date);
        const start = startOfDay(dateRange.from);
        const end = endOfDay(dateRange.to);
        
        if (!isWithinInterval(insightDate, { start, end })) {
          return false;
        }
      }

      // Topic Filter
      if (selectedTopics.length > 0) {
        // Check if insight has at least one of the selected topics
        const hasTopic = insight.topicIds.some(id => selectedTopics.includes(id));
        if (!hasTopic) return false;
      }

      // Agent Filter
      if (selectedAgents.length > 0) {
        if (!selectedAgents.includes(insight.agentId)) return false;
      }

      // Search Query (optional implementation for the search bar)
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = insight.title.toLowerCase().includes(query);
        // Could add more search fields here if needed
        if (!matchesTitle) return false;
      }

      return true;
    });
  }, [dateRange, selectedTopics, selectedAgents, searchQuery]);

  return (
    <FilterContext.Provider value={{
      dateRange,
      setDateRange,
      selectedTopics,
      setSelectedTopics,
      selectedAgents,
      setSelectedAgents,
      searchQuery,
      setSearchQuery,
      filteredInsights
    }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
