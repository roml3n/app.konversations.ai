import { ConversationSources } from './ConversationSources';
import { PredictionScores } from './PredictionScores';
import { IssueResolution } from './IssueResolution';
import { ConversationsCount } from './ConversationsCount';
import { ConversationsChart } from './ConversationsChart';
import { SentimentDistribution } from './SentimentDistribution';
import { TopicsTrending } from './TopicsTrending';

export function ExecutiveOverview() {
  return (
    <div className="space-y-4 pb-8">
      {/* Top Row - Sources, Predictions, Resolution */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ConversationSources />
        <PredictionScores />
        <IssueResolution />
      </div>

      {/* Second Row - Conversations count and chart */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ConversationsCount />
        <div className="lg:col-span-2">
          <ConversationsChart />
        </div>
      </div>

      {/* Sentiment Section */}
      <SentimentDistribution />

      {/* Trending Topics */}
      <TopicsTrending />
    </div>
  );
}