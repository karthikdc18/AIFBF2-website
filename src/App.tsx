import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import About from './components/About';
import Sectors from './components/Sectors';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Vision />
      <About />
      <Sectors />
      <Leadership />
      <Contact />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 AIFBF. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;