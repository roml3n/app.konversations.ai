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
}

type SortDirection = "asc" | "desc" | null;

export function DataTable<T>({
  columns,
  data,
  emptyMessage = "No data available.",
  animateRows = true,
  animationDelay = 0.7,
  className = "",
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

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
    <div className={`w-full ${className}`}>
      <Table>
        <TableHeader>
          <TableRow className="border-0 hover:bg-transparent">
            {columns.map((column, idx) => (
              <TableHead
                key={column.header}
                className={`bg-[#f4f4f6] h-[34px] px-[8px] border-0 ${
                  idx === 0 ? "rounded-l-[12px]" : ""
                } ${idx === columns.length - 1 ? "rounded-r-[12px]" : ""}`}
                style={{ width: column.width }}
              >
                <div className="flex items-center justify-between w-full">
                  <p
                    className="font-['Instrument_Sans'] text-[#7a7d7d] text-[13px] leading-[18px]"
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
                      className="flex items-center hover:opacity-70 transition-opacity"
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
          {sortedData.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={columns.length}
                className="py-8 text-center text-[#7a8890] text-[14px]"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            sortedData.map((row, rowIdx) => {
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
                  className="h-[51px] hover:bg-muted/30 transition-colors"
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
                      }`}
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
  );
}