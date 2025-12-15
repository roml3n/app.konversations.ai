import { ReactNode } from 'react';
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface BaseChartProps {
  title: string;
  yAxisLabel: string;
  children: ReactNode;
  data: any[];
  xAxisKey: string;
  yAxisDomain?: [number, number];
  yAxisTicks?: number[];
  chartType?: 'area' | 'bar' | 'line';
}

export function BaseChart({
  title,
  yAxisLabel,
  children,
  data,
  xAxisKey,
  yAxisDomain,
  yAxisTicks,
}: BaseChartProps) {
  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-[16px] flex flex-col gap-[24px] h-full">
      <p 
        className="text-[#7a7d7d] text-[14px] tracking-[0.07px] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2]" 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {title}
      </p>
      
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

interface ChartContentProps {
  data: any[];
  xAxisKey: string;
  yAxisLabel: string;
  yAxisDomain?: [number, number];
  yAxisTicks?: number[];
  yAxisWidth?: number;
  children: ReactNode;
}

export function ChartContent({
  data,
  xAxisKey,
  yAxisLabel,
  yAxisDomain,
  yAxisTicks,
  yAxisWidth = 45,
  children,
}: ChartContentProps) {
  return (
    <>
      <CartesianGrid 
        strokeDasharray="0" 
        stroke="#71717A" 
        strokeOpacity={0.1}
        horizontal={true}
        vertical={false}
      />
      <XAxis 
        dataKey={xAxisKey} 
        tick={{ fill: '#030712', fontSize: 12, opacity: 0.5, fontFamily: 'Instrument Sans', angle: 90, textAnchor: 'start' }}
        axisLine={{ stroke: '#71717A', strokeOpacity: 0.2 }}
        tickLine={false}
        height={40}
        dy={8}
      />
      <YAxis 
        domain={yAxisDomain}
        tick={{ fill: '#030712', fontSize: 12, opacity: 0.5, fontFamily: 'Instrument Sans' }}
        axisLine={false}
        tickLine={false}
        ticks={yAxisTicks}
        width={yAxisWidth}
        label={{ 
          value: yAxisLabel, 
          angle: -90, 
          position: 'left',
          offset: 0,
          style: { 
            fill: '#030712', 
            fontSize: 12,
            opacity: 0.8,
            fontFamily: 'Instrument Sans',
            fontWeight: 500,
            textAnchor: 'middle'
          }
        }}
      />
      <Tooltip 
        contentStyle={{ 
          backgroundColor: '#fff',
          border: '1px solid #e3e3e4',
          borderRadius: '8px',
          fontSize: '12px',
          fontFamily: 'Instrument Sans'
        }}
      />
      {children}
    </>
  );
}

interface GradientDefinitionProps {
  id: string;
  color: string;
  opacity?: number;
}

export function GradientDefinition({ id, color, opacity = 0.3 }: GradientDefinitionProps) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity={opacity} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}
