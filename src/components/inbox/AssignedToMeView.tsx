import React from 'react';
import svgPaths from "../../imports/svg-iqh0hitjme";
import { DataTable, DataTableColumn } from "../ui/DataTable";

function Icon() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-left">
          <path d={svgPaths.p1352fd00} fill="var(--fill-0, #292F32)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrows({ onClick }: { onClick?: () => void }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px] cursor-pointer" data-name="Arrows" onClick={onClick}>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p1653fa00} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrows1() {
  return (
    <div className="opacity-30 overflow-clip relative shrink-0 size-[20px]" data-name="Arrows">
      <Icon1 />
    </div>
  );
}

function Frame5({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Arrows onClick={onBack} />
      <Arrows1 />
    </div>
  );
}

function Frame4({ onBack }: { onBack?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame5 onBack={onBack} />
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#292F32] text-[20px] text-nowrap tracking-[0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned to me
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white box-border content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer">
        <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          All
        </p>
      </div>
      <div className="bg-[#4182fa] box-border content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer">
        <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-white text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Active
        </p>
      </div>
      <div className="bg-white box-border content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer">
        <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Snoozed
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[64px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Header({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between p-[16px] relative w-full">
          <Frame4 onBack={onBack} />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

// Reusable Badge Components
function ProfImg({ initial }: { initial: string }) {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]">
      <div className="flex flex-col font-['Source_Sans_Pro'] font-semibold justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[16px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">{initial}</p>
      </div>
    </div>
  );
}

function TicketBadge({ ticketId }: { ticketId: string }) {
  return (
    <div className="bg-[#e9f4ec] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Ticket Icon">
            <path d={svgPaths.pe894e80} fill="var(--fill-0, #48BB79)" id="Primary" />
          </g>
        </svg>
      </div>
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {ticketId}
      </p>
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="External Link Icon">
            <path d={svgPaths.p2e8334f0} fill="var(--fill-0, #B1B3B4)" id="Primary" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="spinner">
            <path d={svgPaths.p1718c180} fill="var(--fill-0, #8990DF)" id="Primary" />
          </g>
        </svg>
      </div>
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {status}
      </p>
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  return (
    <div className="bg-[#fcf4f2] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0">
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="chart-simple">
            <path d={svgPaths.p156e4900} fill="var(--fill-0, #E7A188)" id="Primary" />
          </g>
        </svg>
      </div>
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {priority}
      </p>
    </div>
  );
}

function LabelBadge({ label, color }: { label: string; color: string }) {
  const bgColors: Record<string, string> = {
    red: '#f6cfcf',
    yellow: '#fcf6e9',
    purple: '#d6daf6',
  };

  const iconColors: Record<string, string> = {
    red: '#E53E3E',
    yellow: '#EDCA4C',
    purple: '#5A5ACD',
  };

  return (
    <div className="box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" style={{ backgroundColor: bgColors[color] || '#f6cfcf' }}>
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="tag">
            <path d={svgPaths.p42f2600} fill={iconColors[color] || '#E53E3E'} id="Primary" />
          </g>
        </svg>
      </div>
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
    </div>
  );
}

// Types
interface ConversationLabel {
  label: string;
  color: string;
}

interface ConversationData {
  id: string;
  initial: string;
  title: string;
  assignedDate: string;
  ticketId: string;
  status: string;
  priority: string;
  labels: ConversationLabel[];
}

// Mock Data
const conversations: ConversationData[] = [
  {
    id: '1',
    initial: 'S',
    title: 'Issue with my account',
    assignedDate: 'Assigned on 23, Jan 2025',
    ticketId: 'WACC-20322OC',
    status: 'Escalated',
    priority: 'High',
    labels: [
      { label: 'billing', color: 'red' },
      { label: 'account', color: 'yellow' },
      { label: 'auth', color: 'purple' },
    ],
  },
  {
    id: '2',
    initial: 'M',
    title: 'Cannot access reports',
    assignedDate: 'Assigned on 22, Jan 2025',
    ticketId: 'WACC-20323OC',
    status: 'In Progress',
    priority: 'Medium',
    labels: [
      { label: 'support', color: 'purple' },
      { label: 'reports', color: 'yellow' },
    ],
  },
];

interface AssignedToMeViewProps {
  onNavigateToConversation?: () => void;
}

export function AssignedToMeView({ onNavigateToConversation }: AssignedToMeViewProps) {
  const columns: DataTableColumn<ConversationData>[] = [
    {
      header: "Conversation",
      width: "277px",
      sortable: true,
      sortAccessor: "title",
      render: (row) => (
        <div className="content-stretch flex gap-[8px] items-start">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0">
            <ProfImg initial={row.initial} />
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-nowrap">
            <p className="[white-space-collapse:collapse] font-['Instrument_Sans'] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {row.title}
            </p>
            <p className="[white-space-collapse:collapse] font-['Instrument_Sans'] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {row.assignedDate}
            </p>
          </div>
        </div>
      ),
    },
    {
      header: "Tracker ticket",
      width: "175px",
      sortable: true,
      sortAccessor: "ticketId",
      render: (row) => <TicketBadge ticketId={row.ticketId} />,
    },
    {
      header: "Status",
      width: "106px",
      sortable: true,
      sortAccessor: "status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: "Priority",
      width: "106px",
      sortable: true,
      sortAccessor: "priority",
      render: (row) => <PriorityBadge priority={row.priority} />,
    },
    {
      header: "Labels",
      width: "minmax(0px, 1fr)",
      align: "right",
      render: (row) => (
        <div className="flex gap-[4px] items-center justify-end w-full">
          {row.labels.map((labelObj, idx) => (
            <LabelBadge key={idx} label={labelObj.label} color={labelObj.color} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[24px] isolate items-center relative size-full bg-white overflow-auto">
      <Header />
      <div className="w-full max-w-[1200px] px-8">
        <DataTable
          columns={columns}
          data={conversations}
          animateRows={true}
          animationDelay={0}
        />
      </div>
    </div>
  );
}
