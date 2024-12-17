import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import GradientBg from './common/GradientBg';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Add the textured background here */}
      <div className="absolute inset-0 bg-textured opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video and Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg shadow-xl overflow-hidden"
          >
            <video
              src="AboutUs.mp4" // Make sure to update this with the correct path to the video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div> {/* Reduced opacity */}
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold text-orange-400 mb-6 leading-tight text-center">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The <strong className="text-[#ABBA7C]">All India Financial Borrowers Federation (AIFBF)</strong> is a visionary platform dedicated
              to empowering financial borrowers across India. We provide actionable insights and
              lawful solutions to help individuals and businesses thrive without hurdles. Acting as a
              catalyst for economic transformation, AIFBF bridges the gap between policymakers,
              financial institutions, and borrowers.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With a forward-looking and proactive approach, we aim to foster a better financial
              ecosystem for a brighter future.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                variants={statsVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-white bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl font-bold text-orange-400"
                >
                  10K+
                </motion.span>
                <p className="text-gray-600">Borrowers Helped</p>
              </motion.div>
              <motion.div
                variants={statsVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                className="text-center p-6 bg-white bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-4xl font-bold text-[#ABBA7C]"
                >
                  95%
                </motion.span>
                <p className="text-gray-600">Success Rate</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Left side: Vision Heading */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-semibold text-orange-400 mb-3 text-center">
              Our Vision
            </h3>
            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              className="relative bg-opacity-50 rounded-lg shadow-lg transform hover:scale-95 overflow-hidden w-full max-w-md mx-auto" // Reduced size
            >
              <video
                src="stockVideo.mp4" // Use the video as the background
                autoPlay
                muted
                loop
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div> {/* Reduced opacity */}
              {/* Centering the text vertically */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <p className="text-sm font-sm text-center text-opacity-80">To facilitate economic growth and enhance the financial ecosystem while equipping stakeholders with essential skills for development.</p>
              </div>
            </motion.div>
          </div>

          {/* Right side: Mission Heading */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-semibold text-orange-400 mb-3 text-center">
              Our Mission
            </h3>
            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
              className="relative bg-opacity-50 rounded-lg shadow-lg transform hover:scale-95 overflow-hidden w-full max-w-md mx-auto" // Reduced size
            >
              <video
                src="stockVideo3.mp4" // Make sure to replace with the correct video source
                autoPlay
                muted
                loop
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div> {/* Reduced opacity */}
              {/* Centering the text vertically */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <p className="text-sm font-sm text-center text-opacity-80">To serve as a conduit between the government and beneficiaries, addressing key economic issues, policies, and regulations through collaboration with stakeholders.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
