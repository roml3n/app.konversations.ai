function Frame2() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[7px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[7px]" />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[12px]">8</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[12px]">Agent</p>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame1 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#7a7d7d] text-[12px] w-[min-content] whitespace-pre-wrap">Can view the main dashboard, check their own conversation history and view insights.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col items-center justify-center px-[6px] py-[2px] relative rounded-[7px] shrink-0">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#58aec6] text-[12px]">dashboard.read</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col items-center justify-center px-[6px] py-[2px] relative rounded-[7px] shrink-0">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#58aec6] text-[12px]">insights.read</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col items-center justify-center px-[6px] py-[2px] relative rounded-[7px] shrink-0">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#58aec6] text-[12px]">{`+4 `}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[8px] size-full">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Frame />
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}