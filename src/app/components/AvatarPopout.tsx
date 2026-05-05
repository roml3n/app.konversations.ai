import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import svgPaths from "../imports/svg-wdq9h3f5w7";
import svgPathsPopover from "../imports/svg-a0u8fi40cf";

interface AvatarPopoutProps {
  className?: string;
}

export function AvatarPopout({ className = "" }: AvatarPopoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={popoverRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-muted border border-border rounded-lg w-10 h-10 flex items-center justify-center px-[3px] py-1 hover:bg-muted/80 transition-colors"
      >
        <div className="h-[15.273px] w-9">
          <div className="relative w-full h-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 14">
              <g id="Group">
                <g id="Group_2">
                  <path d={svgPaths.p30b83100} fill="var(--foreground)" id="Vector" />
                  <path d={svgPaths.p9a87b00} fill="var(--foreground)" id="Vector_2" />
                  <path d={svgPaths.p326fbec0} fill="var(--foreground)" id="Vector_3" />
                  <path d={svgPaths.p1712b280} fill="var(--foreground)" id="Vector_4" />
                </g>
                <g id="Group_3">
                  <path d={svgPaths.p20714d80} fill="var(--accent)" id="Vector_5" />
                  <path d={svgPaths.p1d2cbf00} fill="var(--accent)" id="Vector_6" />
                </g>
                <path d={svgPaths.pbd5fe00} fill="var(--accent)" id="Vector_7" />
              </g>
            </svg>
          </div>
        </div>
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-popover border border-border rounded-lg overflow-hidden z-50" style={{ boxShadow: 'var(--elevation-sm)' }}>
          {/* User Profile Section */}
          <div className="flex gap-2.5 items-start px-4 py-3 border-b border-border">
            <div className="flex items-center py-1 shrink-0">
              <div className="bg-accent/40 flex items-center justify-center rounded-full w-6 h-6 shrink-0">
                <span className="text-foreground text-sm leading-none mix-blend-color-burn">
                  J
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 shrink-0 w-[120px]">
              <div className="flex flex-col items-start w-full">
                <p className="text-popover-foreground text-sm w-full">
                  Jane Muthoni
                </p>
                <p className="text-popover-foreground/30 text-xs w-full">
                  jane@company.com
                </p>
              </div>
              <div className="bg-muted flex items-center justify-center px-2 py-1 rounded-lg">
                <p className="text-muted-foreground text-xs whitespace-nowrap">
                  Agent {'{'}$role{'}'}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-1 items-start justify-center p-1">
            <button className="w-full rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-1 px-3 py-3">
                <div className="relative shrink-0 w-6 h-6">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18px] h-[16.071px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
                      <g clipPath="url(#clip0_86_2374)">
                        <path d={svgPathsPopover.pce27d80} fill="var(--accent)" />
                      </g>
                      <defs>
                        <clipPath id="clip0_86_2374">
                          <rect fill="white" height="16.0714" width="18" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <span className="text-popover-foreground text-sm whitespace-nowrap">
                  Performance Dashboard
                </span>
              </div>
            </button>

            <button className="w-full rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-1 px-3 py-3">
                <div className="relative shrink-0 w-6 h-6">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPathsPopover.p3ecee200} fill="var(--accent)" />
                    </g>
                  </svg>
                </div>
                <span className="text-popover-foreground text-sm whitespace-nowrap">
                  My Learning
                </span>
              </div>
            </button>

            <button className="w-full rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-1 px-3 py-3">
                <div className="relative shrink-0 w-6 h-6">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[15.75px] h-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                      <g clipPath="url(#clip0_86_2362)">
                        <path d={svgPathsPopover.p1541a3f1} fill="var(--accent)" />
                      </g>
                      <defs>
                        <clipPath id="clip0_86_2362">
                          <rect fill="white" height="18" width="15.75" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <span className="text-popover-foreground text-sm whitespace-nowrap">
                  Notifications
                </span>
              </div>
            </button>

            <button className="w-full rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-1 px-3 py-3">
                <div className="relative shrink-0 w-6 h-6">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[15.75px] h-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                      <g clipPath="url(#clip0_86_2371)">
                        <path d={svgPathsPopover.p8ed60f1} fill="var(--accent)" />
                      </g>
                      <defs>
                        <clipPath id="clip0_86_2371">
                          <rect fill="white" height="18" width="15.75" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <span className="text-popover-foreground text-sm whitespace-nowrap">
                  Security
                </span>
              </div>
            </button>
          </div>

          {/* Logout */}
          <div className="border-t border-border">
            <div className="flex flex-col items-start p-1">
              <button className="w-full h-12 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center gap-1 px-3 py-4">
                  <div className="relative shrink-0 w-6 h-6">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g>
                        <path d={svgPathsPopover.p29914600} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <path d="M16 17L21 12L16 7" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <path d="M21 12H9" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </g>
                    </svg>
                  </div>
                  <span className="text-popover-foreground text-sm whitespace-nowrap">
                    Log out
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}