import React, { useState } from 'react';
import { InboxSidebar } from './inbox/InboxSidebar';
import { ConversationList } from './inbox/ConversationList';
import { ChatArea } from './inbox/ChatArea';

export function Inbox() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);

  return (
    <div className="flex h-full w-full bg-white overflow-hidden rounded-lg border border-[#e3e3e4]">
      <InboxSidebar 
        activeChannel={selectedChannel} 
        onChannelSelect={setSelectedChannel} 
      />
      <ConversationList filter={selectedChannel} />
      <ChatArea />
    </div>
  );
}
