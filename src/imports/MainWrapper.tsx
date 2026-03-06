import svgPaths from "./svg-ndhktafa2x";

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[12px] relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#161a1c] text-[16px] tracking-[0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Settings
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[12px] relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Account Settings
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="user-alt">
            <div className="absolute inset-[11.25%_17.5%_10%_17.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1 11.025">
                <path d={svgPaths.p2ebe5700} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        General
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="shield-alt">
            <div className="absolute inset-[10%_12.48%_10.44%_12.52%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.1388">
                <path d={svgPaths.paa14080} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Security
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="bell">
            <div className="absolute inset-[10%_15.02%_10%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.79781 11.2">
                <path d={svgPaths.p2afb5ef0} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Notifications
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame15 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame16 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame17 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[12px] relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        User Management
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="users">
            <div className="absolute inset-[12.5%_0_15%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10.15">
                <path d={svgPaths.p170b0000} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agents
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="contact-card">
            <div className="absolute inset-[15%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 9.8">
                <path d={svgPaths.p3b9d1b00} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Roles and Permissions
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame18 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame19 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[12px] relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Admin
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="building">
            <div className="absolute inset-[10%_20%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4 11.2">
                <path d={svgPaths.p12342400} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Organization Profile
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="file-shield">
            <div className="absolute inset-[10%_5%_4.98%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9 11.9022">
                <path d={svgPaths.pc5527c0} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Data Retention
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="coins">
            <div className="absolute inset-[10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
                <path d={svgPaths.p3587ca70} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Billing and Usage
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="flag-checkered">
            <div className="absolute inset-[10%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 11.2">
                <path d={svgPaths.pff26b80} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        System Status
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame20 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame21 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame22 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame23 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Items2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[12px] relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Extensions
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="sitemap">
            <div className="absolute inset-[15%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 9.8">
                <path d={svgPaths.p2ecc3500} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Integrations
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="chain">
            <div className="absolute inset-[15%_5%_14.97%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 9.80438">
                <path d={svgPaths.p386867c0} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Webhooks
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Dash Icon">
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="key">
            <div className="absolute inset-[10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
                <path d={svgPaths.p2d5d1500} fill="var(--fill-0, #01B386)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        API Keys
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame24 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame25 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[38px] items-start relative shrink-0" data-name="Mini Sidebar Menu">
        <div className="bg-[#f4f7f8] relative rounded-[8px] self-stretch shrink-0 w-[218px]" data-name="Sidebar Menu">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
              <Frame26 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Items3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
      <Frame27 />
      <Frame14 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <button className="block cursor-pointer opacity-30 overflow-clip relative shrink-0 size-[20px]" data-name="Arrows">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="arrow-left">
            <div className="absolute inset-[19.99%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7994 9.60375">
                <path d={svgPaths.p7993200} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </button>
      <div className="opacity-30 overflow-clip relative shrink-0 size-[20px]" data-name="Arrows">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Icon">
          <div className="absolute inset-0 overflow-clip" data-name="arrow-right">
            <div className="absolute inset-[19.99%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7994 9.60375">
                <path d={svgPaths.p2ea90480} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Settings
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame5 />
      <Frame3 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[20px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recents
      </p>
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="close">
          <div className="absolute inset-[19.99%_19.91%_19.99%_20.07%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.60375 9.60375">
              <path d={svgPaths.p267b3680} fill="var(--fill-0, #6A7282)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="clock-four">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
              <path d={svgPaths.p37b34800} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-right tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame32 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 12:56
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="clock-four">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
              <path d={svgPaths.p37b34800} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-right tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame40 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 11:02
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Makacha
      </p>
      <Frame39 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame38 />
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="caret-right">
          <div className="absolute inset-[19.99%_29.93%_19.99%_35.08%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.59938 9.60325">
              <path d={svgPaths.p25df1f80} fill="var(--fill-0, #6A7282)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="clock-four">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
              <path d={svgPaths.p37b34800} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-right tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame46 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon, 12:56
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +254 222 222 222
      </p>
      <Frame44 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame42 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="clock-four">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
              <path d={svgPaths.p37b34800} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-right tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame50 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fri, 12:56
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1 234 567 8901
      </p>
      <Frame49 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="clock-four">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
              <path d={svgPaths.p37b34800} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-right tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame54 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame53 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="clock-four">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
              <path d={svgPaths.p37b34800} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-right tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame58 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +91 233 4223 442
      </p>
      <Frame57 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="clock-four">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
              <path d={svgPaths.p37b34800} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-right tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame62 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        19/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jason Stingo
      </p>
      <Frame61 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="clock-four">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
              <path d={svgPaths.p37b34800} fill="var(--fill-0, #A9BCC6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-right tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame66 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        18/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame65 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame36 />
      <Frame41 />
      <Frame47 />
      <Frame51 />
      <Frame55 />
      <Frame59 />
      <Frame63 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[16px] relative w-full">
          <Frame43 />
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f1f4f6] content-stretch flex flex-[1_0_0] flex-col h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px]">
      <div className="relative shrink-0 size-[16px]" data-name="clock-rotate-left">
        <div className="absolute inset-[10%_10%_10%_7.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2 12.8">
            <path d={svgPaths.p195c8172} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recents
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px]">
      <div className="relative shrink-0 size-[16px]" data-name="dialpad">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[8.727px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.72727 12">
            <path d={svgPaths.p19630500} fill="var(--fill-0, #292F32)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-left tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dialer
      </p>
    </button>
  );
}

function Frame29() {
  return (
    <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px]">
      <div className="relative shrink-0 size-[16px]" data-name="user-group">
        <div className="absolute inset-[12.5%_5%_10%_5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 12.4">
            <path d={svgPaths.p39c97100} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-left tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contacts
      </p>
    </button>
  );
}

function Frame31() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f1f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Frame28 />
          <Frame30 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Call() {
  return (
    <div className="absolute bg-[#f4f7f8] content-stretch flex items-center left-0 p-[8px] rounded-[999px] top-0" data-name="call">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="phone">
          <div className="absolute inset-[10%_9.99%_10.01%_10.01%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7993 12.7991">
              <path d={svgPaths.p82520f0} fill="var(--fill-0, #4F595E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f4f7f8] content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0">
      <div className="opacity-60 overflow-clip relative shrink-0 size-[16px]" data-name="notifications">
        <div className="absolute inset-[10%_15%]" data-name="Primary">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2001 12.8">
            <path d={svgPaths.p247d8900} fill="var(--fill-0, #1E2939)" id="Primary" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[6.28%_4.64%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6561 13.3542">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p11532600} fill="var(--fill-0, #262261)" id="Vector" />
            <path d={svgPaths.p387bb300} fill="var(--fill-0, #262261)" id="Vector_2" />
            <path d={svgPaths.p399da900} fill="var(--fill-0, #262261)" id="Vector_3" />
            <path d={svgPaths.p18463240} fill="var(--fill-0, #262261)" id="Vector_4" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.pb0c6400} fill="var(--fill-0, #67CCE8)" id="Vector_5" />
            <path d={svgPaths.p20dec500} fill="var(--fill-0, #67CCE8)" id="Vector_6" />
          </g>
          <path d={svgPaths.p30c8d280} fill="var(--fill-0, #67CCE8)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[32px]" data-name="call-button">
        <div className="absolute bg-white content-stretch flex flex-col items-center justify-between left-0 overflow-clip rounded-[15px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.12)] size-0 top-0" data-name="Call_UI">
          <Frame45 />
          <Frame31 />
        </div>
        <Call />
      </div>
      <Frame1 />
      <button className="block cursor-pointer relative shrink-0 size-[40px]" data-name="Avatar-Popout">
        <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-center justify-center px-[3px] py-[4px] right-0 rounded-[8px] size-[40px] top-0" data-name="Avatar-Popout/org/no">
          <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="h-[15.273px] relative shrink-0 w-[36px]" data-name="logo">
            <Group />
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <Frame />
    </div>
  );
}

function MainMainNavSearch() {
  return (
    <div className="bg-[#f2f3f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="Main/Main Nav-Search">
      <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#121212] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainMainNavSearch1() {
  return (
    <div className="bg-[#f2f3f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="Main/Main Nav-Search">
      <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#121212] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">days</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Dropdown Icon">
            <div className="absolute inset-[34.99%_19.99%_30%_19.99%]" data-name="Primary">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.60375 5.60125">
                <path d={svgPaths.p1be17d80} fill="var(--fill-0, #5E6060)" id="Primary" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Input Group">
      <MainMainNavSearch />
      <MainMainNavSearch1 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[592px]" data-name="Input">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select the retention duration
      </p>
      <InputGroup />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#777] text-[0px] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Your data is always secure and private. We do not share what you trust us with. For more information, read our
        </span>
        <span className="leading-[1.2] text-[#67cce8]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
        <span className="decoration-solid leading-[1.2] text-[#62c3dd] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          privacy policy
        </span>
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end justify-center relative shrink-0 w-[592px]" data-name="Container">
      <Container2 />
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
        <div className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
          <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Save changes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[172px] top-[128.5px] w-[590px]" data-name="Container">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none min-w-full relative shrink-0 text-[#5e6060] text-[16px] tracking-[0.08px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose how long we should keep your data for
      </p>
      <Container1 />
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Main">
      <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 px-[30px] py-[16px] top-0 w-[1199px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
        <Frame4 />
        <Frame2 />
      </div>
      <Container />
    </div>
  );
}

function Parent() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative rounded-[8px] w-full" data-name="Parent">
      <div className="bg-[#f4f7f8] h-full relative shrink-0 w-[250px]" data-name="side-navigation">
        <div aria-hidden="true" className="absolute border-[#edf1f4] border-r border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative size-full">
          <Frame8 />
          <Items />
          <Items1 />
          <Items2 />
          <Items3 />
        </div>
      </div>
      <Main />
    </div>
  );
}

export default function MainWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] py-[8px] relative size-full" data-name="Main-Wrapper">
      <Parent />
    </div>
  );
}