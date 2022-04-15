import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import DropDown from "./Components/DropDown";
import Home from "./Components/Home";
import MegaMenu from "./Components/MegaMenu";

import ResponsiveAppBar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio";
import Servises from "./Components/Servises";
function App() {
  return (
    
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Servises" element={<Servises />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="MegaMenu" element={<MegaMenu />} />
        <Route path="DropDown" element={<DropDown />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
      
  );
}

export default App;












