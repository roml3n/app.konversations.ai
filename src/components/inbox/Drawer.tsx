import React, { ReactNode } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
}

export function Drawer({ isOpen, onClose, children, width = '400px' }: DrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60" onClick={onClose}>
      <div
        className="absolute top-[16px] right-[16px] bottom-[16px] bg-white rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden border border-[#e3e3e4]"
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

interface DrawerHeaderProps {
  title: string;
  onClose: () => void;
  icon?: ReactNode;
}

export function DrawerHeader({ title, onClose, icon }: DrawerHeaderProps) {
  return (
    <div className="h-[64px] shrink-0 border-b border-[#e3e3e4] flex items-center justify-between px-4 bg-white">
      <div className="flex items-center gap-3">
        {icon && <div className="shrink-0">{icon}</div>}
        <p className="font-['Instrument_Sans'] font-semibold text-[#121212] text-[20px] tracking-[0.1px]">
          {title}
        </p>
      </div>
      <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
            <path
              d="M15.8332 5.34166L14.6582 4.16666L9.99984 8.825L5.34151 4.16666L4.16651 5.34166L8.82484 10L4.16651 14.6583L5.34151 15.8333L9.99984 11.175L14.6582 15.8333L15.8332 14.6583L11.1748 10L15.8332 5.34166Z"
              fill="#7A7D7D"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

interface DrawerContentProps {
  children: ReactNode;
}

export function DrawerContent({ children }: DrawerContentProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
      {children}
    </div>
  );
}

interface DrawerFooterProps {
  children: ReactNode;
}

export function DrawerFooter({ children }: DrawerFooterProps) {
  return (
    <div className="flex items-center justify-end gap-2 px-4 pb-4">
      {children}
    </div>
  );
}
