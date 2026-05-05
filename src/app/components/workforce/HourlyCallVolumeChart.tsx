import { AreaChart, Area } from 'recharts';
import { BaseChart, ChartContent, GradientDefinition } from '../charts/BaseChart';

const data = [
  { time: '12am', calls: 5 },
  { time: '1am', calls: 3 },
  { time: '2am', calls: 2 },
  { time: '3am', calls: 4 },
  { time: '4am', calls: 6 },
  { time: '5am', calls: 8 },
  { time: '6am', calls: 15 },
  { time: '7am', calls: 25 },
  { time: '8am', calls: 45 },
  { time: '9am', calls: 75 },
  { time: '10am', calls: 110 },
  { time: '11am', calls: 95 },
  { time: '12pm', calls: 70 },
  { time: '1pm', calls: 85 },
  { time: '2pm', calls: 75 },
  { time: '3pm', calls: 65 },
  { time: '4pm', calls: 55 },
  { time: '5pm', calls: 40 },
  { time: '6pm', calls: 30 },
];

export function HourlyCallVolumeChart() {
  return (
    <BaseChart
      title="Hourly call volume"
      yAxisLabel="Calls"
      data={data}
      xAxisKey="time"
      yAxisDomain={[0, 125]}
      yAxisTicks={[0, 25, 50, 75, 100, 125]}
    >
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 15, bottom: 0 }}>
        <GradientDefinition id="callVolumeGradient" color="#3D8AFF" />
        <ChartContent
          data={data}
          xAxisKey="time"
          yAxisLabel="Calls"
          yAxisDomain={[0, 125]}
          yAxisTicks={[0, 25, 50, 75, 100, 125]}
          yAxisWidth={45}
        >
          <Area 
            type="monotone" 
            dataKey="calls" 
            stroke="#3D8AFF" 
            fill="url(#callVolumeGradient)"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </ChartContent>
      </AreaChart>
    </BaseChart>
  );
}
