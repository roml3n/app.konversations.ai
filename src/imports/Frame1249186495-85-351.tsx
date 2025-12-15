import svgPaths from "./svg-9t2pr7gwiv";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[51px] justify-self-stretch relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TableCellAgentAssignedTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellAgentAssignedText({ text, additionalClassNames = "" }: TableCellAgentAssignedTextProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#45b273] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex items-center p-[8px] relative size-full">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className={clsx("content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[138.25px]", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className={clsx("content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[138.25px]", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:Medium',sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-between p-[8px] relative", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <Wrapper1>
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </Wrapper1>
    </div>
  );
}
type TableCellDateCreatedTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellDateCreatedText({ text, additionalClassNames = "" }: TableCellDateCreatedTextProps) {
  return (
    <div className={clsx("bg-[#f4f4f6] place-self-stretch relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <Text text={text} additionalClassNames="size-full" />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] size-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[16px] relative size-full">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#404141] text-[16px] tracking-[0.08px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Queue status
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="table">
            <div className="grid grid-cols-[repeat(8,_minmax(0px,_1fr))] grid-rows-[repeat(6,_fit-content(100%))] h-[288px] relative shrink-0 w-full" data-name="table">
              <TableCellDateCreatedText text="Queue" additionalClassNames="[grid-area:1_/_1] rounded-bl-[12px] rounded-tl-[12px]" />
              <TableCellDateCreatedText1 text="Billing" additionalClassNames="[grid-area:2_/_1]" />
              <TableCellDateCreatedText1 text="Support" additionalClassNames="[grid-area:3_/_1]" />
              <TableCellDateCreatedText1 text="Sales" additionalClassNames="[grid-area:4_/_1]" />
              <TableCellDateCreatedText1 text="Customer Service" additionalClassNames="[grid-area:5_/_1]" />
              <TableCellDateCreatedText1 text="Retention" additionalClassNames="[grid-area:6_/_1]" />
              <TableCellDateCreatedText text="Waiting" additionalClassNames="[grid-area:1_/_2]" />
              <Text1 text="1" additionalClassNames="[grid-area:2_/_2]" />
              <Text1 text="4" additionalClassNames="[grid-area:3_/_2]" />
              <Text1 text="3" additionalClassNames="[grid-area:4_/_2]" />
              <Text1 text="1" additionalClassNames="[grid-area:5_/_2]" />
              <Text1 text="2" additionalClassNames="[grid-area:6_/_2]" />
              <TableCellDateCreatedText text="Longest wait" additionalClassNames="[grid-area:1_/_3]" />
              <TableCellDateCreatedText text="Available" additionalClassNames="[grid-area:1_/_4]" />
              <TableCellDateCreatedText text="On Call" additionalClassNames="[grid-area:1_/_5]" />
              <TableCellDateCreatedText text="Service Level" additionalClassNames="[grid-area:1_/_6]" />
              <div className="[grid-area:2_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="67s" />
                </div>
              </div>
              <div className="[grid-area:3_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="82s" />
                </div>
              </div>
              <div className="[grid-area:4_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="11s" />
                </div>
              </div>
              <div className="[grid-area:5_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="32s" />
                </div>
              </div>
              <div className="[grid-area:6_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="58s" />
                </div>
              </div>
              <TableCellDateCreatedText text="Occupancy" additionalClassNames="[grid-area:1_/_7]" />
              <Text1 text="4" additionalClassNames="[grid-area:2_/_4]" />
              <Text1 text="3" additionalClassNames="[grid-area:2_/_5]" />
              <TableCellAgentAssignedText text="83.2%" additionalClassNames="[grid-area:2_/_6]" />
              <TableCellAgentAssignedText text="88.7%" additionalClassNames="[grid-area:2_/_7]" />
              <Text1 text="5" additionalClassNames="[grid-area:3_/_4]" />
              <Text1 text="1" additionalClassNames="[grid-area:3_/_5]" />
              <TableCellAgentAssignedText text="90.8%" additionalClassNames="[grid-area:3_/_6]" />
              <TableCellAgentAssignedText text="92.4%" additionalClassNames="[grid-area:3_/_7]" />
              <Text1 text="2" additionalClassNames="[grid-area:4_/_4]" />
              <Text1 text="8" additionalClassNames="[grid-area:4_/_5]" />
              <TableCellAgentAssignedText text="91.1%" additionalClassNames="[grid-area:4_/_6]" />
              <TableCellAgentAssignedText text="80.2%" additionalClassNames="[grid-area:4_/_7]" />
              <Text1 text="7" additionalClassNames="[grid-area:5_/_4]" />
              <Text1 text="7" additionalClassNames="[grid-area:5_/_5]" />
              <Wrapper additionalClassNames="[grid-area:5_/_6]">
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#da3b3b] text-[14px] tracking-[0.07px] w-[116px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  72.1%
                </p>
              </Wrapper>
              <Wrapper additionalClassNames="[grid-area:5_/_7]">
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#da3b3b] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  53.3%
                </p>
              </Wrapper>
              <Text1 text="1" additionalClassNames="[grid-area:6_/_4]" />
              <Text1 text="8" additionalClassNames="[grid-area:6_/_5]" />
              <TableCellAgentAssignedText text="88.4%" additionalClassNames="[grid-area:6_/_6]" />
              <Wrapper additionalClassNames="[grid-area:6_/_7]">
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff8904] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  65.9%
                </p>
              </Wrapper>
              <div className="[grid-area:1_/_8] bg-[#f4f4f6] relative rounded-br-[12px] rounded-tr-[12px] shrink-0" data-name="table_cell / agent_assigned">
                <div className="flex flex-row items-center size-full">
                  <Text text="Calls Today" additionalClassNames="w-full" />
                </div>
              </div>
              <div className="[grid-area:2_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="153" />
                </div>
              </div>
              <div className="[grid-area:3_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="76" />
                </div>
              </div>
              <div className="[grid-area:4_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="90" />
                </div>
              </div>
              <div className="[grid-area:5_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="111" />
                </div>
              </div>
              <div className="[grid-area:6_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                <div className="flex flex-row items-center size-full">
                  <Text2 text="211" />
                </div>
              </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="pagination–table">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative size-full">
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Showing 1 - 5 of 5
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
                        <Wrapper1>
                          <g id="caret-down">
                            <path d={svgPaths.p3faa2700} fill="var(--fill-0, #6A7282)" id="Primary" />
                          </g>
                        </Wrapper1>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f2f3f3] content-stretch flex gap-[16px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                    <Wrapper1>
                      <g id="caret-left" opacity="0.2">
                        <path d={svgPaths.p4d7d300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                      </g>
                    </Wrapper1>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      1
                    </p>
                    <Wrapper1>
                      <g id="caret-right" opacity="0.2">
                        <path d={svgPaths.p4376000} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                      </g>
                    </Wrapper1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}