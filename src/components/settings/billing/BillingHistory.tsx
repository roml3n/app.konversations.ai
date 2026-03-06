import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFilter,
  faFileExport,
  faArrowUpRightFromSquare,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { DataTable, DataTableColumn } from "../../ui/DataTable";

interface BillingHistoryItem {
  id: string;
  receipt: string;
  billingDate: string;
  amount: string;
}

// Mock data
const billingHistoryData: BillingHistoryItem[] = [
  { id: "1", receipt: "6473YEG_298109", billingDate: "November 7, 2024", amount: "$20.00" },
  { id: "2", receipt: "6473YEG_298109", billingDate: "December 29, 2023", amount: "$20.00" },
  { id: "3", receipt: "6473YEG_298109", billingDate: "May 29, 2024", amount: "$20.00" },
  { id: "4", receipt: "6473YEG_298109", billingDate: "November 28, 2023", amount: "$20.00" },
  { id: "5", receipt: "6473YEG_298109", billingDate: "August 24, 2024", amount: "$20.00" },
  { id: "6", receipt: "6473YEG_298109", billingDate: "October 24, 2023", amount: "$20.00" },
  { id: "7", receipt: "6473YEG_298109", billingDate: "May 9, 2024", amount: "$20.00" },
  { id: "8", receipt: "6473YEG_298109", billingDate: "October 24, 2023", amount: "$20.00" },
  { id: "9", receipt: "6473YEG_298109", billingDate: "May 9, 2024", amount: "$20.00" },
  { id: "10", receipt: "6473YEG_298109", billingDate: "October 24, 2023", amount: "$20.00" },
];

export function BillingHistory() {
  const [dateRange, setDateRange] = useState("1 - 10 of 213");

  const columns: DataTableColumn<BillingHistoryItem>[] = [
    {
      header: "Receipt",
      accessor: "receipt",
      width: "minmax(0px, 1fr)",
      sortable: true,
    },
    {
      header: "Billing Date",
      accessor: "billingDate",
      width: "minmax(0px, 1fr)",
      sortable: true,
    },
    {
      header: "Amount",
      accessor: "amount",
      width: "minmax(0px, 1fr)",
      sortable: true,
    },
    {
      header: "Actions",
      width: "120px",
      render: (row) => (
        <button
          className="flex items-center gap-2 text-[#7a8890] hover:text-[#121212] transition-colors"
          onClick={() => console.log("View receipt:", row.receipt)}
        >
          <span
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-normal)",
            }}
          >
            View
          </span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="w-3 h-3"
          />
        </button>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pt-8 pb-16 px-[30px]">
      {/* Filter Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-4 h-4 text-[#7a8890]"
            />
          </button>

          {/* Filter Button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors">
            <FontAwesomeIcon
              icon={faFilter}
              className="w-4 h-4 text-[#7a8890]"
            />
          </button>

          {/* Date Range Dropdown */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors">
            <FontAwesomeIcon
              icon={faFilter}
              className="w-3.5 h-3.5 text-[#7a8890]"
            />
            <span
              className="text-[#121212]"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-normal)",
              }}
            >
              {dateRange}
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-3 h-3 text-[#7a8890]"
            />
          </button>
        </div>

        {/* Export Report Button */}
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors">
          <FontAwesomeIcon
            icon={faFileExport}
            className="w-4 h-4 text-[#7a8890]"
          />
          <span
            className="text-[#121212]"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            Export Report
          </span>
        </button>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={billingHistoryData}
        pagination={true}
        defaultItemsPerPage={10}
        itemsPerPageOptions={[10, 20, 50]}
      />
    </div>
  );
}
