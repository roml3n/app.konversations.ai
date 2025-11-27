import React, { useState } from 'react';
import { InboxSidebar } from './inbox/InboxSidebar';
import { ConversationList } from './inbox/ConversationList';
import { ChatArea } from './inbox/ChatArea';

export function Inbox() {
  // 'messages' (all), 'mentions', 'assigned', or channel IDs ('email', 'whatsapp', etc.)
  const [currentView, setCurrentView] = useState<string>('messages');

  return (
    <div className="flex h-full w-full bg-white overflow-hidden rounded-lg border border-[#e3e3e4]">
      <InboxSidebar 
        activeView={currentView} 
        onViewSelect={setCurrentView} 
      />
      <ConversationList currentView={currentView} />
      <ChatArea />
    </div>
  );
}
