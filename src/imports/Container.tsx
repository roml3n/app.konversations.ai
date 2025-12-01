import svgPaths from "./svg-es2i0ob6zh";
import imgProfImg from "figma:asset/836289d6df84eab2ac2d1f2d0f1dcd527f30304d.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chart-simple">
          <path d={svgPaths.p3d6ec2d0} fill="var(--fill-0, #FEF9C2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Icon />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="spinner">
          <path d={svgPaths.p3c9a6400} fill="var(--fill-0, #8083FF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Icon1 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escalated
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <SizeAndStyle />
      <SizeAndStyle1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="tag">
          <path d={svgPaths.p2b8aca00} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[400px] shrink-0">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="user-plus">
          <path d={svgPaths.pc4343c0} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[400px] shrink-0">
      <Icon3 />
    </div>
  );
}

function SizeAndStyle2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assign
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Frame5 />
      <Frame6 />
      <SizeAndStyle2 />
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="chat-header">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TagIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #E2C148)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle3() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TagIcon />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#404141] text-[12px] text-nowrap whitespace-pre">account</p>
    </div>
  );
}

function TagIcon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #8990DF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle4() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TagIcon1 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#404141] text-[12px] text-nowrap whitespace-pre">auth</p>
    </div>
  );
}

function TagsContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Tags Container">
      <SizeAndStyle3 />
      <SizeAndStyle4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202121] text-[18px] text-nowrap whitespace-pre">Issue with my account</p>
          <TagsContainer />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <ChatHeader />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ProfImg() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[16px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function MessageSender() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Message Sender">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] text-center tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Saito Watanashi
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[11px] tracking-[0.055px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`<saitosama@watashi.star>`}</p>
    </div>
  );
}

function MessageDetails() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[1.2] relative shrink-0 text-[#7a7d7d] text-nowrap whitespace-pre" data-name="Message Details">
      <MessageSender />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[11px] tracking-[0.055px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        To: support@acme.corp
      </p>
    </div>
  );
}

function MessageInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Info">
      <ProfImg />
      <MessageDetails />
    </div>
  );
}

function MoreOptions() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="More Options">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="More Options">
          <path d={svgPaths.pd63a380} fill="var(--fill-0, #A0A3A4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ReplyAll() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Reply All">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Reply All">
          <path d={svgPaths.p169b59a0} fill="var(--fill-0, #A0A3A4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function MessageActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Message Actions">
      <MoreOptions />
      <ReplyAll />
    </div>
  );
}

function MessageHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <MessageInfo />
          <MessageActions />
        </div>
      </div>
    </div>
  );
}

function AttachmentIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Attachment Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-image">
          <path d={svgPaths.p26921480} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function AttachmentInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Attachment Info">
      <AttachmentIcon />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        DSC-20240423092342.png
      </p>
    </div>
  );
}

function SizeAndStyle5() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[88px] shrink-0 w-full" data-name="Size and Style">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[6px] py-[4px] relative w-full">
          <AttachmentInfo />
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            123KB
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function MessageBody() {
  return (
    <div className="bg-white relative rounded-[13px] shrink-0 w-full" data-name="Message Body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <div className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">
              Hi there, Acme team!
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              My account freezes everytime I log in, I keep getting some kind of error and the homepage keeps loading indefinitely.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">See the screenshot attached. I hope you can get it fixed soon because I need to make an important business inquiry.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Please ping me when done.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Regards,</p>
            <p>Saito</p>
          </div>
          <SizeAndStyle5 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f2f3f3] box-border content-stretch flex flex-col items-start justify-center p-[4px] relative rounded-[16px] shrink-0 w-[403px]" data-name="Container">
      <MessageHeader />
      <MessageBody />
    </div>
  );
}

function InternalMessageSender() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Internal Message Sender">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>{`You `}</span>
        <span className="font-['Instrument_Sans:Italic',sans-serif] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
          (internal)
        </span>
      </p>
    </div>
  );
}

function InternalMessageText() {
  return (
    <div className="bg-[#e9e9ff] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0" data-name="Internal Message Text">
      <div aria-hidden="true" className="absolute border border-[#8083ff] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[0px] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`Hey `}</span>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[#0320f5]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @Amanda Wakio
        </span>
        , could you please sort this out?
      </p>
    </div>
  );
}

function InternalMessageWrapper() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="Internal Message Wrapper">
      <InternalMessageSender />
      <InternalMessageText />
    </div>
  );
}

function ProfImg1() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
        <div className="absolute bg-[#b4bbee] inset-0 rounded-[999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[999px] size-full" src={imgProfImg} />
      </div>
    </div>
  );
}

function InternalMessageContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Internal Message Container">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start justify-end pl-[56px] pr-0 py-0 relative w-full">
          <InternalMessageWrapper />
          <ProfImg1 />
        </div>
      </div>
    </div>
  );
}

function TagIcon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #EDCA4C)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle6() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TagIcon2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        account
      </p>
    </div>
  );
}

function UpdateInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Update Info">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` labelled this conversation`}</span>
      </p>
      <SizeAndStyle6 />
    </div>
  );
}

function PriorityIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Priority Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chart-simple">
          <path d={svgPaths.p156e4900} fill="var(--fill-0, #E7A188)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle7() {
  return (
    <div className="bg-[#fcf4f2] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <PriorityIcon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function UpdateInfo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Update Info">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` changed priority`}</span>
      </p>
      <SizeAndStyle7 />
    </div>
  );
}

function StatusIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Status Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="spinner">
          <path d={svgPaths.p1718c180} fill="var(--fill-0, #8990DF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle8() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <StatusIcon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escalated
      </p>
    </div>
  );
}

function UpdateInfo2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Update Info">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` changed status`}</span>
      </p>
      <SizeAndStyle8 />
    </div>
  );
}

function ConversationUpdate() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[403px]" data-name="Conversation Update">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Amanda Wakio
        </span>
        <span>{` was added to the conversation`}</span>
      </p>
      <UpdateInfo />
      <UpdateInfo1 />
      <UpdateInfo2 />
    </div>
  );
}

function ProfImg2() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">A</p>
      </div>
    </div>
  );
}

function InternalMessageSender1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Internal Message Sender">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`Amanda Wakio `}</span>
        <span className="font-['Instrument_Sans:Italic',sans-serif] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
          (internal)
        </span>
      </p>
    </div>
  );
}

function InternalMessageText1() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0" data-name="Internal Message Text">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[0px] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>{`Sure thing `}</span>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[#0320f5]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @Jane Muthoni
        </span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>, let me look into it</span>
      </p>
    </div>
  );
}

function InternalMessageWrapper1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Internal Message Wrapper">
      <InternalMessageSender1 />
      <InternalMessageText1 />
    </div>
  );
}

function InternalMessageContainer1() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[47px] items-start pl-0 pr-[36px] py-0 relative shrink-0 w-[403px]" data-name="Internal Message Container">
      <ProfImg2 />
      <InternalMessageWrapper1 />
    </div>
  );
}

function TagIcon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #8990DF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle9() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TagIcon3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        auth
      </p>
    </div>
  );
}

function UpdateInfo3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[19px] items-center justify-center relative shrink-0 w-[403px]" data-name="Update Info">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Amanda Wakio
        </span>
        <span>{` labelled this conversation`}</span>
      </p>
      <SizeAndStyle9 />
    </div>
  );
}

function ProfImg3() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[16px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function MessageSender1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Message Sender">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] text-center tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acme Support
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[11px] tracking-[0.055px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`<support@acme.corp>`}</p>
    </div>
  );
}

function MessageDetails1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[1.2] relative shrink-0 text-[#7a7d7d] text-nowrap whitespace-pre" data-name="Message Details">
      <MessageSender1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[11px] tracking-[0.055px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        To: saitosama@watashi.star
      </p>
    </div>
  );
}

function MessageInfo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Info">
      <ProfImg3 />
      <MessageDetails1 />
    </div>
  );
}

function MoreOptions1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="More Options">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="More Options">
          <path d={svgPaths.pd63a380} fill="var(--fill-0, #A0A3A4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ReplyAll1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Reply All">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Reply All">
          <path d={svgPaths.p169b59a0} fill="var(--fill-0, #A0A3A4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function MessageActions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Message Actions">
      <MoreOptions1 />
      <ReplyAll1 />
    </div>
  );
}

function MessageHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <MessageInfo1 />
          <MessageActions1 />
        </div>
      </div>
    </div>
  );
}

function AttachmentIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Attachment Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-image">
          <path d={svgPaths.p26921480} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function AttachmentInfo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Attachment Info">
      <AttachmentIcon1 />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6060] text-[12px] text-nowrap whitespace-pre">DSC-20240423092342.png</p>
    </div>
  );
}

function SizeAndStyle10() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[88px] shrink-0 w-full" data-name="Size and Style">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[6px] py-[4px] relative w-full">
          <AttachmentInfo1 />
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a0a3a4] text-[12px] text-nowrap whitespace-pre">123KB</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function MessageBody1() {
  return (
    <div className="bg-white relative rounded-[13px] shrink-0 w-full" data-name="Message Body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <div className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">Hi Saito,</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Thanks for reaching out. The issue seems to stem from an incorrect configuration in your settings. Let me sort it out for you.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Warm regards,</p>
            <p>Amanda</p>
          </div>
          <SizeAndStyle10 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f2f3f3] box-border content-stretch flex flex-col items-start justify-center p-[4px] relative rounded-[16px] shrink-0 w-[403px]" data-name="Container">
      <MessageHeader1 />
      <MessageBody1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[9px] relative size-full">
          <Container4 />
          <InternalMessageContainer />
          <ConversationUpdate />
          <InternalMessageContainer1 />
          <UpdateInfo3 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[3px] items-center justify-center px-[6px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#0320f5] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reply
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[3px] items-center justify-center px-[6px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Private Comment `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#e3e3e4] box-border content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[400px] shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Paperclip() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="paperclip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="paperclip">
          <path d={svgPaths.p25c66f80} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <Paperclip />
    </div>
  );
}

function AiPencilFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ai-pencil-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ai-pencil-fill">
          <g id="Vector">
            <path d={svgPaths.p2f943480} fill="var(--fill-0, #7A7D7D)" />
            <path d={svgPaths.p2de75000} fill="var(--fill-0, #7A7D7D)" />
            <path d={svgPaths.p208c0b40} fill="var(--fill-0, #7A7D7D)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <AiPencilFill />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[203px]">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function PaperPlane() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="paper-plane">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="paper-plane">
          <path d={svgPaths.p47ef80} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle11() {
  return (
    <div className="bg-[#0320f5] box-border content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Send</p>
      </div>
      <PaperPlane />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame11 />
      <Button />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal h-[26.376px] leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type a reply
      </p>
      <Frame8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[8px] relative w-full">
          <Frame />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[8px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

export default function Container7() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Container">
      <Container3 />
      <Container6 />
      <Frame4 />
    </div>
  );
}