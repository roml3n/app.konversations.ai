import { useState, useRef, useEffect } from 'react';
import svgPaths from '../../imports/svg-1kk5wkp41h';

interface TablePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  itemsPerPageOptions?: number[];
}

export function TablePagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [5, 10, 20, 50, 100],
}: TablePaginationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // Filter items per page options to only show valid options
  const validItemsPerPageOptions = itemsPerPageOptions.filter(option => option <= totalItems);
  // Ensure at least the smallest option is available
  if (validItemsPerPageOptions.length === 0 && itemsPerPageOptions.length > 0) {
    validItemsPerPageOptions.push(itemsPerPageOptions[0]);
  }

  const handlePrevious = () => {
    if (canGoPrevious) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onPageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageSelect = (value: number) => {
    onItemsPerPageChange(value);
    setIsDropdownOpen(false);
    // Reset to first page when changing items per page
    onPageChange(1);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  return (
    <div className="content-stretch flex items-center justify-between relative w-full">
      {/* Left side: Info and items per page selector */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <p
          className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {startItem} - {endItem} of {totalItems}
        </p>
        <p
          className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          •
        </p>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <p
            className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Results per page
          </p>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#f3f4f6] content-stretch flex gap-[4px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[#e5e7eb] transition-colors"
            >
              <p
                className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {itemsPerPage}
              </p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g>
                    <path d={svgPaths.p3faa2700} fill="#6A7282" />
                  </g>
                </svg>
              </div>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-1 bg-white border border-[#d1d5dc] rounded-[8px] shadow-lg z-10 min-w-[60px]">
                {itemsPerPageOptions.map((option) => {
                  const isDisabled = option > totalItems;
                  const isSelected = option === itemsPerPage;
                  
                  return (
                    <button
                      key={option}
                      onClick={() => !isDisabled && handleItemsPerPageSelect(option)}
                      disabled={isDisabled}
                      className={`w-full px-[12px] py-[8px] text-left transition-colors first:rounded-t-[8px] last:rounded-b-[8px] ${
                        isDisabled
                          ? 'opacity-40 cursor-not-allowed'
                          : 'hover:bg-[#f3f4f6] cursor-pointer'
                      } ${isSelected ? 'bg-[#f3f4f6]' : ''}`}
                    >
                      <p
                        className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#6a7282] text-[12px] tracking-[0.06px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {option}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right side: Navigation controls */}
      <div className="bg-[#f3f4f6] content-stretch flex gap-[4px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0">
        <button
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          className={`relative shrink-0 size-[16px] ${
            canGoPrevious ? 'cursor-pointer hover:opacity-70' : 'opacity-30 cursor-not-allowed'
          } transition-opacity`}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g>
              <path d={svgPaths.p4d7d300} fill="#99A1AF" />
            </g>
          </svg>
        </button>

        <p
          className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {currentPage}
        </p>

        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`relative shrink-0 size-[16px] ${
            canGoNext ? 'cursor-pointer hover:opacity-70' : 'opacity-30 cursor-not-allowed'
          } transition-opacity`}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g>
              <path d={svgPaths.p4376000} fill="#99A1AF" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}