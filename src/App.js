import React from 'react';
import './App.css';
import Intro from './Components/Intro';
import Links from './Components/Links';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Stack from './Components/Stack';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="box">
      <Intro />
      <Links />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
