interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-9 h-fit rounded-full p-[1px] border transition-colors duration-300 ${
        checked
          ? "bg-[#d6d7ff] border-[#0320f5]"
          : "bg-[#e5e7eb] border-[#d1d5dc]"
      }`}
    >
      <div className="relative h-[18px] w-full">
        <div
          className={`absolute w-[18px] h-[18px] rounded-full bg-white border transition-all duration-300 ease-in-out ${
            checked
              ? "border-[#0320f5] translate-x-[14px]"
              : "border-[#d1d5dc] translate-x-0"
          }`}
        />
      </div>
    </button>
  );
}