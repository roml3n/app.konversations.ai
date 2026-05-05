import { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faFilter,
  faCalendar,
  faHashtag,
  faSquarePollHorizontal,
  faFaceSmileBeam,
  faUser,
  faChevronDown,
  faPhone,
  faComment,
  faStar,
  faChartSimple,
  faSpinner,
  faCircleCheck,
  faInbox,
  faExclamationCircle,
  faBox,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Header } from './Header';
import { DataTable, DataTableColumn } from './ui/DataTable';
import { MOCK_CONVERSATIONS, Conversation } from '../lib/mockConversations';

export function Conversations() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedSentiment, setSelectedSentiment] = useState<string>('All');

  // Filter conversations
  const filteredConversations = useMemo(() => {
    return MOCK_CONVERSATIONS.filter(conv => {
      const matchesSearch = conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           conv.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = selectedStatus === 'All' || conv.status === selectedStatus;
      const matchesSentiment = selectedSentiment === 'All' || conv.sentiment === selectedSentiment;
      
      return matchesSearch && matchesStatus && matchesSentiment;
    });
  }, [searchQuery, selectedStatus, selectedSentiment]);

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'WhatsApp':
        return faWhatsapp;
      case 'Call':
        return faPhone;
      case 'Instagram':
        return faInstagram;
      case 'Messenger':
        return faComment;
      case 'Jira':
        return faComment;
      default:
        return faComment;
    }
  };

  const getChannelColor = (channel: string) => {
    switch (channel) {
      case 'WhatsApp':
        return { bg: '#e9f4ec', icon: '#48BB79' };
      case 'Call':
        return { bg: '#e9ebfa', icon: '#5A5ACD' };
      case 'Instagram':
        return { bg: '#fae8e8', icon: '#E53E3E' };
      case 'Messenger':
        return { bg: '#e4e7ff', icon: '#394EF2' };
      case 'Jira':
        return { bg: '#e9ebfa', icon: '#5A5ACD' };
      default:
        return { bg: '#f4f4f6', icon: '#7a7d7d' };
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Inbox':
        return faInbox;
      case 'In Progress':
        return faSpinner;
      case 'Escalated':
        return faExclamationCircle;
      case 'Done':
        return faCircleCheck;
      case 'Archived':
        return faBox;
      default:
        return faInbox;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Inbox':
        return { bg: '#ebf7fb', icon: '#58AEC6' };
      case 'In Progress':
        return { bg: '#fcf6e9', icon: '#CAAC41' };
      case 'Escalated':
        return { bg: '#e9ebfa', icon: '#5A5ACD' };
      case 'Done':
        return { bg: '#e9f4ec', icon: '#45B273' };
      case 'Archived':
        return { bg: '#f4f4f6', icon: '#7a7d7d' };
      default:
        return { bg: '#f4f4f6', icon: '#7a7d7d' };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return { bg: '#f9ebe7', icon: '#DE6B20' };
      case 'Medium':
        return { bg: '#fcf6e9', icon: '#CAAC41' };
      default:
        return { bg: '#f4f4f6', icon: '#7a7d7d' };
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive':
        return faFaceSmileBeam;
      case 'Negative':
        return faFaceSmileBeam;
      case 'Neutral':
        return faFaceSmileBeam;
      default:
        return faFaceSmileBeam;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive':
        return { bg: '#e9f4ec', icon: '#45B273' };
      case 'Negative':
        return { bg: '#fae8e8', icon: '#E53E3E' };
      case 'Neutral':
        return { bg: '#f3f9f5', icon: '#48BB79' };
      default:
        return { bg: '#f4f4f6', icon: '#7a7d7d' };
    }
  };

  const columns: DataTableColumn<Conversation>[] = [
    {
      header: 'Conversation',
      width: '216px',
      sortable: true,
      sortAccessor: 'title',
      render: (row) => (
        <div className="flex flex-col gap-[4px]">
          <p
            className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px] truncate"
            style={{ fontVariationSettings: "'wdth' 100", fontWeight: 600 }}
          >
            {row.title}
          </p>
          <p
            className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px] truncate"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {row.id}
          </p>
        </div>
      ),
    },
    {
      header: 'Channel',
      width: '126.444px',
      sortable: true,
      sortAccessor: 'channel',
      render: (row) => {
        const colors = getChannelColor(row.channel);
        return (
          <div
            className="flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px] w-fit"
            style={{ backgroundColor: colors.bg }}
          >
            <FontAwesomeIcon
              icon={getChannelIcon(row.channel)}
              className="w-[12px] h-[12px]"
              style={{ color: colors.icon }}
            />
            <p
              className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {row.channel}
            </p>
          </div>
        );
      },
    },
    {
      header: 'Agent',
      width: '126.444px',
      sortable: true,
      sortAccessor: 'agentName',
      render: (row) => (
        <div className="bg-[#f4f4f6] flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px] w-fit">
          <div
            className="flex items-center justify-center rounded-full w-[12px] h-[12px]"
            style={{ backgroundColor: row.agentColor }}
          >
            <p
              className="font-['Instrument_Sans'] text-[#1e2939] text-[12px] mix-blend-color-burn"
              style={{ fontVariationSettings: "'wdth' 100", lineHeight: 0 }}
            >
              {row.agentInitial}
            </p>
          </div>
          <p
            className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {row.agentName}
          </p>
        </div>
      ),
    },
    {
      header: 'Date started',
      width: '126.444px',
      sortable: true,
      sortAccessor: (row) => new Date(row.dateStarted).getTime(),
      render: (row) => (
        <div className="flex flex-col gap-[4px]">
          <p
            className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]"
            style={{ fontVariationSettings: "'wdth' 100", fontWeight: 600 }}
          >
            {row.dateStarted}
          </p>
          <p
            className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {row.timeStarted}
          </p>
        </div>
      ),
    },
    {
      header: 'Primary topic',
      width: '126.444px',
      sortable: true,
      sortAccessor: 'primaryTopic',
      render: (row) => (
        <p
          className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {row.primaryTopic}
        </p>
      ),
    },
    {
      header: 'Status',
      width: '126.444px',
      sortable: true,
      sortAccessor: 'status',
      render: (row) => {
        const colors = getStatusColor(row.status);
        return (
          <div
            className="flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px] w-fit"
            style={{ backgroundColor: colors.bg }}
          >
            <FontAwesomeIcon
              icon={getStatusIcon(row.status)}
              className="w-[12px] h-[12px]"
              style={{ color: colors.icon }}
            />
            <p
              className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {row.status}
            </p>
          </div>
        );
      },
    },
    {
      header: 'Priority',
      width: '96px',
      sortable: true,
      sortAccessor: 'priority',
      render: (row) => {
        const colors = getPriorityColor(row.priority);
        return (
          <div
            className="flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px] w-fit"
            style={{ backgroundColor: colors.bg }}
          >
            <FontAwesomeIcon
              icon={faChartSimple}
              className="w-[12px] h-[12px]"
              style={{ color: colors.icon }}
            />
            <p
              className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {row.priority}
            </p>
          </div>
        );
      },
    },
    {
      header: 'CSAT',
      width: '96px',
      sortable: true,
      sortAccessor: 'csat',
      render: (row) => (
        <div className="bg-[#fcf6e9] flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px] w-fit">
          <FontAwesomeIcon icon={faStar} className="w-[12px] h-[12px]" style={{ color: '#E2C148' }} />
          <p
            className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {row.csat}%
          </p>
        </div>
      ),
    },
    {
      header: 'Sentiment',
      width: '96px',
      sortable: true,
      sortAccessor: 'sentiment',
      render: (row) => {
        const colors = getSentimentColor(row.sentiment);
        return (
          <div
            className="flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px] w-fit"
            style={{ backgroundColor: colors.bg }}
          >
            <FontAwesomeIcon
              icon={getSentimentIcon(row.sentiment)}
              className="w-[12px] h-[12px]"
              style={{ color: colors.icon }}
            />
            <p
              className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {row.sentiment}
            </p>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex h-full w-full bg-white overflow-hidden rounded-lg border border-[#e3e3e4]">
      <div className="flex flex-col h-full w-full overflow-hidden">
        {/* Fixed Header */}
        <div className="shrink-0">
          <Header title="Conversations" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex flex-col gap-[24px] px-[30px] py-[24px]">
              {/* Page Title */}
              <div className="flex items-center justify-between">
                <h1
                  className="font-['Instrument_Sans'] text-[#121212] text-[20px]"
                  style={{ fontVariationSettings: "'wdth' 100", fontWeight: 600 }}
                >
                  Conversation Lookup
                </h1>
              </div>

              {/* Filter Bar */}
              <div className="flex items-center gap-[6px]">
                {/* Search Bar */}
                <div
                  className={`bg-[#f1f4f6] flex items-center px-[8px] py-[8px] rounded-[8px] transition-all ${
                    searchExpanded ? 'w-[240px]' : 'w-[32px]'
                  }`}
                  onClick={() => !searchExpanded && setSearchExpanded(true)}
                >
                  <div className="flex gap-[4px] items-center w-full">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="w-[16px] h-[16px] text-[#364153] shrink-0"
                    />
                    {searchExpanded && (
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onBlur={() => !searchQuery && setSearchExpanded(false)}
                        placeholder="Search..."
                        className="bg-transparent outline-none w-full font-['Instrument_Sans'] text-[#364153] text-[12px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        autoFocus
                      />
                    )}
                  </div>
                </div>

                {/* Filter Icon */}
                <div className="bg-[#f1f4f6] flex items-center p-[8px] rounded-[8px]">
                  <FontAwesomeIcon icon={faFilter} className="w-[16px] h-[16px] text-[#6A7282]" />
                </div>

                {/* Date Filter */}
                <div className="bg-white border border-[#d1d5dc] flex gap-[8px] items-center px-[10px] py-[8px] rounded-[8px]">
                  <div className="flex gap-[4px] items-center">
                    <FontAwesomeIcon icon={faCalendar} className="w-[16px] h-[16px] text-[#6A7282] opacity-60" />
                    <p
                      className="font-['Instrument_Sans'] text-[#364153] text-[12px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      18/2/2024 to 30/8/2025
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faChevronDown} className="w-[16px] h-[16px] text-[#99A1AF]" />
                </div>

                {/* Status Filter */}
                <div className="bg-white border border-[#e3e3e4] flex gap-[8px] items-center px-[10px] py-[8px] rounded-[8px]">
                  <div className="flex gap-[4px] items-center opacity-60">
                    <FontAwesomeIcon icon={faHashtag} className="w-[16px] h-[16px] text-[#7A7D7D]" />
                    <p
                      className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Status
                    </p>
                  </div>
                  <p
                    className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {selectedStatus}
                  </p>
                  <FontAwesomeIcon icon={faChevronDown} className="w-[16px] h-[16px] text-[#B1B3B4]" />
                </div>

                {/* Topics Filter */}
                <div className="bg-white border border-[#e3e3e4] flex gap-[8px] items-center px-[10px] py-[8px] rounded-[8px]">
                  <div className="flex gap-[4px] items-center opacity-60">
                    <FontAwesomeIcon icon={faSquarePollHorizontal} className="w-[16px] h-[16px] text-[#7A7D7D]" />
                    <p
                      className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Topics
                    </p>
                  </div>
                  <p
                    className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    All
                  </p>
                  <FontAwesomeIcon icon={faChevronDown} className="w-[16px] h-[16px] text-[#B1B3B4]" />
                </div>

                {/* Sentiment Filter */}
                <div className="bg-white border border-[#e3e3e4] flex gap-[8px] items-center px-[10px] py-[8px] rounded-[8px]">
                  <div className="flex gap-[4px] items-center opacity-60">
                    <FontAwesomeIcon icon={faFaceSmileBeam} className="w-[16px] h-[16px] text-[#7A7D7D]" />
                    <p
                      className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Sentiment
                    </p>
                  </div>
                  <p
                    className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {selectedSentiment}
                  </p>
                  <FontAwesomeIcon icon={faChevronDown} className="w-[16px] h-[16px] text-[#B1B3B4]" />
                </div>

                {/* Agent Filter */}
                <div className="bg-white border border-[#e3e3e4] flex gap-[8px] items-center px-[10px] py-[8px] rounded-[8px]">
                  <div className="flex gap-[4px] items-center opacity-60">
                    <FontAwesomeIcon icon={faUser} className="w-[16px] h-[16px] text-[#7A7D7D]" />
                    <p
                      className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Agent
                    </p>
                  </div>
                  <p
                    className="font-['Instrument_Sans'] text-[#404141] text-[12px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    All
                  </p>
                  <FontAwesomeIcon icon={faChevronDown} className="w-[16px] h-[16px] text-[#B1B3B4]" />
                </div>
              </div>
            </div>

            {/* Table with Pagination */}
            <div className="flex-1 overflow-hidden px-[30px] pb-[24px]">
              <DataTable<Conversation>
                columns={columns}
                data={filteredConversations}
                emptyMessage="No conversations found."
                animateRows={true}
                animationDelay={0}
                noBorders={false}
                pagination={true}
                defaultItemsPerPage={10}
                itemsPerPageOptions={[10, 20, 50, 100]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}