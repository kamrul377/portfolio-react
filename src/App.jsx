import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import SocialLinks from './components/SocialLinks'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Contact />

    </div>
  )
}

export default App