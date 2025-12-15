import svgPaths from "./svg-fvyzsrmc73";
import clsx from "clsx";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="place-self-stretch relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
  text: string;
  additionalClassNames1?: string;
};

function Wrapper1({ children, additionalClassNames = "", text, additionalClassNames1 = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <div className={clsx("content-stretch flex flex-col items-end relative size-full", additionalClassNames)}>
        <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
      </div>
    </Wrapper2>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.07px]", additionalClassNames)}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}

function StateLayer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type AvatarText1Props = {
  text: string;
  additionalClassNames?: string;
};

function AvatarText1({ text, additionalClassNames = "" }: AvatarText1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center justify-center min-h-[13px] min-w-[13px] relative rounded-[999px] shrink-0 size-[18px]", additionalClassNames)}>
      <Wrapper additionalClassNames="mix-blend-color-burn text-[#1e2939] w-full">{text}</Wrapper>
    </div>
  );
}
type Helper5Props = {
  additionalClassNames?: string;
};

function Helper5({ additionalClassNames = "" }: Helper5Props) {
  return (
    <div className={clsx("absolute bg-[#dee1f7] content-stretch flex flex-col gap-[2px] h-[198px] items-start p-[4px] rounded-[4px] top-[188px] w-[102px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ChipConversationLookupText4 text="Amanda Wakio" />
      <Text1 text="12:30 – 5 PM" />
    </div>
  );
}
type ChipConversationLookupText4Props = {
  text: string;
  additionalClassNames?: string;
};

function ChipConversationLookupText4({ text, additionalClassNames = "" }: ChipConversationLookupText4Props) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0", additionalClassNames)}>
      <AvatarText text="A" additionalClassNames="bg-[#b4bbee]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ChipConversationLookupText3Props = {
  text: string;
  additionalClassNames?: string;
};

function ChipConversationLookupText3({ text, additionalClassNames = "" }: ChipConversationLookupText3Props) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0", additionalClassNames)}>
      <AvatarText text="S" additionalClassNames="bg-[#ebdb80]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Helper4Props = {
  additionalClassNames?: string;
};

function Helper4({ additionalClassNames = "" }: Helper4Props) {
  return (
    <div className={clsx("absolute bg-[#e2f3e9] content-stretch flex flex-col gap-[2px] h-[88px] items-start p-[4px] rounded-[4px] top-[26px] w-[102px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
        <AvatarText text="J" additionalClassNames="bg-[#c0efd4]" />
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {"Jane Kamau"}
        </p>
      </div>
      <Text1 text="8 –10:30 AM" />
    </div>
  );
}
type ChipConversationLookupText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ChipConversationLookupText2({ text, additionalClassNames = "" }: ChipConversationLookupText2Props) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0", additionalClassNames)}>
      <AvatarText text="A" additionalClassNames="bg-[#bce5f3]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Helper3Props = {
  additionalClassNames?: string;
};

function Helper3({ additionalClassNames = "" }: Helper3Props) {
  return (
    <div className={clsx("absolute bg-[#f8ddf2] content-stretch flex flex-col gap-[4px] h-[70px] items-start p-[4px] rounded-[4px] top-[116px] w-[102px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ChipConversationLookupText1 text="Wallace Mutuku" />
      <Text1 text="9:55 AM–12:30 PM" />
    </div>
  );
}
type ChipConversationLookupText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ChipConversationLookupText1({ text, additionalClassNames = "" }: ChipConversationLookupText1Props) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0", additionalClassNames)}>
      <AvatarText text="W" additionalClassNames="bg-[#e78fd4]" />
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
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[12px] text-[rgba(30,30,30,0.7)] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type ChipConversationLookupTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ChipConversationLookupText({ text, additionalClassNames = "" }: ChipConversationLookupTextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0", additionalClassNames)}>
      <AvatarText text="N" additionalClassNames="bg-[#e78f8f]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <Text text="9 pm" additionalClassNames="justify-center px-[8px] py-0" />
    </Wrapper2>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("place-self-stretch relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[1.2] relative shrink-0 text-nowrap">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#5e6060] text-[20px] tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#a0a3a4] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-end relative size-full", additionalClassNames)}>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TabContentsTextProps = {
  text: string;
};

function TabContentsText({ text }: TabContentsTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0">
      <Wrapper additionalClassNames="text-[#7a8890] text-nowrap">{text}</Wrapper>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-[30px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tabs">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tab group">
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <TabContentsText text="Real-time adherence" />
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <TabContentsText text="Forecasting" />
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0" data-name="Tab Contents">
                    <Wrapper additionalClassNames="text-[#0320f5] text-nowrap">Scheduling</Wrapper>
                    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
                      <div className="absolute bg-[#0320f5] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
                    </div>
                  </div>
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <TabContentsText text="Reports" />
                </StateLayer>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
            <div className="h-full overflow-clip relative shrink-0 w-[838px]" data-name="Calendar">
              <div className="absolute bg-[#f2f3f3] grid grid-cols-[66px_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)] grid-rows-[64px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px] h-[702px] left-0 rounded-[12px] top-0 w-[838px]" data-name="calendar-grid">
                <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-col items-end justify-end size-full">
                    <Text text="GMT +3" additionalClassNames="justify-end p-[8px]" />
                  </div>
                </div>
                <div className="[grid-area:1_/_2] content-stretch flex flex-col items-center justify-center place-self-stretch relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                  <Helper text="11" text1="Sunday" />
                </div>
                <div className="[grid-area:1_/_3] content-stretch flex flex-col items-center justify-center place-self-stretch relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                  <Helper text="12" text1="Monday" />
                </div>
                <div className="[grid-area:1_/_4] content-stretch flex flex-col items-center justify-center place-self-stretch relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex flex-col items-center justify-center leading-[1.2] relative shrink-0 text-[#62c3dd] text-nowrap">
                    <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      13
                    </p>
                    <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Tuesday
                    </p>
                  </div>
                </div>
                <div className="[grid-area:1_/_5] content-stretch flex flex-col items-center justify-center place-self-stretch relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                  <Helper text="14" text1="Wednesday" />
                </div>
                <div className="[grid-area:1_/_6] content-stretch flex flex-col items-center justify-center place-self-stretch relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                  <Helper text="15" text1="Thursday" />
                </div>
                <div className="[grid-area:1_/_7] content-stretch flex flex-col items-center justify-center place-self-stretch relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                  <Helper text="16" text1="Friday" />
                </div>
                <div className="[grid-area:1_/_8] content-stretch flex flex-col items-center justify-center place-self-stretch relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                  <Helper text="17" text1="Saturday" />
                </div>
                <Wrapper1 additionalClassNames="[grid-area:2_/_1]" text="6 am" additionalClassNames1="justify-center px-[8px] py-0" />
                <Helper1 additionalClassNames="[grid-area:2_/_2]" />
                <Helper1 additionalClassNames="[grid-area:2_/_3]" />
                <Helper1 additionalClassNames="[grid-area:2_/_4]" />
                <Helper1 additionalClassNames="[grid-area:2_/_5]" />
                <Helper1 additionalClassNames="[grid-area:2_/_6]" />
                <Helper1 additionalClassNames="[grid-area:2_/_7]" />
                <Helper1 additionalClassNames="[grid-area:2_/_8]" />
                <Wrapper1 additionalClassNames="[grid-area:3_/_1]" text="7 am" additionalClassNames1="justify-center px-[8px] py-0" />
                <Helper1 additionalClassNames="[grid-area:3_/_2]" />
                <Helper1 additionalClassNames="[grid-area:3_/_3]" />
                <Helper1 additionalClassNames="[grid-area:3_/_4]" />
                <Helper1 additionalClassNames="[grid-area:3_/_5]" />
                <Helper1 additionalClassNames="[grid-area:3_/_6]" />
                <Helper1 additionalClassNames="[grid-area:3_/_7]" />
                <Helper1 additionalClassNames="[grid-area:3_/_8]" />
                <Wrapper1 additionalClassNames="[grid-area:4_/_1]" text="8 am" additionalClassNames1="justify-center px-[8px] py-0" />
                <Helper1 additionalClassNames="[grid-area:4_/_2]" />
                <Helper1 additionalClassNames="[grid-area:4_/_3]" />
                <Helper1 additionalClassNames="[grid-area:4_/_4]" />
                <Helper1 additionalClassNames="[grid-area:4_/_5]" />
                <Helper1 additionalClassNames="[grid-area:4_/_6]" />
                <Helper1 additionalClassNames="[grid-area:4_/_7]" />
                <Helper1 additionalClassNames="[grid-area:4_/_8]" />
                <Wrapper1 additionalClassNames="[grid-area:5_/_1]" text="9 am" additionalClassNames1="justify-center px-[8px] py-0" />
                <Helper1 additionalClassNames="[grid-area:5_/_2]" />
                <Helper1 additionalClassNames="[grid-area:5_/_3]" />
                <Helper1 additionalClassNames="[grid-area:5_/_4]" />
                <Helper1 additionalClassNames="[grid-area:5_/_5]" />
                <Helper1 additionalClassNames="[grid-area:5_/_6]" />
                <Helper1 additionalClassNames="[grid-area:5_/_7]" />
                <Helper1 additionalClassNames="[grid-area:5_/_8]" />
                <Wrapper1 additionalClassNames="[grid-area:6_/_1]" text="10 am" additionalClassNames1="justify-center px-[8px] py-0" />
                <Helper1 additionalClassNames="[grid-area:6_/_2]" />
                <Helper1 additionalClassNames="[grid-area:6_/_3]" />
                <Helper1 additionalClassNames="[grid-area:6_/_4]" />
                <Helper1 additionalClassNames="[grid-area:6_/_5]" />
                <Helper1 additionalClassNames="[grid-area:6_/_6]" />
                <Helper1 additionalClassNames="[grid-area:6_/_7]" />
                <Helper1 additionalClassNames="[grid-area:6_/_8]" />
                <Wrapper1 additionalClassNames="[grid-area:7_/_1]" text="11 am" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:8_/_1]" text="12 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:9_/_1]" text="1 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:10_/_1]" text="2 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:11_/_1]" text="3 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:12_/_1]" text="4 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:13_/_1]" text="5 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:14_/_1]" text="6 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:15_/_1]" text="7 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Wrapper1 additionalClassNames="[grid-area:16_/_1]" text="8 pm" additionalClassNames1="justify-center px-[8px] py-0" />
                <Helper1 additionalClassNames="[grid-area:7_/_2]" />
                <Helper1 additionalClassNames="[grid-area:8_/_2]" />
                <Helper1 additionalClassNames="[grid-area:9_/_2]" />
                <Helper1 additionalClassNames="[grid-area:10_/_2]" />
                <Helper1 additionalClassNames="[grid-area:11_/_2]" />
                <Helper1 additionalClassNames="[grid-area:12_/_2]" />
                <Helper1 additionalClassNames="[grid-area:13_/_2]" />
                <Helper1 additionalClassNames="[grid-area:14_/_2]" />
                <Helper1 additionalClassNames="[grid-area:15_/_2]" />
                <Helper1 additionalClassNames="[grid-area:16_/_2]" />
                <Helper1 additionalClassNames="[grid-area:17_/_2]" />
                <Helper1 additionalClassNames="[grid-area:18_/_2]" />
                <Helper1 additionalClassNames="[grid-area:19_/_2]" />
                <Helper1 additionalClassNames="[grid-area:7_/_3]" />
                <Helper1 additionalClassNames="[grid-area:8_/_3]" />
                <Helper1 additionalClassNames="[grid-area:9_/_3]" />
                <Helper1 additionalClassNames="[grid-area:10_/_3]" />
                <Helper1 additionalClassNames="[grid-area:11_/_3]" />
                <Helper1 additionalClassNames="[grid-area:12_/_3]" />
                <Helper1 additionalClassNames="[grid-area:13_/_3]" />
                <Helper1 additionalClassNames="[grid-area:14_/_3]" />
                <Helper1 additionalClassNames="[grid-area:15_/_3]" />
                <Helper1 additionalClassNames="[grid-area:16_/_3]" />
                <Helper1 additionalClassNames="[grid-area:17_/_3]" />
                <Helper1 additionalClassNames="[grid-area:18_/_3]" />
                <Helper1 additionalClassNames="[grid-area:19_/_3]" />
                <Helper1 additionalClassNames="[grid-area:7_/_4]" />
                <Helper1 additionalClassNames="[grid-area:8_/_4]" />
                <Helper1 additionalClassNames="[grid-area:9_/_4]" />
                <Helper1 additionalClassNames="[grid-area:10_/_4]" />
                <Helper1 additionalClassNames="[grid-area:11_/_4]" />
                <Helper1 additionalClassNames="[grid-area:12_/_4]" />
                <Helper1 additionalClassNames="[grid-area:13_/_4]" />
                <Helper1 additionalClassNames="[grid-area:14_/_4]" />
                <Helper1 additionalClassNames="[grid-area:15_/_4]" />
                <Helper1 additionalClassNames="[grid-area:16_/_4]" />
                <Helper1 additionalClassNames="[grid-area:17_/_4]" />
                <Helper1 additionalClassNames="[grid-area:18_/_4]" />
                <Helper1 additionalClassNames="[grid-area:19_/_4]" />
                <Helper1 additionalClassNames="[grid-area:7_/_5]" />
                <Helper1 additionalClassNames="[grid-area:8_/_5]" />
                <Helper1 additionalClassNames="[grid-area:9_/_5]" />
                <Helper1 additionalClassNames="[grid-area:10_/_5]" />
                <Helper1 additionalClassNames="[grid-area:11_/_5]" />
                <Helper1 additionalClassNames="[grid-area:12_/_5]" />
                <Helper1 additionalClassNames="[grid-area:13_/_5]" />
                <Helper1 additionalClassNames="[grid-area:14_/_5]" />
                <Helper1 additionalClassNames="[grid-area:15_/_5]" />
                <Helper1 additionalClassNames="[grid-area:16_/_5]" />
                <Helper1 additionalClassNames="[grid-area:17_/_5]" />
                <Helper1 additionalClassNames="[grid-area:18_/_5]" />
                <Helper1 additionalClassNames="[grid-area:19_/_5]" />
                <Helper1 additionalClassNames="[grid-area:7_/_6]" />
                <Helper1 additionalClassNames="[grid-area:8_/_6]" />
                <Helper1 additionalClassNames="[grid-area:9_/_6]" />
                <Helper1 additionalClassNames="[grid-area:10_/_6]" />
                <Helper1 additionalClassNames="[grid-area:11_/_6]" />
                <Helper1 additionalClassNames="[grid-area:12_/_6]" />
                <Helper1 additionalClassNames="[grid-area:13_/_6]" />
                <Helper1 additionalClassNames="[grid-area:14_/_6]" />
                <Helper1 additionalClassNames="[grid-area:15_/_6]" />
                <Helper1 additionalClassNames="[grid-area:16_/_6]" />
                <Helper1 additionalClassNames="[grid-area:17_/_6]" />
                <Helper1 additionalClassNames="[grid-area:18_/_6]" />
                <Helper1 additionalClassNames="[grid-area:19_/_6]" />
                <Helper1 additionalClassNames="[grid-area:7_/_7]" />
                <Helper1 additionalClassNames="[grid-area:8_/_7]" />
                <Helper1 additionalClassNames="[grid-area:9_/_7]" />
                <Helper1 additionalClassNames="[grid-area:10_/_7]" />
                <Helper1 additionalClassNames="[grid-area:11_/_7]" />
                <Helper1 additionalClassNames="[grid-area:12_/_7]" />
                <Helper1 additionalClassNames="[grid-area:13_/_7]" />
                <Helper1 additionalClassNames="[grid-area:14_/_7]" />
                <Helper1 additionalClassNames="[grid-area:15_/_7]" />
                <Helper1 additionalClassNames="[grid-area:16_/_7]" />
                <Helper1 additionalClassNames="[grid-area:17_/_7]" />
                <Helper1 additionalClassNames="[grid-area:18_/_7]" />
                <Helper1 additionalClassNames="[grid-area:19_/_7]" />
                <Helper1 additionalClassNames="[grid-area:7_/_8]" />
                <Helper1 additionalClassNames="[grid-area:8_/_8]" />
                <Helper1 additionalClassNames="[grid-area:9_/_8]" />
                <Helper1 additionalClassNames="[grid-area:10_/_8]" />
                <Helper1 additionalClassNames="[grid-area:11_/_8]" />
                <Helper1 additionalClassNames="[grid-area:12_/_8]" />
                <Helper1 additionalClassNames="[grid-area:13_/_8]" />
                <Helper1 additionalClassNames="[grid-area:14_/_8]" />
                <Helper1 additionalClassNames="[grid-area:15_/_8]" />
                <Helper1 additionalClassNames="[grid-area:16_/_8]" />
                <Helper1 additionalClassNames="[grid-area:17_/_8]" />
                <Helper1 additionalClassNames="[grid-area:18_/_8]" />
                <Helper1 additionalClassNames="[grid-area:19_/_8]" />
                <Helper2 additionalClassNames="[grid-area:17_/_1]" />
                <Helper2 additionalClassNames="[grid-area:18_/_1]" />
                <Helper2 additionalClassNames="[grid-area:19_/_1]" />
              </div>
              <div className="absolute h-[422px] left-[66px] top-[110px] w-[655px]" data-name="schedule-cards">
                <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col gap-[2px] items-start left-0 p-[4px] rounded-[4px] top-0 w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText text="Nikki Kimeu" additionalClassNames="opacity-50" />
                  <Text1 text="6:15–7:30 AM" additionalClassNames="opacity-50" />
                </div>
                <div className="absolute bg-[#f8dddd] content-stretch flex flex-col gap-[2px] items-start left-[332px] p-[4px] rounded-[4px] top-0 w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText text="Nikki Kimeu" />
                  <Text1 text="6:15–7:30 AM" />
                </div>
                <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col gap-[2px] items-start left-0 p-[4px] rounded-[4px] top-[48px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText text="Nikki Kimeu" additionalClassNames="opacity-50" />
                  <Text1 text="7:30–9:55 AM" additionalClassNames="opacity-50" />
                </div>
                <div className="absolute bg-[#f8dddd] content-stretch flex flex-col gap-[2px] items-start left-[332px] p-[4px] rounded-[4px] top-[48px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText text="Nikki Kimeu" />
                  <Text1 text="7:30–9:55 AM" />
                </div>
                <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col gap-[2px] h-[70px] items-start left-0 p-[4px] rounded-[4px] top-[96px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText1 text="Wallace Mutuku" additionalClassNames="opacity-50" />
                  <Text1 text="9:55 AM–12 PM" additionalClassNames="opacity-50" />
                </div>
                <div className="absolute bg-[#f8ddf2] content-stretch flex flex-col gap-[2px] h-[70px] items-start left-[332px] p-[4px] rounded-[4px] top-[96px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText1 text="Wallace Mutuku" />
                  <Text1 text="9:55 AM–12 PM" />
                </div>
                <Helper3 additionalClassNames="left-[221px]" />
                <Helper3 additionalClassNames="left-[553px]" />
                <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col gap-[2px] h-[142px] items-start left-0 p-[4px] rounded-[4px] top-[244px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText text="Nikki Kimeu" additionalClassNames="opacity-50" />
                  <Text1 text="2 –5 PM" additionalClassNames="opacity-50" />
                </div>
                <div className="absolute bg-[#f8dddd] content-stretch flex flex-col gap-[2px] h-[142px] items-start left-[332px] p-[4px] rounded-[4px] top-[244px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText text="Nikki Kimeu" />
                  <Text1 text="2 –5 PM" />
                </div>
                <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col gap-[2px] h-[178px] items-start left-[110px] p-[4px] rounded-[4px] top-[26px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText2 text="Aggie Kamau" additionalClassNames="opacity-50" />
                  <Text1 text="8AM –1PM" additionalClassNames="opacity-50" />
                </div>
                <div className="absolute bg-[#e3f2f8] content-stretch flex flex-col gap-[2px] h-[178px] items-start left-[442px] p-[4px] rounded-[4px] top-[26px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText2 text="Aggie Kamau" />
                  <Text1 text="8AM –1PM" />
                </div>
                <Helper4 additionalClassNames="left-[221px]" />
                <Helper4 additionalClassNames="left-[553px]" />
                <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col gap-[4px] h-[216px] items-start left-[110px] p-[4px] rounded-[4px] top-[206px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText3 text="Samuel Baya" additionalClassNames="opacity-50" />
                  <Text1 text="1 –6PM" additionalClassNames="opacity-50" />
                </div>
                <div className="absolute bg-[#f9f5dc] content-stretch flex flex-col gap-[4px] h-[216px] items-start left-[442px] p-[4px] rounded-[4px] top-[206px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText3 text="Samuel Baya" />
                  <Text1 text="1 –6PM" />
                </div>
                <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col h-[34px] items-start left-0 p-[4px] rounded-[4px] top-[170px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText4 text="Amanda Wakio" additionalClassNames="opacity-50" />
                </div>
                <div className="absolute bg-[#dee1f7] content-stretch flex flex-col h-[34px] items-start left-[332px] p-[4px] rounded-[4px] top-[170px] w-[102px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <ChipConversationLookupText4 text="Amanda Wakio" />
                </div>
                <Helper5 additionalClassNames="left-[221px]" />
                <Helper5 additionalClassNames="left-[553px]" />
              </div>
              <div className="absolute content-stretch flex items-center left-0 top-[203px] w-[838px]" data-name="now-indicator">
                <div className="bg-[#62c3dd] content-stretch flex h-[23px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
                  <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    10:24 am
                  </p>
                </div>
                <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
                  <div className="absolute inset-[-1.5px_0_0_0]" style={{ "--stroke-0": "rgba(98, 195, 221, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 763 2">
                      <line id="Line 1" stroke="var(--stroke-0, #62C3DD)" strokeWidth="1.5" x2="763" y1="0.75" y2="0.75" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 bg-[#fefefe] grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative shrink-0 w-full">
                    <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#404141] text-[18px] tracking-[0.09px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Agents
                    </p>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Drag an agent into the calendar to schedule them manually
                    </p>
                  </div>
                  <div className="bg-[#f1f4f6] max-w-[256px] relative rounded-[8px] shrink-0 w-full" data-name="search_bar">
                    <div className="flex flex-row items-center max-w-[inherit] size-full">
                      <div className="content-stretch flex gap-[4px] items-center max-w-[inherit] p-[8px] relative w-full">
                        <div className="content-stretch flex items-center opacity-70 relative shrink-0">
                          <div className="relative shrink-0 size-[16px]" data-name="search">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g id="search">
                                <path d={svgPaths.pba9f400} fill="var(--fill-0, #6A7282)" id="Primary" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic opacity-50 relative shrink-0 text-[#1e2939] text-[13px] text-nowrap">Search for agents...</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="A" additionalClassNames="bg-[#bce5f3]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Aggie Kamau
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="A" additionalClassNames="bg-[#b4bbee]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Amanda Wakio
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="C" additionalClassNames="bg-[#eed8b4]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Chloe Sidi
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="E" additionalClassNames="bg-[#eca5dc]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Ella Mwaura
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="I" additionalClassNames="bg-[#b4bbee]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Isaac Mwendwa
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="J" additionalClassNames="bg-[#c0efd4]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Jane Kamau
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="J" additionalClassNames="bg-[#eee6b4]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Jessica Apondi
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="K" additionalClassNames="bg-[#c2eeb4]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Kevin Juma
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="N" additionalClassNames="bg-[#e78f8f]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Nikki Kimeu
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="S" additionalClassNames="bg-[#ebdb80]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Samuel Baya
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="T" additionalClassNames="bg-[#b4bbee]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Talia Ndungu
                      </p>
                    </div>
                    <div className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0" data-name="chip/conversation-lookup">
                      <div aria-hidden="true" className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <AvatarText1 text="W" additionalClassNames="bg-[#e78fd4]" />
                      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Wallace Mutuku
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}