import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationContextType {
  canGoBack: boolean;
  canGoForward: boolean;
  goBack: () => void;
  goForward: () => void;
}

const NavigationContext = createContext<NavigationContextType>({
  canGoBack: false,
  canGoForward: false,
  goBack: () => {},
  goForward: () => {},
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [historyStack, setHistoryStack] = useState<string[]>([
    location.pathname + location.search,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    // Check if this is a navigation we've already seen
    const existingIndex = historyStack.indexOf(currentPath);

    // If we navigated to a page in our history (back/forward)
    if (existingIndex !== -1 && existingIndex !== currentIndex) {
      setCurrentIndex(existingIndex);
    }
    // If this is a new page navigation
    else if (currentPath !== historyStack[currentIndex]) {
      // Remove any forward history and add new page
      const newStack = historyStack.slice(0, currentIndex + 1);
      newStack.push(currentPath);
      setHistoryStack(newStack);
      setCurrentIndex(newStack.length - 1);
    }
  }, [location]);

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < historyStack.length - 1;

  const goBack = () => {
    if (canGoBack) {
      navigate(-1);
    }
  };

  const goForward = () => {
    if (canGoForward) {
      navigate(1);
    }
  };

  return (
    <NavigationContext.Provider
      value={{ canGoBack, canGoForward, goBack, goForward }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}