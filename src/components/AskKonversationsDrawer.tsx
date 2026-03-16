import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faChevronDown,
  faMessage,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import svgPaths from '../imports/svg-m11qckudhc';
import { Drawer, DrawerHeader, DrawerContent, DrawerFooter } from './inbox/Drawer';

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
  timestamp: string;
  messages: Message[];
}

interface AskKonversationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AskKonversationsIcon = () => (
  <div className="relative shrink-0 size-[20px]">
    <div className="-translate-x-1/2 absolute aspect-[14.00075912475586/13.998863220214844] bottom-[10%] left-1/2 top-[10%]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12.8017 12.8"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p6393c00}
          fill="url(#paint0_linear_ask_icon)"
          fillOpacity="0.6"
          fillRule="evenodd"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_ask_icon"
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
);

export function AskKonversationsDrawer({
  isOpen,
  onClose,
}: AskKonversationsDrawerProps) {
  const [inputValue, setInputValue] = useState('');
  const [showChatList, setShowChatList] = useState(false);
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      name: '30-day Insight Summary',
      lastMessage: 'Your org handled 311,243 conversations...',
      timestamp: 'Just now',
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
  ]);
  const [currentChatId, setCurrentChatId] = useState('1');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentChat = chats.find((c) => c.id === currentChatId);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (showChatList) {
          setShowChatList(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose, showChatList]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentChat?.messages]);

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
      timestamp: 'Just now',
      messages: [],
    };

    setChats((prev) => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
    setShowChatList(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} width="600px">
      <DrawerHeader
        title={currentChat?.name || 'Ask Konversations'}
        onClose={onClose}
        icon={
          <button
            onClick={() => setShowChatList(!showChatList)}
            className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded -ml-2"
          >
            <AskKonversationsIcon />
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`w-3 h-3 text-[#7a7d7d] transition-transform ${
                showChatList ? 'rotate-180' : ''
              }`}
            />
          </button>
        }
      />

      {/* Chat List Dropdown */}
      {showChatList && (
        <div className="border-b border-[#e3e3e4] bg-[#f9f9f9] max-h-[300px] overflow-y-auto">
          <div className="p-4 flex flex-col gap-3">
            <button
              onClick={handleNewChat}
              className="w-full flex items-center gap-3 px-4 py-2 bg-[#0320f5] text-white rounded-[4px] hover:bg-blue-700 transition-colors font-['Instrument_Sans'] font-semibold text-[14px] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]"
            >
              <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
              New Conversation
            </button>

            <div className="flex flex-col gap-1">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => {
                    setCurrentChatId(chat.id);
                    setShowChatList(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors ${
                    chat.id === currentChatId
                      ? 'bg-white border border-[#e3e3e4]'
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="w-3 h-3 text-[#7a7d7d] mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-['Instrument_Sans'] font-semibold text-[12px] text-[#121212] truncate">
                        {chat.name}
                      </p>
                      <p className="font-['Instrument_Sans'] font-normal text-[12px] text-[#7a7d7d] truncate">
                        {chat.lastMessage}
                      </p>
                      <p className="font-['Instrument_Sans'] font-normal text-[11px] text-[#7a7d7d] mt-0.5">
                        {chat.timestamp}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto bg-[#f9f9f9]">
        <div className="p-4">
          {currentChat?.messages.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center gap-4 py-12">
              <div className="flex items-center justify-center bg-white rounded-full p-4 w-16 h-16 border border-[#e3e3e4]">
                <AskKonversationsIcon />
              </div>

              <div className="flex flex-col gap-2 items-center max-w-[400px] text-center">
                <p className="font-['Instrument_Sans'] font-semibold text-[18px] text-[#121212]">
                  Chat with your data
                </p>
                <p className="font-['Instrument_Sans'] font-normal text-[14px] text-[#7a7d7d] leading-relaxed">
                  Ask questions about your conversations, customer sentiment,
                  agent performance, and more. I'll provide insights and answers
                  based on your data.
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
                  onClick={() => setInputValue('Which agents need support?')}
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
            <div className="space-y-4">
              {currentChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.type === 'ai' && (
                    <div className="flex items-center justify-center bg-white rounded-full p-1.5 w-7 h-7 shrink-0 border border-[#e3e3e4]">
                      <div className="relative shrink-0 size-[14px]">
                        <div className="-translate-x-1/2 absolute aspect-[14.00075912475586/13.998863220214844] bottom-[10%] left-1/2 top-[10%]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 12.8017 12.8"
                          >
                            <path
                              clipRule="evenodd"
                              d={svgPaths.p6393c00}
                              fill="url(#paint0_linear_ai_msg)"
                              fillOpacity="0.6"
                              fillRule="evenodd"
                            />
                            <defs>
                              <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_ai_msg"
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
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-[8px] ${
                      message.type === 'user'
                        ? 'bg-[#0320f5] text-white'
                        : 'bg-white border border-[#e3e3e4]'
                    }`}
                  >
                    <p
                      className={`font-['Instrument_Sans'] font-normal text-[14px] leading-relaxed whitespace-pre-wrap ${
                        message.type === 'user'
                          ? 'text-white'
                          : 'text-[#121212]'
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                  {message.type === 'user' && (
                    <div className="flex items-center justify-center bg-[#e3e3e4] rounded-full w-7 h-7 shrink-0">
                      <span className="font-['Instrument_Sans'] font-semibold text-[12px] text-[#121212]">
                        U
                      </span>
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
      <div className="border-t border-[#e3e3e4] bg-white">
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything..."
                className="w-full min-h-[44px] max-h-[120px] px-3 py-2 bg-[#f2f3f3] border border-[#e3e3e4] rounded-[8px] resize-none font-['Instrument_Sans'] font-normal text-[14px] text-[#121212] placeholder:text-[#7a7d7d] focus:outline-none focus:ring-2 focus:ring-[#0320f5]"
                rows={1}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="flex items-center justify-center w-11 h-11 bg-[#0320f5] hover:bg-blue-700 text-white rounded-[4px] transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
            </button>
          </div>
          <p className="font-['Instrument_Sans'] font-normal text-[11px] text-[#7a7d7d]">
            Press Enter to send • Shift+Enter for new line
          </p>
        </div>
      </div>
    </Drawer>
  );
}
