import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="place-self-stretch relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
  text: string;
  additionalClassNames1?: string;
};

function Wrapper({ children, additionalClassNames = "", text, additionalClassNames1 = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <div className={clsx("content-stretch flex flex-col items-end relative size-full", additionalClassNames)}>
        <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
      </div>
    </Wrapper1>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <Text text="9 pm" additionalClassNames="justify-center px-[8px] py-0" />
    </Wrapper1>
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

export default function CalendarGrid() {
  return (
    <div className="bg-[#f2f3f3] grid grid-cols-[66px_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)] grid-rows-[64px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px_36px] relative rounded-[12px] size-full" data-name="calendar-grid">
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
      <Wrapper additionalClassNames="[grid-area:2_/_1]" text="6 am" additionalClassNames1="justify-center px-[8px] py-0" />
      <Helper1 additionalClassNames="[grid-area:2_/_2]" />
      <Helper1 additionalClassNames="[grid-area:2_/_3]" />
      <Helper1 additionalClassNames="[grid-area:2_/_4]" />
      <Helper1 additionalClassNames="[grid-area:2_/_5]" />
      <Helper1 additionalClassNames="[grid-area:2_/_6]" />
      <Helper1 additionalClassNames="[grid-area:2_/_7]" />
      <Helper1 additionalClassNames="[grid-area:2_/_8]" />
      <Wrapper additionalClassNames="[grid-area:3_/_1]" text="7 am" additionalClassNames1="justify-center px-[8px] py-0" />
      <Helper1 additionalClassNames="[grid-area:3_/_2]" />
      <Helper1 additionalClassNames="[grid-area:3_/_3]" />
      <Helper1 additionalClassNames="[grid-area:3_/_4]" />
      <Helper1 additionalClassNames="[grid-area:3_/_5]" />
      <Helper1 additionalClassNames="[grid-area:3_/_6]" />
      <Helper1 additionalClassNames="[grid-area:3_/_7]" />
      <Helper1 additionalClassNames="[grid-area:3_/_8]" />
      <Wrapper additionalClassNames="[grid-area:4_/_1]" text="8 am" additionalClassNames1="justify-center px-[8px] py-0" />
      <Helper1 additionalClassNames="[grid-area:4_/_2]" />
      <Helper1 additionalClassNames="[grid-area:4_/_3]" />
      <Helper1 additionalClassNames="[grid-area:4_/_4]" />
      <Helper1 additionalClassNames="[grid-area:4_/_5]" />
      <Helper1 additionalClassNames="[grid-area:4_/_6]" />
      <Helper1 additionalClassNames="[grid-area:4_/_7]" />
      <Helper1 additionalClassNames="[grid-area:4_/_8]" />
      <Wrapper additionalClassNames="[grid-area:5_/_1]" text="9 am" additionalClassNames1="justify-center px-[8px] py-0" />
      <Helper1 additionalClassNames="[grid-area:5_/_2]" />
      <Helper1 additionalClassNames="[grid-area:5_/_3]" />
      <Helper1 additionalClassNames="[grid-area:5_/_4]" />
      <Helper1 additionalClassNames="[grid-area:5_/_5]" />
      <Helper1 additionalClassNames="[grid-area:5_/_6]" />
      <Helper1 additionalClassNames="[grid-area:5_/_7]" />
      <Helper1 additionalClassNames="[grid-area:5_/_8]" />
      <Wrapper additionalClassNames="[grid-area:6_/_1]" text="10 am" additionalClassNames1="justify-center px-[8px] py-0" />
      <Helper1 additionalClassNames="[grid-area:6_/_2]" />
      <Helper1 additionalClassNames="[grid-area:6_/_3]" />
      <Helper1 additionalClassNames="[grid-area:6_/_4]" />
      <Helper1 additionalClassNames="[grid-area:6_/_5]" />
      <Helper1 additionalClassNames="[grid-area:6_/_6]" />
      <Helper1 additionalClassNames="[grid-area:6_/_7]" />
      <Helper1 additionalClassNames="[grid-area:6_/_8]" />
      <Wrapper additionalClassNames="[grid-area:7_/_1]" text="11 am" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:8_/_1]" text="12 pm" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:9_/_1]" text="1 pm" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:10_/_1]" text="2 pm" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:11_/_1]" text="3 pm" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:12_/_1]" text="4 pm" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:13_/_1]" text="5 pm" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:14_/_1]" text="6 pm" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:15_/_1]" text="7 pm" additionalClassNames1="justify-center px-[8px] py-0" />
      <Wrapper additionalClassNames="[grid-area:16_/_1]" text="8 pm" additionalClassNames1="justify-center px-[8px] py-0" />
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
  );
}