import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faPlus,
  faArrowLeft,
  faPen,
  faTrash,
  faMessage,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import svgPaths from '../imports/svg-y4b1jaey9x';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageDate: Date;
  messages: Message[];
}

interface AskKonversationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

// Helper function to format chat timestamps
function formatChatTimestamp(date: Date): string {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  const formatTime = (d: Date) => {
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes}${ampm}`;
  };
  
  if (messageDate.getTime() === today.getTime()) {
    // Today - just show time
    return formatTime(date);
  } else if (messageDate.getTime() === yesterday.getTime()) {
    // Yesterday - show "Yesterday, time"
    return `Yesterday, ${formatTime(date)}`;
  } else {
    // Older - show "Mon DD, time"
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}, ${formatTime(date)}`;
  }
}

export function AskKonversationsDrawer({
  isOpen,
  onClose,
  initialQuery,
}: AskKonversationsDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState(initialQuery || '');
  const [viewMode, setViewMode] = useState<'list' | 'chat'>('chat');
  
  // Create dates for chats
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(10, 23, 0, 0);
  
  const threeDaysAgo = new Date(now);
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  threeDaysAgo.setHours(14, 45, 0, 0);
  
  const lastWeek = new Date(now);
  lastWeek.setDate(lastWeek.getDate() - 7);
  lastWeek.setHours(9, 12, 0, 0);
  
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      name: '30-day Insight Summary',
      lastMessage: 'Your org handled 311,243 conversations...',
      lastMessageDate: yesterday,
      messages: [
        {
          id: 'm1',
          type: 'user',
          content: 'Can you summarize insights from my org for 30 days before January 12?',
          timestamp: new Date(),
        },
        {
          id: 'm2',
          type: 'ai',
          content:
            'Your org handled 311,243 conversations:\n• 129,489 calls\n• 84,543 messages\n• 68,210 emails\n• 29,001 support tickets\n\nAverage CSAT: 89.3%\nSentiment score: 92.8%\nResolution rate: 99.9%\nAverage handle time: 3.2 min\n\nTop 3 trending topics:\n• Downtime\n• Account reset\n• Product manual',
          timestamp: new Date(),
        },
      ],
    },
    {
      id: '2',
      name: 'Top customer complaints',
      lastMessage: 'The main issues are...',
      lastMessageDate: threeDaysAgo,
      messages: [
        {
          id: 'm3',
          type: 'user',
          content: 'What are customers complaining about most?',
          timestamp: new Date(),
        },
        {
          id: 'm4',
          type: 'ai',
          content:
            'Based on sentiment analysis, the top complaints are:\n1. Long wait times (23% of negative mentions)\n2. Billing issues (18%)\n3. Product bugs (15%)',
          timestamp: new Date(),
        },
      ],
    },
    {
      id: '3',
      name: 'Agent performance review',
      lastMessage: 'Here\'s the breakdown...',
      lastMessageDate: lastWeek,
      messages: [
        {
          id: 'm5',
          type: 'user',
          content: 'How are our agents performing?',
          timestamp: new Date(),
        },
        {
          id: 'm6',
          type: 'ai',
          content:
            'Overall agent performance:\n• Average CSAT: 4.2/5\n• Resolution rate: 94%\n• Average handle time: 4.5 min',
          timestamp: new Date(),
        },
      ],
    },
  ]);
  const [currentChatId, setCurrentChatId] = useState('1');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState('');
  const renameInputRef = useRef<HTMLInputElement>(null);
  const optionsDropdownRef = useRef<HTMLDivElement>(null);

  const currentChat = chats.find((c) => c.id === currentChatId);

  // Handle initial query when drawer opens
  useEffect(() => {
    if (isOpen && initialQuery && typeof initialQuery === 'string' && initialQuery.trim()) {
      // Create a new chat with the initial query
      const newChat: Chat = {
        id: `chat-${Date.now()}`,
        name: initialQuery.substring(0, 50) + (initialQuery.length > 50 ? '...' : ''),
        lastMessage: initialQuery,
        lastMessageDate: new Date(),
        messages: [],
      };

      setChats((prev) => [newChat, ...prev]);
      setCurrentChatId(newChat.id);
      setViewMode('chat');
      setInputValue(initialQuery);
      
      // Automatically send the message after a brief delay
      setTimeout(() => {
        const userMessage: Message = {
          id: `m${Date.now()}`,
          type: 'user',
          content: initialQuery,
          timestamp: new Date(),
        };

        setChats((prev) =>
          prev.map((chat) =>
            chat.id === newChat.id
              ? {
                  ...chat,
                  messages: [userMessage],
                  lastMessage: initialQuery,
                  lastMessageDate: new Date(),
                }
              : chat
          )
        );

        setInputValue('');

        // Simulate AI response
        setTimeout(() => {
          const aiMessage: Message = {
            id: `m${Date.now() + 1}`,
            type: 'ai',
            content: `I've analyzed your request regarding "${initialQuery}". Based on the data available, here's what I found:\n\nThis is a simulated AI response. In production, this would connect to your actual AI service to provide insights based on your conversation data, customer sentiment, agent performance, and other metrics.`,
            timestamp: new Date(),
          };

          setChats((prev) =>
            prev.map((chat) =>
              chat.id === newChat.id
                ? {
                    ...chat,
                    messages: [userMessage, aiMessage],
                    lastMessage: aiMessage.content.substring(0, 50) + '...',
                    lastMessageDate: new Date(),
                  }
                : chat
            )
          );
        }, 1000);
      }, 100);
    }
  }, [isOpen, initialQuery]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (showDeleteDialog) {
          setShowDeleteDialog(false);
        } else if (isRenaming) {
          setIsRenaming(false);
        } else if (showOptionsDropdown) {
          setShowOptionsDropdown(false);
        } else if (viewMode === 'list') {
          setViewMode('chat');
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose, viewMode, showDeleteDialog, isRenaming, showOptionsDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        optionsDropdownRef.current &&
        !optionsDropdownRef.current.contains(e.target as Node)
      ) {
        setShowOptionsDropdown(false);
      }
    };

    if (showOptionsDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showOptionsDropdown]);

  // Auto-focus rename input
  useEffect(() => {
    if (isRenaming && renameInputRef.current) {
      renameInputRef.current.focus();
      renameInputRef.current.select();
    }
  }, [isRenaming]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentChat?.messages]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSend = () => {
    if (!inputValue.trim() || !currentChat) return;

    const userMessage: Message = {
      id: `m${Date.now()}`,
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    // Add user message
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId
          ? {
              ...chat,
              messages: [...chat.messages, userMessage],
              lastMessage: inputValue,
              lastMessageDate: new Date(),
            }
          : chat
      )
    );

    setInputValue('');

    // Simulate AI response after 1 second
    setTimeout(() => {
      const aiMessage: Message = {
        id: `m${Date.now()}`,
        type: 'ai',
        content: `I've analyzed your request regarding "${inputValue}". Based on the data available, here's what I found:\n\nThis is a simulated AI response. In production, this would connect to your actual AI service to provide insights based on your conversation data, customer sentiment, agent performance, and other metrics.`,
        timestamp: new Date(),
      };

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId
            ? {
                ...chat,
                messages: [...chat.messages, aiMessage],
                lastMessage: aiMessage.content.substring(0, 50) + '...',
                lastMessageDate: new Date(),
              }
            : chat
        )
      );
    }, 1000);
  };

  const handleNewChat = () => {
    const newChat: Chat = {
      id: `chat-${Date.now()}`,
      name: 'New Conversation',
      lastMessage: 'Start chatting...',
      lastMessageDate: new Date(),
      messages: [],
    };

    setChats((prev) => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
    setViewMode('chat');
  };

  const handleSelectChat = (chatId: string) => {
    setCurrentChatId(chatId);
    setViewMode('chat');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleRenameClick = () => {
    setShowOptionsDropdown(false);
    setIsRenaming(true);
    setRenameValue(currentChat?.name || '');
  };

  const handleRenameSubmit = () => {
    if (renameValue.trim()) {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId
            ? {
                ...chat,
                name: renameValue.trim(),
              }
            : chat
        )
      );
    }
    setIsRenaming(false);
  };

  const handleRenameKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRenameSubmit();
    }
  };

  const handleDeleteClick = () => {
    setShowOptionsDropdown(false);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    const newChats = chats.filter((chat) => chat.id !== currentChatId);
    setChats(newChats);
    setShowDeleteDialog(false);
    
    // If there are no more chats, create a new one
    if (newChats.length === 0) {
      handleNewChat();
    } else {
      // Switch to the first available chat
      setCurrentChatId(newChats[0].id);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60"
      onClick={handleBackdropClick}
    >
      <div
        ref={drawerRef}
        className="absolute top-[16px] right-[16px] bottom-[16px] w-[600px] bg-white rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden border border-[#e3e3e4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white shrink-0 w-full sticky top-0 border-b border-[#e3e3e4] z-20">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
              {viewMode === 'chat' ? (
                <>
                  {/* Title with dropdown or rename input */}
                  {isRenaming ? (
                    <input
                      ref={renameInputRef}
                      type="text"
                      value={renameValue}
                      onChange={(e) => setRenameValue(e.target.value)}
                      onKeyPress={handleRenameKeyPress}
                      onBlur={handleRenameSubmit}
                      className="flex-1 bg-white border border-[#01f1b6] rounded px-2 py-1 font-['Instrument_Sans'] font-semibold text-[14px] text-[#364153] tracking-[0.07px] outline-none"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  ) : (
                    <button
                      onClick={() => setViewMode('list')}
                      className="content-stretch flex gap-[4px] items-center relative shrink-0 hover:bg-gray-100 px-2 py-1 rounded -ml-2"
                    >
                      <p
                        className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[14px] tracking-[0.07px] whitespace-nowrap"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {currentChat?.name || 'Ask Konversations'}
                      </p>
                      <div className="relative shrink-0 size-[16px]">
                        <div className="absolute inset-0 overflow-clip">
                          <div className="absolute inset-[34.99%_19.99%_30%_19.99%]">
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 9.60375 5.60125"
                            >
                              <path d={svgPaths.p10675c80} fill="#6A7282" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  )}

                  {/* Actions */}
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="relative" ref={optionsDropdownRef}>
                      <button
                        onClick={() => setShowOptionsDropdown(!showOptionsDropdown)}
                        className="relative shrink-0 size-[16px] hover:opacity-70"
                      >
                        <div className="absolute inset-0 overflow-clip">
                          <div className="absolute inset-[41.25%_15%]">
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 11.2 2.8"
                            >
                              <path d={svgPaths.p3c214000} fill="#6A7282" />
                            </svg>
                          </div>
                        </div>
                      </button>

                      {/* Options Dropdown */}
                      {showOptionsDropdown && (
                        <div className="absolute right-0 top-[24px] bg-white border border-[#e3e3e4] rounded-[8px] shadow-lg min-w-[160px] overflow-hidden">
                          <button
                            onClick={handleRenameClick}
                            className="w-full text-left px-4 py-2.5 hover:bg-[#f9f9f9] transition-colors flex items-center gap-3 font-['Instrument_Sans'] text-[14px] text-[#121212]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            <FontAwesomeIcon
                              icon={faPen}
                              className="w-4 h-4 text-[#6A7282]"
                            />
                            Rename chat
                          </button>
                          <button
                            onClick={handleDeleteClick}
                            className="w-full text-left px-4 py-2.5 hover:bg-[#f9f9f9] transition-colors flex items-center gap-3 font-['Instrument_Sans'] text-[14px] text-[#121212]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="w-4 h-4 text-[#6A7282]"
                            />
                            Delete chat
                          </button>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={onClose}
                      className="relative shrink-0 size-[16px] hover:opacity-70"
                    >
                      <div className="absolute inset-0 overflow-clip">
                        <div className="absolute inset-[19.99%_19.91%_19.99%_20.07%]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 9.60375 9.60375"
                          >
                            <path d={svgPaths.p267b3680} fill="#6A7282" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Chat List Header */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('chat')}
                      className="flex items-center justify-center p-1 hover:bg-gray-100 rounded"
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="w-4 h-4 text-[#6A7282]"
                      />
                    </button>
                    <p
                      className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[14px] tracking-[0.07px] whitespace-nowrap"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Recent Chats
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="relative shrink-0 size-[16px] hover:opacity-70"
                  >
                    <div className="absolute inset-0 overflow-clip">
                      <div className="absolute inset-[19.99%_19.91%_19.99%_20.07%]">
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 9.60375 9.60375"
                        >
                          <path d={svgPaths.p267b3680} fill="#6A7282" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {viewMode === 'list' ? (
          /* Chat List View */
          <div className="flex-1 overflow-y-auto bg-white relative">
            <div className="content-stretch flex flex-col gap-[32px] items-start px-[12px] py-[16px] relative w-full">
              {/* New Chat Button */}
              <button
                onClick={handleNewChat}
                className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[88px] shrink-0 border border-[#d1d5dc] hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon icon={faPlus} className="w-[14px] h-[14px] text-[#364153]" />
                <p
                  className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[12px] tracking-[0.06px] whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  New chat
                </p>
              </button>

              {/* Recent Chats Section */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {/* Section Header */}
                <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                  <p
                    className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] tracking-[0.07px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Recent chats
                  </p>
                  <FontAwesomeIcon icon={faChevronDown} className="w-[14px] h-[14px] text-[#6A7282]" />
                </div>

                {/* Chat List */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  {chats.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => handleSelectChat(chat.id)}
                      className={`${
                        chat.id === currentChatId ? 'bg-[#f2f3f3]' : 'bg-white'
                      } relative rounded-[8px] shrink-0 w-full hover:bg-[#f2f3f3] transition-colors`}
                    >
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                        <FontAwesomeIcon icon={faMessage} className="w-[14px] h-[14px] text-[#364153] shrink-0" />
                        <p
                          className="flex-[1_0_0] font-['Instrument_Sans'] font-normal leading-[1.2] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis tracking-[0.07px] whitespace-nowrap text-left"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {chat.name}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute border-[#e3e3e4] border-r border-solid inset-0 pointer-events-none" />
          </div>
        ) : (
          <>
            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto bg-white">
              <div className="px-4 py-4">
                {currentChat?.messages.length === 0 ? (
                  /* Empty State */
                  <div className="flex flex-col items-center justify-center gap-4 py-12">
                    <div className="flex items-center justify-center bg-white rounded-full p-4 w-16 h-16 border border-[#e3e3e4]">
                      <div className="relative shrink-0 size-[20px]">
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 12.8017 12.8"
                        >
                          <defs>
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id="paint0_linear_empty"
                              x1="-7.63795e-08"
                              x2="12.8017"
                              y1="0.645793"
                              y2="12.1542"
                            >
                              <stop stopColor="#01F1B6" />
                              <stop offset="1" stopColor="#0320F5" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center max-w-[400px] text-center">
                      <p className="font-['Instrument_Sans'] font-semibold text-[18px] text-[#121212]">
                        Chat with your data
                      </p>
                      <p className="font-['Instrument_Sans'] font-normal text-[14px] text-[#7a7d7d] leading-relaxed">
                        Ask questions about your conversations, customer
                        sentiment, agent performance, and more. I'll provide
                        insights and answers based on your data.
                      </p>
                    </div>

                    {/* Suggested prompts */}
                    <div className="flex flex-col gap-2 w-full mt-4 max-w-[500px]">
                      <p className="font-['Instrument_Sans'] font-medium text-[12px] text-[#7a7d7d]">
                        Try asking:
                      </p>
                      <button
                        onClick={() =>
                          setInputValue('What are the top issues this week?')
                        }
                        className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 rounded-[8px] transition-colors border border-[#e3e3e4]"
                      >
                        <p className="font-['Instrument_Sans'] font-normal text-[14px] text-[#121212]">
                          What are the top issues this week?
                        </p>
                      </button>
                      <button
                        onClick={() =>
                          setInputValue('How is our sentiment trending?')
                        }
                        className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 rounded-[8px] transition-colors border border-[#e3e3e4]"
                      >
                        <p className="font-['Instrument_Sans'] font-normal text-[14px] text-[#121212]">
                          How is our sentiment trending?
                        </p>
                      </button>
                      <button
                        onClick={() =>
                          setInputValue('Which agents need support?')
                        }
                        className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 rounded-[8px] transition-colors border border-[#e3e3e4]"
                      >
                        <p className="font-['Instrument_Sans'] font-normal text-[14px] text-[#121212]">
                          Which agents need support?
                        </p>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Messages */
                  <div className="flex flex-col gap-4">
                    {currentChat.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex w-full ${
                          message.type === 'user'
                            ? 'justify-end'
                            : 'justify-start'
                        }`}
                      >
                        {message.type === 'user' ? (
                          <div className="bg-[#d6d7ff] max-w-[520px] rounded-[16px] px-[12px] py-[8px]">
                            <p
                              className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#202121] text-[12px] tracking-[0.06px]"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              {message.content}
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-3 w-full max-w-[640px]">
                            <div
                              className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#202121] text-[14px] tracking-[0.07px] whitespace-pre-wrap"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              {message.content}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="px-[8px] pb-[8px] pt-[24px] bg-white sticky bottom-0">
              <div className="bg-[#f3f4f6] rounded-[12px] border border-[#01f1b6]">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[8px] relative w-full">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask anything..."
                      className="flex-1 bg-transparent border-none outline-none font-['Instrument_Sans'] font-normal text-[14px] text-[#121212] placeholder:text-[#a0a3a4] tracking-[0.07px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                    <button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="content-stretch flex gap-[4px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 bg-[#0320f5] hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[15.01%_15%_10.01%_10%]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 12.0006 11.9967"
                          >
                            <path d={svgPaths.p15ed900} fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Delete Confirmation Dialog */}
        {showDeleteDialog && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-[12px] shadow-lg max-w-[400px] w-full mx-4 border border-[#e3e3e4]">
              <div className="p-6">
                <p
                  className="font-['Instrument_Sans'] font-semibold text-[16px] text-[#121212] mb-2"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Delete this chat?
                </p>
                <p
                  className="font-['Instrument_Sans'] font-normal text-[14px] text-[#7a7d7d] leading-relaxed"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Do you want to delete this chat? This action cannot be undone.
                </p>
              </div>
              <div className="flex items-center justify-end gap-3 px-6 pb-6">
                <button
                  onClick={() => setShowDeleteDialog(false)}
                  className="px-4 py-2 font-['Instrument_Sans'] font-medium text-[14px] text-[#364153] hover:bg-[#f9f9f9] rounded-[8px] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  No, cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-[#ff4444] text-white font-['Instrument_Sans'] font-semibold text-[14px] rounded-[8px] hover:bg-[#cc0000] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Yes, delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}