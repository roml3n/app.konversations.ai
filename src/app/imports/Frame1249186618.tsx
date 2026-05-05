import svgPaths from "./svg-o3f3wbaj8h";
import clsx from "clsx";
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type TableCellDateCreatedProps = {
  additionalClassNames?: string;
  text: string;
  text1: string;
};

function TableCellDateCreated({ children, additionalClassNames = "", text, text1 }: React.PropsWithChildren<TableCellDateCreatedProps>) {
  return (
    <div className={clsx("h-[51px] justify-self-stretch relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]">
            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {text}
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {text1}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <g id="caret-down">{children}</g>
    </Wrapper4>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
      <g id="face-smile-beam">{children}</g>
    </Wrapper5>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
      <g id="spinner">{children}</g>
    </Wrapper5>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
      <g id="chart-simple">{children}</g>
    </Wrapper5>
  );
}
type ChipConversationLookupText13Props = {
  text: string;
};

function ChipConversationLookupText13({ text }: ChipConversationLookupText13Props) {
  return (
    <div className="bg-[#e4e7ff] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
        <g id="channel-icon">
          <path d={svgPaths.p19805d80} fill="var(--fill-0, #394EF2)" id="Vector" />
          <path d={svgPaths.p1f810300} fill="var(--fill-0, #394EF2)" id="Vector_2" />
          <path d={svgPaths.p2bfe18d0} fill="var(--fill-0, #394EF2)" id="Vector_3" />
        </g>
      </Wrapper5>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText12Props = {
  text: string;
};

function ChipConversationLookupText12({ text }: ChipConversationLookupText12Props) {
  return (
    <div className="bg-[#fcf6e9] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper>
        <path d={svgPaths.p20f9a500} fill="var(--fill-0, #CAAC41)" id="Primary" />
      </Wrapper>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText11Props = {
  text: string;
};

function ChipConversationLookupText11({ text }: ChipConversationLookupText11Props) {
  return (
    <div className="bg-[#f3f9f5] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper1>
        <path d={svgPaths.p1718c180} fill="var(--fill-0, #48BB79)" id="Primary" />
      </Wrapper1>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText10Props = {
  text: string;
};

function ChipConversationLookupText10({ text }: ChipConversationLookupText10Props) {
  return (
    <div className="bg-[#fae8e8] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper2>
        <path d={svgPaths.p95cc300} fill="var(--fill-0, #E53E3E)" id="Primary" />
      </Wrapper2>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText9Props = {
  text: string;
};

function ChipConversationLookupText9({ text }: ChipConversationLookupText9Props) {
  return (
    <div className="bg-[#e9f4ec] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper>
        <path d={svgPaths.p20f9a500} fill="var(--fill-0, #3DA067)" id="Primary" />
      </Wrapper>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText8Props = {
  text: string;
};

function ChipConversationLookupText8({ text }: ChipConversationLookupText8Props) {
  return (
    <div className="bg-[#e9ebfa] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper1>
        <path d={svgPaths.p1718c180} fill="var(--fill-0, #5A5ACD)" id="Primary" />
      </Wrapper1>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText7Props = {
  text: string;
};

function ChipConversationLookupText7({ text }: ChipConversationLookupText7Props) {
  return (
    <div className="bg-[#fcf6e9] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper1>
        <path d={svgPaths.p1718c180} fill="var(--fill-0, #CAAC41)" id="Primary" />
      </Wrapper1>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText6Props = {
  text: string;
  additionalClassNames?: string;
};

function ChipConversationLookupText6({ text, additionalClassNames = "" }: ChipConversationLookupText6Props) {
  return (
    <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <AvatarText text="A" additionalClassNames="bg-[#bce5f3]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText5Props = {
  text: string;
};

function ChipConversationLookupText5({ text }: ChipConversationLookupText5Props) {
  return (
    <div className="bg-[#e9ebfa] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
        <g id="call">
          <path d={svgPaths.p160ae880} fill="var(--fill-0, #5A5ACD)" id="Primary" />
        </g>
      </Wrapper5>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText4Props = {
  text: string;
};

function ChipConversationLookupText4({ text }: ChipConversationLookupText4Props) {
  return (
    <div className="bg-[#e9f4ec] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper2>
        <path d={svgPaths.p95cc300} fill="var(--fill-0, #45B273)" id="Primary" />
      </Wrapper2>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText3Props = {
  text: string;
};

function ChipConversationLookupText3({ text }: ChipConversationLookupText3Props) {
  return (
    <div className="bg-[#fcf6e9] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
        <g id="react-icons/BiSolidStar">
          <path d={svgPaths.p2024300} fill="var(--fill-0, #E2C148)" id="Vector" />
        </g>
      </Wrapper5>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText2Props = {
  text: string;
};

function ChipConversationLookupText2({ text }: ChipConversationLookupText2Props) {
  return (
    <div className="bg-[#f9ebe7] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper>
        <path d={svgPaths.p20f9a500} fill="var(--fill-0, #DE6B20)" id="Primary" />
      </Wrapper>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText1Props = {
  text: string;
};

function ChipConversationLookupText1({ text }: ChipConversationLookupText1Props) {
  return (
    <div className="bg-[#ebf7fb] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper1>
        <path d={svgPaths.p1718c180} fill="var(--fill-0, #58AEC6)" id="Primary" />
      </Wrapper1>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellDateCreatedText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellDateCreatedText1({ text, additionalClassNames = "" }: TableCellDateCreatedText1Props) {
  return (
    <div className={clsx("content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellDateCreatedTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellDateCreatedText({ text, additionalClassNames = "" }: TableCellDateCreatedTextProps) {
  return (
    <div className={clsx("content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]", additionalClassNames)}>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type AvatarTextProps = {
  text: string;
  additionalClassNames?: string;
};

function AvatarText({ text, additionalClassNames = "" }: AvatarTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[12px]", additionalClassNames)}>
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#1e2939] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{text}</p>
      </div>
    </div>
  );
}
type ChipConversationLookupTextProps = {
  text: string;
};

function ChipConversationLookupText({ text }: ChipConversationLookupTextProps) {
  return (
    <div className="bg-[#e9f4ec] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
        <g clipPath="url(#clip0_149_3442)" id="channel-icon">
          <path clipRule="evenodd" d={svgPaths.p2a885700} fill="var(--fill-0, #48BB79)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_149_3442">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </Wrapper5>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("bg-[#f4f4f6] content-stretch flex h-[34px] items-center justify-between p-[8px] relative shrink-0 w-[96px]", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <ChevronsUpDown />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-[#f4f4f6] content-stretch flex h-[34px] items-center justify-between p-[8px] relative shrink-0 w-[126.444px]", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <ChevronsUpDown />
    </div>
  );
}

function ChevronsUpDown() {
  return (
    <Wrapper4>
      <g id="chevrons-up-down">
        <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrapper4>
  );
}

function CaretDown() {
  return (
    <Wrapper3>
      <path d={svgPaths.p3faa2700} fill="var(--fill-0, #B1B3B4)" id="Primary" />
    </Wrapper3>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end px-[30px] py-[24px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#121212] text-[20px] tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Conversation Lookup
            </p>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="SubHeader">
            <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="bg-[#f1f4f6] content-stretch flex items-center max-w-[32px] min-w-[32px] p-[8px] relative rounded-[8px] shrink-0" data-name="search_bar">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="absolute font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] left-[-15.5px] opacity-0 text-[#99a1af] text-[12px] text-nowrap top-0 tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Search...
                  </p>
                  <Wrapper4>
                    <g id="search">
                      <path d={svgPaths.pba9f400} fill="var(--fill-0, #364153)" id="Primary" />
                    </g>
                  </Wrapper4>
                </div>
              </div>
              <div className="bg-[#f1f4f6] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Filter">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <Wrapper4>
                    <g id="react-icons/IoFilter">
                      <path d={svgPaths.p2d04b180} fill="var(--fill-0, #6A7282)" id="Vector" />
                    </g>
                  </Wrapper4>
                </div>
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <Wrapper4>
                    <g id="calendar" opacity="0.6">
                      <path d={svgPaths.p10e710c0} fill="var(--fill-0, #6A7282)" id="Primary" />
                    </g>
                  </Wrapper4>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    18/2/2024 to 30/8/2025
                  </p>
                </div>
                <Wrapper3>
                  <path d={svgPaths.p3faa2700} fill="var(--fill-0, #99A1AF)" id="Primary" />
                </Wrapper3>
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Status Filter">
                <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                  <Wrapper4>
                    <g id="hashtag">
                      <path d={svgPaths.p23f79900} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                    </g>
                  </Wrapper4>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Status
                  </p>
                </div>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  All
                </p>
                <CaretDown />
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Topics Filter">
                <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                  <Wrapper4>
                    <g id="square-poll-horizontal">
                      <path d={svgPaths.p3b41c400} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                    </g>
                  </Wrapper4>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Topics
                  </p>
                </div>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  All
                </p>
                <CaretDown />
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Sentiment Filter">
                <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                  <Wrapper4>
                    <g id="face-smile-beam">
                      <path d={svgPaths.p43c6300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                    </g>
                  </Wrapper4>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Sentiment
                  </p>
                </div>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  All
                </p>
                <CaretDown />
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Agent Filter">
                <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                  <Wrapper4>
                    <g id="profile">
                      <path d={svgPaths.p314d5100} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                    </g>
                  </Wrapper4>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Agent
                  </p>
                </div>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  All
                </p>
                <CaretDown />
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1138px]" data-name="table">
            <div className="grid grid-cols-[216px_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] grid-rows-[repeat(11,_fit-content(100%))] h-[544px] relative shrink-0 w-full" data-name="table">
              <div className="[grid-area:1_/_1] bg-[#f4f4f6] h-[34px] justify-self-stretch relative rounded-bl-[12px] rounded-tl-[12px] shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                    <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Conversation
                    </p>
                    <ChevronsUpDown />
                  </div>
                </div>
              </div>
              <Text text="Channel" additionalClassNames="[grid-area:1_/_2]" />
              <Text text="Agent" additionalClassNames="[grid-area:1_/_3]" />
              <Text text="Date started" additionalClassNames="[grid-area:1_/_4]" />
              <Text text="Primary topic" additionalClassNames="[grid-area:1_/_5]" />
              <Text text="Status" additionalClassNames="[grid-area:1_/_6]" />
              <Text1 text="Priority" additionalClassNames="[grid-area:1_/_7]" />
              <Text1 text="CSAT" additionalClassNames="[grid-area:1_/_8]" />
              <Text1 text="Sentiment" additionalClassNames="[grid-area:1_/_9] rounded-br-[12px] rounded-tr-[12px]" />
              <TableCellDateCreated additionalClassNames="[grid-area:2_/_1]" text="Suggestions for New Features" text1="CONV9876-543" />
              <div className="[grid-area:2_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText text="WhatsApp" />
              </div>
              <div className="[grid-area:2_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <AvatarText text="J" additionalClassNames="bg-[#aaacff]" />
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Jane Kamau
                  </p>
                </div>
              </div>
              <TableCellDateCreatedText text="Feb 15 2025, 09:45:12" additionalClassNames="[grid-area:2_/_4]" />
              <TableCellDateCreatedText1 text="OTP" additionalClassNames="[grid-area:2_/_5]" />
              <div className="[grid-area:2_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText1 text="Inbox" />
              </div>
              <div className="[grid-area:2_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText2 text="High" />
              </div>
              <div className="[grid-area:2_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="93%" />
              </div>
              <div className="[grid-area:2_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText4 text="Positive" />
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:3_/_1]" text="Feedback on Q1 Performance" text1="CONV3456-789" />
              <div className="[grid-area:3_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText5 text="Call" />
              </div>
              <div className="[grid-area:3_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText6 text="Aggie Kamau" />
              </div>
              <TableCellDateCreatedText text="Mar 02 2025, 14:22:37" additionalClassNames="[grid-area:3_/_4]" />
              <TableCellDateCreatedText1 text="Account freeze" additionalClassNames="[grid-area:3_/_5]" />
              <div className="[grid-area:3_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText7 text="In Progress" />
              </div>
              <div className="[grid-area:3_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText2 text="High" />
              </div>
              <div className="[grid-area:3_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="85%" />
              </div>
              <div className="[grid-area:3_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText4 text="Positive" />
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:4_/_1]" text="Marketing Strategies for 2025" text1="CONV5678-901" />
              <div className="[grid-area:4_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#ffe4f9] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
                    <g clipPath="url(#clip0_149_3455)" id="channel-icon">
                      <path d={svgPaths.p38dd2e80} fill="var(--fill-0, #F239CA)" id="Vector" />
                      <path d={svgPaths.p38dd2e80} fill="var(--fill-0, #F239CA)" id="Vector_2" />
                    </g>
                    <defs>
                      <clipPath id="clip0_149_3455">
                        <rect fill="white" height="12" width="12" />
                      </clipPath>
                    </defs>
                  </Wrapper5>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Instagram
                  </p>
                </div>
              </div>
              <div className="[grid-area:4_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <AvatarText text="N" additionalClassNames="bg-[#e78f8f]" />
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Nikki Kimeu
                  </p>
                </div>
              </div>
              <TableCellDateCreatedText text="Apr 10 2025, 11:15:05" additionalClassNames="[grid-area:4_/_4]" />
              <TableCellDateCreatedText1 text="PIN reset" additionalClassNames="[grid-area:4_/_5]" />
              <div className="[grid-area:4_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText8 text="Escalated" />
              </div>
              <div className="[grid-area:4_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText9 text="Medium" />
              </div>
              <div className="[grid-area:4_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="81%" />
              </div>
              <div className="[grid-area:4_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText10 text="Negative" />
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:5_/_1]" text="Password Reset" text1="CONV7890-123" />
              <div className="[grid-area:5_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText text="WhatsApp" />
              </div>
              <div className="[grid-area:5_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText6 text="Aggie Kamau" />
              </div>
              <TableCellDateCreatedText text="May 05 2025, 16:30:45" additionalClassNames="[grid-area:5_/_4]" />
              <TableCellDateCreatedText1 text="Transfer" additionalClassNames="[grid-area:5_/_5]" />
              <div className="[grid-area:5_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText11 text="Done" />
              </div>
              <div className="[grid-area:5_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText12 text="Medium" />
              </div>
              <div className="[grid-area:5_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="95%" />
              </div>
              <div className="[grid-area:5_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <Wrapper5 additionalClassNames="relative shrink-0 size-[12px]">
                    <g id="face-meh">
                      <path d={svgPaths.p51eaff0} fill="var(--fill-0, #A0A3A4)" id="Primary" />
                    </g>
                  </Wrapper5>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Neutral
                  </p>
                </div>
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:6_/_1]" text="Timeline and Responsibilities" text1="CONV9012-345" />
              <div className="[grid-area:6_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText5 text="Call" />
              </div>
              <div className="[grid-area:6_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <AvatarText text="A" additionalClassNames="bg-[#b4bbee]" />
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Amanda Wakio
                  </p>
                </div>
              </div>
              <TableCellDateCreatedText text="Jun 20 2025, 08:12:59" additionalClassNames="[grid-area:6_/_4]" />
              <TableCellDateCreatedText1 text="Subscription" additionalClassNames="[grid-area:6_/_5]" />
              <div className="[grid-area:6_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText1 text="Inbox" />
              </div>
              <div className="[grid-area:6_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText2 text="High" />
              </div>
              <div className="[grid-area:6_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="93%" />
              </div>
              <div className="[grid-area:6_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText4 text="Positive" />
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:7_/_1]" text="Strategies for Issue Resolution" text1="CONV1234-567" />
              <div className="[grid-area:7_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText text="WhatsApp" />
              </div>
              <div className="[grid-area:7_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <AvatarText text="J" additionalClassNames="bg-[#7ba7f9]" />
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Jane Kamau
                  </p>
                </div>
              </div>
              <TableCellDateCreatedText text="Jul 30 2025, 13:55:23" additionalClassNames="[grid-area:7_/_4]" />
              <TableCellDateCreatedText1 text="Email change" additionalClassNames="[grid-area:7_/_5]" />
              <div className="[grid-area:7_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText7 text="In Progress" />
              </div>
              <div className="[grid-area:7_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText9 text="Medium" />
              </div>
              <div className="[grid-area:7_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="70%" />
              </div>
              <div className="[grid-area:7_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText10 text="Negative" />
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:8_/_1]" text="Target Markets for New Products" text1="CONV3456-789" />
              <div className="[grid-area:8_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText text="WhatsApp" />
              </div>
              <div className="[grid-area:8_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <AvatarText text="W" additionalClassNames="bg-[#e78fd4]" />
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Wallace Mutuku
                  </p>
                </div>
              </div>
              <TableCellDateCreatedText text="Aug 18 2025, 10:05:11" additionalClassNames="[grid-area:8_/_4]" />
              <TableCellDateCreatedText1 text="Support extension" additionalClassNames="[grid-area:8_/_5]" />
              <div className="[grid-area:8_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText7 text="In Progress" />
              </div>
              <div className="[grid-area:8_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText9 text="Medium" />
              </div>
              <div className="[grid-area:8_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="95%" />
              </div>
              <div className="[grid-area:8_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText4 text="Positive" />
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:9_/_1]" text="Feedback: User Experience Enhancements" text1="CONV5678-901" />
              <div className="[grid-area:9_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText13 text="Jira" />
              </div>
              <div className="[grid-area:9_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <AvatarText text="S" additionalClassNames="bg-[#ebdb80]" />
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Samuel Baya
                  </p>
                </div>
              </div>
              <TableCellDateCreatedText text="Sep 25 2025, 17:40:33" additionalClassNames="[grid-area:9_/_4]" />
              <TableCellDateCreatedText1 text="Credits" additionalClassNames="[grid-area:9_/_5]" />
              <div className="[grid-area:9_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText11 text="Done" />
              </div>
              <div className="[grid-area:9_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText12 text="Medium" />
              </div>
              <div className="[grid-area:9_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="73%" />
              </div>
              <div className="[grid-area:9_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText10 text="Negative" />
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:10_/_1]" text="Resource Allocation for Customer Support" text1="CONV7890-123" />
              <div className="[grid-area:10_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#e4f0ff] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="channel-icon">
                    <Wrapper5 additionalClassNames="absolute inset-[0_0.35%_0.79%_0.34%]">
                      <g id="Group">
                        <path d={svgPaths.p2b8590c0} fill="var(--fill-0, #3989F2)" id="Subtract" />
                      </g>
                    </Wrapper5>
                  </div>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Messenger
                  </p>
                </div>
              </div>
              <div className="[grid-area:10_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <AvatarText text="J" additionalClassNames="bg-[#e29a9a]" />
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Jane Kamau
                  </p>
                </div>
              </div>
              <TableCellDateCreatedText text="Oct 12 2025, 15:27:48" additionalClassNames="[grid-area:10_/_4]" />
              <TableCellDateCreatedText1 text="Cancellation" additionalClassNames="[grid-area:10_/_5]" />
              <div className="[grid-area:10_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText8 text="Escalated" />
              </div>
              <div className="[grid-area:10_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText9 text="Medium" />
              </div>
              <div className="[grid-area:10_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="98%" />
              </div>
              <div className="[grid-area:10_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText4 text="Positive" />
              </div>
              <TableCellDateCreated additionalClassNames="[grid-area:11_/_1]" text="Improving Team Skills for Customer Service" text1="CONV9012-345" />
              <div className="[grid-area:11_/_2] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText13 text="Jira" />
              </div>
              <div className="[grid-area:11_/_3] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <ChipConversationLookupText6 text="Aggie Kamau" />
              </div>
              <TableCellDateCreatedText text="Nov 29 2025, 19:00:00" additionalClassNames="[grid-area:11_/_4]" />
              <TableCellDateCreatedText1 text="Account details" additionalClassNames="[grid-area:11_/_5]" />
              <div className="[grid-area:11_/_6] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[126.444px]" data-name="table_cell / date_created">
                <div className="bg-[#f4f4f6] content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
                  <Wrapper1>
                    <path d={svgPaths.p1718c180} fill="var(--fill-0, #BDBAC9)" id="Primary" />
                  </Wrapper1>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Archived
                  </p>
                </div>
              </div>
              <div className="[grid-area:11_/_7] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / agent_assigned">
                <ChipConversationLookupText2 text="High" />
              </div>
              <div className="[grid-area:11_/_8] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText3 text="86%" />
              </div>
              <div className="[grid-area:11_/_9] content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[96px]" data-name="table_cell / date_created">
                <ChipConversationLookupText4 text="Positive" />
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="pagination–table">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Showing 1 - 10 of 312
                    </p>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      •
                    </p>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Results per page
                      </p>
                      <div className="bg-[#f3f4f6] content-stretch flex gap-[4px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          10
                        </p>
                        <Wrapper3>
                          <path d={svgPaths.p3faa2700} fill="var(--fill-0, #6A7282)" id="Primary" />
                        </Wrapper3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f2f3f3] content-stretch flex gap-[16px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                    <Wrapper4>
                      <g id="caret-left" opacity="0.2">
                        <path d={svgPaths.p4d7d300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                      </g>
                    </Wrapper4>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      1
                    </p>
                    <Wrapper4>
                      <g id="caret-right">
                        <path d={svgPaths.p4376000} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                      </g>
                    </Wrapper4>
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