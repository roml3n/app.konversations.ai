import { DataTable, DataTableColumn } from '../ui/DataTable';

interface QueueData {
  queue: string;
  waiting: number;
  longestWait: string;
  available: number;
  onCall: number;
  serviceLevel: string;
  occupancy: string;
  callsToday: number;
}

const queueData: QueueData[] = [
  { queue: 'Billing', waiting: 1, longestWait: '67s', available: 4, onCall: 3, serviceLevel: '83.2%', occupancy: '88.7%', callsToday: 153 },
  { queue: 'Support', waiting: 4, longestWait: '82s', available: 5, onCall: 1, serviceLevel: '90.8%', occupancy: '92.4%', callsToday: 76 },
  { queue: 'Sales', waiting: 3, longestWait: '11s', available: 2, onCall: 8, serviceLevel: '91.1%', occupancy: '80.2%', callsToday: 90 },
  { queue: 'Customer Service', waiting: 1, longestWait: '32s', available: 7, onCall: 7, serviceLevel: '72.1%', occupancy: '53.3%', callsToday: 111 },
  { queue: 'Retention', waiting: 2, longestWait: '58s', available: 1, onCall: 8, serviceLevel: '88.4%', occupancy: '65.9%', callsToday: 211 },
];

export function QueueStatusTable() {
  const getCellColor = (value: any, columnKey: string): string => {
    if (columnKey === 'serviceLevel') {
      const numValue = parseFloat(value);
      if (numValue >= 90) return '#45b273';
      if (numValue >= 75) return '#ff8904';
      return '#da3b3b';
    }
    
    if (columnKey === 'occupancy') {
      const numValue = parseFloat(value);
      if (numValue >= 75 && numValue <= 85) return '#45b273';
      if (numValue >= 65 && numValue < 95) return '#ff8904';
      return '#da3b3b';
    }
    
    return '#7a7d7d';
  };

  const columns: DataTableColumn<QueueData>[] = [
    {
      header: 'Queue',
      width: '216px',
      sortable: true,
      sortAccessor: 'queue',
      render: (row, index) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] leading-[1.2] tracking-[0.07px]"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: index === 0 ? 500 : 400,
          }}
        >
          {row.queue}
        </p>
      ),
    },
    {
      header: 'Waiting',
      width: 'minmax(0px, 1fr)',
      sortable: true,
      sortAccessor: 'waiting',
      render: (row) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] leading-[1.2] tracking-[0.07px]"
          style={{ fontVariationSettings: "'wdth' 100", fontWeight: 400 }}
        >
          {row.waiting}
        </p>
      ),
    },
    {
      header: 'Longest wait',
      width: 'minmax(0px, 1fr)',
      sortable: true,
      sortAccessor: 'longestWait',
      render: (row) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] leading-[1.2] tracking-[0.07px]"
          style={{ fontVariationSettings: "'wdth' 100", fontWeight: 400 }}
        >
          {row.longestWait}
        </p>
      ),
    },
    {
      header: 'Available',
      width: 'minmax(0px, 1fr)',
      sortable: true,
      sortAccessor: 'available',
      render: (row) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] leading-[1.2] tracking-[0.07px]"
          style={{ fontVariationSettings: "'wdth' 100", fontWeight: 400 }}
        >
          {row.available}
        </p>
      ),
    },
    {
      header: 'On Call',
      width: 'minmax(0px, 1fr)',
      sortable: true,
      sortAccessor: 'onCall',
      render: (row) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] leading-[1.2] tracking-[0.07px]"
          style={{ fontVariationSettings: "'wdth' 100", fontWeight: 400 }}
        >
          {row.onCall}
        </p>
      ),
    },
    {
      header: 'Service Level',
      width: 'minmax(0px, 1fr)',
      sortable: true,
      sortAccessor: (row) => parseFloat(row.serviceLevel),
      render: (row) => (
        <p
          className="font-['Instrument_Sans'] text-[14px] leading-[1.2] tracking-[0.07px]"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: 400,
            color: getCellColor(row.serviceLevel, 'serviceLevel'),
          }}
        >
          {row.serviceLevel}
        </p>
      ),
    },
    {
      header: 'Occupancy',
      width: 'minmax(0px, 1fr)',
      sortable: true,
      sortAccessor: (row) => parseFloat(row.occupancy),
      render: (row) => (
        <p
          className="font-['Instrument_Sans'] text-[14px] leading-[1.2] tracking-[0.07px]"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: 400,
            color: getCellColor(row.occupancy, 'occupancy'),
          }}
        >
          {row.occupancy}
        </p>
      ),
    },
    {
      header: 'Calls Today',
      width: 'minmax(0px, 1fr)',
      sortable: true,
      sortAccessor: 'callsToday',
      render: (row) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] leading-[1.2] tracking-[0.07px]"
          style={{ fontVariationSettings: "'wdth' 100", fontWeight: 400 }}
        >
          {row.callsToday}
        </p>
      ),
    },
  ];

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-[16px]">
      <div className="mb-[24px]">
        <p
          className="font-['Instrument_Sans'] text-[#404141] text-[16px] tracking-[0.08px]"
          style={{ fontVariationSettings: "'wdth' 100", fontWeight: 600 }}
        >
          Queue status
        </p>
      </div>
      <DataTable
        columns={columns}
        data={queueData}
        animateRows={true}
        animationDelay={0}
      />
    </div>
  );
}
