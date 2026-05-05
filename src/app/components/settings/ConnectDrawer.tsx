import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faLink } from "@fortawesome/free-solid-svg-icons";

interface FormField {
  label: string;
  placeholder: string;
  type?: string;
}

interface ConnectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  appIcon: string;
  appName: string;
  appDescription: string;
  fields: FormField[];
  onConnect: () => void;
}

export function ConnectDrawer({
  isOpen,
  onClose,
  appIcon,
  appName,
  appDescription,
  fields,
  onConnect,
}: ConnectDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div
        className="absolute top-4 right-4 bottom-4 w-[440px] bg-white rounded-md shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-16 border-b border-[#e5e7eb] px-4 flex items-center justify-between shrink-0">
          <p
            className="text-[#121212]"
            style={{
              fontSize: "18px",
              fontWeight: "var(--font-weight-semibold)",
              lineHeight: "1.2",
              letterSpacing: "0.09px",
            }}
          >
            Connect an app
          </p>
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center text-[#7a7d7d] hover:text-[#121212] transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-9">
            {/* App Info Section */}
            <div className="flex flex-col gap-3">
              {/* App Icons with Link */}
              <div className="content-stretch flex gap-[-16px] items-center relative !w-fit">
                {/* App Icon */}
                <button className="block cursor-pointer relative rounded-[999px] shrink-0 size-[72px]">
                  <img
                    src={appIcon}
                    alt={appName}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full"
                  />
                  <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[999px]" />
                </button>

                {/* Konvrsations Icon */}
                <button className="block cursor-pointer relative rounded-[999px] shrink-0 size-[72px] bg-[#0320f5]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8">
                      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="4" height="24" rx="2" fill="white" x="6" y="4"/>
                        <rect width="4" height="16" rx="2" fill="white" x="14" y="8"/>
                        <rect width="4" height="20" rx="2" fill="white" x="22" y="6"/>
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[999px]" />
                </button>

                {/* Link Icon */}
                <div className="-translate-x-1/2 -translate-y-1/2  self-center absolute bg-[#fefefe] content-stretch flex h-[24px] items-center justify-center left-1/2 rounded-[999px] top-1/2 w-[23px] z-10">
                  <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[999px]" />
                  <FontAwesomeIcon
                    icon={faLink}
                    className="w-3 h-3 text-[#7a7d7d]"
                  />
                </div>
              </div>

              {/* App Description */}
              <div className="flex flex-col gap-2">
                <p
                  className="text-[#121212]"
                  style={{
                    fontSize: "18px",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "1.2",
                    letterSpacing: "0.09px",
                  }}
                >
                  Add {appName} to Konvrsations
                </p>
                <p
                  className="text-[#5e6060]"
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-normal)",
                    lineHeight: "1.2",
                    letterSpacing: "0.07px",
                  }}
                >
                  {appDescription}
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-[19px]">
              {fields.map((field, index) => (
                <div key={index} className="flex flex-col gap-2 h-[72px]">
                  <label
                    className="text-[#777]"
                    style={{
                      fontSize: "14px",
                      fontWeight: "var(--font-weight-normal)",
                      lineHeight: "1.2",
                      letterSpacing: "0.07px",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    className="h-12 bg-[#f4f7f8] border border-[#d6d7ff] rounded-xl px-3 text-[#292f32] placeholder:text-[#292f32] placeholder:opacity-30"
                    style={{
                      fontSize: "14px",
                      fontWeight: "var(--font-weight-normal)",
                      lineHeight: "1.2",
                      letterSpacing: "0.07px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-[#f4f7f8] border border-[#e8edf0] rounded px-4 py-[9px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:bg-[#e8edf0] transition-colors text-[#0320f5]"
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-semibold)",
                lineHeight: "1.2",
                letterSpacing: "0.07px",
              }}
            >
              Cancel
            </button>
            <button
              onClick={onConnect}
              className="bg-[#0320f5] text-[#fefefe] rounded px-4 py-[9px] hover:opacity-90 transition-opacity"
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-semibold)",
                lineHeight: "1.2",
                letterSpacing: "0.07px",
              }}
            >
              Connect app
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}