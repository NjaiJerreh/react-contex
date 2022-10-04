import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { NavLinks } from "./components/NavLinks";
import { UserContex } from "./components/Context/UserContex";
import Flex from "./components/Flex";
import LikeMe from "./components/LikeMe";
function App() {
  return (
    <div className="App">
      <Router>
        <NavLinks />

        <UserContex.Provider value="Hello">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/flex" element={<Flex />} />
            <Route path="/likeme" element={<LikeMe />} />
          </Routes>
        </UserContex.Provider>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
