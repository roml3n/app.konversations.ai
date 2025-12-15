import svgPaths from "./svg-a0u8fi40cf";

function Frame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[18px] left-[calc(50%-0.13px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[15.75px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

export default function PopOver() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="pop-over">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative w-full">
              <div className="content-stretch flex items-center px-0 py-[4px] relative shrink-0">
                <div className="bg-[#aaacff] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="avatar">
                  <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#1e2939] text-[14px] text-center tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2]">J</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[120px]">
                <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal items-start leading-[1.2] relative shrink-0 text-black w-full">
                  <p className="relative shrink-0 text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Jane Muthoni
                  </p>
                  <p className="opacity-30 relative shrink-0 text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    jane@company.com
                  </p>
                </div>
                <div className="bg-[#ebeaee] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Agent {$role}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebeaee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative w-full">
              <Wrapper>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icons">
                  <div className="absolute h-[16.071px] left-1/2 top-[calc(50%+0.04px)] translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
                      <g clipPath="url(#clip0_86_2374)" id="Frame">
                        <path d={svgPaths.pce27d80} fill="var(--fill-0, #58AEC6)" id="Vector" />
                      </g>
                      <defs>
                        <clipPath id="clip0_86_2374">
                          <rect fill="white" height="16.0714" width="18" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Perfomance Dashboard
                </p>
              </Wrapper>
              <Wrapper>
                <Wrapper1>
                  <g id="graduation-cap">
                    <path d={svgPaths.p3ecee200} fill="var(--fill-0, #58AEC6)" id="Vector" />
                  </g>
                </Wrapper1>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  My Learning
                </p>
              </Wrapper>
              <Wrapper>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icons">
                  <Frame>
                    <g clipPath="url(#clip0_86_2362)" id="Frame">
                      <path d={svgPaths.p1541a3f1} fill="var(--fill-0, #58AEC6)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_86_2362">
                        <rect fill="white" height="18" width="15.75" />
                      </clipPath>
                    </defs>
                  </Frame>
                </div>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Notifications
                </p>
              </Wrapper>
              <Wrapper>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icons">
                  <Frame>
                    <g clipPath="url(#clip0_86_2371)" id="Frame">
                      <path d={svgPaths.p8ed60f1} fill="var(--fill-0, #58AEC6)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_86_2371">
                        <rect fill="white" height="18" width="15.75" />
                      </clipPath>
                    </defs>
                  </Frame>
                </div>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Security
                </p>
              </Wrapper>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
              <div className="h-[48px] relative shrink-0 w-full" data-name="Pop-over Menu">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[16px] relative size-full">
                    <Wrapper1>
                      <g id="log-out">
                        <path d={svgPaths.p29914600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 17L21 12L16 7" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12H9" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </Wrapper1>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Log out
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}