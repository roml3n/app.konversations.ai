import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faChartPie,
  faInbox,
  faChevronRight,
  faArrowUp,
  faArrowDown,
  faArrowTurnDown,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { useAskKonversations } from '../contexts/AskKonversationsContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  module: 'insights' | 'inbox' | 'conversations' | 'settings';
  moduleName: string;
  title: string;
  path: string;
}

// Mock search results - in production, this would use vector embeddings and keyword extraction
const mockSearchResults = (query: string): SearchResult[] => {
  const allResults: SearchResult[] = [
    {
      id: 'sentiment-distribution',
      module: 'insights',
      moduleName: 'Insights',
      title: 'Sentiment distribution',
      path: '/insights?tab=executive',
    },
    {
      id: 'sentiment-prediction',
      module: 'insights',
      moduleName: 'Insights',
      title: 'Sentiment prediction',
      path: '/insights?tab=executive',
    },
    {
      id: 'conversation-sentiment',
      module: 'conversations',
      moduleName: 'Conversation',
      title: 'Sentimental Customer After Refund',
      path: '/conversations',
    },
    {
      id: 'channel-performance',
      module: 'insights',
      moduleName: 'Insights',
      title: 'Channel performance',
      path: '/insights?tab=channel',
    },
    {
      id: 'inbox-messages',
      module: 'inbox',
      moduleName: 'Inbox',
      title: 'Messages',
      path: '/inbox',
    },
  ];

  if (!query) return [];

  return allResults.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.moduleName.toLowerCase().includes(query.toLowerCase())
  );
};

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { openDrawer } = useAskKonversations();

  const searchResults = mockSearchResults(searchQuery);
  const hasResults = searchResults.length > 0;

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    // Reset state when closing
    if (!isOpen) {
      setSearchQuery('');
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          if (searchQuery) {
            // Clear query on first ESC
            setSearchQuery('');
            setSelectedIndex(-1);
          } else {
            // Close on second ESC
            onClose();
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < searchResults.length ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > -1 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex === -1 && searchQuery) {
            // Open AI chat experience (future implementation)
            openDrawer(searchQuery);
            onClose();
          } else if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
            // Navigate to selected result
            const result = searchResults[selectedIndex];
            navigate(result.path);
            onClose();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, searchQuery, selectedIndex, searchResults, navigate, onClose, openDrawer]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    onClose();
  };

  const handleAskKonversationsClick = () => {
    // Future: Open AI chat experience
    openDrawer(searchQuery);
    onClose();
  };

  const getModuleIcon = (module: string) => {
    switch (module) {
      case 'insights':
        return faChartPie;
      case 'inbox':
      case 'conversations':
        return faInbox;
      default:
        return faMagnifyingGlass;
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh]"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[600px] mx-4 bg-white rounded-2xl shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] border border-[#edf1f4] overflow-hidden"
      >
        {/* Content Container */}
        <div className="flex flex-col">
          {/* Search Bar and Content */}
          <div className="flex flex-col gap-3 p-3">
            {/* Search Input */}
            <div
              className={`relative w-full bg-[#f1f4f6] rounded-lg h-10 ${
                searchQuery ? 'border-[1.5px] border-[#5258fe]' : 'border-[1.5px] border-[#e8edf0]'
              }`}
            >
              <div className="flex items-center h-full px-2 gap-2">
                <div className="flex items-center justify-center w-4 h-4 shrink-0">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="w-3.5 h-3.5 text-[#7A8890]"
                  />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedIndex(-1);
                  }}
                  placeholder="Search or ask for anything..."
                  className="flex-1 bg-transparent border-none outline-none text-[var(--text-sm)] text-[#1e2939] placeholder:text-[#1e2939] placeholder:opacity-50 font-['Instrument_Sans',sans-serif] font-normal"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </div>

            {/* Results */}
            {searchQuery && hasResults && (
              <div className="flex flex-col gap-3">
                {/* Ask Konversations - AI Chat Entry */}
                <button
                  onClick={handleAskKonversationsClick}
                  className={`relative rounded-lg w-full transition-colors ${
                    selectedIndex === -1 ? 'ring-2 ring-[#5258fe]' : ''
                  }`}
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 564 41\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(19.731 10.757 -8.1338 19.623 5.9304 3.0943)\"><stop stop-color=\"rgba(205,211,254,1)\" offset=\"0\"/><stop stop-color=\"rgba(204,255,242,1)\" offset=\"0.28588\"/><stop stop-color=\"rgba(241,244,246,1)\" offset=\"0.98083\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(241, 244, 246) 0%, rgb(241, 244, 246) 100%)",
                  }}
                >
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-between px-2 py-3 w-full">
                      <div className="flex gap-1 items-center">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="w-4 h-4 text-[#6A7282]"
                        />
                        <p
                          className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-sm)] text-[#1e2939] leading-[1.2] tracking-[0.07px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          Ask Konversations "{searchQuery}"
                        </p>
                      </div>
                      <div className="bg-[#e5e7eb] flex items-center justify-center px-1 py-1 rounded border border-[rgba(255,255,255,0.05)]">
                        <p
                          className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-sm)] text-[#6a7282] leading-[1.2] tracking-[0.07px]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          ⌘+Enter
                        </p>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Search Results Section */}
                <div className="flex flex-col gap-[7px]">
                  <p
                    className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-xs)] text-[#6a7282] leading-[1.2] tracking-[0.06px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Search results
                  </p>
                  <div className="flex flex-col gap-1">
                    {searchResults.map((result, index) => (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`relative rounded-lg w-full transition-colors hover:bg-[#f4f7f8] ${
                          selectedIndex === index ? 'bg-[#f4f7f8]' : ''
                        }`}
                      >
                        <div className="flex flex-row items-center">
                          <div className="flex gap-1 items-center px-2 py-3 w-full">
                            <FontAwesomeIcon
                              icon={getModuleIcon(result.module)}
                              className="w-4 h-4 text-[#7A8890]"
                            />
                            <p
                              className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-sm)] text-[#1e2939] opacity-50 leading-[1.2] tracking-[0.07px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              Go to {result.moduleName}
                            </p>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="w-4 h-4 text-[#7A8890] opacity-50"
                            />
                            <p
                              className="font-['Instrument_Sans',sans-serif] font-medium text-[var(--text-sm)] text-[#1e2939] leading-[1.2] tracking-[0.07px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              {result.title}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!searchQuery && (
              <div className="w-full rounded-lg">
                <div className="flex flex-col items-center p-6 gap-3">
                  {/* Icon */}
                  <div className="flex items-center justify-center bg-[#f4f7f8] rounded-lg p-3 w-14 h-14">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="w-8 h-8 text-[#7A8890]"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-2 items-center w-full max-w-[364px]">
                    <p
                      className="font-['Instrument_Sans',sans-serif] font-medium text-[var(--text-sm)] text-[#1e2939] leading-[1.2] tracking-[0.07px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Start typing
                    </p>
                    <div
                      className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-sm)] text-[#6a7282] leading-[1.2] tracking-[0.07px] text-center"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      <p className="mb-0">
                        Type anything to find items, quickly jump to modules and
                        settings, or to chat with your data.
                      </p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="mb-0">
                        Try "What are the top issues this week?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* No Results */}
            {searchQuery && !hasResults && (
              <div className="w-full rounded-lg p-6">
                <p className="text-[var(--text-sm)] text-[#6a7282] text-center font-['Instrument_Sans',sans-serif]">
                  No results found for "{searchQuery}"
                </p>
              </div>
            )}
          </div>

          {/* Bottom Keyboard Shortcuts */}
          {searchQuery && (
            <div className="bg-[#f4f7f8] w-full">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex gap-6 items-center">
                  {/* Arrow keys to move */}
                  <div className="flex gap-1 items-center">
                    <div className="bg-[#e5e7eb] flex items-center justify-center p-1 rounded border border-[rgba(255,255,255,0.05)]">
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className="w-3.5 h-3.5 text-[#7A8890]"
                      />
                    </div>
                    <div className="bg-[#e5e7eb] flex items-center justify-center p-1 rounded border border-[rgba(255,255,255,0.05)]">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="w-3.5 h-3.5 text-[#7A8890]"
                      />
                    </div>
                    <p
                      className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-sm)] text-[#6a7282] leading-[1.2] tracking-[0.07px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      to move
                    </p>
                  </div>

                  {/* Enter to select */}
                  <div className="flex gap-1 items-center">
                    <div className="bg-[#e5e7eb] flex items-center justify-center p-1 rounded border border-[rgba(255,255,255,0.05)]">
                      <FontAwesomeIcon
                        icon={faArrowTurnDown}
                        className="w-3.5 h-3.5 text-[#7A8890] rotate-90"
                      />
                    </div>
                    <p
                      className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-sm)] text-[#6a7282] leading-[1.2] tracking-[0.07px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      to select
                    </p>
                  </div>
                </div>

                {/* ESC to clear */}
                <div className="flex gap-1 items-center">
                  <div className="bg-[#e5e7eb] flex items-center justify-center px-1 py-1 rounded border border-[rgba(255,255,255,0.05)]">
                    <p
                      className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-xs)] text-[#6a7282] leading-[1.2] tracking-[0.06px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      ESC
                    </p>
                  </div>
                  <p
                    className="font-['Instrument_Sans',sans-serif] font-normal text-[var(--text-sm)] text-[#6a7282] leading-[1.2] tracking-[0.07px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    to clear
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

// Hook for keyboard shortcuts
export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev); // Toggle instead of just opening
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
}