import { AreaChart, Area } from 'recharts';
import { BaseChart, ChartContent, GradientDefinition } from '../charts/BaseChart';

const data = [
  { time: '12am', score: 85 },
  { time: '1am', score: 82 },
  { time: '2am', score: 80 },
  { time: '3am', score: 78 },
  { time: '4am', score: 75 },
  { time: '5am', score: 72 },
  { time: '6am', score: 70 },
  { time: '7am', score: 68 },
  { time: '8am', score: 72 },
  { time: '9am', score: 78 },
  { time: '10am', score: 82 },
  { time: '11am', score: 85 },
  { time: '12pm', score: 83 },
  { time: '1pm', score: 80 },
  { time: '2pm', score: 82 },
  { time: '3pm', score: 86 },
  { time: '4pm', score: 84 },
  { time: '5pm', score: 82 },
  { time: '6pm', score: 80 },
];

export function QualityScoreTrendChart() {
  return (
    <BaseChart
      title="Quality score trend"
      yAxisLabel="Quality score"
      data={data}
      xAxisKey="time"
      yAxisDomain={[0, 100]}
      yAxisTicks={[0, 20, 40, 60, 80, 100]}
    >
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 15, bottom: 0 }}>
        <GradientDefinition id="qualityScoreGradient" color="#45b273" />
        <ChartContent
          data={data}
          xAxisKey="time"
          yAxisLabel="Quality score"
          yAxisDomain={[0, 100]}
          yAxisTicks={[0, 20, 40, 60, 80, 100]}
          yAxisWidth={75}
        >
          <Area 
            type="monotone" 
            dataKey="score" 
            stroke="#45b273" 
            fill="url(#qualityScoreGradient)"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </ChartContent>
      </AreaChart>
    </BaseChart>
  );
}
