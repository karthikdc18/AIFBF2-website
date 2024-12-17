import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import About from './components/About';
import Sectors from './components/Sectors';
 import Leadership from './components/Leadership';
import Contact from './components/Contact';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import Objectives from './components/Objectives';

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          
          <About />
          <Objectives/>
          <Sectors />
           <Leadership /> 
           <FindUs />
          <Contact />
          <Footer/>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;