import { useState, useEffect } from "react";

export function CurrentTimeIndicator() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [position, setPosition] = useState({ top: 0, visible: false });

  useEffect(() => {
    // Update time every minute
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Initial update
    updateTime();

    // Set interval to update every minute
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Calculate position based on current time
    const calculatePosition = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Find the calendar body and header
      const calendarBody = document.querySelector(".fc-timegrid-body");
      const calendarHeader = document.querySelector(".fc-col-header");
      const firstSlot = document.querySelector(".fc-timegrid-slot");

      if (!calendarBody || !firstSlot || !calendarHeader) {
        setPosition({ top: 0, visible: false });
        return;
      }

      // Each slot is 1 hour, get the height of one slot
      const slotHeight = firstSlot.getBoundingClientRect().height;
      
      // Get the height of the header to offset the position
      const headerHeight = calendarHeader.getBoundingClientRect().height;

      // Calculate minutes from midnight
      const minutesFromMidnight = hours * 60 + minutes;

      // Calculate top position (each hour = slotHeight) plus header offset
      const topPosition = headerHeight + (minutesFromMidnight / 60) * slotHeight;

      setPosition({ top: topPosition, visible: true });
    };

    calculatePosition();

    // Recalculate on window resize
    window.addEventListener("resize", calculatePosition);

    // Small delay to ensure calendar is rendered
    const timeoutId = setTimeout(calculatePosition, 100);

    return () => {
      window.removeEventListener("resize", calculatePosition);
      clearTimeout(timeoutId);
    };
  }, [currentTime]);

  // Format time for display
  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const displayHour = hours % 12 === 0 ? 12 : hours % 12;
    const ampm = hours >= 12 ? "pm" : "am";
    return `${displayHour}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  if (!position.visible) {
    return null;
  }

  return (
    <div
      className="absolute left-0 right-0 flex items-center pointer-events-none z-10"
      style={{
        top: `${position.top}px`,
        transform: "translateY(-50%)",
      }}
    >
      <div className="bg-[#62c3dd] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0">
        <p
          className="font-['Instrument_Sans'] leading-[1.2] shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]"
          style={{ fontVariationSettings: "'wdth' 100", fontWeight: 500 }}
        >
          {formatTime(currentTime)}
        </p>
      </div>
      <div className="flex-1 h-0">
        <div className="h-[1.5px] w-full bg-[#62c3dd]" />
      </div>
    </div>
  );
}