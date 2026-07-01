import React from "react"
import './App.css'
import Navigation from "./components/ui/navigation"
import { useFadeInObserver } from "./hooks/useFadeInObserver"
import Hero from "./components/sections/Hero/Hero"
import About from "./components/sections/About/About"
import Music from "./components/sections/Music/Music"
import Tour from "./components/sections/Tour/Tour"
import Videos from "./components/sections/Videos/Videos"
import Merch from "./components/sections/Merch/Merch"
import Contact from "./components/sections/Contact/Contact"

const App: React.FC = () => {
  useFadeInObserver();

  return (
    <div className="app">
      <Navigation/>
      <main>
        <Hero />
        <About />
        <Music />
        <Tour />
        <Videos />
        <Merch />
        <Contact />
      </main>
    </div>
  );
};

export default App