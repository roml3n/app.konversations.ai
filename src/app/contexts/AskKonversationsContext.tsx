import { createContext, useContext, useState, ReactNode } from 'react';

interface AskKonversationsContextType {
  isDrawerOpen: boolean;
  initialQuery: string | undefined;
  openDrawer: (query?: string) => void;
  closeDrawer: () => void;
}

const AskKonversationsContext = createContext<AskKonversationsContextType | undefined>(undefined);

export function AskKonversationsProvider({ children }: { children: ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>(undefined);

  const openDrawer = (query?: string) => {
    setInitialQuery(query);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    // Clear initial query after closing
    setTimeout(() => setInitialQuery(undefined), 300);
  };

  return (
    <AskKonversationsContext.Provider value={{ isDrawerOpen, initialQuery, openDrawer, closeDrawer }}>
      {children}
    </AskKonversationsContext.Provider>
  );
}

export function useAskKonversations() {
  const context = useContext(AskKonversationsContext);
  if (context === undefined) {
    throw new Error('useAskKonversations must be used within an AskKonversationsProvider');
  }
  return context;
}
