import { useState } from 'react';
import { Link } from 'react-router-dom';
import svgPathsExpanded from '../imports/svg-xwi0g5shfp';
import svgPathsCollapsed from '../imports/svg-uicivvdl9e';

// Logo Component (Expanded)
function Logo() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-[122.027px]" data-name="Logo">
      <div className="absolute bottom-[-0.03%] left-0 right-0 top-0" data-name="Layer 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 14">
          <g id="Layer 1">
            <path d={svgPathsExpanded.p212ad480} fill="white" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Menu Icons
function CaretLeftIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsExpanded.p24e3ee80} fill="#7A8890" />
    </svg>
  );
}

function CaretRightIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsCollapsed.p3f956780} fill="#7A8890" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsExpanded.p257c3080} fill="#7A8890" />
    </svg>
  );
}

function InsightsIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsExpanded.p32f535b0} fill="#7A8890" />
    </svg>
  );
}

function InboxIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsExpanded.p38a8d200} fill="#7A8890" />
    </svg>
  );
}

function ConversationsIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsExpanded.p2cd8f700} fill="#7A8890" />
    </svg>
  );
}

function LearningIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsExpanded.p213ea000} fill="#7A8890" />
    </svg>
  );
}

function WorkforceIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsExpanded.p1c3e4c00} fill="#7A8890" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <path d={svgPathsExpanded.pb07d7b0} fill="#7A8890" />
    </svg>
  );
}

const menuItems = [
  { id: 'insights', label: 'Insights', icon: InsightsIcon },
  { id: 'inbox', label: 'Inbox', icon: InboxIcon },
  { id: 'conversations', label: 'Conversations', icon: ConversationsIcon },
  { id: 'learning', label: 'Learning', icon: LearningIcon },
  { id: 'workforce', label: 'Workforce', icon: WorkforceIcon },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
];

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (id: string) => void;
}

export function Sidebar({ activeItem = 'insights', onItemClick }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div 
      className="bg-[#010a78] relative h-full transition-all duration-300" 
      style={{ width: isExpanded ? '196px' : '56px' }}
      data-name="Sidebar"
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center px-2 py-4 relative size-full pt-4 pr-0 pb-4 pl-2">
          {/* Top Section */}
          <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
            {/* Logo Header */}
            <div className={`relative rounded-[8px] shrink-0 w-full ${isExpanded ? '' : 'flex justify-center'}`}>
              <div className="flex flex-row items-center h-[32px]">
                <div className={`box-border content-stretch flex items-center ${isExpanded ? 'justify-between px-[8px]' : 'justify-center px-[4px]'} py-0 relative w-full`}>
                  {isExpanded && <Logo />}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center opacity-[0.56] p-[4px] relative shrink-0 hover:opacity-100 transition-opacity"
                  >
                    <div className="relative shrink-0 size-[14px]">
                      {isExpanded ? <CaretLeftIcon /> : <CaretRightIcon />}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className={`bg-[rgba(0,0,0,0.3)] box-border content-stretch flex items-center ${isExpanded ? 'justify-between p-[6px]' : 'justify-center p-[6px]'} relative rounded-[8px] shrink-0 w-full`}>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0">
                  <div className="relative shrink-0 size-[14px]">
                    <SearchIcon />
                  </div>
                </div>
                {isExpanded && (
                  <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.06px]">
                    Search
                  </p>
                )}
              </div>
              {isExpanded && (
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Frame 2">
                        <mask fill="white" id="path-1-inside-1_8_4917">
                          <path d={svgPathsExpanded.p1d1d6d00} />
                        </mask>
                        <path d={svgPathsExpanded.p1d1d6d00} fill="white" fillOpacity="0.1" />
                        <path d={svgPathsExpanded.p3a50b680} fill="white" fillOpacity="0.05" mask="url(#path-1-inside-1_8_4917)" />
                        <path d={svgPathsExpanded.p1b1c600} fill="white" id="â" opacity="0.6" />
                      </g>
                    </svg>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.1)] box-border border border-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[10px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0 size-[16px]">
                    <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.06px]">
                      K
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Menu Items */}
            <div className={`content-stretch flex flex-col gap-[8px] ${isExpanded ? 'items-start' : 'items-center'} relative shrink-0 w-full`}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    className={`relative rounded-[8px] shrink-0 w-full transition-colors ${ 
                      isActive 
                        ? 'bg-[rgba(255,255,255,0.1)]' 
                        : 'hover:bg-[rgba(255,255,255,0.1)]'
                    }`}
                  >
                    <div className="flex flex-row items-center size-full">
                      <div className={`box-border content-stretch flex items-center ${isExpanded ? 'justify-between' : 'justify-center'} p-[8px] relative w-full`}>
                        <div className={`${isExpanded ? 'basis-0 grow' : ''} content-stretch flex gap-[4px] items-center min-h-px min-w-px relative shrink-0`}>
                          <div className={`box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative shrink-0 ${isActive ? '' : 'opacity-[0.56]'}`}>
                            <div className="relative shrink-0 size-[14px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                <path 
                                  d={item.id === 'insights' ? svgPathsExpanded.p32f535b0 :
                                     item.id === 'inbox' ? svgPathsExpanded.p38a8d200 :
                                     item.id === 'conversations' ? svgPathsExpanded.p2cd8f700 :
                                     item.id === 'learning' ? svgPathsExpanded.p213ea000 :
                                     item.id === 'workforce' ? svgPathsExpanded.p1c3e4c00 :
                                     svgPathsExpanded.pb07d7b0} 
                                  fill={isActive ? '#01B386' : '#7A8890'} 
                                />
                              </svg>
                            </div>
                          </div>
                          {isExpanded && (
                            <p className={`font-['Instrument_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] ${isActive ? '' : 'opacity-60'}`}>
                              {item.label}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}