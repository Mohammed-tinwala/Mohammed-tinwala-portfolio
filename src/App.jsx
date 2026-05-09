import React from 'react'
import { Toaster } from "react-hot-toast";

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black">

      {/* Toast Container */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,

          style: {
            background: "#111111",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "16px",
            borderRadius: "12px",
          },

          success: {
            iconTheme: {
              primary: "#A8FF8D",
              secondary: "#000",
            },
          },

          error: {
            iconTheme: {
              primary: "#ff4b4b",
              secondary: "#000",
            },
          },
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App