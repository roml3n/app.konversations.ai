import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPhone,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { AvatarPopout } from "./AvatarPopout";
import { useNavigation } from "../contexts/NavigationContext";
import { useState } from "react";
import { AskKonversationsDrawer } from "./AskKonversationsDrawer";
import svgPaths from "../imports/svg-m11qckudhc";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const { canGoBack, canGoForward, goBack, goForward } = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex w-full items-center justify-between border-b border-border bg-card px-6 py-2">
        {/* Left side: Navigation arrows + Title */}
        <div className="flex items-center gap-6">
          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={goBack}
              disabled={!canGoBack}
              className={`transition-opacity ${
                canGoBack
                  ? "opacity-100 hover:opacity-70 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-5 h-5 text-muted-foreground"
              />
            </button>
            <button
              onClick={goForward}
              disabled={!canGoForward}
              className={`transition-opacity ${
                canGoForward
                  ? "opacity-100 hover:opacity-70 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-5 h-5 text-muted-foreground"
              />
            </button>
          </div>

          {/* Title */}
          <span className="text-foreground font-semibold font-normal">
            {title}
          </span>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-center gap-4">
          {/* Ask Konversations Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="bg-white flex gap-1 items-center justify-center px-3 py-2 rounded-full border border-[#01f1b6] hover:bg-[#f9f9f9] transition-colors shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]"
          >
            <p className="font-['Instrument_Sans',sans-serif] font-semibold text-[var(--text-xs)] text-[#364153] leading-[1.2] tracking-[0.06px] whitespace-nowrap">
              Ask Konversations
            </p>
            <div className="relative shrink-0 size-[16px]">
              <div className="-translate-x-1/2 absolute aspect-[14.00075912475586/13.998863220214844] bottom-[10%] left-1/2 top-[10%]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 12.8017 12.8"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p6393c00}
                    fill="url(#paint0_linear_185_5507)"
                    fillOpacity="0.6"
                    fillRule="evenodd"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_185_5507"
                      x1="-7.63795e-08"
                      x2="12.8017"
                      y1="0.645793"
                      y2="12.1542"
                    >
                      <stop stopColor="#01F1B6" />
                      <stop offset="1" stopColor="#0320F5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </button>

          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-muted/80 transition-colors">
            <FontAwesomeIcon
              icon={faPhone}
              className="w-4 h-4 text-muted-foreground"
            />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-muted/80 transition-colors">
            <FontAwesomeIcon
              icon={faBell}
              className="w-4 h-4 text-muted-foreground"
            />
          </button>
          <AvatarPopout />
        </div>
      </div>

      {/* Drawer */}
      <AskKonversationsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}