import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useFilters } from '../contexts/FilterContext';
import { useMemo } from 'react';
import { format, startOfDay, endOfDay, eachDayOfInterval, getDay } from 'date-fns';

const svgPaths = {
  p1c08e580: "M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM7.5125 7.5C7.77772 7.5 8.03207 7.60536 8.21961 7.79289C8.40714 7.98043 8.5125 8.23478 8.5125 8.5C8.5125 8.76522 8.40714 9.01957 8.21961 9.20711C8.03207 9.39464 7.77772 9.5 7.5125 9.5C7.24728 9.5 6.99293 9.39464 6.80539 9.20711C6.61786 9.01957 6.5125 8.76522 6.5125 8.5C6.5125 8.23478 6.61786 7.98043 6.80539 7.79289C6.99293 7.60536 7.24728 7.5 7.5125 7.5ZM11.5125 8.5C11.5125 8.23478 11.6179 7.98043 11.8054 7.79289C11.9929 7.60536 12.2473 7.5 12.5125 7.5C12.7777 7.5 13.0321 7.60536 13.2196 7.79289C13.4071 7.98043 13.5125 8.23478 13.5125 8.5C13.5125 8.76522 13.4071 9.01957 13.2196 9.20711C13.0321 9.39464 12.7777 9.5 12.5125 9.5C12.2473 9.5 11.9929 9.39464 11.8054 9.20711C11.6179 9.01957 11.5125 8.76522 11.5125 8.5ZM7.7 13.9531C7.3125 14.1156 6.87187 13.825 7.04062 13.4406C7.54062 12.2969 8.67812 11.5 10.0031 11.5C11.3281 11.5 12.4656 12.3 12.9656 13.4406C13.1344 13.825 12.6937 14.1156 12.3062 13.9531C11.6062 13.6562 10.825 13.4906 10.0031 13.4906C9.18125 13.4906 8.4 13.6562 7.7 13.9531Z",
  pf108f00: "M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM7.12812 12.1719C7.6875 12.8187 8.64375 13.5 10 13.5C11.3562 13.5 12.3125 12.8187 12.8719 12.1719C13.0531 11.9625 13.3687 11.9406 13.5781 12.1219C13.7875 12.3031 13.8094 12.6187 13.6281 12.8281C12.9312 13.6281 11.7219 14.5 10 14.5C8.27812 14.5 7.06875 13.6281 6.37187 12.8281C6.19062 12.6187 6.2125 12.3031 6.42187 12.1219C6.63125 11.9406 6.94687 11.9625 7.12812 12.1719ZM8.8 9.15L8.79375 9.14375C8.7875 9.1375 8.78125 9.12812 8.77187 9.11562C8.75312 9.09062 8.72187 9.05312 8.68437 9.00937C8.60625 8.92187 8.49687 8.80312 8.36562 8.6875C8.09062 8.44375 7.77812 8.25 7.5 8.25C7.22187 8.25 6.90937 8.44375 6.63437 8.6875C6.50312 8.80312 6.39375 8.92187 6.31562 9.00937C6.27812 9.05312 6.24687 9.09062 6.22812 9.11562C6.21875 9.12812 6.20937 9.1375 6.20625 9.14375L6.2 9.15C6.13437 9.2375 6.02187 9.27187 5.92187 9.2375C5.82187 9.20312 5.75 9.10937 5.75 9C5.75 8.44062 5.95937 7.8875 6.26875 7.475C6.575 7.06875 7.01562 6.75 7.5 6.75C7.98437 6.75 8.425 7.06875 8.73125 7.475C9.04062 7.8875 9.25 8.44062 9.25 9C9.25 9.10625 9.18125 9.20312 9.07812 9.2375C8.975 9.27187 8.8625 9.2375 8.8 9.15ZM13.8 9.15L13.7937 9.14375C13.7875 9.1375 13.7812 9.12812 13.7719 9.11562C13.7531 9.09062 13.7219 9.05312 13.6844 9.00937C13.6062 8.92187 13.4969 8.80312 13.3656 8.6875C13.0906 8.44375 12.7781 8.25 12.5 8.25C12.2219 8.25 11.9094 8.44375 11.6344 8.6875C11.5031 8.80312 11.3937 8.92187 11.3156 9.00937C11.2781 9.05312 11.2469 9.09062 11.2281 9.11562C11.2187 9.12812 11.2094 9.1375 11.2062 9.14375L11.2 9.15C11.1344 9.2375 11.0219 9.27187 10.9219 9.2375C10.8219 9.20312 10.75 9.10937 10.75 9C10.75 8.44062 10.9594 7.8875 11.2687 7.475C11.575 7.06875 12.0156 6.75 12.5 6.75C12.9844 6.75 13.425 7.06875 13.7312 7.475C14.0406 7.8875 14.25 8.44062 14.25 9C14.25 9.10625 14.1812 9.20312 14.0781 9.2375C13.975 9.27187 13.8625 9.2375 13.8 9.15Z"
};

function FaceSmileBeam() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.pf108f00} fill="#3DA067" />
      </svg>
    </div>
  );
}

function FaceFrownOpen({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p1c08e580} fill={color} />
      </svg>
    </div>
  );
}

const CHART_COLORS = {
  positive: '#45b273',
  neutral: '#67cce8',
  negative: '#da3b3b'
};

export function SentimentDistribution() {
  const { filteredInsights, dateRange } = useFilters();

  const { weekData, trendData, stats } = useMemo(() => {
    const positiveCount = filteredInsights.filter(i => i.sentiment === 'positive').length;
    const negativeCount = filteredInsights.filter(i => i.sentiment === 'negative').length;
    const total = filteredInsights.length || 1;

    const stats = {
      positivePercent: Math.round((positiveCount / total) * 100),
      negativePercent: Math.round((negativeCount / total) * 100),
      clientSentiment: positiveCount > negativeCount ? "Positive" : negativeCount > positiveCount ? "Negative" : "Neutral",
      // Mock agent sentiment based on client sentiment but slightly better
      agentSentiment: positiveCount >= negativeCount ? "Positive" : "Neutral"
    };

    // Week Data
    const dayMap = new Map<number, { day: string, positive: number, neutral: number, negative: number }>();
    // Initialize days
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach((d, i) => {
        dayMap.set(i, { day: d, positive: 0, neutral: 0, negative: 0 });
    });

    filteredInsights.forEach(insight => {
        const d = new Date(insight.date);
        const dayIndex = getDay(d);
        const entry = dayMap.get(dayIndex)!;
        if (insight.sentiment === 'positive') entry.positive++;
        else if (insight.sentiment === 'neutral') entry.neutral++;
        else entry.negative++;
    });

    const weekData = Array.from(dayMap.values());
    // Shift to start Mon if needed, but Sun-Sat is fine.
    // Let's match the original order Mon-Sat (maybe Sun too).
    const weekDataSorted = [...weekData.slice(1), weekData[0]]; 

    // Trend Data - simplified to use daily counts but normalized? 
    // Or just map daily counts directly for area chart.
    // If date range is small, show days. If large, show something else?
    // Let's stick to daily counts over the selected range.
    
    let trendDays: any[] = [];
    if (dateRange.from && dateRange.to) {
         trendDays = eachDayOfInterval({ start: dateRange.from, end: dateRange.to }).map(day => {
             const dayStart = startOfDay(day);
             const dayEnd = endOfDay(day);
             const daily = filteredInsights.filter(i => {
                 const d = new Date(i.date);
                 return d >= dayStart && d <= dayEnd;
             });
             
             const pos = daily.filter(i => i.sentiment === 'positive').length;
             const neu = daily.filter(i => i.sentiment === 'neutral').length;
             const neg = daily.filter(i => i.sentiment === 'negative').length;
             
             return {
                 day: format(day, 'dd'), // Just date number for compactness
                 positive: pos,
                 neutral: neu,
                 negative: neg
             };
         });
    }

    return { weekData: weekDataSorted, trendData: trendDays, stats };
  }, [filteredInsights, dateRange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col gap-4 rounded-[12px] bg-[#f2f3f3] p-4"
    >
      <h3 className="font-['Instrument_Sans'] text-[13px] font-semibold text-[#5e6060]">
        Sentiment distribution
      </h3>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <SentimentCard
          icon={<FaceSmileBeam />}
          iconBg="bg-[#e9f4ec]"
          value={`${stats.positivePercent}%`}
          label="% positive conversations"
          bottomBorderColor="border-[#45b273]"
        />
        <SentimentCard
          icon={<FaceFrownOpen color="#DA3B3B" />}
          iconBg="bg-[#fae8e8]"
          value={`${stats.negativePercent}%`}
          label="% negative conversations"
          bottomBorderColor="border-[#da3b3b]"
        />
        <SentimentCard
          icon={<FaceFrownOpen color="#45B273" />}
          iconBg="bg-[#e9f4ec]"
          value={stats.clientSentiment}
          label="Average client sentiment"
          bottomBorderColor="border-[#45b273]"
        />
        <SentimentCard
          icon={<FaceFrownOpen color="#62C3DD" />}
          iconBg="bg-[#d5eef7]"
          value={stats.agentSentiment}
          label="Average agent sentiment"
          bottomBorderColor="border-[#62c3dd]"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Sentiment by Day of Week */}
        <div className="rounded-lg border border-[#e3e3e4] bg-[#fefefe] p-4">
          <div className="mb-6 flex flex-col gap-4">
            <h4 className="text-sm text-[#7a7d7d] tracking-[0.07px]">Sentiment by day of week</h4>
            <div className="flex items-center gap-3">
              <LegendItem color={CHART_COLORS.positive} label="Positive" />
              <LegendItem color={CHART_COLORS.neutral} label="Neutral" />
              <LegendItem color={CHART_COLORS.negative} label="Negative" />
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
                <XAxis
                  dataKey="day"
                  stroke="transparent"
                  tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 12 }}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="transparent"
                  tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 12 }}
                  tickLine={false}
                  allowDecimals={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fefefe',
                    border: '1px solid #e3e3e4',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                  cursor={{ fill: 'rgba(0,0,0,0.04)' }}
                />
                <Bar dataKey="positive" stackId="a" fill={CHART_COLORS.positive} barSize={38} />
                <Bar dataKey="neutral" stackId="a" fill={CHART_COLORS.neutral} barSize={38} />
                <Bar dataKey="negative" stackId="a" fill={CHART_COLORS.negative} barSize={38} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sentiment Trend */}
        <div className="rounded-lg border border-[#e3e3e4] bg-[#fefefe] p-4">
          <div className="mb-6 flex flex-col gap-4">
            <h4 className="text-sm text-[#7a7d7d] tracking-[0.07px]">Sentiment trend</h4>
            <div className="flex items-center gap-3">
              <LegendItem color={CHART_COLORS.positive} label="Positive" />
              <LegendItem color={CHART_COLORS.neutral} label="Neutral" />
              <LegendItem color={CHART_COLORS.negative} label="Negative" />
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="positiveArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={CHART_COLORS.positive} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={CHART_COLORS.positive} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="neutralArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={CHART_COLORS.neutral} stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#07DBFA" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="negativeArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={CHART_COLORS.negative} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={CHART_COLORS.negative} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
                <XAxis
                  dataKey="day"
                  stroke="transparent"
                  tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 12 }}
                  tickLine={false}
                  dy={10}
                  interval="preserveStartEnd"
                  minTickGap={20}
                />
                <YAxis
                  stroke="transparent"
                  tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 12 }}
                  tickLine={false}
                  allowDecimals={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fefefe',
                    border: '1px solid #e3e3e4',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="linear"
                  dataKey="positive"
                  stroke={CHART_COLORS.positive}
                  fill="url(#positiveArea)"
                  strokeWidth={2}
                  stackId="1"
                />
                <Area
                  type="linear"
                  dataKey="neutral"
                  stroke={CHART_COLORS.neutral}
                  fill="url(#neutralArea)"
                  strokeWidth={2}
                  stackId="1"
                />
                <Area
                  type="linear"
                  dataKey="negative"
                  stroke={CHART_COLORS.negative}
                  fill="url(#negativeArea)"
                  strokeWidth={2}
                  stackId="1"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[8px] w-[16px] rounded-[2px] opacity-80" style={{ backgroundColor: color }} />
      <span className="text-xs text-[#7a7d7d] tracking-[0.06px]">{label}</span>
    </div>
  );
}

interface SentimentCardProps {
  icon: React.ReactNode;
  iconBg: string;
  value: string;
  label: string;
  bottomBorderColor: string;
}

function SentimentCard({ icon, iconBg, value, label, bottomBorderColor }: SentimentCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[#e3e3e4] bg-[#fefefe]">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2.5">
          <div className={`flex size-10 items-center justify-center rounded-[8px] ${iconBg}`}>
            {icon}
          </div>
          <p className="font-['Instrument_Sans'] text-4xl font-semibold leading-[0.9] tracking-[0.18px] text-[#202121]">
            {value}
          </p>
        </div>
        <p className="text-sm font-normal tracking-[0.07px] text-[#7a7d7d]">
          {label}
        </p>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${bottomBorderColor}`} />
    </div>
  );
}
