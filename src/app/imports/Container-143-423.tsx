function HandleShape1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 size-[18px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function HandleShape() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 size-[18px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Switch() {
  return (
    <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
        <HandleShape />
      </div>
    </div>
  );
}

function Switch1() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Handle">
        <HandleShape1 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-end relative size-full" data-name="Container">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#5e6060] text-[16px] tracking-[0.08px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        My notifications
      </p>
      <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
            <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#404141] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Event
            </p>
            <div className="content-stretch flex font-['Instrument_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-center leading-[1.2] relative shrink-0 text-[#404141] text-[14px] tracking-[0.07px] w-[213px]" data-name="Container">
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                In-app
              </p>
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                Push
              </p>
              <p className="relative shrink-0 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Email
              </p>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(227, 232, 240, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 593 1">
                <line id="Line 7" stroke="var(--stroke-0, #E3E8F0)" x2="593" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-[303px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                When a team member uploads audio
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[213px]" data-name="Container">
                {[...Array(3).keys()].map((_, i) => (
                  <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                    <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
                      <HandleShape />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-[303px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`When audio processing is completed `}</p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[213px]" data-name="Container">
                <Switch />
                <div className="bg-[#e5e7eb] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                  <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Handle">
                    <HandleShape1 />
                  </div>
                </div>
                <Switch />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-[303px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                When a new member joins the team
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[213px]" data-name="Container">
                <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                  <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
                    <HandleShape />
                  </div>
                </div>
                {[...Array(2).keys()].map((_, i) => (
                  <div className="bg-[#e5e7eb] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                    <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Handle">
                      <HandleShape1 />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-[303px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Event 1
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[213px]" data-name="Container">
                <Switch1 />
                <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                  <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
                    <HandleShape />
                  </div>
                </div>
                <Switch1 />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-[303px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Event 2
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[213px]" data-name="Container">
                {[...Array(2).keys()].map((_, i) => (
                  <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                    <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
                      <HandleShape />
                    </div>
                  </div>
                ))}
                <div className="bg-[#e5e7eb] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                  <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Handle">
                    <HandleShape1 />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-[303px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Event 3
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[213px]" data-name="Container">
                {[...Array(2).keys()].map((_, i) => (
                  <div className="bg-[#e5e7eb] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                    <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Handle">
                      <HandleShape1 />
                    </div>
                  </div>
                ))}
                <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                  <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
                    <HandleShape />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-[303px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Event 4
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[213px]" data-name="Container">
                {[...Array(2).keys()].map((_, i) => (
                  <div className="bg-[#e5e7eb] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                    <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Handle">
                      <HandleShape1 />
                    </div>
                  </div>
                ))}
                <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                  <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
                    <HandleShape />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-[303px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Event 5
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[213px]" data-name="Container">
                {[...Array(2).keys()].map((_, i) => (
                  <div className="bg-[#e5e7eb] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                    <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Handle">
                      <HandleShape1 />
                    </div>
                  </div>
                ))}
                <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                  <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
                    <HandleShape />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
          <div className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
            <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.2]">Save changes</p>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
          </div>
        </div>
      </div>
    </div>
  );
}