import { useState } from 'react';
import { BaseTable, Column } from '../tables/BaseTable';

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

const columns: Column[] = [
  { key: 'queue', header: 'Queue', sortable: true, width: '138.25px' },
  { key: 'waiting', header: 'Waiting', sortable: true, width: '138.25px' },
  { key: 'longestWait', header: 'Longest wait', sortable: true, width: '1fr' },
  { key: 'available', header: 'Available', sortable: true, width: '1fr' },
  { key: 'onCall', header: 'On Call', sortable: true, width: '1fr' },
  { key: 'serviceLevel', header: 'Service Level', sortable: true, width: '1fr' },
  { key: 'occupancy', header: 'Occupancy', sortable: true, width: '1fr' },
  { key: 'callsToday', header: 'Calls Today', sortable: true, width: '1fr' },
];

type SortColumn = keyof QueueData | null;
type SortDirection = 'asc' | 'desc' | null;

export function QueueStatusTable() {
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage] = useState(1);

  const handleSort = (columnKey: string) => {
    const column = columnKey as keyof QueueData;
    
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortColumn(null);
        setSortDirection(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = [...queueData].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;
    
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    return 0;
  });

  const getCellColor = (value: any, columnKey: string): 'green' | 'red' | 'orange' | 'default' => {
    if (columnKey === 'serviceLevel') {
      const numValue = parseFloat(value);
      if (numValue >= 90) return 'green';
      if (numValue >= 75) return 'orange';
      return 'red';
    }
    
    if (columnKey === 'occupancy') {
      const numValue = parseFloat(value);
      if (numValue >= 75 && numValue <= 85) return 'green';
      if (numValue >= 65 && numValue < 95) return 'orange';
      return 'red';
    }
    
    return 'default';
  };

  return (
    <BaseTable
      title="Queue status"
      columns={columns}
      data={sortedData}
      currentPage={currentPage}
      totalPages={1}
      totalItems={5}
      itemsPerPage={10}
      onSort={handleSort}
      getCellColor={getCellColor}
    />
  );
}
