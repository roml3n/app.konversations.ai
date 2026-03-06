import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faArrowRightToFile,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { DataTable, DataTableColumn } from "../../ui/DataTable";

interface Receipt {
  id: string;
  receiptNumber: string;
  billingDate: string;
  amount: string;
}

const mockReceipts: Receipt[] = [
  {
    id: "1",
    receiptNumber: "6473YEG.298109",
    billingDate: "November 7, 2024",
    amount: "$20.00",
  },
  {
    id: "2",
    receiptNumber: "6473YEG.298109",
    billingDate: "December 29, 2023",
    amount: "$20.00",
  },
  {
    id: "3",
    receiptNumber: "6473YEG.298109",
    billingDate: "May 29, 2024",
    amount: "$20.00",
  },
  {
    id: "4",
    receiptNumber: "6473YEG.298109",
    billingDate: "November 28, 2023",
    amount: "$20.00",
  },
  {
    id: "5",
    receiptNumber: "6473YEG.298109",
    billingDate: "August 24, 2024",
    amount: "$20.00",
  },
  {
    id: "6",
    receiptNumber: "6473YEG.298109",
    billingDate: "October 24, 2023",
    amount: "$20.00",
  },
  {
    id: "7",
    receiptNumber: "6473YEG.298109",
    billingDate: "May 9, 2024",
    amount: "$20.00",
  },
  {
    id: "8",
    receiptNumber: "6473YEG.298109",
    billingDate: "October 24, 2023",
    amount: "$20.00",
  },
  {
    id: "9",
    receiptNumber: "6473YEG.298109",
    billingDate: "May 9, 2024",
    amount: "$20.00",
  },
  {
    id: "10",
    receiptNumber: "6473YEG.298109",
    billingDate: "October 24, 2023",
    amount: "$20.00",
  },
];

export function BillingOverview() {
  // Function to open PDF preview
  const handleViewReceipt = (receiptId: string, receiptNumber: string) => {
    // Create a mock PDF URL - in production, this would be an actual PDF endpoint
    const pdfUrl = `/api/receipts/${receiptId}/pdf`;
    
    // Open PDF in a new window/tab
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const columns: DataTableColumn<Receipt>[] = [
    {
      header: "Receipt",
      accessor: "receiptNumber",
      sortable: true,
      width: "minmax(0px, 1fr)",
    },
    {
      header: "Billing Date",
      accessor: "billingDate",
      sortable: true,
      width: "minmax(0px, 1fr)",
    },
    {
      header: "Amount",
      accessor: "amount",
      sortable: true,
      width: "minmax(0px, 1fr)",
    },
    {
      header: "Actions",
      width: "120px",
      render: (row) => (
        <button
          className="text-[#7a8890] hover:text-foreground transition-colors flex items-center gap-1.5"
          style={{
            fontSize: "var(--text-xs)",
            fontWeight: "var(--font-weight-normal)",
          }}
          onClick={() => handleViewReceipt(row.id, row.receiptNumber)}
        >
          View
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
      {/* Remaining Credits Card */}
      <div className="rounded-lg border border-[#e3e8f0] overflow-hidden">
        {/* Credits Header */}
        <div className="px-4 py-6 flex items-center justify-between">
          <h3
            className="text-[#121212]"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-semibold)",
              lineHeight: "1",
            }}
          >
            Remaining Credits
          </h3>
          <span
            className="text-[#121212]"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-semibold)",
              lineHeight: "1",
            }}
          >
            $60.00
          </span>
        </div>

        {/* Info Banner */}
        <div className="bg-[#e2f5fc] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="w-6 h-6 text-[#51bddc]"
            />
            <span
              className="text-[#219ac3]"
              style={{
                fontSize: "13px",
                fontWeight: "var(--font-weight-semibold)",
                lineHeight: "18px",
              }}
            >
              $1 = 10 credits
            </span>
          </div>

          <button className="bg-gradient-to-b from-white to-[#f1f1f1] flex items-center gap-2.5 px-2.5 py-2 rounded-lg border border-[#e3e3e4] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:brightness-95 transition-all">
            <FontAwesomeIcon
              icon={faArrowRightToFile}
              className="w-3.5 h-3.5 text-[#7a8890]"
            />
            <span
              className="text-[#404141]"
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-normal)",
              }}
            >
              Buy More Credits
            </span>
          </button>
        </div>
      </div>

      {/* Credits Usage Card */}
      <div className="rounded-lg border border-[#e3e8f0] px-[15px] py-4 flex flex-col items-end gap-6">
        <h3
          className="text-[#121212] w-full"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)",
            lineHeight: "1",
          }}
        >
          Credits Usage
        </h3>

        {/* Usage Stats */}
        <div className="flex flex-col gap-2 w-full">
          <p
            className="text-[#121212]"
            style={{
              fontSize: "18px",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: "1.2",
            }}
          >
            345
          </p>

          {/* Progress Bar */}
          <div className="bg-[#e2f5fc] h-2 rounded-full overflow-hidden w-full">
            <div
              className="bg-[#219ac3] h-full rounded-full"
              style={{ width: "28.75%" }}
            />
          </div>

          {/* Credits Remaining Text */}
          <p
            className="text-[#121212] opacity-50"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-normal)",
              lineHeight: "1.2",
            }}
          >
            855 of 1200 credits remaining
          </p>
        </div>

        <button className="bg-gradient-to-b from-white to-[#f1f1f1] flex items-center gap-2.5 px-2.5 py-2 rounded-lg border border-[#e3e3e4] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:brightness-95 transition-all">
          <FontAwesomeIcon
            icon={faArrowRightToFile}
            className="w-3.5 h-3.5 text-[#7a8890]"
          />
          <span
            className="text-[#404141]"
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: "var(--font-weight-normal)",
            }}
          >
            View Usage Details
          </span>
        </button>
      </div>

      {/* Receipts Section */}
      <div className="flex flex-col gap-6">
        <h3
          className="text-[#121212]"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)",
            lineHeight: "1",
          }}
        >
          Receipts
        </h3>

        {/* Receipts Table */}
        <DataTable<Receipt>
          columns={columns}
          data={mockReceipts}
          emptyMessage="No receipts available"
          animateRows={false}
        />

        {/* View Past Receipts Button */}
        <div className="flex justify-end">
          <button className="bg-gradient-to-b from-white to-[#f1f1f1] flex items-center gap-2.5 px-2.5 py-2 rounded-lg border border-[#e3e3e4] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:brightness-95 transition-all">
            <FontAwesomeIcon
              icon={faArrowRightToFile}
              className="w-3.5 h-3.5 text-[#7a8890]"
            />
            <span
              className="text-[#404141]"
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-normal)",
              }}
            >
              View Past Receipts
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}