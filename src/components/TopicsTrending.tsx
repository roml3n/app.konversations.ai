import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa';

const topics = [
  { name: 'Topic Name', conversations: 104, resolution: 0.4, prediction: 0.69, handleTime: 42 },
  { name: 'Topic Name', conversations: 82, resolution: 0.4, prediction: 0.69, handleTime: 6 },
  { name: 'Topic Name', conversations: 121, resolution: 0.4, prediction: 0.69, handleTime: 32 },
  { name: 'Topic Name', conversations: 54, resolution: 0.4, prediction: 0.69, handleTime: 12 },
  { name: 'Topic Name', conversations: 42, resolution: 0.4, prediction: 0.69, handleTime: 12 },
];

export function TopicsTrending() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="rounded-lg border border-border bg-card p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-muted-foreground">
          Top trending topics
        </h3>
        <button className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
          <span>1 - 5 of 12</span>
          <FaArrowRight className="h-3 w-3" />
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-3 py-2 text-left text-muted-foreground">Primary topic</th>
              <th className="px-3 py-2 text-left text-muted-foreground">Total conversations</th>
              <th className="px-3 py-2 text-left text-muted-foreground">Resolution rate</th>
              <th className="px-3 py-2 text-left text-muted-foreground">CSAT prediction</th>
              <th className="px-3 py-2 text-left text-muted-foreground">Avg handle time(min)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {topics.map((topic, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.05 }}
                className="group transition-colors hover:bg-muted"
              >
                <td className="px-3 py-3">
                  <span className="text-foreground">{topic.name}</span>
                </td>
                <td className="px-3 py-3 text-muted-foreground">{topic.conversations}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-chart-3"
                        style={{ width: `${topic.resolution * 100}%` }}
                      />
                    </div>
                    <span className="text-muted-foreground">{topic.resolution}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1">
                    <span>⚡</span>
                    <span className="text-muted-foreground">{topic.prediction}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-chart-2"
                      style={{ width: `${(topic.handleTime / 60) * 100}%` }}
                    />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}