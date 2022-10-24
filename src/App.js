import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portafolio from './components/portafolio/Portafolio';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Home />
      <About />
      <Services />
      <Resume />
      <Portafolio />
      <Pricing />
      <Blog />
      <Contact />
    </main> 
    </>
  );
}

export default App;
