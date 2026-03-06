import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface Permission {
  id: string;
  label: string;
}

interface Role {
  id: string;
  name: string;
  count: number;
  description: string;
  permissions: Permission[];
}

const defaultRoles: Role[] = [
  {
    id: "agent",
    name: "Agent",
    count: 8,
    description: "Can view the main dashboard, check their own conversation history and view insights.",
    permissions: [
      { id: "dashboard-read", label: "dashboard:read" },
      { id: "insights-read", label: "insights:read" },
      { id: "conversations-read", label: "conversations:read" },
      { id: "profile-edit", label: "profile:edit" },
      { id: "tickets-create", label: "tickets:create" },
      { id: "tickets-update", label: "tickets:update" },
    ],
  },
  {
    id: "admin",
    name: "Admin",
    count: 1,
    description: "Can manage everything, export reports, add new agents and edit organization information.",
    permissions: [
      { id: "dashboard-create", label: "dashboard:create" },
      { id: "dashboard-edit", label: "dashboard:edit" },
      { id: "users-manage", label: "users:manage" },
      { id: "reports-export", label: "reports:export" },
      { id: "org-edit", label: "organization:edit" },
      { id: "settings-manage", label: "settings:manage" },
      { id: "billing-manage", label: "billing:manage" },
      { id: "integrations-manage", label: "integrations:manage" },
      { id: "roles-manage", label: "roles:manage" },
      { id: "agents-manage", label: "agents:manage" },
    ],
  },
  {
    id: "manager",
    name: "Manager",
    count: 2,
    description: "Can manage roles and team members, export reports and view org details.",
    permissions: [
      { id: "dashboard-read", label: "dashboard:read" },
      { id: "dashboard-edit", label: "dashboard:edit" },
      { id: "team-manage", label: "team:manage" },
      { id: "reports-export", label: "reports:export" },
      { id: "analytics-view", label: "analytics:view" },
      { id: "users-view", label: "users:view" },
      { id: "org-view", label: "organization:view" },
      { id: "insights-read", label: "insights:read" },
      { id: "workforce-manage", label: "workforce:manage" },
      { id: "scheduling-manage", label: "scheduling:manage" },
      { id: "quality-view", label: "quality:view" },
      { id: "performance-view", label: "performance:view" },
    ],
  },
];

function RoleCard({ role }: { role: Role }) {
  const navigate = useNavigate();
  const visiblePermissions = role.permissions.slice(0, 2);
  const remainingCount = role.permissions.length - visiblePermissions.length;

  const handleClick = () => {
    navigate(`/settings?view=roles&roleId=${role.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-muted relative rounded-lg size-full hover:brightness-95 transition-all text-left"
    >
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
        {/* Role Header and Description */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          {/* Role Name and Count */}
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
            <p
              className="leading-[normal] not-italic relative shrink-0 text-foreground"
              style={{ 
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-semibold)'
              }}
            >
              {role.name}
            </p>
            <div className="bg-card content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[7px] shrink-0 size-[20px]">
              <div
                aria-hidden="true"
                className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[7px]"
              />
              <p 
                className="leading-[normal] not-italic relative shrink-0 text-foreground"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                {role.count}
              </p>
            </div>
          </div>
          {/* Description */}
          <p 
            className="leading-[normal] min-w-full not-italic relative shrink-0 text-muted-foreground w-[min-content] whitespace-pre-wrap"
            style={{ fontSize: 'var(--text-xs)' }}
          >
            {role.description}
          </p>
        </div>

        {/* Permissions */}
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
          {visiblePermissions.map((permission) => (
            <div
              key={permission.id}
              className="bg-card content-stretch flex flex-col items-center justify-center px-[6px] py-[2px] relative rounded-[7px] shrink-0"
            >
              <p 
                className="leading-[normal] not-italic relative shrink-0 text-accent"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                {permission.label}
              </p>
            </div>
          ))}
          {remainingCount > 0 && (
            <div className="bg-card content-stretch flex flex-col items-center justify-center px-[6px] py-[2px] relative rounded-[7px] shrink-0">
              <p 
                className="leading-[normal] not-italic relative shrink-0 text-accent"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                +{remainingCount}
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-border border-solid inset-0 pointer-events-none rounded-lg"
      />
    </button>
  );
}

function CreateRoleCard() {
  return (
    <button
      className="bg-[#f2f3f3] relative rounded-[8px] size-full border-2 border-dashed border-[#e3e3e4] hover:bg-[#e8e9e9] transition-all"
    >
      <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[inherit] size-full gap-3 min-h-[140px]">
        <FontAwesomeIcon icon={faPlus} className="text-[#01B386] w-5 h-5" />
        <span
          className="font-['Instrument_Sans'] text-[#01B386]"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-semibold)",
          }}
        >
          Create new role
        </span>
      </div>
    </button>
  );
}

export function RolesAndPermissions() {
  return (
    <div className="flex flex-col gap-6 w-full px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3
          className="font-['Instrument_Sans'] text-[var(--foreground)] tracking-[0.12px]"
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-weight-bold)",
          }}
        >
          Roles and Permissions
        </h3>
        <Button
          className="gap-2"
          style={{
            borderRadius: "var(--radius-button)",
          }}
        >
          <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4" />
          Create New Role
        </Button>
      </div>

      {/* Default Roles Section */}
      <div className="flex flex-col gap-4">
        <h4
          className="font-['Instrument_Sans'] text-[var(--foreground)] tracking-[0.07px]"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-semibold)",
          }}
        >
          Default Roles
        </h4>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {defaultRoles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
          <CreateRoleCard />
        </div>
      </div>
    </div>
  );
}