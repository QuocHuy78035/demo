// CounterDisplay.tsx
import { useContext } from "react";
import { CounterContext } from "../context/counter.context";

const CounterDisplay = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("CounterDisplay must be used within a CounterProvider");
  }

  const { count } = context;

  return <h2>Current Count: {count}</h2>;
};

export default CounterDisplay;
