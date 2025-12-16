import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { InboxSidebar } from './inbox/InboxSidebar';
import { ConversationList } from './inbox/ConversationList';
import { ChatArea } from './inbox/ChatArea';
import { ContactDetailsDrawer } from './inbox/ContactDetailsDrawer';
import { conversations } from './inbox/data';
import { AssignedToMeView } from './inbox/AssignedToMeView';

export function Inbox() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const viewParam = searchParams.get('view') || 'messages';
  
  // 'dashboard' or 'conversation'
  const [viewMode, setViewMode] = useState<'dashboard' | 'conversation'>(
    viewParam === 'assigned' ? 'dashboard' : 'conversation'
  );
  // 'messages' (all), 'mentions', 'assigned', or channel IDs ('email', 'whatsapp', etc.)
  const [currentView, setCurrentView] = useState<string>(viewParam);
  const [selectedConversationId, setSelectedConversationId] = useState<string>('2'); // Default to the rich conversation
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Update view mode when URL changes
  useEffect(() => {
    const view = searchParams.get('view') || 'messages';
    setCurrentView(view);
    setViewMode(view === 'assigned' ? 'dashboard' : 'conversation');
  }, [location.search]);

  const handleViewSelect = (view: string) => {
    navigate(`/inbox?view=${view}`);
  };

  const selectedConversation = conversations.find(c => c.id === selectedConversationId) || conversations[0];

  return (
    <div className="flex h-full w-full bg-white overflow-hidden rounded-lg border border-[#e3e3e4] relative">
      <InboxSidebar 
        activeView={currentView} 
        onViewSelect={handleViewSelect}
      />
      
      {viewMode === 'dashboard' ? (
        <div className="flex-1 overflow-hidden">
          <AssignedToMeView 
            onNavigateToConversation={() => {
              navigate('/inbox?view=assigned');
            }} 
          />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}