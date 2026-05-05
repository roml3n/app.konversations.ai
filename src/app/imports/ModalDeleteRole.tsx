function ModalContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#121212] w-full" data-name="Modal Content">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[20px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Delete this label?
      </p>
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end leading-[0] opacity-50 relative shrink-0 text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">This will permanently remove the label from your organization’s inbox. Any conversations assigned to it will remain. This action cannot be undone.</p>
      </div>
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="bg-[#f4f7f8] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
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
    <div className="bg-[#fb2c36] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Delete label</p>
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

function ModalActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Modal Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function ModalContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-end justify-center relative shrink-0 w-[439px]" data-name="Modal Container">
      <ModalContent />
      <ModalActions />
    </div>
  );
}

export default function ModalDeleteRole() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] size-full" data-name="modal-delete-role">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-center overflow-clip p-[24px] relative size-full">
          <ModalContainer />
        </div>
      </div>
    </div>
  );
}