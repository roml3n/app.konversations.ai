import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Smile, Frown, Meh } from 'lucide-react';

const weekData = [
  { day: 'Mon', positive: 4, neutral: 3, negative: 3 },
  { day: 'Tue', positive: 3, neutral: 6, negative: 2 },
  { day: 'Wed', positive: 7, neutral: 6, negative: 5 },
  { day: 'Thu', positive: 6, neutral: 6, negative: 3 },
  { day: 'Fri', positive: 8, neutral: 5, negative: 3 },
  { day: 'Sat', positive: 4, neutral: 6, negative: 3 },
];

const trendData = [
  { day: 'Mo', positive: 0.2, neutral: 0.05, negative: 0.0 },
  { day: 'Tu', positive: -0.1, neutral: 0.1, negative: -0.05 },
  { day: 'We', positive: 0.0, neutral: 0.15, negative: -0.1 },
  { day: 'Th', positive: 0.15, neutral: -0.15, negative: -0.15 },
  { day: 'Fr', positive: -0.1, neutral: -0.05, negative: 0.3 },
  { day: 'Sa', positive: 0.1, neutral: 0.2, negative: -0.05 },
  { day: 'Su', positive: 0.35, neutral: 0.3, negative: 0.3 },
];

const legendItems = [
  { label: 'Positive', color: 'var(--chart-3)' },
  { label: 'Neutral', color: 'var(--chart-2)' },
  { label: 'Negative', color: 'var(--destructive)' },
];

export function SentimentDistribution() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="space-y-6"
    >
      <h3 className="text-sm font-semibold text-muted-foreground">
        Sentiment distribution
      </h3>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SentimentCard
          icon={<Smile className="size-5 text-chart-3" />}
          iconBg="bg-chart-3/10"
          value="78%"
          label="% positive conversations"
          borderColor="border-chart-3"
        />
        <SentimentCard
          icon={<Frown className="size-5 text-destructive" />}
          iconBg="bg-destructive/10"
          value="32%"
          label="% negative conversations"
          borderColor="border-destructive"
        />
        <SentimentCard
          icon={<Smile className="size-5 text-chart-3" />}
          iconBg="bg-chart-3/10"
          value="Positive"
          label="Average client sentiment"
          borderColor="border-chart-3"
        />
        <SentimentCard
          icon={<Meh className="size-5 text-chart-2" />}
          iconBg="bg-chart-2/10"
          value="Neutral"
          label="Average agent sentiment"
          borderColor="border-chart-2"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Sentiment by Day of Week */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-6 flex flex-col gap-4">
            <h4 className="text-muted-foreground">Sentiment by day of week</h4>
            <div className="flex items-center gap-4">
              {legendItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="h-[8px] w-[16px] rounded-[2px] opacity-80" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-muted-foreground tracking-[0.06px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} opacity={0.4} />
                <XAxis
                  dataKey="day"
                  stroke="var(--muted-foreground)"
                  tick={{ fill: 'var(--muted-foreground)', fontSize: 12, opacity: 0.5 }}
                  tickLine={false}
                  axisLine={{ stroke: 'var(--border)', opacity: 0.5 }}
                  dy={10}
                />
                <YAxis
                  stroke="var(--muted-foreground)"
                  tick={{ fill: 'var(--muted-foreground)', fontSize: 12, opacity: 0.5 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-card)',
                    fontSize: '12px',
                  }}
                  cursor={{ fill: 'var(--muted)', opacity: 0.2 }}
                />
                <Bar dataKey="positive" stackId="a" fill="var(--chart-3)" radius={[0, 0, 0, 0]} barSize={38} />
                <Bar dataKey="neutral" stackId="a" fill="var(--chart-2)" radius={[0, 0, 0, 0]} barSize={38} />
                <Bar dataKey="negative" stackId="a" fill="var(--destructive)" radius={[4, 4, 0, 0]} barSize={38} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sentiment Trend */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-6 flex flex-col gap-4">
            <h4 className="text-muted-foreground">Sentiment trend</h4>
            <div className="flex items-center gap-4">
              {legendItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="h-[8px] w-[16px] rounded-[2px] opacity-80" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-muted-foreground tracking-[0.06px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="positiveArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--chart-3)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="neutralArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="negativeArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--destructive)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--destructive)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} opacity={0.4} />
                <XAxis
                  dataKey="day"
                  stroke="var(--muted-foreground)"
                  tick={{ fill: 'var(--muted-foreground)', fontSize: 12, opacity: 0.5 }}
                  tickLine={false}
                  axisLine={{ stroke: 'var(--border)', opacity: 0.5 }}
                  dy={10}
                />
                <YAxis
                  stroke="var(--muted-foreground)"
                  tick={{ fill: 'var(--muted-foreground)', fontSize: 12, opacity: 0.5 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-card)',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="linear"
                  dataKey="positive"
                  stroke="var(--chart-3)"
                  fill="url(#positiveArea)"
                  strokeWidth={2}
                />
                <Area
                  type="linear"
                  dataKey="neutral"
                  stroke="var(--chart-2)"
                  fill="url(#neutralArea)"
                  strokeWidth={2}
                />
                <Area
                  type="linear"
                  dataKey="negative"
                  stroke="var(--destructive)"
                  fill="url(#negativeArea)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface SentimentCardProps {
  icon: React.ReactNode;
  iconBg: string;
  value: string;
  label: string;
  borderColor: string;
}

function SentimentCard({ icon, iconBg, value, label, borderColor }: SentimentCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-border bg-card`}>
      <div className="p-4 pb-6">
        <div className="flex items-center gap-3">
          <div className={`flex size-10 items-center justify-center rounded-lg ${iconBg}`}>
            {icon}
          </div>
          <p className="font-['Instrument_Sans'] text-4xl font-semibold leading-[0.9] tracking-[0.18px] text-foreground">
            {value}
          </p>
        </div>
        <p className="mt-4 text-sm font-normal tracking-[0.07px] text-muted-foreground">
          {label}
        </p>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${borderColor}`} />
    </div>
  );
}
