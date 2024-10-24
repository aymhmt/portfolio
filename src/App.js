import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import Readme from "./pages/Readme.jsx"; 
import About from "./pages/About.jsx"; 
import Projects from "./pages/Projects.jsx"; 
import Stack from "./pages/Stack.jsx"; 
import Footer from "./components/Footer.jsx";
import Tabbar from "./components/Tabbar.jsx";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Tabbar/> 
        <Routes>
          <Route path="/" element={<Readme />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

