import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import "./App.css";
import Readme from "./components/Readme.jsx"; 
import Changelog from "./components/Changelog.jsx"; 
import Projects from "./components/Projects.jsx"; 
import Stack from "./components/Stack.jsx"; 
import Navbar from "./components/Navbar.jsx"; 
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Readme />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

