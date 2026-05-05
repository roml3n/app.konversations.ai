import svgPaths from "./svg-u33m1a9adr";
import imgProfImg from "figma:asset/836289d6df84eab2ac2d1f2d0f1dcd527f30304d.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chart-simple">
          <path d={svgPaths.p33b8900} fill="var(--fill-0, #EDCA4C)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Icon />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medium
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
          <path d={svgPaths.p3c9a6400} fill="var(--fill-0, #AAACFF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle1() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Icon1 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inbox
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function ConversationHeader() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Conversation Header">
      <SizeAndStyle />
      <SizeAndStyle1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tag">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ProfileImageContainer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[400px] shrink-0" data-name="Profile Image Container">
      <Icon2 />
    </div>
  );
}

function ProfImg() {
  return (
    <div className="bg-[#aaacff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center mr-[-4px] relative rounded-[999px] shrink-0 size-[18px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute border-2 border-[#fefefe] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[10px] text-nowrap whitespace-pre">P</p>
    </div>
  );
}

function ProfImg1() {
  return (
    <div className="bg-[#e78f8f] box-border content-stretch flex flex-col gap-[10px] items-center justify-center mr-[-4px] relative rounded-[999px] shrink-0 size-[18px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute border-2 border-[#fefefe] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[10px] text-nowrap whitespace-pre">N</p>
    </div>
  );
}

function ProfImg2() {
  return (
    <div className="mr-[-4px] pointer-events-none relative rounded-[999px] shrink-0 size-[18px]" data-name="prof-img">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[999px] size-full" src={imgProfImg} />
      <div aria-hidden="true" className="absolute border-2 border-[#fefefe] border-solid inset-[-2px] rounded-[1001px]" />
    </div>
  );
}

function ProfileImageContainer1() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-[4px] py-0 relative shrink-0" data-name="Profile Image Container">
      <ProfImg />
      <ProfImg1 />
      <ProfImg2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-down">
          <path d={svgPaths.p322c5780} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle2() {
  return (
    <div className="bg-[#f2f3f3] box-border content-stretch flex gap-[2px] items-center justify-center p-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <ProfileImageContainer1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function SizeAndStyle3() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assign
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function TagsContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Tags Container">
      <ProfileImageContainer />
      <SizeAndStyle2 />
      <SizeAndStyle3 />
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="chat-header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[6px] relative w-full">
          <ConversationHeader />
          <TagsContainer />
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #E2C148)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle4() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#404141] text-[12px] text-nowrap whitespace-pre">account</p>
    </div>
  );
}

function TagsContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Tags Container">
      <SizeAndStyle4 />
    </div>
  );
}

function ConversationHeader1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Conversation Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202121] text-[18px] text-nowrap whitespace-pre">Issue with my account</p>
          <TagsContainer1 />
        </div>
      </div>
    </div>
  );
}

function ConversationWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[4]" data-name="Conversation Wrapper">
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ChatHeader />
      <ConversationHeader1 />
    </div>
  );
}

function Seekbar() {
  return <div className="absolute bg-[#0320f5] h-[5px] left-0 right-0 rounded-[30px] top-[5px]" data-name="seekbar" />;
}

function Dot() {
  return <div className="absolute bg-[#0320f5] right-[-0.24px] rounded-[999px] size-[15px] top-1/2 translate-y-[-50%]" data-name="dot" />;
}

function ProgressIndicator() {
  return (
    <div className="absolute h-[15px] left-0 right-[64.86%] top-[-5px]" data-name="Progress Indicator">
      <Seekbar />
      <Dot />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#ebeaee] h-[5px] relative rounded-[60px] shrink-0 w-[301px]" data-name="Progress Bar">
      <ProgressIndicator />
    </div>
  );
}

function TimeContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Time Container">
      <p className="font-['Spline_Sans_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre">01:06</p>
      <ProgressBar />
      <p className="font-['Spline_Sans_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre">03:13</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="play">
          <path d={svgPaths.p14def300} fill="var(--fill-0, #E9E9FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0320f5] box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[5008.4px] shrink-0">
      <Icon4 />
    </div>
  );
}

function PlayerControls() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="player_controls">
      <Frame />
    </div>
  );
}

function PlayButtonContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Play Button Container">
      <PlayerControls />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full z-[3]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <TimeContainer />
          <PlayButtonContainer />
        </div>
      </div>
    </div>
  );
}

function ProfImg3() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">P</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon5 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap whitespace-pre">02:11</p>
    </div>
  );
}

function MessageHeader() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap whitespace-pre">Pauline Nyaboke</p>
      <ChatChannel />
    </div>
  );
}

function MessageContent() {
  return (
    <div className="bg-[#aaacff] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[13px] w-full">Good afternoon! This is Pauline from Acme Support. How can I assist you today?</p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader />
      <MessageContent />
    </div>
  );
}

function MessageWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg3 />
          <MessageInnerWrapper />
        </div>
      </div>
    </div>
  );
}

function ProfImg4() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #A0A3A4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon6 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a0a3a4] text-[10px] text-nowrap whitespace-pre">02:11</p>
    </div>
  );
}

function MessageHeader1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap whitespace-pre">
        <span className="font-['Source_Sans_Pro:SemiBold',sans-serif]">Saito Watanashi</span>{" "}
      </p>
      <ChatChannel1 />
    </div>
  );
}

function MessageContent1() {
  return (
    <div className="bg-[#fefefe] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#202121] text-[13px] w-[min-content]">{`Hi Pauline, I'm having a problem with my account. Every time I try to log in, something goes wrong.`}</p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader1 />
      <MessageContent1 />
    </div>
  );
}

function MessageWrapper1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg4 />
          <MessageInnerWrapper1 />
        </div>
      </div>
    </div>
  );
}

function ProfImg5() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">P</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon7 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap whitespace-pre">02:11</p>
    </div>
  );
}

function MessageHeader2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap whitespace-pre">Pauline Nyaboke</p>
      <ChatChannel2 />
    </div>
  );
}

function MessageContent2() {
  return (
    <div className="bg-[#aaacff] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[13px] w-full">{`I'm sorry to hear that. Could you explain a bit more about what's happening when you try to log in?`}</p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader2 />
      <MessageContent2 />
    </div>
  );
}

function MessageWrapper2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg5 />
          <MessageInnerWrapper2 />
        </div>
      </div>
    </div>
  );
}

function ProfImg6() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #A0A3A4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon8 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a0a3a4] text-[10px] text-nowrap whitespace-pre">02:11</p>
    </div>
  );
}

function MessageHeader3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap whitespace-pre">
        <span className="font-['Source_Sans_Pro:SemiBold',sans-serif]">Saito Watanashi</span>{" "}
      </p>
      <ChatChannel3 />
    </div>
  );
}

function MessageContent3() {
  return (
    <div className="bg-[#fefefe] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#202121] text-[13px] w-[min-content]">Yes, it freezes everytime I log in, I keep getting some kind of error and the homepage keeps loading indefinitely.</p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader3 />
      <MessageContent3 />
    </div>
  );
}

function MessageWrapper3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg6 />
          <MessageInnerWrapper3 />
        </div>
      </div>
    </div>
  );
}

function ProfImg7() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">P</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon9 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap whitespace-pre">02:11</p>
    </div>
  );
}

function MessageHeader4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap whitespace-pre">Pauline Nyaboke</p>
      <ChatChannel4 />
    </div>
  );
}

function MessageContent4() {
  return (
    <div className="bg-[#aaacff] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[16px] shrink-0 w-[322px]" data-name="Message Content">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[13px] w-[306px]">Thank you for clarifying. Are you accessing your account through the website or a mobile app?</p>
    </div>
  );
}

function MessageInnerWrapper4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader4 />
      <MessageContent4 />
    </div>
  );
}

function MessageWrapper4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg7 />
          <MessageInnerWrapper4 />
        </div>
      </div>
    </div>
  );
}

function ProfImg8() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon10 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap whitespace-pre">02:11</p>
    </div>
  );
}

function MessageHeader5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap whitespace-pre">Saito Watanashi</p>
      <ChatChannel5 />
    </div>
  );
}

function MessageContent5() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[16px] shrink-0" data-name="Message Content">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[13px] text-nowrap whitespace-pre">{`I'm using the website on my laptop.`}</p>
    </div>
  );
}

function MessageInnerWrapper5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader5 />
      <MessageContent5 />
    </div>
  );
}

function MessageWrapper5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg8 />
          <MessageInnerWrapper5 />
        </div>
      </div>
    </div>
  );
}

function ProfImg9() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">P</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel6() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon11 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap whitespace-pre">02:11</p>
    </div>
  );
}

function MessageHeader6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap whitespace-pre">Pauline Nyaboke</p>
      <ChatChannel6 />
    </div>
  );
}

function MessageContent6() {
  return (
    <div className="bg-[#aaacff] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[13px] w-full">Alright, thanks. Could you please confirm your email address for me so I can check your account details?</p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader6 />
      <MessageContent6 />
    </div>
  );
}

function MessageWrapper6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg9 />
          <MessageInnerWrapper6 />
        </div>
      </div>
    </div>
  );
}

function ProfImg10() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon12 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap whitespace-pre">02:03</p>
    </div>
  );
}

function MessageHeader7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap whitespace-pre">Saito Watanashi</p>
      <ChatChannel7 />
    </div>
  );
}

function MessageContent7() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[16px] shrink-0" data-name="Message Content">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[13px] text-nowrap whitespace-pre">
        Sure, it’s<span className="[text-underline-position:from-font] decoration-solid text-[#58aec6] underline">{` saitosama@watashi.star`}</span>
      </p>
    </div>
  );
}

function MessageInnerWrapper7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader7 />
      <MessageContent7 />
    </div>
  );
}

function MessageWrapper7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg10 />
          <MessageInnerWrapper7 />
        </div>
      </div>
    </div>
  );
}

function ProfImg11() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">P</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon13 />
      <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap whitespace-pre">02:04</p>
    </div>
  );
}

function MessageHeader8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap whitespace-pre">Pauline Nyaboke</p>
      <ChatChannel8 />
    </div>
  );
}

function MessageContent8() {
  return (
    <div className="bg-[#aaacff] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative w-full">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202121] text-[13px] w-full">Thanks, Saito. Let me have a quick look into this. I’ll be back with you shortly.</p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader8 />
      <MessageContent8 />
    </div>
  );
}

function MessageWrapper8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg11 />
          <MessageInnerWrapper8 />
        </div>
      </div>
    </div>
  );
}

function ProfImg12() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">P</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon14 />
      <p className="font-['Spline_Sans_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre">02:11</p>
    </div>
  );
}

function MessageHeader9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <ChatChannel9 />
    </div>
  );
}

function MessageContent9() {
  return (
    <div className="bg-[#aaacff] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Thanks for waiting. It looks like there's a session error on your account. I’m escalating this to our technical team right now. You should receive a follow-up within the next hour.`}</p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader9 />
      <MessageContent9 />
    </div>
  );
}

function MessageWrapper9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg12 />
          <MessageInnerWrapper9 />
        </div>
      </div>
    </div>
  );
}

function ProfImg13() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel10() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon15 />
      <p className="font-['Spline_Sans_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre">02:49</p>
    </div>
  );
}

function MessageHeader10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Saito Watanashi
      </p>
      <ChatChannel10 />
    </div>
  );
}

function MessageContent10() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[16px] shrink-0" data-name="Message Content">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alright, thanks for your help!
      </p>
    </div>
  );
}

function MessageInnerWrapper10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader10 />
      <MessageContent10 />
    </div>
  );
}

function MessageWrapper10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg13 />
          <MessageInnerWrapper10 />
        </div>
      </div>
    </div>
  );
}

function ProfImg14() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">P</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon16 />
      <p className="font-['Spline_Sans_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre">03:02</p>
    </div>
  );
}

function MessageHeader11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <ChatChannel11 />
    </div>
  );
}

function MessageContent11() {
  return (
    <div className="bg-[#aaacff] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`You're welcome! Let us know if you need anything else. Have a great day!`}</p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader11 />
      <MessageContent11 />
    </div>
  );
}

function MessageWrapper11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg14 />
          <MessageInnerWrapper11 />
        </div>
      </div>
    </div>
  );
}

function ProfImg15() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22b0f300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChatChannel12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <Icon17 />
      <p className="font-['Spline_Sans_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre">03:11</p>
    </div>
  );
}

function MessageHeader12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Saito Watanashi
      </p>
      <ChatChannel12 />
    </div>
  );
}

function MessageContent12() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[16px] shrink-0" data-name="Message Content">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Thanks, Pauline. You too!
      </p>
    </div>
  );
}

function MessageInnerWrapper12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader12 />
      <MessageContent12 />
    </div>
  );
}

function MessageWrapper12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg15 />
          <MessageInnerWrapper12 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1abc3400} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2fcba200} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function FeedbackIcons() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Feedback Icons">
      <Icon18 />
      <Icon19 />
    </div>
  );
}

function FeedbackContainer() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="Feedback Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#b1b3b4] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Was this transcription accurate?
      </p>
      <FeedbackIcons />
    </div>
  );
}

function ConversationContainer() {
  return (
    <div className="bg-[#f4f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Conversation Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[21px] items-start p-[8px] relative w-full">
          <MessageWrapper />
          <MessageWrapper1 />
          <MessageWrapper2 />
          <MessageWrapper3 />
          <MessageWrapper4 />
          <MessageWrapper5 />
          <MessageWrapper6 />
          <MessageWrapper7 />
          <MessageWrapper8 />
          <MessageWrapper9 />
          <MessageWrapper10 />
          <MessageWrapper11 />
          <MessageWrapper12 />
          <FeedbackContainer />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #EDCA4C)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle5() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Icon20 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        account
      </p>
    </div>
  );
}

function ConversationUpdate() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Conversation Update">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` labelled this conversation`}</span>
      </p>
      <SizeAndStyle5 />
    </div>
  );
}

function MessageHeader13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          You
        </span>{" "}
        <span className="font-['Instrument_Sans:Italic',sans-serif] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
          (internal)
        </span>
      </p>
    </div>
  );
}

function MessageContent13() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0" data-name="Message Content">
      <div aria-hidden="true" className="absolute border border-[#8083ff] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[0px] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[#0320f5]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @Pauline Nyaboke
        </span>
        , what’s the status of this issue?
      </p>
    </div>
  );
}

function ConversationUpdate1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="Conversation Update">
      <MessageHeader13 />
      <MessageContent13 />
    </div>
  );
}

function ProfImg16() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
        <div className="absolute bg-[#aaacff] inset-0 rounded-[999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[999px] size-full" src={imgProfImg} />
      </div>
    </div>
  );
}

function ConversationUpdate2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Conversation Update">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start justify-end pl-[36px] pr-0 py-0 relative w-full">
          <ConversationUpdate1 />
          <ProfImg16 />
        </div>
      </div>
    </div>
  );
}

function ProfImg17() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">P</p>
      </div>
    </div>
  );
}

function MessageHeader14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Message Header">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Pauline Nyaboke
        </span>{" "}
        <span className="font-['Instrument_Sans:Italic',sans-serif] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
          (internal)
        </span>
      </p>
    </div>
  );
}

function MessageContent14() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-[16px] shrink-0 w-full" data-name="Message Content">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[0px] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span>{`Hey `}</span>
            <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[#5258fe]" style={{ fontVariationSettings: "'wdth' 100" }}>
              @Jane Muthoni
            </span>
            <span>{`, it’s still in progress. `}</span>
            <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[#5258fe]" style={{ fontVariationSettings: "'wdth' 100" }}>
              @Nikki Kimeu
            </span>
            <span>{` has alerted Technical. We should be getting a status update soon.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MessageInnerWrapper13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <MessageHeader14 />
      <MessageContent14 />
    </div>
  );
}

function MessageWrapper13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg17 />
          <MessageInnerWrapper13 />
        </div>
      </div>
    </div>
  );
}

function ConversationUpdate3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full" data-name="Conversation Update">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Nikki Kimeu
        </span>
        <span>{` was added to the conversation`}</span>
      </p>
    </div>
  );
}

function ConversationUpdate4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Conversation Update">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
              Jane Muthoni
            </span>
            <span>{` joined the conversation`}</span>
          </p>
          <ConversationUpdate />
          <ConversationUpdate2 />
          <MessageWrapper13 />
          <ConversationUpdate3 />
        </div>
      </div>
    </div>
  );
}

function ConversationContainer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[2]" data-name="Conversation Container">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-end px-[8px] py-0 relative size-full">
          <ConversationContainer />
          <ConversationUpdate4 />
        </div>
      </div>
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

function Frame4() {
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

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <AiPencilFill />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[203px]">
      <Frame4 />
      <Frame5 />
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

function SizeAndStyle6() {
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
      <SizeAndStyle6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <Button />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal h-[26.376px] leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type a comment
      </p>
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[8px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function ConversationContainer2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[8px] relative shrink-0 w-[435px] z-[1]" data-name="Conversation Container">
      <Frame1 />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Container">
      <ConversationWrapper />
      <Container />
      <ConversationContainer1 />
      <ConversationContainer2 />
    </div>
  );
}