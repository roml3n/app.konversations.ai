import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faUserPlus,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { DataTable, DataTableColumn } from "../ui/DataTable";

interface Permission {
  id: string;
  label: string;
}

interface TeamMember {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  extension: string;
  email: string;
}

interface RoleData {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  teamMembers: TeamMember[];
}

// Mock data for the Manager role
const managerRole: RoleData = {
  id: "manager",
  name: "Manager",
  description:
    "Can manage roles and team members, export reports and view org details.",
  permissions: [
    { id: "conversations-create", label: "conversations.create" },
    { id: "conversations-read", label: "conversations.read" },
    { id: "conversations-update", label: "conversations.update" },
    { id: "conversations-delete", label: "conversations.delete" },
    { id: "dashboard-create", label: "dashboard.create" },
    { id: "dashboard-read", label: "dashboard.read" },
    { id: "dashboard-update", label: "dashboard.update" },
    { id: "dashboard-delete", label: "dashboard.delete" },
    { id: "team-members-create", label: "team-members.create" },
    { id: "team-members-update", label: "team-members.update" },
    { id: "team-members-delete", label: "team-members.delete" },
    { id: "team-members-read", label: "team-members.read" },
    { id: "org-read", label: "org.read" },
    { id: "billing-usage-read", label: "billing-usage.read" },
    { id: "system-status-read", label: "system-status.read" },
  ],
  teamMembers: [
    {
      id: "1",
      name: "Jared Maingi",
      initials: "JM",
      avatarColor: "#b4bbee",
      extension: "102",
      email: "name@acme.corp",
    },
    {
      id: "2",
      name: "Immaculate Cherono",
      initials: "IC",
      avatarColor: "#bce5f3",
      extension: "103",
      email: "name@acme.corp",
    },
    {
      id: "3",
      name: "Elijah Kimani",
      initials: "EK",
      avatarColor: "#f3bcc0",
      extension: "104",
      email: "name@acme.corp",
    },
    {
      id: "4",
      name: "Harrison Cherop",
      initials: "HC",
      avatarColor: "#c8f3bc",
      extension: "105",
      email: "name@acme.corp",
    },
    {
      id: "5",
      name: "Joe Maina",
      initials: "JM",
      avatarColor: "#f3d9bc",
      extension: "106",
      email: "name@acme.corp",
    },
    {
      id: "6",
      name: "Isaiah Mwangi",
      initials: "IM",
      avatarColor: "#f3bcec",
      extension: "107",
      email: "name@acme.corp",
    },
    {
      id: "7",
      name: "Peter Omwenga",
      initials: "PO",
      avatarColor: "#fcb4c8",
      extension: "108",
      email: "name@acme.corp",
    },
    {
      id: "8",
      name: "Prudence Kabiru",
      initials: "PK",
      avatarColor: "#b4c8ee",
      extension: "109",
      email: "name@acme.corp",
    },
    {
      id: "9",
      name: "Kelvin Muthoni",
      initials: "KM",
      avatarColor: "#bceec8",
      extension: "112",
      email: "name@acme.corp",
    },
    {
      id: "10",
      name: "Isaiah Kariuki",
      initials: "IK",
      avatarColor: "#f3bcd9",
      extension: "114",
      email: "name@acme.corp",
    },
  ],
};

function Avatar({
  initials,
  color,
}: {
  initials: string;
  color: string;
}) {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[20px]"
      style={{ backgroundColor: color }}
    >
      <div
        className="flex flex-col font-['Instrument_Sans'] justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full"
        style={{ fontWeight: 400 }}
      >
        <p className="leading-[1.2] whitespace-pre-wrap">{initials}</p>
      </div>
    </div>
  );
}

export function RoleDetails() {
  const role = managerRole;

  const columns: DataTableColumn<TeamMember>[] = [
    {
      header: "Name",
      accessor: "name",
      sortable: true,
      render: (row) => (
        <div className="content-stretch flex gap-[4px] items-center">
          <Avatar initials={row.initials} color={row.avatarColor} />
          <p
            className="font-['Instrument_Sans'] text-[#202121] text-[14px] tracking-[0.07px] leading-[1.2]"
            style={{ fontWeight: 400 }}
          >
            {row.name}
          </p>
        </div>
      ),
    },
    {
      header: "Extension",
      accessor: "extension",
      width: "138px",
      sortable: true,
      render: (row) => (
        <p
          className="font-['Source_Sans_Pro'] text-[#393939] text-[13px]"
          style={{ fontWeight: 400 }}
        >
          {row.extension}
        </p>
      ),
    },
    {
      header: "Email",
      accessor: "email",
      sortable: true,
      render: (row) => (
        <p
          className="font-['Source_Sans_Pro'] text-[12px] text-black"
          style={{ fontWeight: 400 }}
        >
          {row.email}
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full px-6 py-6">
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p
          className="flex-[1_0_0] font-['Instrument_Sans'] text-[#121212] text-[16px] tracking-[0.08px] whitespace-pre-wrap leading-none"
          style={{ fontWeight: 600 }}
        >
          Role details
        </p>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <Button
            variant="outline"
            className="gap-2"
            style={{
              borderRadius: "var(--radius-button)",
            }}
          >
            <FontAwesomeIcon icon={faPencil} className="w-4 h-4" />
            Edit Role
          </Button>
          <Button
            className="gap-2"
            style={{
              borderRadius: "var(--radius-button)",
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} className="w-4 h-4" />
            Add Team Member
          </Button>
        </div>
      </div>

      {/* Role Info */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        {/* Role Name with Icon */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="w-full h-full text-[#58AEC6]"
            />
          </div>
          <p
            className="font-['Instrument_Sans'] text-[#121212] text-[16px] tracking-[0.08px] whitespace-pre-wrap leading-none"
            style={{ fontWeight: 600 }}
          >
            {role.name}
          </p>
        </div>
        {/* Description */}
        <p
          className="font-['Source_Sans_Pro'] text-[#7a7d7d] text-[13px]"
          style={{ fontWeight: 400 }}
        >
          {role.description}
        </p>
      </div>

      {/* Permissions Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p
          className="font-['Source_Sans_Pro'] text-[#202121] text-[13px] leading-[18px] w-full whitespace-pre-wrap"
          style={{ fontWeight: 600 }}
        >
          Permissions
        </p>
        <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full">
          {role.permissions.map((permission) => (
            <div
              key={permission.id}
              className="bg-[#fefefe] content-stretch flex flex-col items-center justify-center px-[6px] py-[2px] relative rounded-[7px] shrink-0"
            >
              <p
                className="font-['Source_Sans_Pro'] text-[#58aec6] text-[12px]"
                style={{ fontWeight: 400 }}
              >
                {permission.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members Section */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p
          className="font-['Source_Sans_Pro'] text-[#202121] text-[13px] leading-[18px] w-full whitespace-pre-wrap"
          style={{ fontWeight: 600 }}
        >
          Team Members
        </p>
        <div className="w-full">
          <DataTable
            columns={columns}
            data={role.teamMembers}
            emptyMessage="No team members assigned to this role."
            animateRows={false}
          />
        </div>
      </div>
    </div>
  );
}
