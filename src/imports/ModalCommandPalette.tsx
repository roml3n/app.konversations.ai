import svgPaths from "./svg-ceue5m322n";

function SearchBar() {
  return (
    <div className="bg-[#f1f4f6] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="search_bar">
      <div aria-hidden="true" className="absolute border-[#e8edf0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon">
            <div className="absolute inset-0 overflow-clip" data-name="search">
              <div className="absolute inset-[10%_10%_9.99%_10%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7994 12.8019">
                  <path d={svgPaths.p33f4fd00} fill="var(--fill-0, #7A8890)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-50 relative shrink-0 text-[#1e2939] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Search or ask for anything...
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f4f7f8] content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[32px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="search">
          <div className="absolute inset-[10%_10%_9.99%_10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5987 25.6038">
              <path d={svgPaths.p3245a100} fill="var(--fill-0, #7A8890)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[1.2] relative shrink-0 text-[14px] tracking-[0.07px] w-[364px]">
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1e2939] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start typing
      </p>
      <div className="font-['Instrument_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6a7282] text-center w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Type anything to find items, quickly jump to modules and settings, or to chat with your data. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Try “What are the top issues this week?”</p>
      </div>
    </div>
  );
}

function StartTypingEmptyState() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="start-typing-empty-state">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <Frame2 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[12px] relative w-full">
        <SearchBar />
        <StartTypingEmptyState />
      </div>
    </div>
  );
}

export default function ModalCommandPalette() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="modal-command-palette">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#edf1f4] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}