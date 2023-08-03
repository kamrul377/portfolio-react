import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import SocialLinks from './components/SocialLinks'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

    </div>
  )
}

export default App