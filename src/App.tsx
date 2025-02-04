import "./App.css";
import { motion } from "framer-motion";
import { Contact } from "./components/contact/Contact";
import { Nav } from "./components/nav/Nav";
import { Services } from "./components/services/Services";
import { Footer } from "./components/footer/Footer";
import { About } from "./components/about/About";
import { Location } from "./components/location/Location";

function App() {
  return (
    <>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Nav />
        <About />
        <Services />
        <Location />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
