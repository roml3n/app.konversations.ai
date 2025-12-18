import { ReactNode, useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { TablePagination } from "./TablePagination";

export interface DataTableColumn<T> {
  header: string;
  width?: string; // e.g., "216px", "minmax(0px, 1fr)"
  accessor?: keyof T | ((row: T) => ReactNode);
  align?: "left" | "center" | "right";
  sortable?: boolean;
  sortAccessor?: keyof T | ((row: T) => string | number); // Used for sorting if different from accessor
  render?: (row: T, index: number) => ReactNode;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  emptyMessage?: string;
  animateRows?: boolean;
  animationDelay?: number;
  className?: string;
  noBorders?: boolean; // New prop to remove borders between rows
  pagination?: boolean; // Enable pagination
  defaultItemsPerPage?: number; // Default items per page
  itemsPerPageOptions?: number[]; // Options for items per page dropdown
}

type SortDirection = "asc" | "desc" | null;

export function DataTable<T>({
  columns,
  data,
  emptyMessage = "No data available.",
  animateRows = true,
  animationDelay = 0.7,
  className = "",
  noBorders = false,
  pagination = false,
  defaultItemsPerPage = 10,
  itemsPerPageOptions = [5, 10, 20, 50, 100],
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const handleSort = (columnIndex: number) => {
    const column = columns[columnIndex];
    if (!column.sortable) return;

    if (sortColumn === columnIndex) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortColumn(null);
      }
    } else {
      setSortColumn(columnIndex);
      setSortDirection("asc");
    }
  };

  const getSortValue = (
    row: T,
    column: DataTableColumn<T>
  ): string | number => {
    // Use sortAccessor if provided, otherwise use accessor
    const accessor = column.sortAccessor || column.accessor;

    if (!accessor) return "";

    if (typeof accessor === "function") {
      const value = accessor(row);
      if (typeof value === "string" || typeof value === "number") {
        return value;
      }
      return String(value);
    }

    const value = row[accessor];
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }
    return String(value);
  };

  const sortedData = [...data];

  if (sortColumn !== null && sortDirection !== null) {
    const column = columns[sortColumn];
    sortedData.sort((a, b) => {
      const aValue = getSortValue(a, column);
      const bValue = getSortValue(b, column);

      // Handle number sorting
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      // Handle string sorting
      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();

      if (sortDirection === "asc") {
        return aStr.localeCompare(bStr);
      } else {
        return bStr.localeCompare(aStr);
      }
    });
  }

  // Apply pagination if enabled
  const totalItems = sortedData.length;
  const paginatedData = pagination
    ? sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : sortedData;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page
  };

  const getSortIcon = (columnIndex: number) => {
    if (sortColumn !== columnIndex) {
      return faSort;
    }
    return sortDirection === "asc" ? faSortUp : faSortDown;
  };

  // Create grid template columns string if widths are provided
  const gridTemplateColumns = columns
    .map((col) => col.width || "1fr")
    .join(" ");

  return (
    <div className={`w-full ${pagination ? 'flex flex-col h-full' : ''} ${className}`}>
      <div className={pagination ? 'flex-1 overflow-auto' : ''}>
        <Table>
          <TableHeader className="[&_tr]:border-0">
            <TableRow className="border-0 hover:bg-transparent">
              {columns.map((column, idx) => (
                <TableHead
                  key={`col-${idx}`}
                  className={`bg-[#f4f4f6] min-h-[34px] h-auto px-[8px] py-[8px] border-0 ${
                    idx === 0 ? "rounded-l-[12px]" : ""
                  } ${idx === columns.length - 1 ? "rounded-r-[12px]" : ""}`}
                  style={{ width: column.width }}
                >
                  <div className="flex items-center justify-between w-full gap-2">
                    <p
                      className="font-['Instrument_Sans'] text-[#7a7d7d] text-[13px] leading-[18px] whitespace-normal"
                      style={{
                        fontVariationSettings: "'wdth' 100",
                        fontWeight: 600,
                      }}
                    >
                      {column.header}
                    </p>
                    {column.sortable && (
                      <button
                        onClick={() => handleSort(idx)}
                        className="flex items-center hover:opacity-70 transition-opacity shrink-0"
                      >
                        <FontAwesomeIcon
                          icon={getSortIcon(idx)}
                          className="w-[14px] h-[14px] text-[#A0A3A4]"
                        />
                      </button>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={columns.length}
                  className="py-8 text-center text-[#7a8890] text-[14px]"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, rowIdx) => {
                const RowWrapper = animateRows ? motion.tr : TableRow;
                const animationProps = animateRows
                  ? {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: animationDelay + rowIdx * 0.05 },
                    }
                  : {};

                return (
                  <RowWrapper
                    key={rowIdx}
                    {...animationProps}
                    className={`h-[51px] hover:bg-muted/30 transition-colors ${
                      noBorders ? "border-0" : ""
                    }`}
                  >
                    {columns.map((column, colIdx) => (
                      <TableCell
                        key={colIdx}
                        className={`px-[8px] ${
                          column.align === "center"
                            ? "text-center"
                            : column.align === "right"
                            ? "text-right"
                            : ""
                        } ${noBorders ? "border-0" : ""}`}
                        style={{ width: column.width }}
                      >
                        {column.render
                          ? column.render(row, rowIdx)
                          : column.accessor
                          ? typeof column.accessor === "function"
                            ? column.accessor(row)
                            : String(row[column.accessor])
                          : null}
                      </TableCell>
                    ))}
                  </RowWrapper>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {pagination && totalItems > 0 && (
        <div className="mt-4 shrink-0">
          <TablePagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            itemsPerPageOptions={itemsPerPageOptions}
          />
        </div>
      )}
    </div>
  );
}