// CounterButton.tsx
import { useContext } from "react";
import { CounterContext } from "../context/counter.context";

const CounterButton = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("CounterButton must be used within a CounterProvider");
  }

  const { increment } = context;

  return <button onClick={increment}>Increment</button>;
};

export default CounterButton;
