import { ReactNode, useState, useContext, createContext } from "react";

interface TopBarProps {
  messageObject: { text: string; status: string } | null;
  barVisibility: boolean;
  show: (message: string, status: string) => void;
  hide: () => void;
}

const TopBarContext = createContext<TopBarProps | undefined>(undefined);

export const TopBarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [barVisibility, setBarVisibility] = useState<boolean>(false);
  const [messageObject, setMessageObject] = useState<{ text: string; status: string } | null>(null);

  const hide = () => {
    setBarVisibility(false);
  };

  const show = (message: string, status: string) => {
    setBarVisibility(true);
    setMessageObject({
      text: message,
      status: status,
    });
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TopBarContext.Provider value={{ messageObject, barVisibility, show, hide }}>
      {children}
    </TopBarContext.Provider>
  );
};

export const useTopBar = () => {
  const ctx = useContext(TopBarContext);
  if (!ctx) {
    throw new Error("useTopBar must be used within a TopBarProvider");
  }
  return ctx;
};

export default { TopBarProvider, useTopBar };
