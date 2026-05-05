import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { DataTable, DataTableColumn } from "../ui/DataTable";

interface Agent {
  id: string;
  name: string;
  extension: string;
  email: string;
  status: "active" | "inactive";
}

const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    extension: "EXT-1001",
    email: "sarah.johnson@company.com",
    status: "active",
  },
  {
    id: "2",
    name: "Michael Chen",
    extension: "EXT-1002",
    email: "michael.chen@company.com",
    status: "active",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    extension: "EXT-1003",
    email: "emily.rodriguez@company.com",
    status: "active",
  },
  {
    id: "4",
    name: "David Kim",
    extension: "EXT-1004",
    email: "david.kim@company.com",
    status: "inactive",
  },
  {
    id: "5",
    name: "Jessica Martinez",
    extension: "EXT-1005",
    email: "jessica.martinez@company.com",
    status: "active",
  },
  {
    id: "6",
    name: "Ryan Thompson",
    extension: "EXT-1006",
    email: "ryan.thompson@company.com",
    status: "active",
  },
  {
    id: "7",
    name: "Amanda Lee",
    extension: "EXT-1007",
    email: "amanda.lee@company.com",
    status: "inactive",
  },
  {
    id: "8",
    name: "Christopher Brown",
    extension: "EXT-1008",
    email: "christopher.brown@company.com",
    status: "active",
  },
];

export function Agents() {
  const [agents] = useState<Agent[]>(mockAgents);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const handleViewAgent = (agent: Agent) => {
    setSelectedAgent(agent);
  };

  const columns: DataTableColumn<Agent>[] = [
    {
      header: "Name",
      width: "minmax(180px, 1fr)",
      sortable: true,
      sortAccessor: "name",
      render: (agent) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: 400,
          }}
        >
          {agent.name}
        </p>
      ),
    },
    {
      header: "Extension",
      width: "140px",
      sortable: true,
      sortAccessor: "extension",
      render: (agent) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: 400,
          }}
        >
          {agent.extension}
        </p>
      ),
    },
    {
      header: "Email",
      width: "minmax(200px, 1fr)",
      sortable: true,
      sortAccessor: "email",
      render: (agent) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: 400,
          }}
        >
          {agent.email}
        </p>
      ),
    },
    {
      header: "Status",
      width: "120px",
      sortable: true,
      sortAccessor: "status",
      render: (agent) => (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              agent.status === "active" ? "bg-[#01b386]" : "bg-[#7a8890]"
            }`}
          />
          <p
            className="font-['Instrument_Sans'] text-[#404141] text-[12px] capitalize"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 400,
            }}
          >
            {agent.status}
          </p>
        </div>
      ),
    },
    {
      header: "Actions",
      width: "120px",
      render: (agent) => (
        <button
          onClick={() => handleViewAgent(agent)}
          className="flex items-center gap-2 text-[#0320f5] hover:text-[#0218d0] transition-colors"
        >
          <span
            className="font-['Instrument_Sans'] text-[12px] tracking-[0.06px]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 600,
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

  if (selectedAgent) {
    return (
      <div className="flex flex-col gap-6 py-4 w-full max-w-[1200px]">
        {/* Back Button */}
        <button
          onClick={() => setSelectedAgent(null)}
          className="flex items-center gap-2 text-[#0320f5] hover:text-[#0218d0] transition-colors"
        >
          <span
            className="font-['Instrument_Sans'] text-[14px] tracking-[0.07px]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 600,
            }}
          >
            ← Back to Agents
          </span>
        </button>

        {/* Agent Details */}
        <div className="flex flex-col gap-8 w-full">
          <p
            className="font-['Instrument_Sans'] text-[#5e6060] text-[20px] tracking-[0.1px]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 600,
            }}
          >
            Agent Details
          </p>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <p
                className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                Name
              </p>
              <p
                className="font-['Instrument_Sans'] text-[#292f32] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                {selectedAgent.name}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p
                className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                Extension
              </p>
              <p
                className="font-['Instrument_Sans'] text-[#292f32] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                {selectedAgent.extension}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p
                className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                Email
              </p>
              <p
                className="font-['Instrument_Sans'] text-[#292f32] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                {selectedAgent.email}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p
                className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                Status
              </p>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    selectedAgent.status === "active"
                      ? "bg-[#01b386]"
                      : "bg-[#7a8890]"
                  }`}
                />
                <p
                  className="font-['Instrument_Sans'] text-[#292f32] text-[14px] tracking-[0.07px] capitalize"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    fontWeight: 400,
                  }}
                >
                  {selectedAgent.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 py-4 w-full max-w-[1200px]">
      <p
        className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] tracking-[0.07px]"
        style={{
          fontVariationSettings: "'wdth' 100",
          fontWeight: 400,
        }}
      >
        Manage your team agents
      </p>

      <DataTable
        columns={columns}
        data={agents}
        emptyMessage="No agents found."
        animateRows={true}
        animationDelay={0.2}
      />
    </div>
  );
}