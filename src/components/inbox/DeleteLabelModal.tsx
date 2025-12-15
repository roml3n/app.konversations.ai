import React from "react";

interface DeleteLabelModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export function DeleteLabelModal({ open, onClose, onDelete }: DeleteLabelModalProps) {
  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-[1px]"
      onClick={onClose}
    >
      <div 
        className="bg-white relative rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] w-[439px] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[36px] items-center overflow-clip p-[24px] relative size-full">
            
            {/* Modal Container */}
            <div className="content-stretch flex flex-col gap-[36px] items-end justify-center relative shrink-0 w-[439px] max-w-full">
              
              {/* Modal Content */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#121212] w-full">
                <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[20px] tracking-[0.1px] w-full">
                  Delete this label?
                </p>
                <div className="flex flex-col font-['Instrument_Sans'] font-normal justify-end leading-[0] opacity-50 relative shrink-0 text-[14px] tracking-[0.07px] w-full">
                  <p className="leading-[1.2]">
                    This will permanently remove the label from your organization’s inbox. Any conversations assigned to it will remain. This action cannot be undone.
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                
                {/* Cancel Button */}
                <button 
                  onClick={onClose}
                  className="bg-[#f4f7f8] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0 group hover:bg-[#e8edf0] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#e8edf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
                  <div className="flex flex-col font-['Instrument_Sans'] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-nowrap tracking-[0.07px]">
                    <p className="leading-[1.2]">Cancel</p>
                  </div>
                </button>

                {/* Delete Button */}
                <button 
                  onClick={onDelete}
                  className="bg-[#fb2c36] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0 hover:bg-[#d9262f] transition-colors"
                >
                  <div className="flex flex-col font-['Instrument_Sans'] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.07px]">
                    <p className="leading-[1.2]">Delete label</p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
