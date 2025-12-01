import React from "react";
import { TagIcon } from "./icons";

// Icons needed for this component
const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M11.8937 10.6602C11.7592 10.6602 11.6303 10.6075 11.5352 10.5138C11.4401 10.42 11.3867 10.2928 11.3867 10.1602V5.36688L4.47708 12.1802C4.4151 12.246 4.33627 12.2941 4.24889 12.3195C4.1615 12.3448 4.06881 12.3465 3.98056 12.3242C3.89232 12.302 3.81179 12.2567 3.74747 12.1931C3.68315 12.1295 3.63741 12.05 3.61507 11.9629C3.59248 11.876 3.59406 11.7847 3.61964 11.6985C3.64522 11.6124 3.69385 11.5347 3.76043 11.4736L10.67 4.66022H5.80897C5.67448 4.66022 5.54551 4.60754 5.45042 4.51377C5.35533 4.42 5.3019 4.29283 5.3019 4.16022C5.3019 4.02761 5.35533 3.90043 5.45042 3.80666C5.54551 3.7129 5.67448 3.66022 5.80897 3.66022H11.8937C12.0282 3.66022 12.1572 3.7129 12.2523 3.80666C12.3474 3.90043 12.4008 4.02761 12.4008 4.16022V10.1602C12.4008 10.2928 12.3474 10.42 12.2523 10.5138C12.1572 10.6075 12.0282 10.6602 11.8937 10.6602Z"
      fill="#99A1AF"
    />
  </svg>
);

const EllipsisIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2.4 8C2.4 7.2275 3.0275 6.6 3.8 6.6C4.5725 6.6 5.2 7.2275 5.2 8C5.2 8.7725 4.5725 9.4 3.8 9.4C3.0275 9.4 2.4 8.7725 2.4 8ZM6.6 8C6.6 7.2275 7.2275 6.6 8 6.6C8.7725 6.6 9.4 7.2275 9.4 8C9.4 8.7725 8.7725 9.4 8 9.4C7.2275 9.4 6.6 8.7725 6.6 8ZM12.2 6.6C12.9725 6.6 13.6 7.2275 13.6 8C13.6 8.7725 12.9725 9.4 12.2 9.4C11.4275 9.4 10.8 8.7725 10.8 8C10.8 7.2275 11.4275 6.6 12.2 6.6Z"
      fill="#99A1AF"
    />
  </svg>
);

interface ConversationTopicHeaderProps {
  title: string;
  tags?: string[];
  className?: string;
  onLogToCRM?: () => void;
  onToggleDetails?: () => void;
}

export function ConversationTopicHeader({
  title,
  tags = [],
  className,
  onLogToCRM,
  onToggleDetails,
}: ConversationTopicHeaderProps) {
  return (
    <div className={`h-[52px] border-b border-[#e3e3e4] flex items-center justify-between px-4 bg-white shrink-0 ${className}`}>
      <div className="flex items-center gap-4">
        <h2 className="text-[18px] font-['Instrument_Sans'] font-semibold text-[#202121] truncate">
          {title}
        </h2>
        {tags.length > 0 && (
            <div className="flex items-center gap-2">
                {tags.map((tag, index) => (
                    <div key={index} className="flex items-center gap-1 bg-[#fcf6e9] px-1.5 py-0.5 rounded-[6px]">
                        <div className="w-3 h-3 text-[#E2C148]">
                        <TagIcon />
                        </div>
                        <span className="text-[12px] font-['Instrument_Sans'] text-[#404141]">
                        {tag}
                        </span>
                    </div>
                ))}
            </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        {onLogToCRM && (
          <button
            onClick={onLogToCRM}
            className="flex items-center gap-1 px-2 py-1 bg-white border border-[#edf1f4] rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <span className="text-[12px] font-['Instrument_Sans'] font-semibold text-[#4f595e]">
              Log to CRM
            </span>
            <ArrowUpRightIcon />
          </button>
        )}
        {onToggleDetails && (
          <button
            onClick={onToggleDetails}
            className="p-1 bg-white border border-[#edf1f4] rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <EllipsisIcon />
          </button>
        )}
      </div>
    </div>
  );
}
