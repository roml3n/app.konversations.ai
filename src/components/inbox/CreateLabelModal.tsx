import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

const COLORS = [
  "#d06b64", "#f73a21", "#fb573c", "#ff7537", "#ffae45",
  "#fbe983", "#fad265", "#4a85e7", "#9fc6e7", "#9fe1e7",
  "#92e1c0", "#43d692", "#17a765", "#7ad149", "#f691b2",
  "#cd74e6", "#a47ae2", "#9a9cff", "#b99aff", "#ac725e"
];

interface CreateLabelModalProps {
  open: boolean;
  onClose: () => void;
  onCreate?: (name: string, color: string) => void;
  onEdit?: (name: string, color: string) => void;
  initialName?: string;
  initialColor?: string;
  isEditing?: boolean;
}

export function CreateLabelModal({ 
  open, 
  onClose, 
  onCreate, 
  onEdit,
  initialName = "", 
  initialColor,
  isEditing = false 
}: CreateLabelModalProps) {
  const [labelName, setLabelName] = useState(initialName);
  const [selectedColor, setSelectedColor] = useState(initialColor || COLORS[2]);

  useEffect(() => {
    if (open) {
      setLabelName(initialName);
      setSelectedColor(initialColor || COLORS[2]);
    }
  }, [open, initialName, initialColor]);

  if (!open) return null;

  const handleSubmit = () => {
    if (labelName.trim()) {
      if (isEditing) {
        onEdit?.(labelName, selectedColor);
      } else {
        onCreate?.(labelName, selectedColor);
      }
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-[1px]" 
      onClick={onClose}
    >
      <div 
        className="bg-white relative rounded-[16px] w-[340px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] overflow-hidden animate-in fade-in zoom-in-95 duration-200" 
        onClick={(e) => e.stopPropagation()}
      >
         <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        
        <div className="box-border flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          
          <div className="flex flex-col gap-[24px] items-start w-full">
            <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] text-[#777777] text-[12px] tracking-[0.06px] w-full">
              {isEditing ? "Edit label" : "Create a new label"}
            </p>

            {/* Input Section */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#777777] text-[12px] tracking-[0.06px] w-full">
                Label name
              </p>
              <div className="bg-[#f2f3f3] relative rounded-[8px] w-full group focus-within:ring-2 focus-within:ring-[#0320f5]/20 transition-all">
                <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                <input
                  type="text"
                  value={labelName}
                  onChange={(e) => setLabelName(e.target.value)}
                  placeholder="Type a name for your label"
                  className="w-full bg-transparent border-none outline-none p-[12px] font-['Instrument_Sans'] text-[14px] text-[#121212] placeholder:text-[#121212]/30 tracking-[0.07px] leading-[1.2]"
                />
              </div>
            </div>

            {/* Color Picker Section */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#777777] text-[12px] tracking-[0.06px] w-full">
                Label color
              </p>
              <div className="flex flex-wrap gap-[3px] justify-center w-full">
                {COLORS.map((color) => (
                  <div 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className="relative p-[4px] rounded-[99px] cursor-pointer hover:bg-gray-50"
                  >
                    <div 
                      className="size-[16px] rounded-[99px]" 
                      style={{ backgroundColor: color }} 
                    />
                    {selectedColor === color && (
                      <div aria-hidden="true" className="absolute border-2 border-[#58aec6] border-solid inset-0 pointer-events-none rounded-[99px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-[8px] items-center justify-end w-full">
            <button 
              onClick={onClose}
              className="bg-[#f4f7f8] box-border flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] hover:bg-[#e8edf0] transition-colors"
            >
               <div aria-hidden="true" className="absolute border border-[#e8edf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
               <span className="font-['Instrument_Sans'] font-semibold text-[#0320f5] text-[14px] tracking-[0.07px] leading-[1.2]">
                 Cancel
               </span>
            </button>
            <button 
              onClick={handleSubmit}
              className="bg-[#0320f5] box-border flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)] hover:bg-blue-700 transition-colors"
            >
               <span className="font-['Instrument_Sans'] font-semibold text-white text-[14px] tracking-[0.07px] leading-[1.2]">
                 {isEditing ? "Save changes" : "Create"}
               </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
