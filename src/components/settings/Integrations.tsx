import { useState } from "react";
import { IntegrationCard } from "./IntegrationCard";
import { ConnectDrawer } from "./ConnectDrawer";

// Import integration images
import img3cx from "figma:asset/d05cf4ba79f7d6831d8c8f7cfbd8ffd4f51ee3d4.png";
import imgWhatsApp from "figma:asset/ec4e0ebe1db3a6f5a96df5e29f10c0e38fb3f2f7.png";
import imgGmail from "figma:asset/af7c8ac4f6695b1e820fc61130d3f39b29dd9b25.png";
import imgMessenger from "figma:asset/4aac3b39c8fce7c2bdbfb04e4b06c8b4e21c23da.png";
import imgJira from "figma:asset/95e75e488aef2ff4c071bc8c3c0c50ec6adcd4bf.png";
import imgInstagram from "figma:asset/2eabaec80e2f1bcb9f2a50fb90821a34c0b10f30.png";
import imgCisco from "figma:asset/d0e1d817eb7d662e887c11e5bb4113b64de97494.png";
import imgZoom from "figma:asset/c4e7e4dcfdcca3029a8cb22c1abf8fa6d4c2ca15.png";
import imgFreshdesk from "figma:asset/6c2f89a4f72a7e52cec27f27a4dab1c47c4b3bf5.png";
import imgHubSpot from "figma:asset/61c2cef5e1dc7f9ba3e867d6afa73a4dda8abdc3.png";
import imgDynamics from "figma:asset/e50b5dc6e39b7ae2c3cb1ad3b66ab4c6f3e82b88.png";
import imgSalesforce from "figma:asset/de85326dc8654dd9ebdf98fd5b2654126a1bfeb4.png";

type Category = "All apps" | "Voice" | "Messaging" | "Service Desk" | "Email" | "AI" | "Workflow" | "Calendar";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  isConnected: boolean;
  category: Category[];
  fields: Array<{
    label: string;
    placeholder: string;
    type?: string;
  }>;
}

// Mock integrations data
const integrations: Integration[] = [
  {
    id: "3cx",
    name: "3CX",
    description: "Make and receive phone calls.",
    icon: img3cx,
    isConnected: true,
    category: ["All apps", "Voice"],
    fields: [
      { label: "API Key", placeholder: "Enter your API key" },
      { label: "Extension", placeholder: "Enter extension number" },
      { label: "Server URL", placeholder: "Enter server URL" },
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Bring your messages into your unified inbox.",
    icon: imgWhatsApp,
    isConnected: true,
    category: ["All apps", "Messaging"],
    fields: [
      { label: "Phone Number", placeholder: "Enter phone number" },
      { label: "Business Account ID", placeholder: "Enter account ID" },
      { label: "Access Token", placeholder: "Enter access token" },
    ],
  },
  {
    id: "gmail",
    name: "Gmail",
    description: "Carry over your customer emails into a unified inbox.",
    icon: imgGmail,
    isConnected: true,
    category: ["All apps", "Email"],
    fields: [
      { label: "Email Address", placeholder: "Enter email address", type: "email" },
      { label: "App Password", placeholder: "Enter app password", type: "password" },
    ],
  },
  {
    id: "messenger",
    name: "Messenger",
    description: "Bring your messages into your unified inbox.",
    icon: imgMessenger,
    isConnected: false,
    category: ["All apps", "Messaging"],
    fields: [
      { label: "Page ID", placeholder: "Enter page ID" },
      { label: "Access Token", placeholder: "Enter access token" },
    ],
  },
  {
    id: "jira",
    name: "Jira",
    description: "Track and raise tickets from your customer engagements.",
    icon: imgJira,
    isConnected: true,
    category: ["All apps", "Service Desk"],
    fields: [
      { label: "Domain", placeholder: "your-domain.atlassian.net" },
      { label: "Email", placeholder: "Enter email", type: "email" },
      { label: "API Token", placeholder: "Enter API token", type: "password" },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Bring your messages into your unified inbox.",
    icon: imgInstagram,
    isConnected: false,
    category: ["All apps", "Messaging"],
    fields: [
      { label: "Account ID", placeholder: "Enter account ID" },
      { label: "Access Token", placeholder: "Enter access token" },
    ],
  },
  {
    id: "cisco",
    name: "Cisco Finesse",
    description: "View all agent-customer calls and chats in one view.",
    icon: imgCisco,
    isConnected: false,
    category: ["All apps", "Voice"],
    fields: [
      { label: "Server URL", placeholder: "Enter server URL" },
      { label: "Username", placeholder: "Enter username" },
      { label: "Password", placeholder: "Enter password", type: "password" },
    ],
  },
  {
    id: "zoom",
    name: "Zoom Recording",
    description: "Pull insights from Zoom meeting transcripts.",
    icon: imgZoom,
    isConnected: false,
    category: ["All apps", "AI"],
    fields: [
      { label: "Account ID", placeholder: "Enter account ID" },
      { label: "Client ID", placeholder: "Enter client ID" },
      { label: "Client Secret", placeholder: "Enter client secret", type: "password" },
    ],
  },
  {
    id: "freshdesk",
    name: "Freshdesk",
    description: "Sync support tickets and interactions into CSAI.",
    icon: imgFreshdesk,
    isConnected: false,
    category: ["All apps", "Service Desk"],
    fields: [
      { label: "Domain", placeholder: "your-domain.freshdesk.com" },
      { label: "API Key", placeholder: "Enter API key", type: "password" },
    ],
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "See CRM and support history side by side.",
    icon: imgHubSpot,
    isConnected: false,
    category: ["All apps", "Service Desk"],
    fields: [
      { label: "API Key", placeholder: "Enter API key", type: "password" },
      { label: "Portal ID", placeholder: "Enter portal ID" },
    ],
  },
  {
    id: "dynamics",
    name: "Microsoft Dynamics 365",
    description: "Bring customer data and case logs into CSAI.",
    icon: imgDynamics,
    isConnected: false,
    category: ["All apps", "Service Desk"],
    fields: [
      { label: "Organization URL", placeholder: "Enter organization URL" },
      { label: "Client ID", placeholder: "Enter client ID" },
      { label: "Client Secret", placeholder: "Enter client secret", type: "password" },
    ],
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Connect support convos to your CRM records.",
    icon: imgSalesforce,
    isConnected: false,
    category: ["All apps", "Service Desk"],
    fields: [
      { label: "Instance URL", placeholder: "Enter instance URL" },
      { label: "Consumer Key", placeholder: "Enter consumer key" },
      { label: "Consumer Secret", placeholder: "Enter consumer secret", type: "password" },
    ],
  },
];

const categories: Category[] = [
  "All apps",
  "Voice",
  "Messaging",
  "Service Desk",
  "Email",
  "AI",
  "Workflow",
  "Calendar",
];

export function Integrations() {
  const [activeCategory, setActiveCategory] = useState<Category>("All apps");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);

  const handleConnect = (integration: Integration) => {
    setSelectedIntegration(integration);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedIntegration(null);
  };

  const handleConnectApp = () => {
    // Handle connection logic here
    console.log("Connecting to:", selectedIntegration?.name);
    handleCloseDrawer();
  };

  const filteredIntegrations =
    activeCategory === "All apps"
      ? integrations
      : integrations.filter((integration) =>
          integration.category.includes(activeCategory)
        );

  return (
    <>
      <div className="flex flex-col gap-6 w-full pt-8 pb-16 px-[30px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#5e6060]"
            style={{
              fontSize: "18px",
              fontWeight: "var(--font-weight-normal)",
              lineHeight: "1.2",
            }}
          >
            Connect your favourite apps to extend functionality
          </p>

          {/* Category Tabs */}
          <div className="bg-[#f2f3f3] flex gap-[2px] items-center p-1 rounded-[400px] w-fit">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-0.5 rounded-[200px] transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-[#e3e3e4] text-[#404141]"
                    : "bg-transparent text-[#a0a3a4] hover:bg-[#e3e3e4]/50"
                }`}
                style={{
                  fontSize: "12px",
                  fontWeight: "var(--font-weight-semibold)",
                  lineHeight: "1.2",
                  letterSpacing: "0.06px",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-3 gap-4">
          {filteredIntegrations.map((integration) => (
            <IntegrationCard
              key={integration.id}
              icon={integration.icon}
              name={integration.name}
              description={integration.description}
              isConnected={integration.isConnected}
              onConnect={() => handleConnect(integration)}
            />
          ))}
        </div>
      </div>

      {/* Connect Drawer */}
      {selectedIntegration && (
        <ConnectDrawer
          isOpen={drawerOpen}
          onClose={handleCloseDrawer}
          appIcon={selectedIntegration.icon}
          appName={selectedIntegration.name}
          appDescription={selectedIntegration.description}
          fields={selectedIntegration.fields}
          onConnect={handleConnectApp}
        />
      )}
    </>
  );
}