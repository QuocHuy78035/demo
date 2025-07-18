// CounterContext.tsx
import { createContext, useState, type ReactNode } from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  const value: CounterContextType = { count, increment };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
