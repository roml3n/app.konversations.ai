import { subDays, subHours } from 'date-fns';

export interface Agent {
  id: string;
  name: string;
  initial: string;
  color: string;
  avatarUrl?: string;
}

export interface Topic {
  id: string;
  name: string;
}

export interface Insight {
  id: string;
  title: string;
  date: Date;
  agentId: string;
  topicIds: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  score: number;
}

export const MOCK_AGENTS: Agent[] = [
  { 
    id: 'john-makacha', 
    name: 'John Makacha', 
    initial: 'J', 
    color: '#f5e4b5',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100' // Man
  },
  { 
    id: 'sarah-smith', 
    name: 'Sarah Smith', 
    initial: 'S', 
    color: '#ffc8c8',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100' // Woman
  },
  { 
    id: 'mike-johnson', 
    name: 'Mike Johnson', 
    initial: 'M', 
    color: '#c8ffc8',
    // No avatar, use initial
  },
  { 
    id: 'emily-davis', 
    name: 'Emily Davis', 
    initial: 'E', 
    color: '#eec8ff',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100' // Woman
  },
  { 
    id: 'david-wilson', 
    name: 'David Wilson', 
    initial: 'D', 
    color: '#c8e4ff',
    // No avatar
  },
];

export const MOCK_TOPICS: Topic[] = [
  { id: 'pricing', name: 'Pricing Inquiry' },
  { id: 'features', name: 'Product Features' },
  { id: 'bugs', name: 'Bug Report' },
  { id: 'account', name: 'Account Management' },
  { id: 'billing', name: 'Billing Issues' },
  { id: 'onboarding', name: 'Onboarding Support' },
  { id: 'integration', name: 'Integrations' },
  { id: 'security', name: 'Security Compliance' },
];

// Generate some random insights
export const generateMockInsights = (count: number = 50): Insight[] => {
  const insights: Insight[] = [];
  const sentiments: Insight['sentiment'][] = ['positive', 'neutral', 'negative'];

  for (let i = 0; i < count; i++) {
    const agent = MOCK_AGENTS[Math.floor(Math.random() * MOCK_AGENTS.length)];
    const topicCount = Math.floor(Math.random() * 3) + 1;
    const conversationTopics = [];
    for(let j=0; j<topicCount; j++) {
        conversationTopics.push(MOCK_TOPICS[Math.floor(Math.random() * MOCK_TOPICS.length)].id);
    }
    // Deduplicate
    const uniqueTopics = Array.from(new Set(conversationTopics));

    insights.push({
      id: `insight-${i}`,
      title: `Conversation with Customer ${i + 100}`,
      date: subHours(new Date(), Math.floor(Math.random() * 24 * 30)), // Last 30 days
      agentId: agent.id,
      topicIds: uniqueTopics,
      sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      score: Math.floor(Math.random() * 100),
    });
  }
  return insights.sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const MOCK_INSIGHTS = generateMockInsights(100);
