import svgPaths from "./svg-miy9vgi7c2";
import imgProfImg from "figma:asset/836289d6df84eab2ac2d1f2d0f1dcd527f30304d.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="search">
          <path d={svgPaths.p257c3080} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon />
    </div>
  );
}

function Search() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Search">
      <DashIcon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search for agents
      </p>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[8px] shrink-0 w-full" data-name="Search Bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[6px] relative w-full">
          <Search />
        </div>
      </div>
    </div>
  );
}

function ProfImg() {
  return (
    <div className="bg-[#b4bbee] box-border content-stretch flex flex-col gap-[10px] items-center justify-center mr-[-4px] relative rounded-[999px] shrink-0 size-[18px]" data-name="prof-img">
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

function AgentsList() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-[4px] py-0 relative shrink-0" data-name="Agents List">
      <ProfImg />
      <ProfImg1 />
      <ProfImg2 />
    </div>
  );
}

function AgentsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Agents Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agents in this conversation
      </p>
      <AgentsList />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#bce5f3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">A</p>
      </div>
    </div>
  );
}

function AgentAvatar() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aggie Kamau
      </p>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function AgentItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar />
      <Checkbox />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">A</p>
      </div>
    </div>
  );
}

function AgentAvatar1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amanda Wakio
      </p>
    </div>
  );
}

function CheckSmall() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="check_small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_small">
          <path d={svgPaths.p1f089400} fill="var(--fill-0, #F9FAFB)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="bg-[#0320f5] rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      <CheckSmall />
    </div>
  );
}

function AgentItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar1 />
      <Checkbox1 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#80d4eb] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">J</p>
      </div>
    </div>
  );
}

function AgentAvatar2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jacqueline Wandoe
      </p>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function AgentItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar2 />
      <Checkbox2 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#e29a9a] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">J</p>
      </div>
    </div>
  );
}

function AgentAvatar3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jane Kamau
      </p>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function AgentItem3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar3 />
      <Checkbox3 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-[#b6b6c3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">J</p>
      </div>
    </div>
  );
}

function AgentAvatar4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar4 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Joan Kibe
      </p>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function AgentItem4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar4 />
      <Checkbox4 />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-[#e78f8f] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">N</p>
      </div>
    </div>
  );
}

function AgentAvatar5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar5 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nikki Kimeu
      </p>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function AgentItem5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar5 />
      <Checkbox5 />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="bg-[#bce5f3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">P</p>
      </div>
    </div>
  );
}

function AgentAvatar6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar6 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function AgentItem6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar6 />
      <Checkbox6 />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-[#ebdb80] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">S</p>
      </div>
    </div>
  );
}

function AgentAvatar7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar7 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Samuel Baya
      </p>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function AgentItem7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar7 />
      <Checkbox7 />
    </div>
  );
}

function Avatar8() {
  return (
    <div className="bg-[#e78fd4] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">W</p>
      </div>
    </div>
  );
}

function AgentAvatar8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Agent Avatar">
      <Avatar8 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wallace Mutuku
      </p>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function AgentItem8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Agent Item">
      <AgentAvatar8 />
      <Checkbox8 />
    </div>
  );
}

function AgentItem9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Agent Item">
      <AgentItem />
      <AgentItem1 />
      <AgentItem2 />
      <AgentItem3 />
      <AgentItem4 />
      <AgentItem5 />
      <AgentItem6 />
      <AgentItem7 />
      <AgentItem8 />
    </div>
  );
}

function AgentItem10() {
  return <div className="bg-[#e3e3e4] h-[41px] rounded-[80px] shrink-0 w-[6px]" data-name="Agent Item" />;
}

function AddAgentsList() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Add Agents List">
      <AgentItem9 />
      <AgentItem10 />
    </div>
  );
}

function AddAgentsContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Add Agents Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add more agents
      </p>
      <AddAgentsList />
    </div>
  );
}

function LabelsPopup() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Labels Popup">
      <SearchBar />
      <AgentsContainer />
      <AddAgentsContainer />
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="bg-[#f4f7f8] box-border content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e8edf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle />
    </div>
  );
}

function SizeAndStyle1() {
  return (
    <div className="bg-[#0320f5] box-border content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Add</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle1 />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Action Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

export default function LabelsPopup1() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Labels-Popup">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
          <LabelsPopup />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}