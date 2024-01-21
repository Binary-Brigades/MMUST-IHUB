import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Glow from "./components/Glow";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Events from "./components/Events";
import Products from "./components/Products";

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
        <Products/>
        <Events />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
