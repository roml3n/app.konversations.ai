export interface Conversation {
  id: string;
  title: string;
  channel: 'WhatsApp' | 'Call' | 'Instagram' | 'Messenger' | 'Jira';
  agentName: string;
  agentInitial: string;
  agentColor: string;
  dateStarted: string;
  timeStarted: string;
  primaryTopic: string;
  status: 'Inbox' | 'In Progress' | 'Escalated' | 'Done' | 'Archived';
  priority: 'High' | 'Medium';
  csat: number;
  sentiment: 'Positive' | 'Negative' | 'Neutral';
}

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'CONV9876-543',
    title: 'Suggestions for New Features',
    channel: 'WhatsApp',
    agentName: 'Jane Kamau',
    agentInitial: 'J',
    agentColor: '#aaacff',
    dateStarted: 'Feb 15 2025',
    timeStarted: '09:45:12',
    primaryTopic: 'OTP',
    status: 'Inbox',
    priority: 'High',
    csat: 93,
    sentiment: 'Positive'
  },
  {
    id: 'CONV3456-789',
    title: 'Feedback on Q1 Performance',
    channel: 'Call',
    agentName: 'Aggie Kamau',
    agentInitial: 'A',
    agentColor: '#bce5f3',
    dateStarted: 'Mar 07 2025',
    timeStarted: '14:22:37',
    primaryTopic: 'Account freeze',
    status: 'In Progress',
    priority: 'High',
    csat: 85,
    sentiment: 'Positive'
  },
  {
    id: 'CONV5678-901',
    title: 'Marketing Strategies for 2025',
    channel: 'Instagram',
    agentName: 'Nikki Kimeu',
    agentInitial: 'N',
    agentColor: '#ffc0cb',
    dateStarted: 'Apr 10 2025',
    timeStarted: '11:15:05',
    primaryTopic: 'PIN reset',
    status: 'Escalated',
    priority: 'Medium',
    csat: 81,
    sentiment: 'Negative'
  },
  {
    id: 'CONV7890-123',
    title: 'Password Reset',
    channel: 'WhatsApp',
    agentName: 'Aggie Kamau',
    agentInitial: 'A',
    agentColor: '#bce5f3',
    dateStarted: 'May 05 2025',
    timeStarted: '16:30:45',
    primaryTopic: 'Transfer',
    status: 'Done',
    priority: 'Medium',
    csat: 95,
    sentiment: 'Neutral'
  },
  {
    id: 'CONV9012-345',
    title: 'Timeline and Responsibilities',
    channel: 'Call',
    agentName: 'Amanda Wakio',
    agentInitial: 'A',
    agentColor: '#bce5f3',
    dateStarted: 'Jun 20 2025',
    timeStarted: '08:12:59',
    primaryTopic: 'Subscription',
    status: 'Inbox',
    priority: 'High',
    csat: 93,
    sentiment: 'Positive'
  },
  {
    id: 'CONV1234-567',
    title: 'Strategies for Issue Resolution',
    channel: 'WhatsApp',
    agentName: 'Jane Kamau',
    agentInitial: 'J',
    agentColor: '#aaacff',
    dateStarted: 'Jul 30 2025',
    timeStarted: '13:55:23',
    primaryTopic: 'Email change',
    status: 'In Progress',
    priority: 'Medium',
    csat: 70,
    sentiment: 'Negative'
  },
  {
    id: 'CONV3456-789',
    title: 'Target Markets for New Products',
    channel: 'WhatsApp',
    agentName: 'Wallace Mutuku',
    agentInitial: 'W',
    agentColor: '#d4a5d4',
    dateStarted: 'Aug 18 2025',
    timeStarted: '10:05:11',
    primaryTopic: 'Support extension',
    status: 'In Progress',
    priority: 'Medium',
    csat: 95,
    sentiment: 'Positive'
  },
  {
    id: 'CONV6078-901',
    title: 'Feedback: User Experience Enhancement',
    channel: 'Jira',
    agentName: 'Samuel Baya',
    agentInitial: 'S',
    agentColor: '#ffeb99',
    dateStarted: 'Sep 25 2025',
    timeStarted: '17:40:33',
    primaryTopic: 'Credits',
    status: 'Done',
    priority: 'Medium',
    csat: 73,
    sentiment: 'Negative'
  },
  {
    id: 'CONV7890-123',
    title: 'Resource Allocation for Customer Care',
    channel: 'Messenger',
    agentName: 'Jane Kamau',
    agentInitial: 'J',
    agentColor: '#aaacff',
    dateStarted: 'Oct 12 2025',
    timeStarted: '15:27:48',
    primaryTopic: 'Cancellation',
    status: 'Escalated',
    priority: 'Medium',
    csat: 98,
    sentiment: 'Positive'
  },
  {
    id: 'CONV9012-345',
    title: 'Improving Team Skills for Customer Success',
    channel: 'Jira',
    agentName: 'Aggie Kamau',
    agentInitial: 'A',
    agentColor: '#bce5f3',
    dateStarted: 'Nov 29 2025',
    timeStarted: '19:00:00',
    primaryTopic: 'Account details',
    status: 'Archived',
    priority: 'High',
    csat: 86,
    sentiment: 'Positive'
  },
  {
    id: 'CONV4567-890',
    title: 'Budget Planning Discussion',
    channel: 'WhatsApp',
    agentName: 'Jane Kamau',
    agentInitial: 'J',
    agentColor: '#aaacff',
    dateStarted: 'Dec 05 2025',
    timeStarted: '10:15:22',
    primaryTopic: 'Balance inquiry',
    status: 'Inbox',
    priority: 'High',
    csat: 91,
    sentiment: 'Positive'
  },
  {
    id: 'CONV8901-234',
    title: 'Product Launch Timeline',
    channel: 'Call',
    agentName: 'Nikki Kimeu',
    agentInitial: 'N',
    agentColor: '#ffc0cb',
    dateStarted: 'Jan 12 2025',
    timeStarted: '14:30:55',
    primaryTopic: 'Transaction issues',
    status: 'In Progress',
    priority: 'Medium',
    csat: 78,
    sentiment: 'Neutral'
  },
];
