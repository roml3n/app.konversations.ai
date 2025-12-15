import { ReactNode } from 'react';
import svgPaths from '../../imports/svg-9t2pr7gwiv';

// Types
export interface Column {
  key: string;
  header: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  cellClassName?: string;
}

export interface BaseTableProps {
  title: string;
  columns: Column[];
  data: any[];
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  itemsPerPageOptions?: number[];
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (items: number) => void;
  onSort?: (columnKey: string) => void;
  renderCell?: (row: any, column: Column) => ReactNode;
  getCellColor?: (value: any, columnKey: string) => 'green' | 'red' | 'orange' | 'default';
}

function SortIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} stroke="#A0A3A4" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} stroke="#A0A3A4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function CaretDownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-down">
          <path d={svgPaths.p3faa2700} fill="#6A7282" />
        </g>
      </svg>
    </div>
  );
}

function CaretLeftIcon({ disabled }: { disabled?: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-left" opacity={disabled ? "0.2" : "1"}>
          <path d={svgPaths.p4d7d300} fill="#7A7D7D" />
        </g>
      </svg>
    </div>
  );
}

function CaretRightIcon({ disabled }: { disabled?: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-right" opacity={disabled ? "0.2" : "1"}>
          <path d={svgPaths.p4376000} fill="#7A7D7D" />
        </g>
      </svg>
    </div>
  );
}

export function BaseTable({
  title,
  columns,
  data,
  currentPage = 1,
  totalPages = 1,
  totalItems,
  itemsPerPage = 10,
  itemsPerPageOptions = [10, 25, 50],
  onPageChange,
  onItemsPerPageChange,
  onSort,
  renderCell,
  getCellColor,
}: BaseTableProps) {
  const totalRows = data.length;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems || totalRows);
  const displayTotalItems = totalItems || totalRows;

  const getCellTextColor = (value: any, columnKey: string): string => {
    if (!getCellColor) return '#7a7d7d';
    
    const colorType = getCellColor(value, columnKey);
    switch (colorType) {
      case 'green':
        return '#45b273';
      case 'red':
        return '#da3b3b';
      case 'orange':
        return '#ff8904';
      default:
        return '#7a7d7d';
    }
  };

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] relative">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[16px] relative size-full">
        {/* Title */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
            <p 
              className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#404141] text-[16px] tracking-[0.08px] w-full" 
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {title}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
          <div 
            className="grid relative shrink-0 w-full"
            style={{
              gridTemplateColumns: columns.map(col => col.width || '1fr').join(' '),
              gridTemplateRows: `repeat(${data.length + 1}, fit-content(100%))`,
            }}
          >
            {/* Header Row */}
            {columns.map((column, colIndex) => (
              <div
                key={`header-${column.key}`}
                className="bg-[#f4f4f6] relative shrink-0"
                style={{
                  gridArea: `1 / ${colIndex + 1}`,
                  borderTopLeftRadius: colIndex === 0 ? '12px' : '0',
                  borderBottomLeftRadius: colIndex === 0 ? '12px' : '0',
                  borderTopRightRadius: colIndex === columns.length - 1 ? '12px' : '0',
                  borderBottomRightRadius: colIndex === columns.length - 1 ? '12px' : '0',
                }}
              >
                <div className="flex flex-row items-center size-full">
                  <div 
                    className="content-stretch flex items-center justify-between p-[8px] relative w-full"
                    onClick={() => column.sortable && onSort?.(column.key)}
                    style={{ cursor: column.sortable ? 'pointer' : 'default' }}
                  >
                    <p 
                      className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px]" 
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {column.header}
                    </p>
                    {column.sortable && <SortIcon />}
                  </div>
                </div>
              </div>
            ))}

            {/* Data Rows */}
            {data.map((row, rowIndex) => (
              columns.map((column, colIndex) => {
                const cellValue = row[column.key];
                const textColor = getCellTextColor(cellValue, column.key);
                const isMediumWeight = rowIndex === 0 && colIndex === 0;

                return (
                  <div
                    key={`cell-${rowIndex}-${colIndex}`}
                    className="h-[51px] justify-self-stretch relative shrink-0"
                    style={{ gridArea: `${rowIndex + 2} / ${colIndex + 1}` }}
                  >
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center p-[8px] relative size-full">
                        {renderCell ? (
                          renderCell(row, column)
                        ) : (
                          <p 
                            className={`${
                              isMediumWeight 
                                ? "font-['Instrument_Sans:Medium',sans-serif] font-medium" 
                                : "font-['Instrument_Sans:Regular',sans-serif] font-normal"
                            } basis-0 grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.07px]`}
                            style={{ 
                              fontVariationSettings: "'wdth' 100",
                              color: textColor,
                            }}
                          >
                            {cellValue}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ))}
          </div>

          {/* Pagination */}
          <div className="h-[32px] relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative size-full">
                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                  <p 
                    className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Showing {startItem} - {endItem} of {displayTotalItems}
                  </p>
                  <p 
                    className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    •
                  </p>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <p 
                      className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" 
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Results per page
                    </p>
                    <button className="bg-[#f3f4f6] content-stretch flex gap-[4px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0">
                      <p 
                        className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" 
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {itemsPerPage}
                      </p>
                      <CaretDownIcon />
                    </button>
                  </div>
                </div>
                <div className="bg-[#f2f3f3] content-stretch flex gap-[16px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0">
                  <button 
                    onClick={() => onPageChange?.(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <CaretLeftIcon disabled={currentPage === 1} />
                  </button>
                  <p 
                    className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {currentPage}
                  </p>
                  <button 
                    onClick={() => onPageChange?.(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <CaretRightIcon disabled={currentPage === totalPages} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
