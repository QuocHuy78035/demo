import "./App.css";
import { CounterProvider } from "./context/counter.context";
import CounterDisplay from "./components/counter";
import CounterButton from "./components/CounterButton";

function App() {
  return (
    <>
      <CounterProvider>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <CounterDisplay />
          <CounterButton />
        </div>
      </CounterProvider>
    </>
  );
}

export default App;
