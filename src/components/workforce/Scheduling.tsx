import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Resizable } from "re-resizable";
import { Fragment } from "react";
import svgPaths from "../../imports/svg-fvyzsrmc73";

interface Agent {
  id: string;
  name: string;
  initial: string;
  color: string;
}

interface ScheduleBlock {
  id: string;
  agentId: string;
  agentName: string;
  agentInitial: string;
  agentColor: string;
  day: number; // 0-6 (Sunday-Saturday)
  startTime: number; // hour (6-21)
  duration: number; // hours
  timeLabel: string;
}

const agents: Agent[] = [
  {
    id: "1",
    name: "Aggie Kamau",
    initial: "A",
    color: "#bce5f3",
  },
  {
    id: "2",
    name: "Amanda Wakio",
    initial: "A",
    color: "#b4bbee",
  },
  {
    id: "3",
    name: "Chloe Sidi",
    initial: "C",
    color: "#eed8b4",
  },
  {
    id: "4",
    name: "Ella Mwaura",
    initial: "E",
    color: "#eca5dc",
  },
  {
    id: "5",
    name: "Isaac Mwendwa",
    initial: "I",
    color: "#b4bbee",
  },
  {
    id: "6",
    name: "Jane Kamau",
    initial: "J",
    color: "#c0efd4",
  },
  {
    id: "7",
    name: "Jessica Apondi",
    initial: "J",
    color: "#eee6b4",
  },
  {
    id: "8",
    name: "Kevin Juma",
    initial: "K",
    color: "#c2eeb4",
  },
  {
    id: "9",
    name: "Nikki Kimeu",
    initial: "N",
    color: "#e78f8f",
  },
  {
    id: "10",
    name: "Samuel Baya",
    initial: "S",
    color: "#ebdb80",
  },
  {
    id: "11",
    name: "Talia Ndungu",
    initial: "T",
    color: "#b4bbee",
  },
  {
    id: "12",
    name: "Wallace Mutuku",
    initial: "W",
    color: "#e78fd4",
  },
];

// Calculate current week (Sunday to Saturday)
function getCurrentWeek() {
  const today = new Date();
  const currentDay = today.getDay(); // 0 = Sunday, 6 = Saturday
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - currentDay);

  const week = [];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 0; i < 7; i++) {
    const date = new Date(sunday);
    date.setDate(sunday.getDate() + i);
    const isToday =
      date.toDateString() === today.toDateString();

    week.push({
      day: date.getDate(),
      name: dayNames[i],
      index: i,
      isToday: isToday,
    });
  }

  return week;
}

const days = getCurrentWeek();

const timeSlots = [
  "12 am",
  "1 am",
  "2 am",
  "3 am",
  "4 am",
  "5 am",
  "6 am",
  "7 am",
  "8 am",
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
  "6 pm",
  "7 pm",
  "8 pm",
  "9 pm",
  "10 pm",
  "11 pm",
];

// Mock initial schedule data
const initialSchedule: ScheduleBlock[] = [
  {
    id: "s1",
    agentId: "9",
    agentName: "Nikki Kimeu",
    agentInitial: "N",
    agentColor: "#e78f8f",
    day: 0,
    startTime: 6,
    duration: 1.25,
    timeLabel: "6:15–7:30 AM",
  },
  {
    id: "s2",
    agentId: "9",
    agentName: "Nikki Kimeu",
    agentInitial: "N",
    agentColor: "#e78f8f",
    day: 0,
    startTime: 7,
    duration: 2.9,
    timeLabel: "7:30–9:55 AM",
  },
  {
    id: "s3",
    agentId: "12",
    agentName: "Wallace Mutuku",
    agentInitial: "W",
    agentColor: "#e78fd4",
    day: 0,
    startTime: 9,
    duration: 2.1,
    timeLabel: "9:55 AM–12 PM",
  },
  {
    id: "s4",
    agentId: "2",
    agentName: "Amanda Wakio",
    agentInitial: "A",
    agentColor: "#b4bbee",
    day: 0,
    startTime: 12,
    duration: 0.5,
    timeLabel: "12:30 – 5 PM",
  },
  {
    id: "s5",
    agentId: "9",
    agentName: "Nikki Kimeu",
    agentInitial: "N",
    agentColor: "#e78f8f",
    day: 0,
    startTime: 14,
    duration: 3,
    timeLabel: "2 –5 PM",
  },

  {
    id: "s6",
    agentId: "1",
    agentName: "Aggie Kamau",
    agentInitial: "A",
    agentColor: "#bce5f3",
    day: 1,
    startTime: 8,
    duration: 5,
    timeLabel: "8AM –1PM",
  },
  {
    id: "s7",
    agentId: "10",
    agentName: "Samuel Baya",
    agentInitial: "S",
    agentColor: "#ebdb80",
    day: 1,
    startTime: 13,
    duration: 5,
    timeLabel: "1 –6PM",
  },

  {
    id: "s8",
    agentId: "6",
    agentName: "Jane Kamau",
    agentInitial: "J",
    agentColor: "#c0efd4",
    day: 2,
    startTime: 8,
    duration: 2.5,
    timeLabel: "8 –10:30 AM",
  },
  {
    id: "s9",
    agentId: "12",
    agentName: "Wallace Mutuku",
    agentInitial: "W",
    agentColor: "#e78fd4",
    day: 2,
    startTime: 9,
    duration: 2.6,
    timeLabel: "9:55 AM–12:30 PM",
  },
  {
    id: "s10",
    agentId: "2",
    agentName: "Amanda Wakio",
    agentInitial: "A",
    agentColor: "#b4bbee",
    day: 2,
    startTime: 12,
    duration: 4.5,
    timeLabel: "12:30 – 5 PM",
  },

  {
    id: "s11",
    agentId: "9",
    agentName: "Nikki Kimeu",
    agentInitial: "N",
    agentColor: "#e78f8f",
    day: 3,
    startTime: 6,
    duration: 1.25,
    timeLabel: "6:15–7:30 AM",
  },
  {
    id: "s12",
    agentId: "9",
    agentName: "Nikki Kimeu",
    agentInitial: "N",
    agentColor: "#e78f8f",
    day: 3,
    startTime: 7,
    duration: 2.9,
    timeLabel: "7:30–9:55 AM",
  },
  {
    id: "s13",
    agentId: "12",
    agentName: "Wallace Mutuku",
    agentInitial: "W",
    agentColor: "#e78fd4",
    day: 3,
    startTime: 9,
    duration: 2.1,
    timeLabel: "9:55 AM–12 PM",
  },
  {
    id: "s14",
    agentId: "9",
    agentName: "Nikki Kimeu",
    agentInitial: "N",
    agentColor: "#e78f8f",
    day: 3,
    startTime: 14,
    duration: 3,
    timeLabel: "2 –5 PM",
  },

  {
    id: "s15",
    agentId: "1",
    agentName: "Aggie Kamau",
    agentInitial: "A",
    agentColor: "#bce5f3",
    day: 4,
    startTime: 8,
    duration: 5,
    timeLabel: "8AM –1PM",
  },
  {
    id: "s16",
    agentId: "10",
    agentName: "Samuel Baya",
    agentInitial: "S",
    agentColor: "#ebdb80",
    day: 4,
    startTime: 13,
    duration: 5,
    timeLabel: "1 –6PM",
  },

  {
    id: "s17",
    agentId: "6",
    agentName: "Jane Kamau",
    agentInitial: "J",
    agentColor: "#c0efd4",
    day: 5,
    startTime: 8,
    duration: 2.5,
    timeLabel: "8 –10:30 AM",
  },
  {
    id: "s18",
    agentId: "12",
    agentName: "Wallace Mutuku",
    agentInitial: "W",
    agentColor: "#e78fd4",
    day: 5,
    startTime: 9,
    duration: 2.6,
    timeLabel: "9:55 AM–12:30 PM",
  },
  {
    id: "s19",
    agentId: "2",
    agentName: "Amanda Wakio",
    agentInitial: "A",
    agentColor: "#b4bbee",
    day: 5,
    startTime: 12,
    duration: 4.5,
    timeLabel: "12:30 – 5 PM",
  },
];

function getBlockBackgroundColor(agentColor: string): string {
  const colorMap: { [key: string]: string } = {
    "#e78f8f": "#f8dddd", // Nikki - red/pink
    "#e78fd4": "#f8ddf2", // Wallace - pink
    "#b4bbee": "#dee1f7", // Amanda/Isaac/Talia - purple
    "#bce5f3": "#e3f2f8", // Aggie - blue
    "#ebdb80": "#f9f5dc", // Samuel - yellow
    "#c0efd4": "#e2f3e9", // Jane - green
    "#eed8b4": "#faf4e8", // Chloe - tan
    "#eca5dc": "#f9e5f2", // Ella - pink
    "#eee6b4": "#faf8e8", // Jessica - yellow
    "#c2eeb4": "#e8f7e2", // Kevin - green
  };
  return colorMap[agentColor] || "#e5e7eb";
}

interface DraggableAgentProps {
  agent: Agent;
}

function DraggableAgent({ agent }: DraggableAgentProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "agent",
    item: agent,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[8px] relative rounded-[8px] shrink-0 cursor-move hover:opacity-100 transition-opacity"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#ebeaee] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div
        className="content-stretch flex flex-col items-center justify-center min-h-[13px] min-w-[13px] relative rounded-[999px] shrink-0 size-[18px]"
        style={{ backgroundColor: agent.color }}
      >
        <div
          className="flex flex-col font-['Instrument_Sans'] justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#1e2939] text-[14px] text-center tracking-[0.07px] w-full"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: 600,
          }}
        >
          <p className="leading-[1.2]">{agent.initial}</p>
        </div>
      </div>
      <p
        className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#404141] text-[16px] text-nowrap tracking-[0.08px]"
        style={{
          fontVariationSettings: "'wdth' 100",
          fontWeight: 400,
        }}
      >
        {agent.name}
      </p>
    </div>
  );
}

interface CalendarCellProps {
  day: number;
  hour: number;
  onDrop: (agent: Agent, day: number, hour: number) => void;
}

function CalendarCell({
  day,
  hour,
  onDrop,
}: CalendarCellProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "agent",
    drop: (item: Agent) => onDrop(item, day, hour),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="place-self-stretch relative shrink-0"
      style={{
        backgroundColor: isOver
          ? "rgba(98, 195, 221, 0.1)"
          : "transparent",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

interface ScheduleBlockComponentProps {
  block: ScheduleBlock;
  onMove: (id: string, day: number, startTime: number) => void;
  onResize: (id: string, duration: number) => void;
  onRemove: (id: string) => void;
}

function ScheduleBlockComponent({
  block,
  onMove,
  onResize,
  onRemove,
}: ScheduleBlockComponentProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "scheduleBlock",
    item: { id: block.id, ...block },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const bgColor = getBlockBackgroundColor(block.agentColor);
  const heightPerHour = 36; // px
  const height = block.duration * heightPerHour;

  return (
    <div
      ref={drag}
      className="absolute cursor-move"
      style={{
        left: `${block.day * 110 + 4}px`,
        top: `${64 + block.startTime * 36}px`,
        width: "102px",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <Resizable
        size={{ width: 102, height }}
        onResizeStop={(e, direction, ref, d) => {
          const newHeight = height + d.height;
          const newDuration = Math.max(
            0.5,
            Math.round((newHeight / heightPerHour) * 2) / 2,
          );
          onResize(block.id, newDuration);
        }}
        enable={{
          top: false,
          right: false,
          bottom: true,
          left: false,
        }}
        minHeight={heightPerHour * 0.5}
        grid={[1, heightPerHour / 2]}
      >
        <div
          className="content-stretch flex flex-col gap-[2px] items-start p-[4px] rounded-[4px] h-full relative"
          style={{ backgroundColor: bgColor }}
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_0px_2px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]"
          />
          <div className="content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
            <div
              className="content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[12px]"
              style={{ backgroundColor: block.agentColor }}
            >
              <div
                className="flex flex-col font-['Instrument_Sans'] justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#1e2939] text-[12px] text-center tracking-[0.06px] w-full"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                <p className="leading-[1.2]">
                  {block.agentInitial}
                </p>
              </div>
            </div>
            <p
              className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 400,
              }}
            >
              {block.agentName}
            </p>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative w-full">
                <p
                  className="basis-0 font-['Instrument_Sans'] grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[12px] text-[rgba(30,30,30,0.7)] tracking-[0.06px]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    fontWeight: 400,
                  }}
                >
                  {block.timeLabel}
                </p>
              </div>
            </div>
          </div>
          {/* Remove button (shows on hover) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(block.id);
            }}
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
            style={{ fontWeight: 600 }}
          >
            ×
          </button>
        </div>
      </Resizable>
    </div>
  );
}

function SchedulingContent() {
  const [scheduleBlocks, setScheduleBlocks] =
    useState<ScheduleBlock[]>(initialSchedule);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Calculate current time indicator position
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const timePosition =
    64 + currentHour * 36 + (currentMinutes / 60) * 36; // 64px header + hour position

  // Format current time for display
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  const handleDropAgent = (
    agent: Agent,
    day: number,
    hour: number,
  ) => {
    const newBlock: ScheduleBlock = {
      id: `s${Date.now()}`,
      agentId: agent.id,
      agentName: agent.name,
      agentInitial: agent.initial,
      agentColor: agent.color,
      day,
      startTime: hour,
      duration: 2,
      timeLabel: `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? "PM" : "AM"} – ${hour + 2 > 12 ? hour : hour + 2}:00 ${hour + 2 >= 12 ? "PM" : "AM"}`,
    };
    setScheduleBlocks([...scheduleBlocks, newBlock]);
  };

  const handleMoveBlock = (
    id: string,
    day: number,
    startTime: number,
  ) => {
    setScheduleBlocks(
      scheduleBlocks.map((block) =>
        block.id === id ? { ...block, day, startTime } : block,
      ),
    );
  };

  const handleResizeBlock = (id: string, duration: number) => {
    setScheduleBlocks(
      scheduleBlocks.map((block) =>
        block.id === id ? { ...block, duration } : block,
      ),
    );
  };

  const handleRemoveBlock = (id: string) => {
    setScheduleBlocks(
      scheduleBlocks.filter((block) => block.id !== id),
    );
  };

  const filteredAgents = agents.filter((agent) =>
    agent.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-fit min-w-px relative shrink-0 w-full pb-6">
      {/* Calendar */}
      <div className="relative flex-1 h-full overflow-y-auto">
        <div className="relative">
          <div className="bg-[#f2f3f3] grid grid-cols-[66px_repeat(7,110px)] grid-rows-[64px_repeat(24,_36px)] min-h-[928px] rounded-[12px] overflow-x-scroll">
            {/* Header Row - Timezone */}
            <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0">
              <div
                aria-hidden="true"
                className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none"
              />
              <div className="flex flex-col items-end justify-end size-full">
                <div className="content-stretch flex flex-col items-end relative size-full justify-end p-[8px]">
                  <p
                    className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[14px] text-nowrap tracking-[0.07px]"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                      fontWeight: 500,
                    }}
                  >
                    GMT +3
                  </p>
                </div>
              </div>
            </div>

            {/* Header Row - Days */}
            {days.map((dayInfo) => (
              <div
                key={dayInfo.index}
                className={`[grid-area:1_/_${dayInfo.index + 2}] content-stretch flex flex-col items-center justify-center place-self-stretch relative shrink-0`}
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none"
                />
                <div
                  className={`content-stretch flex flex-col items-center justify-center leading-[1.2] relative shrink-0 text-nowrap ${dayInfo.isToday ? "text-[#62c3dd]" : "text-[#5e6060]"}`}
                >
                  <p
                    className="font-['Instrument_Sans'] relative shrink-0 text-[20px] tracking-[0.1px]"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                      fontWeight: 600,
                    }}
                  >
                    {dayInfo.day}
                  </p>
                  <p
                    className="font-['Instrument_Sans'] relative shrink-0 text-[14px] tracking-[0.07px]"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                      fontWeight: 500,
                    }}
                  >
                    {dayInfo.name}
                  </p>
                </div>
              </div>
            ))}

            {/* Time Slots and Calendar Cells */}
            {timeSlots.map((time, rowIndex) => (
              <Fragment key={`row-${rowIndex}`}>
                {/* Time label */}
                <div
                  className={`[grid-area:${rowIndex + 2}_/_1] place-self-stretch relative shrink-0`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute border-[0px_1px_1px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-end justify-end size-full">
                    <div className="content-stretch flex flex-col items-end relative size-full justify-center px-[8px] py-0">
                      <p
                        className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[14px] text-nowrap tracking-[0.07px]"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                          fontWeight: 500,
                        }}
                      >
                        {time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendar cells for each day */}
                {days.map((dayInfo) => (
                  <CalendarCell
                    key={`cell-${rowIndex}-${dayInfo.index}`}
                    day={dayInfo.index}
                    hour={rowIndex}
                    onDrop={handleDropAgent}
                  />
                ))}
              </Fragment>
            ))}
          </div>

          {/* Schedule Blocks */}
          <div className="absolute h-[422px] left-[66px] top-[110px] w-[655px] pointer-events-none">
            {scheduleBlocks.map((block) => (
              <div key={block.id} className="pointer-events-auto">
                <ScheduleBlockComponent
                  block={block}
                  onMove={handleMoveBlock}
                  onResize={handleResizeBlock}
                  onRemove={handleRemoveBlock}
                />
              </div>
            ))}
          </div>

          {/* Now Indicator */}
          <div
            className="absolute content-stretch flex items-center left-0 w-[838px]"
            style={{ top: `${timePosition}px` }}
          >
            <div className="bg-[#62c3dd] content-stretch flex h-[23px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
              <p
                className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 500,
                }}
              >
                {formatTime(currentTime)}
              </p>
            </div>
            <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
              <div className="absolute inset-[-1.5px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 763 2"
                >
                  <line
                    stroke="#62C3DD"
                    strokeWidth="1.5"
                    x2="763"
                    y1="0.75"
                    y2="0.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agents Panel */}
      <div className="bg-[#fefefe] w-[240px] h-full relative rounded-[12px] shrink-0">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
            {/* Header */}
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative shrink-0 w-full">
              <p
                className="font-['Instrument_Sans'] relative shrink-0 text-[#404141] text-[18px] tracking-[0.09px] w-full"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                Agents
              </p>
              <p
                className="font-['Instrument_Sans'] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                Drag an agent into the calendar to schedule them
                manually
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-[#f1f4f6] max-w-[256px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-row items-center max-w-[inherit] size-full">
                <div className="content-stretch flex gap-[4px] items-center max-w-[inherit] p-[8px] relative w-full">
                  <div className="content-stretch flex items-center opacity-70 relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 16 16"
                      >
                        <g>
                          <path
                            d={svgPaths.pba9f400}
                            fill="#6A7282"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for agents..."
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(e.target.value)
                    }
                    className="bg-transparent border-none outline-none font-['Instrument_Sans'] opacity-50 relative shrink-0 text-[#1e2939] text-[13px] flex-1"
                    style={{ fontWeight: 400 }}
                  />
                </div>
              </div>
            </div>

            {/* Agent List */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 overflow-y-auto max-h-[500px]">
              {filteredAgents.map((agent) => (
                <DraggableAgent key={agent.id} agent={agent} />
              ))}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
      </div>
    </div>
  );
}

export function Scheduling() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SchedulingContent />
    </DndProvider>
  );
}