import svgPaths from "./svg-doyo4bhrct";
import clsx from "clsx";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.07px]", additionalClassNames)}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}
type InputTextProps = {
  text: string;
};

function InputText({ text }: InputTextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <MainMainNavSearchText text="•••••••••••••••••••••••••" />
    </div>
  );
}
type MainMainNavSearchTextProps = {
  text: string;
};

function MainMainNavSearchText({ text }: MainMainNavSearchTextProps) {
  return (
    <div className="bg-[#f4f7f8] h-[48px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d6d7ff] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <div className="basis-0 flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[#292f32] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">{text}</p>
          </div>
          <Wrapper>
            <g id="eye" opacity="0.4">
              <path d={svgPaths.p175e5800} fill="var(--fill-0, #030712)" id="Vector" />
            </g>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[51px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[590px]" data-name="Container">
        <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#5e6060] text-[16px] tracking-[0.08px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Change Password
        </p>
        <div className="content-stretch flex flex-col gap-[36px] items-end relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Current password
              </p>
              <MainMainNavSearchText text="•••••••••••••••••••" />
            </div>
            <InputText text="New password" />
            <InputText text="Confirm new password" />
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
            <div className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
              <Wrapper1 additionalClassNames="text-[#fefefe]">Save changes</Wrapper1>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[590px]" data-name="Container">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
          <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#5e6060] text-[16px] tracking-[0.08px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            2-Step verification
          </p>
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            We use 2-step verification when we need to check if it’s really you using your account.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[36px] items-end relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              Your 2FA method
            </p>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                  <Icon>
                    <path d={svgPaths.p28b38180} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                  </Icon>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Text message
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[#d6d7ff] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                    <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Handle">
                      <div className="bg-white relative rounded-[24px] shrink-0 size-[18px]" data-name="Handle shape">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="size-full" />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#0320f5] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
                      </div>
                    </div>
                  </div>
                  <Icon>
                    <path d={svgPaths.p2266dc80} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                  </Icon>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  +254 *** *** *78
                </p>
                <div className="bg-[#f2f3f3] content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0" data-name="Button/Dash/Export Report">
                  <Icon>
                    <path d={svgPaths.p28458880} fill="var(--fill-0, #E53E3E)" id="Primary" />
                  </Icon>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                  <Icon>
                    <path d={svgPaths.p32a38a80} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                  </Icon>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Authenticator app
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[#e5e7eb] content-stretch flex items-center justify-end p-px relative rounded-[100px] shrink-0 w-[36px]" data-name="Switch">
                    <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Handle">
                      <div className="bg-white relative rounded-[24px] shrink-0 size-[18px]" data-name="Handle shape">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="size-full" />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
                      </div>
                    </div>
                  </div>
                  <Icon>
                    <path d={svgPaths.p322c5780} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                  </Icon>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
            <div className="bg-[#e8edf0] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
              <Wrapper1 additionalClassNames="text-[#7a8890]">Save changes</Wrapper1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}