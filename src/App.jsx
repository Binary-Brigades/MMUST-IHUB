
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Events from "./components/Events";
import Products from "./components/Products";
import Glowing from "./components/Glowing";

function App() {
  // #90E6FF
  return (
    <div className="w-full h-full">
      <Header />
      <Glowing className="top-[-80px]" />
      <div className="md:px-8">
        <Homepage />

        <About />
        {/* <Services /> */}
        <Products />
        <Events />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
