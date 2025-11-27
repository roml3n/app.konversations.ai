import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from 'recharts';
import { FaCommentDots, FaEnvelope, FaPhone, FaShareAlt } from 'react-icons/fa';

const qualityData = [
  { channel: 'WhatsApp', quality: 85 },
  { channel: 'Email', quality: 78 },
  { channel: 'Voice', quality: 92 },
  { channel: 'Social', quality: 68 },
  { channel: 'In-app', quality: 88 },
];

const sentimentData = [
  { channel: 'WhatsApp', client: 4.2, agent: 4.5 },
  { channel: 'Email', client: 3.8, agent: 4.1 },
  { channel: 'Voice', client: 4.5, agent: 4.6 },
  { channel: 'Social', client: 3.5, agent: 3.9 },
  { channel: 'In-app', client: 4.0, agent: 4.3 },
];

const bubbleData = [
  { channel: 'WhatsApp', resolution: 90, complexity: 3.5, volume: 45 },
  { channel: 'Email', resolution: 85, complexity: 4.2, volume: 20 },
  { channel: 'Voice', resolution: 92, complexity: 5.0, volume: 18 },
  { channel: 'Social', resolution: 75, complexity: 2.8, volume: 10 },
  { channel: 'In-app', resolution: 88, complexity: 3.2, volume: 7 },
];

const topics = [
  { topic: 'Account Issues', whatsapp: 45, email: 20, voice: 15, social: 12, total: 92 },
  { topic: 'Billing', whatsapp: 38, email: 25, voice: 10, social: 8, total: 81 },
  { topic: 'Technical Support', whatsapp: 52, email: 18, voice: 22, social: 5, total: 97 },
  { topic: 'Features Request', whatsapp: 28, email: 15, voice: 8, social: 18, total: 69 },
  { topic: 'Complaints', whatsapp: 22, email: 12, voice: 18, social: 15, total: 67 },
];

const channelIcons = {
  WhatsApp: FaCommentDots,
  Email: FaEnvelope,
  Voice: FaPhone,
  Social: FaShareAlt,
};

export function ChannelPerformance() {
  return (
    <div className="space-y-6 pb-8">
      {/* Quality by Channel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-6 text-foreground">
          Conversation Quality by Channel
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={qualityData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
              <XAxis type="number" stroke="var(--muted-foreground)" tick={{ fill: 'var(--muted-foreground)' }} tickLine={false} />
              <YAxis dataKey="channel" type="category" stroke="var(--muted-foreground)" tick={{ fill: 'var(--muted-foreground)' }} tickLine={false} width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              />
              <Bar dataKey="quality" fill="var(--primary)" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Sentiment by Channel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-6 text-foreground">
          Sentiment by Channel
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
              <XAxis dataKey="channel" stroke="var(--muted-foreground)" tick={{ fill: 'var(--muted-foreground)' }} tickLine={false} />
              <YAxis stroke="var(--muted-foreground)" tick={{ fill: 'var(--muted-foreground)' }} tickLine={false} domain={[0, 5]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
              />
              <Bar dataKey="client" fill="var(--chart-2)" radius={[4, 4, 0, 0]} name="Client Sentiment" />
              <Bar dataKey="agent" fill="var(--chart-1)" radius={[4, 4, 0, 0]} name="Agent Sentiment" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Resolution vs Complexity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-lg border border-border bg-card p-6"
      >
        <div className="mb-6">
          <h3 className="text-foreground">
            Resolution Rate vs Interaction Complexity
          </h3>
          <p className="mt-1 text-muted-foreground">Bubble size represents conversation volume</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
              <XAxis
                type="number"
                dataKey="complexity"
                name="Complexity"
                stroke="var(--muted-foreground)"
                tick={{ fill: 'var(--muted-foreground)' }}
                tickLine={false}
                label={{ value: 'Interaction Complexity', position: 'insideBottom', offset: -5, fill: 'var(--muted-foreground)' }}
              />
              <YAxis
                type="number"
                dataKey="resolution"
                name="Resolution"
                stroke="var(--muted-foreground)"
                tick={{ fill: 'var(--muted-foreground)' }}
                tickLine={false}
                label={{ value: 'Resolution Rate %', angle: -90, position: 'insideLeft', fill: 'var(--muted-foreground)' }}
              />
              <ZAxis type="number" dataKey="volume" range={[200, 800]} />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                }}
                content={({ payload }) => {
                  if (!payload || !payload[0]) return null;
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-lg border border-border bg-card p-3 shadow-sm">
                      <p className="mb-2 text-foreground">{data.channel}</p>
                      <p className="text-muted-foreground">Resolution: {data.resolution}%</p>
                      <p className="text-muted-foreground">Complexity: {data.complexity}</p>
                      <p className="text-muted-foreground">Volume: {data.volume}%</p>
                    </div>
                  );
                }}
              />
              <Scatter data={bubbleData} fill="var(--chart-1)" fillOpacity={0.6} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Top 10 Topics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-lg border border-border bg-card p-6"
      >
        <h3 className="mb-6 text-foreground">
          Top 10 Conversation Topics by Channel
        </h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-muted-foreground">Topic</th>
                <th className="px-4 py-3 text-center text-muted-foreground">WhatsApp</th>
                <th className="px-4 py-3 text-center text-muted-foreground">Email</th>
                <th className="px-4 py-3 text-center text-muted-foreground">Voice</th>
                <th className="px-4 py-3 text-center text-muted-foreground">Social</th>
                <th className="px-4 py-3 text-center text-muted-foreground">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {topics.map((topic, idx) => (
                <motion.tr
                  key={topic.topic}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="group transition-colors hover:bg-muted"
                >
                  <td className="px-4 py-4 text-foreground">{topic.topic}</td>
                  <td className="px-4 py-4 text-center text-muted-foreground">{topic.whatsapp}</td>
                  <td className="px-4 py-4 text-center text-muted-foreground">{topic.email}</td>
                  <td className="px-4 py-4 text-center text-muted-foreground">{topic.voice}</td>
                  <td className="px-4 py-4 text-center text-muted-foreground">{topic.social}</td>
                  <td className="px-4 py-4 text-center text-foreground">{topic.total}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}