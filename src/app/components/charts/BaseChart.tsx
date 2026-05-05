import { ReactNode } from 'react';
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface BaseChartProps {
  title: string;
  yAxisLabel?: string;
  rightYAxisLabel?: string;
  children: ReactNode;
  data: any[];
  xAxisKey: string;
  yAxisDomain?: [number, number];
  yAxisTicks?: number[];
  chartType?: 'area' | 'bar' | 'line';
  customLegend?: ReactNode;
}

export function BaseChart({
  title,
  yAxisLabel,
  rightYAxisLabel,
  children,
  data,
  xAxisKey,
  yAxisDomain,
  yAxisTicks,
  customLegend,
}: BaseChartProps) {
  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-4 flex flex-col gap-6 h-full w-full">
      <p 
        className="text-[#7a7d7d] text-[14px] tracking-[0.07px] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2]" 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {title}
      </p>
      
      {customLegend && customLegend}
      
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

interface ChartContentProps {
  data: any[];
  xAxisKey: string;
  yAxisLabel?: string;
  rightYAxisLabel?: string;
  yAxisDomain?: [number, number];
  yAxisTicks?: number[];
  rightYAxisDomain?: [number, number];
  rightYAxisTicks?: number[];
  yAxisWidth?: number;
  rightYAxisWidth?: number;
  children: ReactNode;
}

export function ChartContent({
  data,
  xAxisKey,
  yAxisLabel,
  rightYAxisLabel,
  yAxisDomain,
  yAxisTicks,
  rightYAxisDomain,
  rightYAxisTicks,
  yAxisWidth = 45,
  rightYAxisWidth = 30,
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
        yAxisId="left"
        domain={yAxisDomain}
        tick={{ fill: '#030712', fontSize: 12, opacity: 0.5, fontFamily: 'Instrument Sans' }}
        axisLine={false}
        tickLine={false}
        ticks={yAxisTicks}
        width={yAxisWidth}
        label={yAxisLabel ? { 
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
        } : undefined}
      />
      {rightYAxisLabel && (
        <YAxis 
          yAxisId="right"
          orientation="right"
          domain={rightYAxisDomain}
          tick={{ fill: '#030712', fontSize: 12, opacity: 0.5, fontFamily: 'Instrument Sans' }}
          axisLine={false}
          tickLine={false}
          ticks={rightYAxisTicks}
          width={rightYAxisWidth}
          label={{ 
            value: rightYAxisLabel, 
            angle: -90, 
            position: 'right',
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
      )}
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