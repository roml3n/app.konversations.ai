import React from 'react';

export type ChannelType = 'instagram' | 'whatsapp' | 'messenger' | 'call' | 'email' | 'webchat' | 'jira';

export interface ContactDetails {
  phone?: string;
  email?: string;
  company?: string;
}

export interface AIInsights {
  summary?: string;
  primaryTopic?: string;
  keywords?: string[];
  nextSteps?: string[];
}

export interface Conversation {
  id: string;
  name: string;
  preview: string;
  time: string;
  channel: ChannelType;
  avatarColor: string;
  avatarText: string;
  avatarImage?: string;
  hasMention?: boolean;
  isAssigned?: boolean;
  contactDetails?: ContactDetails;
  aiInsights?: AIInsights;
  status?: 'Escalated' | 'Closed' | 'Open' | 'Pending';
  assignee?: string;
  dateRecorded?: string;
  contactName?: string;
}

export interface Attachment {
  name: string;
  size: string;
  type: 'file';
}

export interface Message {
  id: string;
  type: 'incoming' | 'outgoing' | 'internal' | 'system';
  text?: string;
  html?: string; // For complex formatting if needed
  sender?: {
    name: string;
    avatarColor?: string;
    avatarText?: string;
    isMe?: boolean;
  };
  timestamp?: string;
  channel?: ChannelType; // For "via WhatsApp" etc
  attachments?: Attachment[];
  systemAction?: string; // "labelled this conversation", "changed priority", etc
  systemBadge?: {
    text: string;
    color: string; // simplified for now, or use specific types
    icon?: 'tag' | 'alert' | 'check' | 'user';
  };
}

export interface Agent {
  id: string;
  name: string;
  initials: string;
  color: string;
  avatarUrl?: string;
}

export const agents: Agent[] = [
  { id: '1', name: 'Aggie Kamau', initials: 'A', color: '#bce5f3' },
  { id: '2', name: 'Amanda Wakio', initials: 'A', color: '#b4bbee' },
  { id: '3', name: 'Jacqueline Wandoe', initials: 'J', color: '#80d4eb' },
  { id: '4', name: 'Jane Kamau', initials: 'J', color: '#e29a9a' },
  { id: '5', name: 'Joan Kibe', initials: 'J', color: '#b6b6c3' },
  { id: '6', name: 'Nikki Kimeu', initials: 'N', color: '#e78f8f' },
  { id: '7', name: 'Pauline Nyaboke', initials: 'P', color: '#bce5f3' },
  { id: '8', name: 'Samuel Baya', initials: 'S', color: '#ebdb80' },
  { id: '9', name: 'Wallace Mutuku', initials: 'W', color: '#e78fd4' },
];

export const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Chat with @leeroyjenkins',
    contactName: 'Leeroy Jenkins',
    preview: 'Hi @Support, I have an issue with my internet, it keeps going off...',
    time: 'now',
    channel: 'instagram',
    avatarColor: '#a3b5f0',
    avatarText: '+',
    hasMention: true,
    isAssigned: true,
    status: 'Open',
    assignee: 'Jane Kamau',
    dateRecorded: '1 August, 2025 3:12PM',
    contactDetails: {
      phone: '+254 700 112 233',
      email: 'leeroy@jenkins.com',
      company: 'N/A'
    },
    aiInsights: {
      summary: 'Customer is experiencing intermittent internet connectivity issues. They are frustrated because it interrupts their streaming.',
      primaryTopic: 'Internet Connectivity',
      keywords: ['internet', 'interruption', 'streaming'],
      nextSteps: ['Check signal strength', 'Schedule technician visit']
    }
  },
  {
    id: '2',
    name: 'Issue with my account',
    contactName: 'Saito Watanashi',
    preview: 'Hi there, Acme team! My account freezes everytime I log...',
    time: '20m',
    channel: 'email',
    avatarColor: '#f1b2b2',
    avatarText: 'S',
    isAssigned: true,
    status: 'Escalated',
    assignee: 'Jane Kamau',
    dateRecorded: '1 August, 2025 3:12PM',
    contactDetails: {
      phone: '+254 700 112 233',
      email: 'saitosama@gmail.com',
      company: 'N/A'
    },
    aiInsights: {
      summary: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.',
      primaryTopic: 'Lorem ipsum dolor sit',
      keywords: ['PIN', 'Credit', 'Account'],
      nextSteps: ['step 1', 'step 2', 'step 3']
    }
  },
  {
    id: '3',
    name: 'Cameron Williamson',
    preview: 'Subject: Lorem ipsum Hi, I have an issue with my internet...',
    time: '1d',
    channel: 'messenger',
    avatarColor: '#f0bfa3',
    avatarText: 'W',
    status: 'Pending',
    assignee: 'Jane Kamau',
    dateRecorded: '2 August, 2025 10:00AM',
    contactDetails: {
      email: 'cameron@w.com'
    }
  },
  {
    id: '4',
    name: 'Issue with my account',
    preview: 'Good afternoon! This is Pauline from Acme Support...',
    time: '1d',
    channel: 'call',
    avatarColor: '#c0f0a3',
    avatarText: 'S',
    status: 'Closed'
  },
  {
    id: '5',
    name: 'Internet problems',
    preview: 'Can you help me @Support? I really need this fixed ASAP.',
    time: '1d',
    channel: 'call',
    avatarColor: '#f0efa3',
    avatarText: 'W',
    hasMention: true
  },
  {
    id: '6',
    name: 'support@jsmob.ke',
    preview: 'Refund issued on Purchase #23TY67 for account 223REJ9',
    time: '1mo',
    channel: 'email',
    avatarColor: '#bce5f3',
    avatarText: 'S'
  },
  {
    id: '7',
    name: 'Jira Ticket #123',
    preview: '@Support Please look into this bug report regarding the dashboard.',
    time: '2h',
    channel: 'jira',
    avatarColor: '#87CEEB',
    avatarText: 'J',
    hasMention: true,
    isAssigned: true,
    status: 'Open',
    aiInsights: {
      summary: 'Jira ticket regarding dashboard latency.',
      primaryTopic: 'Bug Report',
      keywords: ['dashboard', 'latency', 'bug'],
      nextSteps: ['Investigate backend logs', 'Optimize queries']
    }
  },
  {
    id: '8',
    name: 'Web Visitor 204',
    preview: 'Hello, is anyone available to chat?',
    time: '5m',
    channel: 'webchat',
    avatarColor: '#98FB98',
    avatarText: 'V'
  }
];

export const conversationMessages: Record<string, Message[]> = {
  '1': [
    {
      id: 'm1-1',
      type: 'incoming',
      sender: { name: 'Leeroy Jenkins', avatarColor: '#a3b5f0', avatarText: '+' },
      channel: 'instagram',
      html: `<p>Hi @Support, I have an issue with my internet, it keeps going off every 5 minutes. It's really annoying because I'm trying to stream.</p>`
    },
    {
      id: 'm1-2',
      type: 'system',
      sender: { name: 'System' },
      systemAction: 'created ticket',
      systemBadge: { text: 'Ticket #90210', color: '#e9ebfa', icon: 'tag' }
    },
    {
      id: 'm1-3',
      type: 'outgoing',
      sender: { name: 'You', isMe: true },
      text: "Hello Leeroy, I'm sorry to hear that. Could you please provide your account number so I can check your connection status?"
    },
    {
      id: 'm1-4',
      type: 'incoming',
      sender: { name: 'Leeroy Jenkins', avatarColor: '#a3b5f0', avatarText: '+' },
      channel: 'instagram',
      text: "Sure, it's ACC-883929."
    },
    {
      id: 'm1-5',
      type: 'internal',
      sender: { name: 'You', isMe: true },
      html: `Checking connectivity for ACC-883929. Looks like a signal drop in the area. @Technician`
    }
  ],
  '2': [
    {
      id: 'm2-1',
      type: 'incoming',
      sender: { name: 'Saito Watanashi', avatarColor: '#f1b2b2', avatarText: 'S' },
      channel: 'whatsapp',
      html: `<p class="mb-4">Hi there, Acme team!<br/><br/>My account freezes everytime I log in, I keep getting some kind of error and the homepage keeps loading indefinitely.</p><p class="mb-4">See the screenshot attached. I hope you can get it fixed soon because I need to make an important business inquiry.</p><p class="mb-4">Please ping me when done.</p><p class="mb-2">Regards,</p><p>Saito</p>`,
      attachments: [
        { name: 'DSC-20240423092342.png', size: '123KB', type: 'file' }
      ]
    },
    {
      id: 'm2-2',
      type: 'outgoing',
      sender: { name: 'You', isMe: true },
      text: "Hey Saito, this is Jane with Acme Support. Kindly allow us some time to look into this matter and we shall get back to you promptly."
    },
    {
      id: 'm2-3',
      type: 'internal',
      sender: { name: 'You', isMe: true },
      html: `Hey <span class="text-[#0320f5]">@Amanda Wakio</span>, could you please sort this out?`
    },
    {
      id: 'm2-4',
      type: 'system',
      sender: { name: 'Jane Muthoni' },
      systemAction: 'labelled this conversation',
      systemBadge: { text: 'account', color: '#fcf6e9', icon: 'tag' }
    },
    {
      id: 'm2-5',
      type: 'system',
      sender: { name: 'Jane Muthoni' },
      systemAction: 'changed priority',
      systemBadge: { text: 'High', color: '#fcf4f2', icon: 'alert' }
    },
    {
      id: 'm2-6',
      type: 'system',
      sender: { name: 'Jane Muthoni' },
      systemAction: 'changed status',
      systemBadge: { text: 'Escalated', color: '#e9ebfa', icon: 'check' }
    },
    {
      id: 'm2-7',
      type: 'system',
      sender: { name: 'System' },
      systemAction: 'added Amanda Wakio to the conversation'
    },
    {
      id: 'm2-8',
      type: 'internal',
      sender: { name: 'Amanda Wakio', avatarColor: '#b4bbee', avatarText: 'A' },
      html: `Sure thing <span class="text-[#0320f5]">@Jane Muthoni</span>, let me look into it`
    },
    {
      id: 'm2-9',
      type: 'outgoing',
      sender: { name: 'Amanda Wakio', avatarColor: '#b4bbee', avatarText: 'A', isMe: false }, // Not me, but an agent
      text: "Hi Saito, Amanda from Technical Support here, the issue seems to stem from an incorrect configuration in your settings. Let me sort it out for you."
    },
    {
      id: 'm2-10',
      type: 'system',
      sender: { name: 'Amanda Wakio' },
      systemAction: 'labelled this conversation',
      systemBadge: { text: 'auth', color: '#e9ebfa', icon: 'tag' }
    },
    {
      id: 'm2-11',
      type: 'incoming',
      sender: { name: 'Saito Watanashi', avatarColor: '#f1b2b2', avatarText: 'S' },
      channel: 'whatsapp',
      text: "Good to hear!"
    }
  ],
  '3': [
    {
      id: 'm3-1',
      type: 'incoming',
      sender: { name: 'Cameron Williamson', avatarColor: '#f0bfa3', avatarText: 'W' },
      channel: 'messenger',
      text: "Subject: Lorem ipsum Hi, I have an issue with my internet. It's been really slow lately."
    },
    {
      id: 'm3-2',
      type: 'outgoing',
      sender: { name: 'You', isMe: true },
      text: "Hi Cameron, thanks for reaching out on Messenger. I can help with that."
    }
  ],
  '7': [
    {
      id: 'm7-1',
      type: 'incoming',
      sender: { name: 'Jira System', avatarColor: '#87CEEB', avatarText: 'J' },
      channel: 'jira',
      text: "Ticket #123 Created: Dashboard loading latency > 5s."
    },
    {
      id: 'm7-2',
      type: 'internal',
      sender: { name: 'You', isMe: true },
      html: `Acknowledging ticket. <span class="text-[#0320f5]">@DevTeam</span> please investigate.`
    }
  ]
};
