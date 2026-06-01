import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark-theme" : ""}`}>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>

      <Hero />
      <About />
       <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;