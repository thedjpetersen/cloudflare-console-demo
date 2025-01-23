import * as React from "react";

interface CommandContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
}

const CommandContext = React.createContext<CommandContextType | undefined>(
  undefined
);

interface CommandProviderProps {
  children: React.ReactNode;
}

export function CommandProvider({ children }: CommandProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const value = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      toggle,
    }),
    [isOpen, toggle]
  );

  return React.createElement(CommandContext.Provider, { value }, children);
}

export function useCommand(): CommandContextType {
  const context = React.useContext(CommandContext);
  if (context === undefined) {
    throw new Error("useCommand must be used within a CommandProvider");
  }
  return context;
}
