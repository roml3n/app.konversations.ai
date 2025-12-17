import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  Draggable,
} from "@fullcalendar/interaction";
import {
  EventContentArg,
  EventDropArg,
  EventResizeDoneArg,
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/core";
import svgPaths from "../../imports/svg-fvyzsrmc73";
import { CurrentTimeIndicator } from "./CurrentTimeIndicator";
import "./scheduling-calendar.css";

interface Agent {
  id: string;
  name: string;
  initial: string;
  color: string;
}

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  extendedProps: {
    agentId: string;
    agentName: string;
    agentInitial: string;
    agentColor: string;
  };
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
  const currentDay = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - currentDay);
  return sunday;
}

function getBlockBackgroundColor(agentColor: string): string {
  const colorMap: { [key: string]: string } = {
    "#e78f8f": "#f8dddd",
    "#e78fd4": "#f8ddf2",
    "#b4bbee": "#dee1f7",
    "#bce5f3": "#e3f2f8",
    "#ebdb80": "#f9f5dc",
    "#c0efd4": "#e2f3e9",
    "#eed8b4": "#faf4e8",
    "#eca5dc": "#f9e5f2",
    "#eee6b4": "#faf8e8",
    "#c2eeb4": "#e8f7e2",
  };
  return colorMap[agentColor] || "#e5e7eb";
}

// Convert initial schedule data to calendar events
function createInitialEvents(): CalendarEvent[] {
  const sunday = getCurrentWeek();

  const schedules = [
    { agentId: "9", day: 0, startHour: 6, duration: 1.25 },
    { agentId: "9", day: 0, startHour: 7.5, duration: 2.45 },
    { agentId: "12", day: 0, startHour: 10, duration: 2.1 },
    { agentId: "2", day: 0, startHour: 12.5, duration: 4.5 },
    { agentId: "9", day: 0, startHour: 14, duration: 3 },
    { agentId: "1", day: 1, startHour: 8, duration: 5 },
    { agentId: "10", day: 1, startHour: 13, duration: 5 },
    { agentId: "6", day: 2, startHour: 8, duration: 2.5 },
    { agentId: "12", day: 2, startHour: 10, duration: 2.5 },
    { agentId: "2", day: 2, startHour: 12.5, duration: 4.5 },
    { agentId: "9", day: 3, startHour: 6, duration: 1.25 },
    { agentId: "9", day: 3, startHour: 7.5, duration: 2.45 },
    { agentId: "12", day: 3, startHour: 10, duration: 2.1 },
    { agentId: "9", day: 3, startHour: 14, duration: 3 },
    { agentId: "1", day: 4, startHour: 8, duration: 5 },
    { agentId: "10", day: 4, startHour: 13, duration: 5 },
    { agentId: "6", day: 5, startHour: 8, duration: 2.5 },
    { agentId: "12", day: 5, startHour: 10, duration: 2.5 },
    { agentId: "2", day: 5, startHour: 12.5, duration: 4.5 },
  ];

  return schedules.map((schedule, index) => {
    const agent = agents.find(
      (a) => a.id === schedule.agentId,
    )!;
    const startDate = new Date(sunday);
    startDate.setDate(sunday.getDate() + schedule.day);
    startDate.setHours(Math.floor(schedule.startHour));
    startDate.setMinutes((schedule.startHour % 1) * 60);
    startDate.setSeconds(0);
    startDate.setMilliseconds(0);

    const endDate = new Date(startDate);
    endDate.setHours(
      startDate.getHours() + Math.floor(schedule.duration),
    );
    endDate.setMinutes(
      startDate.getMinutes() + (schedule.duration % 1) * 60,
    );

    return {
      id: `event-${index}`,
      title: agent.name,
      start: startDate,
      end: endDate,
      extendedProps: {
        agentId: agent.id,
        agentName: agent.name,
        agentInitial: agent.initial,
        agentColor: agent.color,
      },
    };
  });
}

function DraggableAgent({ agent }: { agent: Agent }) {
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dragRef.current) {
      const draggable = new Draggable(dragRef.current, {
        eventData: {
          title: agent.name,
          duration: "02:00",
          extendedProps: {
            agentId: agent.id,
            agentName: agent.name,
            agentInitial: agent.initial,
            agentColor: agent.color,
          },
        },
      });

      return () => {
        draggable.destroy();
      };
    }
  }, [agent]);

  return (
    <div
      ref={dragRef}
      className="bg-white content-stretch flex gap-[5px] items-center justify-center opacity-80 p-[2px] relative rounded-[8px] shrink-0 cursor-move hover:opacity-100 transition-opacity"
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

function renderEventContent(eventInfo: EventContentArg) {
  const { agentColor, agentInitial, agentName } =
    eventInfo.event.extendedProps;
  const bgColor = getBlockBackgroundColor(agentColor);

  // Format time label
  const start = eventInfo.event.start!;
  const end = eventInfo.event.end!;

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const displayHour = hours % 12 === 0 ? 12 : hours % 12;
    const ampm = hours >= 12 ? "PM" : "AM";
    if (minutes === 0) {
      return `${displayHour} ${ampm}`;
    }
    return `${displayHour}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  const timeLabel = `${formatTime(start)} – ${formatTime(end)}`;

  return (
    <div
      className="fc-event-content-wrapper"
      style={{
        backgroundColor: bgColor,
        borderLeft: `2px solid ${agentColor}50`,
      }}
    >
      <div className="fc-event-agent-info">
        <div
          className="fc-event-avatar"
          style={{ backgroundColor: agentColor }}
        >
          <span>{agentInitial}</span>
        </div>
        <span className="fc-event-agent-name">{agentName}</span>
      </div>
      <div className="fc-event-time-label">{timeLabel}</div>
    </div>
  );
}

export function Scheduling() {
  const calendarRef = useRef<FullCalendar>(null);
  const [events, setEvents] = useState<CalendarEvent[]>(
    createInitialEvents(),
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Add day numbers to header cells
  useEffect(() => {
    const updateDayHeaders = () => {
      const dayHeaders = document.querySelectorAll(
        ".fc-col-header-cell",
      );
      dayHeaders.forEach((header) => {
        const link = header.querySelector(
          ".fc-col-header-cell-cushion",
        );
        if (link && link.textContent) {
          // Extract day name from FullCalendar's format
          const text = link.textContent;
          const dayMatch = text.match(/(\w+)\s+(\d+)/);
          if (dayMatch) {
            const dayName = dayMatch[1];
            const dayNumber = dayMatch[2];
            // Set the day number as a data attribute for CSS
            link.setAttribute("data-day-number", dayNumber);
            // Update the text to just show day name
            link.textContent = dayName;
          }
        }
      });

      // Update timezone label
      const axisCell = document.querySelector(
        ".fc-timegrid-axis-cushion",
      );
      if (axisCell && !axisCell.textContent?.includes("GMT")) {
        axisCell.textContent = "GMT +3";
      }
    };

    // Run initially and whenever events update
    setTimeout(updateDayHeaders, 100);
  }, [events]);

  const handleEventDrop = (info: EventDropArg) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === info.event.id
          ? {
              ...event,
              start: info.event.start!,
              end: info.event.end!,
            }
          : event,
      ),
    );
  };

  const handleEventResize = (info: EventResizeDoneArg) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === info.event.id
          ? {
              ...event,
              start: info.event.start!,
              end: info.event.end!,
            }
          : event,
      ),
    );
  };

  const handleEventReceive = (info: any) => {
    const newEvent: CalendarEvent = {
      id: `event-${Date.now()}`,
      title: info.event.title,
      start: info.event.start!,
      end: info.event.end!,
      extendedProps: info.event.extendedProps,
    };
    setEvents([...events, newEvent]);
  };

  const handleEventClick = (info: EventClickArg) => {
    if (window.confirm(`Delete "${info.event.title}"?`)) {
      setEvents((prevEvents) =>
        prevEvents.filter(
          (event) => event.id !== info.event.id,
        ),
      );
      info.event.remove();
    }
  };

  const renderDayHeader = (args: any) => {
    const date = args.date;
    const dayNumber = date.getDate();
    const dayName = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
          height: "100%",
        }}
      >
        <span
          style={{
            fontFamily: "Instrument Sans, sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            color: args.isToday ? "#62c3dd" : "#5e6060",
            lineHeight: 1.2,
            letterSpacing: "0.1px",
          }}
        >
          {dayNumber}
        </span>
        <span
          style={{
            fontFamily: "Instrument Sans, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            color: args.isToday ? "#62c3dd" : "#a0a3a4",
            lineHeight: 1.2,
            letterSpacing: "0.07px",
          }}
        >
          {dayName}
        </span>
      </div>
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
      <div className="relative flex-1 w-full h-full border-0 outline-none">
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={false}
          allDaySlot={false}
          slotMinTime="00:00:00"
          slotMaxTime="24:00:00"
          slotDuration="01:00:00"
          slotLabelInterval="01:00:00"
          height="auto"
          expandRows={true}
          dayHeaderFormat={{ weekday: "long", day: "numeric" }}
          slotLabelFormat={{
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: true,
            meridiem: "short",
            hour12: true,
          }}
          events={events}
          editable={true}
          droppable={true}
          eventDrop={handleEventDrop}
          eventResize={handleEventResize}
          eventReceive={handleEventReceive}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          nowIndicator={false}
          scrollTime="06:00:00"
          snapDuration="00:15:00"
          eventDurationEditable={true}
          eventStartEditable={true}
          dayHeaderClassNames="fc-custom-day-header"
          slotLabelClassNames="fc-custom-slot-label"
          dayHeaderContent={renderDayHeader}
        />
        <CurrentTimeIndicator />
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