import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Glow from "./components/Glow";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  // #90E6FF
  return (
    <div className="w-full h-full">
      <Header />
      <Glow className="top-[-80px]" />
      <div className="md:px-8">
        <Homepage />

        <About />
        <Services />
      </div>
    </div>
  );
}

export default App;
