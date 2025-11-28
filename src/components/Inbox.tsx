import React, { useState } from 'react';
import { InboxSidebar } from './inbox/InboxSidebar';
import { ConversationList } from './inbox/ConversationList';
import { ChatArea } from './inbox/ChatArea';
import { ContactDetailsDrawer } from './inbox/ContactDetailsDrawer';
import { conversations } from './inbox/data';

export function Inbox() {
  // 'messages' (all), 'mentions', 'assigned', or channel IDs ('email', 'whatsapp', etc.)
  const [currentView, setCurrentView] = useState<string>('messages');
  const [selectedConversationId, setSelectedConversationId] = useState<string>('2'); // Default to the rich conversation
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const selectedConversation = conversations.find(c => c.id === selectedConversationId) || conversations[0];

  return (
    <div className="flex h-full w-full bg-white overflow-hidden rounded-lg border border-[#e3e3e4] relative">
      <InboxSidebar 
        activeView={currentView} 
        onViewSelect={setCurrentView} 
      />
      <ConversationList 
        currentView={currentView} 
        selectedId={selectedConversationId}
        onSelect={setSelectedConversationId}
      />
      <ChatArea 
        conversationId={selectedConversationId} 
        onToggleDetails={() => setIsDetailsOpen(!isDetailsOpen)}
      />
      <ContactDetailsDrawer 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)}
        conversation={selectedConversation}
      />
    </div>
  );
}
