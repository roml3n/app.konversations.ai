import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface IntegrationCardProps {
  icon: string;
  name: string;
  description: string;
  isConnected: boolean;
  onConnect: () => void;
}

export function IntegrationCard({
  icon,
  name,
  description,
  isConnected,
  onConnect,
}: IntegrationCardProps) {
  return (
    <div className="bg-[#f2f3f3] relative rounded-lg">
      <div className="flex flex-col gap-[10px] items-start p-2 relative rounded-[inherit]">
        {/* Top Row - Icon and Status/Connect Button */}
        <div className="flex items-center justify-between w-full">
          {/* Icon */}
          <div className="bg-[#fefefe] relative rounded-full shrink-0 size-9">
            <div className="overflow-clip relative rounded-[inherit] size-full flex items-center justify-center">
              <img
                alt={name}
                className="w-6 h-6 object-contain pointer-events-none"
                src={icon}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-full"
            />
          </div>

          {/* Connected Badge or Connect Button */}
          {isConnected ? (
            <div className="bg-[#e9e9ff] flex gap-1 items-center justify-center px-2 py-1 rounded-[5px] shrink-0">
              <div className="bg-[#0320f5] rounded-full shrink-0 size-[6px]" />
              <p
                className="text-[#0320f5]"
                style={{
                  fontSize: "12px",
                  fontWeight: "var(--font-weight-semibold)",
                  lineHeight: "1.2",
                  letterSpacing: "0.06px",
                }}
              >
                Connected
              </p>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onConnect();
              }}
              className="bg-[#fefefe] text-[#0320f5] hover:opacity-80 transition-opacity px-2 py-1 rounded-[5px] border border-[#e3e3e4] relative z-10"
              style={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-semibold)",
                lineHeight: "1.2",
                letterSpacing: "0.06px",
              }}
            >
              + Connect
            </button>
          )}
        </div>

        {/* Content - Title and Description */}
        <div className="flex flex-col gap-2 items-start w-full text-[#5e6060]">
          <p
            style={{
              fontSize: "14px",
              fontWeight: "var(--font-weight-semibold)",
              lineHeight: "1.2",
              letterSpacing: "0.07px",
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-normal)",
              lineHeight: "1.2",
              letterSpacing: "0.06px",
            }}
          >
            {description}
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}