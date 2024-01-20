import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

function App() {
  const [count, setCount] = useState(0);
  // #90E6FF
  return (
    <div className="w-full h-full">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
