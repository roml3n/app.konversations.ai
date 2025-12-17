import svgPaths from "./svg-qnnjag4x40";
import clsx from "clsx";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
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
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">{children}</div>
      </div>
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
        </div>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <Text1 text="20/01/2025, 12:56" />
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="relative shrink-0 size-[12px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="clock-four">
              <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </g>
          </svg>
        </div>
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {"12:22"}
        </p>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center pl-[12px] pr-0 py-0 relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

export default function SettingsAccountSettingsGeneral() {
  return (
    <div className="bg-[#010a78] relative size-full" data-name="Settings / Account Settings / General">
      <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[1440px]" data-name="Container">
        <div className="content-stretch flex items-start pl-[8px] pr-0 py-0 relative shrink-0" data-name="Sidebar">
          <div className="bg-[#010a78] content-stretch flex flex-col h-[1025px] items-center px-[8px] py-[16px] relative shrink-0" data-name="Sidebar">
            <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="sidebar-top">
              <div className="relative rounded-[8px] shrink-0 w-full" data-name="Logo-Header">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative w-full">
                    <div className="h-[14px] overflow-clip relative shrink-0 w-[122.027px]" data-name="Logo">
                      <div className="absolute contents inset-[0_0_-0.03%_0]" data-name="Layer 4">
                        <div className="absolute inset-[0_0_-0.03%_0]" data-name="Layer 1">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 14">
                            <g id="Layer 1">
                              <path d={svgPaths.p212ad480} fill="var(--fill-0, white)" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col h-full items-center justify-center opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
                        <Icon>
                          <g id="caret-left">
                            <path d={svgPaths.p24e3ee80} fill="var(--fill-0, #7A8890)" id="Vector" />
                          </g>
                        </Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-between p-[6px] relative rounded-[8px] shrink-0 w-[218px]" data-name="Search Bar/Sidebar">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Search">
                  <div className="content-stretch flex flex-col items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
                    <Icon>
                      <g id="search">
                        <path d={svgPaths.p257c3080} fill="var(--fill-0, #7A8890)" id="Vector" />
                      </g>
                    </Icon>
                  </div>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Search
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="⌘+K">
                  <Wrapper1>
                    <g id="Frame 2">
                      <mask fill="white" id="path-1-inside-1_134_5368">
                        <path d={svgPaths.p1d1d6d00} />
                      </mask>
                      <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" fillOpacity="0.1" />
                      <path d={svgPaths.p3a50b680} fill="var(--stroke-0, white)" fillOpacity="0.05" mask="url(#path-1-inside-1_134_5368)" />
                      <path d={svgPaths.p1b1c600} fill="var(--fill-0, white)" id="â" opacity="0.6" />
                    </g>
                  </Wrapper1>
                  <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0 size-[16px]">
                    <div aria-hidden="true" className="absolute border-[1px_1px_2px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      K
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
                <Wrapper>
                  <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
                      <Icon>
                        <g id="chart-pie">
                          <path d={svgPaths.p32f535b0} fill="var(--fill-0, #7A8890)" id="Vector" />
                        </g>
                      </Icon>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Insights
                    </p>
                  </div>
                </Wrapper>
                <Wrapper>
                  <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
                      <Icon>
                        <g id="inbox">
                          <path d={svgPaths.p3de0180} fill="var(--fill-0, #7A8890)" id="Vector" />
                        </g>
                      </Icon>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Inbox
                    </p>
                  </div>
                </Wrapper>
                <Wrapper>
                  <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
                      <Icon>
                        <g id="headphones-simple">
                          <path d={svgPaths.p2cd8f700} fill="var(--fill-0, #7A8890)" id="Vector" />
                        </g>
                      </Icon>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Conversations
                    </p>
                  </div>
                </Wrapper>
                <Wrapper>
                  <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
                      <Icon>
                        <g id="graduation-cap">
                          <path d={svgPaths.p213ea000} fill="var(--fill-0, #7A8890)" id="Vector" />
                        </g>
                      </Icon>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Learning
                    </p>
                  </div>
                </Wrapper>
                <Wrapper>
                  <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
                      <Icon>
                        <g id="briefcase">
                          <path d={svgPaths.p1c3e4c00} fill="var(--fill-0, #7A8890)" id="Vector" />
                        </g>
                      </Icon>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Workforce
                    </p>
                  </div>
                </Wrapper>
                <Wrapper additionalClassNames="bg-[rgba(255,255,255,0.1)]">
                  <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col h-[22px] items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                      <Icon>
                        <g id="cog">
                          <path d={svgPaths.pb07d7b0} fill="var(--fill-0, #01B386)" id="Vector" />
                        </g>
                      </Icon>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Settings
                    </p>
                  </div>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 grow h-[1024px] min-h-px min-w-px relative shrink-0" data-name="Main-Wrapper">
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start pl-0 pr-[8px] py-[8px] relative size-full">
              <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Parent">
                <div className="bg-[#f4f7f8] content-stretch flex flex-col gap-[24px] h-full items-start px-[16px] py-[24px] relative shrink-0 w-[250px]" data-name="side-navigation">
                  <div aria-hidden="true" className="absolute border-[#edf1f4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex items-center justify-center pl-[12px] pr-0 py-0 relative shrink-0">
                    <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#161a1c] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Settings
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
                    <Text text="Account Settings" />
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#e3e3e4] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="user-alt">
                                  <path d={svgPaths.pe1d0100} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              General
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="shield-alt">
                                  <path d={svgPaths.p2b92c8f8} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Security
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="bell">
                                  <path d={svgPaths.p14c219f0} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Notifications
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
                    <Text text="User Management" />
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="users">
                                  <path d={svgPaths.p31b74f00} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Agents
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="contact-card">
                                  <path d={svgPaths.p12674f00} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Roles and Permissions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
                    <Text text="Admin" />
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="building">
                                  <path d={svgPaths.p1aa47370} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Organization Profile
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="file-shield">
                                  <path d={svgPaths.p3a03ac00} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Data Retention
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="coins">
                                  <path d={svgPaths.p5acc780} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Billing and Usage
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="flag-checkered">
                                  <path d={svgPaths.p20428180} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              System Status
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <Text text="Extensions" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="sitemap">
                                  <path d={svgPaths.pf0dd380} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Integrations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="chain">
                                  <path d={svgPaths.p1aa4e40} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Webhooks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Mini Sidebar Menu">
                        <div className="bg-[#f4f7f8] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
                              <Icon>
                                <g id="key">
                                  <path d={svgPaths.p2383c200} fill="var(--fill-0, #01B386)" id="Vector" />
                                </g>
                              </Icon>
                            </div>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              API Keys
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[64px] h-full items-center overflow-clip relative shrink-0 w-[940px]" data-name="Main">
                  <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Header">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between px-[30px] py-[16px] relative size-full">
                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                            <button className="block cursor-pointer opacity-30 overflow-clip relative shrink-0 size-[20px]" data-name="Arrows">
                              <Wrapper2>
                                <g id="arrow-left">
                                  <path d={svgPaths.p1352fd00} fill="var(--fill-0, #6A7282)" id="Vector" />
                                </g>
                              </Wrapper2>
                            </button>
                            <div className="opacity-30 overflow-clip relative shrink-0 size-[20px]" data-name="Arrows">
                              <Wrapper2>
                                <g id="arrow-right">
                                  <path d={svgPaths.p1653fa00} fill="var(--fill-0, #6A7282)" id="Vector" />
                                </g>
                              </Wrapper2>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Settings
                            </p>
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0">
                          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                            <div className="relative shrink-0 size-[32px]" data-name="call-button">
                              <div className="absolute bg-white content-stretch flex flex-col items-center justify-between left-0 overflow-clip rounded-[15px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.12)] size-0 top-0" data-name="Call_UI">
                                <div className="relative shrink-0 w-full">
                                  <div className="flex flex-col items-center size-full">
                                    <div className="content-stretch flex flex-col gap-[24px] items-center p-[16px] relative w-full">
                                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[20px] text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Recents
                                        </p>
                                        <Wrapper1>
                                          <g>
                                            <path d={svgPaths.p1162be00} fill="var(--fill-0, #6A7282)" id="Vector" />
                                          </g>
                                        </Wrapper1>
                                      </div>
                                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              Pauline Nyaboke
                                            </p>
                                            <Text1 text="Yesterday, 12:56" />
                                          </div>
                                        </div>
                                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              John Makacha
                                            </p>
                                            <Text1 text="Yesterday, 11:02" />
                                          </div>
                                          <Wrapper1>
                                            <g id="caret-right">
                                              <path d={svgPaths.p2706ce00} fill="var(--fill-0, #6A7282)" id="Vector" />
                                            </g>
                                          </Wrapper1>
                                        </div>
                                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              +254 222 222 222
                                            </p>
                                            <Text1 text="Mon, 12:56" />
                                          </div>
                                        </div>
                                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              +1 234 567 8901
                                            </p>
                                            <Text1 text="Fri, 12:56" />
                                          </div>
                                        </div>
                                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                          <Text2 text="Pauline Nyaboke" />
                                        </div>
                                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                          <Text2 text="+91 233 4223 442" />
                                        </div>
                                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              Jason Stingo
                                            </p>
                                            <Text1 text="19/01/2025, 12:56" />
                                          </div>
                                        </div>
                                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              Pauline Nyaboke
                                            </p>
                                            <Text1 text="18/01/2025, 12:56" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white relative shrink-0 w-full">
                                  <div aria-hidden="true" className="absolute border-[#f1f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                                      <div className="basis-0 bg-[#f1f4f6] content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
                                        <Wrapper1>
                                          <g id="clock-rotate-left">
                                            <path d={svgPaths.p2716db80} fill="var(--fill-0, #6A7282)" id="Vector" />
                                          </g>
                                        </Wrapper1>
                                        <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Recents
                                        </p>
                                      </div>
                                      <div className="basis-0 content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
                                        <Wrapper1>
                                          <g id="dialpad">
                                            <g id="Vector"></g>
                                            <path d={svgPaths.p3bcb0400} fill="var(--fill-0, #292F32)" id="Vector_2" />
                                          </g>
                                        </Wrapper1>
                                        <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Dialer
                                        </p>
                                      </div>
                                      <div className="basis-0 content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
                                        <Wrapper1>
                                          <g id="user-group">
                                            <path d={svgPaths.pa48f500} fill="var(--fill-0, #6A7282)" id="Vector" />
                                          </g>
                                        </Wrapper1>
                                        <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Contacts
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-[#f4f7f8] content-stretch flex items-center left-0 p-[8px] rounded-[999px] top-0" data-name="call">
                                <Wrapper1>
                                  <g id="phone">
                                    <path d={svgPaths.p321c9a40} fill="var(--fill-0, #4F595E)" id="Vector" />
                                  </g>
                                </Wrapper1>
                              </div>
                            </div>
                            <div className="bg-[#f4f7f8] content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0">
                              <Wrapper1>
                                <g id="notifications" opacity="0.6">
                                  <path d={svgPaths.p1f61b300} fill="var(--fill-0, #1E2939)" id="Primary" />
                                </g>
                              </Wrapper1>
                            </div>
                            <div className="relative shrink-0 size-[40px]" data-name="Avatar-Popout">
                              <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-center justify-center px-[3px] py-[4px] right-0 rounded-[8px] size-[40px] top-0" data-name="Avatar-Popout/org/no">
                                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                <div className="h-[15.273px] relative shrink-0 w-[36px]" data-name="logo">
                                  <div className="absolute inset-[6.28%_4.64%]" data-name="Group">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 14">
                                      <g id="Group">
                                        <g id="Group_2">
                                          <path d={svgPaths.p30b83100} fill="var(--fill-0, #262261)" id="Vector" />
                                          <path d={svgPaths.p9a87b00} fill="var(--fill-0, #262261)" id="Vector_2" />
                                          <path d={svgPaths.p326fbec0} fill="var(--fill-0, #262261)" id="Vector_3" />
                                          <path d={svgPaths.p1712b280} fill="var(--fill-0, #262261)" id="Vector_4" />
                                        </g>
                                        <g id="Group_3">
                                          <path d={svgPaths.p20714d80} fill="var(--fill-0, #67CCE8)" id="Vector_5" />
                                          <path d={svgPaths.p1d2cbf00} fill="var(--fill-0, #67CCE8)" id="Vector_6" />
                                        </g>
                                        <path d={svgPaths.pbd5fe00} fill="var(--fill-0, #67CCE8)" id="Vector_7" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[592px]" data-name="Container">
                    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
                      <div className="bg-[#d5eef7] relative rounded-[999px] shrink-0 size-[108px]" data-name="Avatar">
                        <div className="absolute inset-0 overflow-clip" data-name="Avatar,popout=no">
                          <div className="absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#2c5763] text-[28px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <p className="leading-[normal]">JM</p>
                          </div>
                          <div className="absolute bg-white h-[4px] left-[6px] opacity-0 rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] top-[28px] w-[26px]" data-name="pop-over" />
                        </div>
                      </div>
                      <div className="bg-gradient-to-b content-stretch flex from-[#ffffff] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#f1f1f1]" data-name="Button">
                        <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <Icon>
                            <g id="arrow-right-to-file">
                              <path d={svgPaths.p2c9f8300} fill="var(--fill-0, #7A8890)" id="Vector" />
                            </g>
                          </Icon>
                          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Upload a Picture
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[24px] items-end justify-center relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
                        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Name
                            </p>
                            <MainMainNavSearchText text="Joe Maina" />
                          </div>
                          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Work email
                            </p>
                            <MainMainNavSearchText text="joe@acme.corp" />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
                          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Account type
                            </p>
                            <div className="bg-[#f2f3f3] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Main/Main Nav-Search">
                              <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
                                  <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end leading-[0] opacity-50 relative shrink-0 text-[#121212] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    <p className="leading-[1.2]">Admin</p>
                                  </div>
                                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
                                    <div className="content-stretch flex gap-[4px] items-center justify-center px-px py-[3px] relative rounded-[8px] shrink-0" data-name=".Size and Style">
                                      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        <p className="leading-[1.2]">Update role</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}