import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import GradientBg from './common/GradientBg';

export default function Hero() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isWelcomePopUpOpen, setIsWelcomePopUpOpen] = useState(true);

  // Scroll handler to move down when the arrow is clicked
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8, // Scroll down 80% of the viewport height
      left: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  // Open Pop-up
  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  // Close Pop-up
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  // Close Welcome Pop-up after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcomePopUpOpen(false);
    }, 5000); // Adjusted to 5 seconds for a longer display time
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  // Automatically close Action Pop-up after 5 seconds
  useEffect(() => {
    if (isPopUpOpen) {
      const timer = setTimeout(() => {
        setIsPopUpOpen(false);
      }, 5000); // Pop-up stays open for 5 seconds
      return () => clearTimeout(timer); // Cleanup timeout on unmount or pop-up close
    }
  }, [isPopUpOpen]);

  return (
    <div
      id="home"
      className="h-screen pt-[192px] pb-20 relative"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          objectPosition: 'center center',
        }}
      >
        <source src="stockVideo4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-1"></div>

      <GradientBg className="absolute inset-0 bg-gradient-to-br from-[#2D3748] to-[#1A202C] opacity-70 z-2" />

      {/* Welcome Pop-up */}
      {isWelcomePopUpOpen && (
        <motion.div
          className="absolute top-4 right-4 z-50 bg-[#2D3748] p-6 rounded-xl shadow-lg w-80"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: [0, 10, -10, 0], // Added rotation effect for more animation
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <h2 className="text-xl font-semibold text-center text-[#F6AD55] mb-4">Welcome to Our Site!</h2>
          <p className="text-gray-300 text-center mb-4">
            We're excited to have you here! Discover more about our mission to promote financial inclusivity.
          </p>
          <motion.button
            className="bg-[#F6AD55] text-white px-6 py-2 rounded-md w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={closePopUp}
          >
            Close
          </motion.button>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Advocating for Financial
              <motion.span
                className="text-[#F6AD55] inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                &nbsp;Inclusivity&nbsp;
              </motion.span>
              and&nbsp;
              <motion.span
                className="text-[#ABBA7C] inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                Borrower
              </motion.span>
              Empowerment
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              We're committed to creating a more equitable financial system where everyone has access to fair lending practices and opportunities for financial growth.
            </p>
            <div className="mt-8 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F6AD55] text-white px-6 py-3 rounded-md hover:bg-[#F56565] flex items-center gap-2"
                onClick={openPopUp} // Open the action pop-up when clicked
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#ABBA7C] text-[#ABBA7C] px-6 py-3 rounded-md hover:bg-[#ABBA7C] hover:text-white transition-colors"
                onClick={openPopUp} // Open the action pop-up when clicked
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-lg">
              {/* Image Carousel with fade transition */}
              <div className="carousel-container relative">
                {/* Add image slides here */}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D3748] to-[#1A202C] rounded-lg"></div>
          </motion.div>
        </div>
      </div>

      {/* Animated Decorative Down Arrow */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{
            y: [0, 15, 0], // Bounce animation
            scale: [1, 1.2, 1], // Scale effect for bounce
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <ArrowDown
            className="text-white h-10 w-10 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#F6AD55]"
            onClick={scrollDown} // Scroll when clicked
          />
        </motion.div>
      </div>

      {/* Action Pop-up */}
      {isPopUpOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-[#2D3748] p-8 rounded-lg shadow-lg w-[300px] h-[200px]" // Normal rectangular size
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-center text-[#F6AD55] mb-4">Ready to Get Started?</h3>
            <p className="text-center text-lg text-gray-300 mb-4">
              Take the first step towards a more inclusive financial future by signing up today.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F6AD55] text-white px-6 py-3 rounded-md"
                onClick={closePopUp}
              >
                Sign Up Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#38B2AC] text-[#38B2AC] px-6 py-3 rounded-md"
                onClick={closePopUp}
              >
                Maybe Later
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
