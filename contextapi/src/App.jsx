import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Message from "./Message";

const CountContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);

  return (
    // <CountContext.Provider value={{ count, setCount }}>
    //   {count}
    //   <CounterButton />
    // </CountContext.Provider>
    <Message />
  );
}

const CounterButton = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <Multiply />
    </div>
  );
};

const Multiply = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        Multiple by 2
      </button>
    </div>
  );
};

export default App;
