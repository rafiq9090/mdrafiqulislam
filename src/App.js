import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Collaborations from './components/Collaborations';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import PortfolioSchema from './components/PortfolioSchema';

function App() {
  // Use PUBLIC_URL so the app works when served from a subpath (GitHub Pages)
  const basename = process.env.PUBLIC_URL || '/';
  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <PortfolioSchema />
        <Header />
        <Hero />
        <About />
        <Collaborations />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
