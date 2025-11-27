import { useState } from 'react';
import { 
  format, 
  subDays, 
  subMonths, 
  subYears, 
  startOfYear, 
  endOfMonth, 
  startOfMonth,
  isSameDay, 
  isWithinInterval, 
  addMonths, 
  isBefore, 
  isAfter,
  eachDayOfInterval,
  getDay,
  addYears,
  setMonth
} from 'date-fns';
import { cn } from '../../lib/utils';
import svgPaths from '../../imports/svg-0vknl7qz4y';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// --- Icons from Figma ---
function CaretRight() {
  return (
    <div className="relative size-[14px] rotate-90">
      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
        <path d={svgPaths.p98dc900} fill="currentColor" className="text-muted-foreground" />
      </svg>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p27f6b300} fill="currentColor" className="text-[#292F32]" />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p1bb35f00} fill="currentColor" className="text-[#292F32]" />
      </svg>
    </div>
  );
}

// --- Types ---
export type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
  label?: string;
};

interface DateFilterContentProps {
  range: DateRange;
  onRangeChange: (range: DateRange) => void;
  onApply: () => void;
  onCancel: () => void;
  className?: string;
}

// --- Presets ---
const PRESETS = [
  { label: 'Custom', getValue: () => ({ from: undefined, to: undefined }) },
  { label: 'Past week', getValue: () => ({ from: subDays(new Date(), 7), to: new Date() }) },
  { label: 'Past month', getValue: () => ({ from: subMonths(new Date(), 1), to: new Date() }) },
  { label: 'Year to date', getValue: () => ({ from: startOfYear(new Date()), to: new Date() }) },
  { label: 'Past year', getValue: () => ({ from: subYears(new Date(), 1), to: new Date() }) },
  { label: 'All time', getValue: () => ({ from: new Date(2020, 0, 1), to: new Date() }) },
];

// --- Sub-Components ---

function MonthGrid({ 
  viewDate, 
  onSelectMonth 
}: { 
  viewDate: Date; 
  onSelectMonth: (date: Date) => void;
}) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="grid grid-cols-3 gap-y-[16px] gap-x-[10px] py-[8px]">
      {months.map((m, i) => {
        const isCurrent = viewDate.getMonth() === i;
        return (
          <button
            key={m}
            onClick={() => onSelectMonth(setMonth(viewDate, i))}
            className={cn(
              "h-[32px] rounded-[8px] text-[14px] font-['Instrument_Sans'] transition-colors",
              isCurrent 
                ? "bg-[#aaacff] text-[#364153] font-medium" 
                : "text-[#364153] hover:bg-gray-100"
            )}
          >
            {m}
          </button>
        );
      })}
    </div>
  );
}

function CalendarMonth({ 
  month, 
  year, 
  range, 
  onSelectDate, 
  hoverDate, 
  setHoverDate 
}: { 
  month: number; 
  year: number; 
  range: DateRange; 
  onSelectDate: (date: Date) => void;
  hoverDate: Date | null;
  setHoverDate: (date: Date | null) => void;
}) {
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(firstDayOfMonth),
    end: endOfMonth(firstDayOfMonth)
  });

  // Padding days for grid alignment (Sunday start)
  const startDay = getDay(firstDayOfMonth); 
  const paddingDays = Array(startDay).fill(null);

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-[4px]">
        {weekDays.map((d, i) => (
          <div key={`${d}-${i}`} className="h-[32px] flex items-center justify-center">
            <span className="text-[14px] text-[#99a1af] font-['Instrument_Sans'] font-normal leading-[1.2] text-center">
              {d}
            </span>
          </div>
        ))}
      </div>
      
      {/* Days Grid */}
      <div className="grid grid-cols-7 grid-rows-6 gap-y-[4px] gap-x-0">
        {paddingDays.map((_, i) => <div key={`pad-${i}`} className="h-[32px]" />)}
        {daysInMonth.map(date => {
          const isSelectedStart = range.from && isSameDay(date, range.from);
          const isSelectedEnd = range.to && isSameDay(date, range.to);
          const isWithin = range.from && range.to && isWithinInterval(date, { start: range.from, end: range.to });
          
          // Hover logic
          const isHoverWithin = range.from && !range.to && hoverDate && isWithinInterval(date, { 
            start: isBefore(range.from, hoverDate) ? range.from : hoverDate,
            end: isAfter(range.from, hoverDate) ? range.from : hoverDate
          });

          const isStartOrEnd = isSelectedStart || isSelectedEnd;
          const isInRange = (isWithin && !isStartOrEnd) || (isHoverWithin && !isStartOrEnd);
          
          // Rounding logic for start/end of a range
          const isRangeStart = isSelectedStart && range.to && !isSameDay(range.from!, range.to);
          const isRangeEnd = isSelectedEnd && range.from && !isSameDay(range.from, range.to!);

          return (
            <button
              key={date.toISOString()}
              onClick={() => onSelectDate(date)}
              onMouseEnter={() => setHoverDate(date)}
              onMouseLeave={() => setHoverDate(null)}
              className={cn(
                "h-[32px] w-full flex items-center justify-center rounded-[8px] transition-colors relative",
                "text-[14px] text-[#364153] font-['Instrument_Sans'] leading-[1.2]",
                isStartOrEnd && "bg-[#aaacff] z-10",
                
                // Specific rounding
                isRangeStart && "rounded-l-[8px] rounded-r-none",
                isRangeEnd && "rounded-r-[8px] rounded-l-none",
                (isStartOrEnd && !isRangeStart && !isRangeEnd) && "rounded-[8px]",
                
                isInRange && "bg-[#e9e9ff] rounded-none", 
                
                 // Hover effect for non-selected
                !isStartOrEnd && !isInRange && "hover:bg-gray-100"
              )}
            >
              {format(date, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DateFilterContent({ range, onRangeChange, onApply, onCancel, className }: DateFilterContentProps) {
  // Independent View Dates
  const [leftViewDate, setLeftViewDate] = useState(range.from || new Date());
  const [rightViewDate, setRightViewDate] = useState(range.to || addMonths(new Date(), 1));
  
  // View Modes
  const [leftViewMode, setLeftViewMode] = useState<'days' | 'months'>('days');
  const [rightViewMode, setRightViewMode] = useState<'days' | 'months'>('days');
  
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [activePreset, setActivePreset] = useState<string>(range.label || 'Custom');

  const handlePresetChange = (value: string) => {
    setActivePreset(value);
    const preset = PRESETS.find(p => p.label === value);
    if (preset) {
      if (preset.label === 'Custom') {
        onRangeChange({ ...range, label: 'Custom' });
      } else {
        const newRange = preset.getValue();
        onRangeChange({ from: newRange.from, to: newRange.to, label: preset.label });
        if (newRange.from && newRange.to) {
          setLeftViewDate(newRange.from);
          setRightViewDate(newRange.to);
        } else if (newRange.from) {
            setLeftViewDate(newRange.from);
            setRightViewDate(addMonths(newRange.from, 1));
        }
        // Reset views to days on preset change
        setLeftViewMode('days');
        setRightViewMode('days');
      }
    }
  };

  const handleDateClick = (date: Date) => {
    setActivePreset('Custom');
    if (!range.from || (range.from && range.to)) {
      // Start new range
      onRangeChange({ from: date, to: undefined, label: 'Custom' });
    } else {
      // Complete range
      if (isBefore(date, range.from)) {
        onRangeChange({ from: date, to: range.from, label: 'Custom' });
      } else {
        onRangeChange({ from: range.from, to: date, label: 'Custom' });
      }
    }
  };

  // --- Left Handlers ---
  const handleLeftPrev = () => {
    if (leftViewMode === 'days') setLeftViewDate(subMonths(leftViewDate, 1));
    else setLeftViewDate(subYears(leftViewDate, 1));
  };

  const handleLeftNext = () => {
    if (leftViewMode === 'days') setLeftViewDate(addMonths(leftViewDate, 1));
    else setLeftViewDate(addYears(leftViewDate, 1));
  };

  const handleLeftHeaderClick = () => {
    setLeftViewMode(leftViewMode === 'days' ? 'months' : 'days');
  };

  const handleLeftMonthSelect = (date: Date) => {
    setLeftViewDate(date);
    setLeftViewMode('days');
  };

  // --- Right Handlers ---
  const handleRightPrev = () => {
    if (rightViewMode === 'days') setRightViewDate(subMonths(rightViewDate, 1));
    else setRightViewDate(subYears(rightViewDate, 1));
  };

  const handleRightNext = () => {
    if (rightViewMode === 'days') setRightViewDate(addMonths(rightViewDate, 1));
    else setRightViewDate(addYears(rightViewDate, 1));
  };

  const handleRightHeaderClick = () => {
    setRightViewMode(rightViewMode === 'days' ? 'months' : 'days');
  };

  const handleRightMonthSelect = (date: Date) => {
    setRightViewDate(date);
    setRightViewMode('days');
  };

  return (
    <div className={cn("bg-white rounded-[16px] p-[16px] flex flex-col gap-[24px] w-[640px] shadow-lg border border-gray-100", className)}>
      
      {/* Top Section: Show results for */}
      <div className="flex flex-col gap-[4px]">
        <p className="text-[14px] text-[#6a7282] font-['Instrument_Sans'] leading-[1.2]">
          Show results for
        </p>
        <Select value={activePreset} onValueChange={handlePresetChange}>
          <SelectTrigger className="w-full h-[40px] bg-[#f3f4f6] border-none rounded-[6px] px-[8px] text-[#364153] text-[14px] focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            {PRESETS.map(preset => (
              <SelectItem key={preset.label} value={preset.label}>
                {preset.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Main Content: Two Columns */}
      <div className="flex gap-[16px] w-full items-start">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-[16px]">
           {/* From Input Display */}
           <div className="flex flex-col gap-[4px]">
             <p className="text-[12px] text-[#6a7282] font-['Instrument_Sans'] leading-[1.2]">
               From
             </p>
             <div className="w-full h-[40px] bg-[#f3f4f6] rounded-[6px] flex items-center px-[8px] border border-transparent">
               <span className="text-[14px] text-[#364153] font-['Instrument_Sans']">
                 {range.from ? format(range.from, 'MMM d, yyyy') : ''}
               </span>
             </div>
           </div>

           {/* Left Calendar Header */}
           <div className="flex items-center justify-between">
             <button onClick={handleLeftPrev} className="p-1 hover:bg-gray-100 rounded-full">
               <ArrowLeft />
             </button>
             <button 
               onClick={handleLeftHeaderClick}
               className="text-[14px] font-medium text-[#364153] font-['Instrument_Sans'] hover:bg-gray-100 px-2 py-1 rounded-md transition-colors"
             >
               {leftViewMode === 'days' ? format(leftViewDate, 'MMM yyyy') : format(leftViewDate, 'yyyy')}
             </button>
             <button onClick={handleLeftNext} className="p-1 hover:bg-gray-100 rounded-full">
               <ArrowRight />
             </button>
           </div>

           {/* Left Content: Days or Months */}
           <div className="min-h-[240px]">
             {leftViewMode === 'days' ? (
               <CalendarMonth 
                 month={leftViewDate.getMonth()} 
                 year={leftViewDate.getFullYear()} 
                 range={range}
                 onSelectDate={handleDateClick}
                 hoverDate={hoverDate}
                 setHoverDate={setHoverDate}
               />
             ) : (
               <MonthGrid 
                 viewDate={leftViewDate}
                 onSelectMonth={handleLeftMonthSelect}
               />
             )}
           </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-[16px]">
           {/* To Input Display */}
           <div className="flex flex-col gap-[4px]">
             <p className="text-[12px] text-[#6a7282] font-['Instrument_Sans'] leading-[1.2]">
               To
             </p>
             <div className="w-full h-[40px] bg-[#f3f4f6] rounded-[6px] flex items-center px-[8px] border border-transparent">
               <span className="text-[14px] text-[#364153] font-['Instrument_Sans']">
                 {range.to ? format(range.to, 'MMM d, yyyy') : (range.from ? 'Select date' : '')}
               </span>
             </div>
           </div>

           {/* Right Calendar Header */}
           <div className="flex items-center justify-between">
             <button onClick={handleRightPrev} className="p-1 hover:bg-gray-100 rounded-full">
               <ArrowLeft />
             </button>
             <button 
                onClick={handleRightHeaderClick}
                className="text-[14px] font-medium text-[#364153] font-['Instrument_Sans'] hover:bg-gray-100 px-2 py-1 rounded-md transition-colors"
             >
               {rightViewMode === 'days' ? format(rightViewDate, 'MMM yyyy') : format(rightViewDate, 'yyyy')}
             </button>
             <button onClick={handleRightNext} className="p-1 hover:bg-gray-100 rounded-full">
               <ArrowRight />
             </button>
           </div>

           {/* Right Content: Days or Months */}
           <div className="min-h-[240px]">
             {rightViewMode === 'days' ? (
               <CalendarMonth 
                 month={rightViewDate.getMonth()} 
                 year={rightViewDate.getFullYear()} 
                 range={range}
                 onSelectDate={handleDateClick}
                 hoverDate={hoverDate}
                 setHoverDate={setHoverDate}
               />
             ) : (
               <MonthGrid 
                 viewDate={rightViewDate}
                 onSelectMonth={handleRightMonthSelect}
               />
             )}
           </div>
        </div>

      </div>

      {/* Footer: Apply Button */}
      <div className="flex justify-end">
         <button 
            onClick={onApply}
            className="bg-[#0320f5] text-white text-[14px] font-semibold font-['Instrument_Sans'] rounded-[4px] px-[16px] py-[9px] shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)] hover:bg-[#0320f5]/90 transition-colors"
         >
            Apply
         </button>
      </div>

    </div>
  );
}
