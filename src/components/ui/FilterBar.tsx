import { ReactNode } from 'react';
import { useFilters } from '../../contexts/FilterContext';

interface FilterBarProps {
  children: ReactNode;
  showSearch?: boolean;
  showClearButton?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onClearFilters?: () => void;
}

export function FilterBar({
  children,
  showSearch = false,
  showClearButton = false,
  searchPlaceholder = 'Search...',
  searchValue,
  onSearchChange,
  onClearFilters,
}: FilterBarProps) {
  // Use FilterContext only if search/clear handlers aren't provided
  const filterContext = useFilters();
  
  const searchQuery = searchValue !== undefined ? searchValue : (filterContext?.searchQuery || '');
  const handleSearchChange = onSearchChange || filterContext?.setSearchQuery || (() => {});
  
  const handleClearFilters = onClearFilters || (() => {
    if (filterContext) {
      filterContext.setDateRange({
        from: new Date(new Date().setDate(new Date().getDate() - 30)),
        to: new Date(),
        label: 'Last 30 days'
      });
      filterContext.setSelectedTopics([]);
      filterContext.setSelectedAgents([]);
      filterContext.setSearchQuery('');
    }
  });

  return (
    <div className="content-stretch flex items-center justify-between relative w-full bg-background px-6 py-3">
      <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
        {showSearch && (
          <div className="basis-0 bg-muted grow max-w-[32px] min-h-px min-w-[32px] rounded-lg shrink-0">
            <div className="flex flex-row items-center max-w-inherit min-w-inherit size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center max-w-inherit min-w-inherit p-[8px] relative w-full">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="search">
                        <path d="M14.6667 14.6667L11.3333 11.3333M2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333Z" fill="currentColor" className="text-foreground" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {children}
      </div>
      {showClearButton && (
        <button
          onClick={handleClearFilters}
          className="bg-gradient-to-b box-border content-stretch flex from-white gap-[3px] items-center px-[10px] py-[8px] relative rounded-lg shrink-0 to-muted border border-border hover:shadow-md transition-all"
        >
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[14px]">
              <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                <path
                  d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                />
              </svg>
            </div>
            <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-xs text-nowrap text-foreground tracking-[0.06px]">
              Clear filters
            </p>
          </div>
        </button>
      )}
    </div>
  );
}