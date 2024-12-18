import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import GradientBg from './common/GradientBg';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Function to open modal with the corresponding content
  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  return (
    <section id="about" className="py-20 relative bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Add the textured background here */}
      <div className="absolute inset-0 bg-textured opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Us Video and Content Section */}
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

          {/* About Us Text Content Section */}
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

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Left side: Vision Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-semibold text-orange-400 mb-3 text-center">
              Our Vision
            </h3>
            <div className="text-center text-gray-600">
              <p>To facilitate economic growth and enhance the financial ecosystem while equipping stakeholders with essential skills for development.</p>
            </div>
          </div>

          {/* Right side: Vision Card (Video only, text removed) */}
          <motion.div
            variants={statsVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="relative bg-opacity-50 rounded-lg shadow-lg transform hover:scale-95 overflow-hidden w-full max-w-md mx-auto" // Reduced size
          >
            <video
              src="stockVideo.mp4" // Make sure to replace with the correct video source
              autoPlay
              muted
              loop
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Reduced opacity */}
            <button
              onClick={() => openModal("vision")}
              className="absolute bottom-4 right-4 px-4 py-2 border border-white text-white bg-transparent rounded-full hover:bg-orange-100"
            >
              Learn About Our Vision
            </button>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Left side: Mission Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-semibold text-orange-400 mb-3 text-center">
              Our Mission
            </h3>
            <div className="text-center text-gray-600">
              <p>To serve as a conduit between the government and beneficiaries, addressing key economic issues, policies, and regulations through collaboration with stakeholders.</p>
            </div>
          </div>

          {/* Right side: Mission Card (Video only, text removed) */}
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
            <button
              onClick={() => openModal("mission")}
              className="absolute bottom-4 right-4 px-4 py-2 border border-white text-white bg-transparent rounded-full hover:bg-orange-100"
            >
              Learn About Our Mission
            </button>
          </motion.div>
        </div>

        {/* Modal for Vision and Mission */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full overflow-y-auto h-auto max-h-[80vh]"> {/* Added height limit and scroll */}
              <h3 className="text-2xl font-semibold text-orange-400 text-center mb-4">
                {modalContent === "vision" ? "Our Vision" : "Our Mission"}
              </h3>
              
              {/* Add separate images for Vision and Mission */}
              <img
                src={modalContent === "vision" ? "vision.jpg" : "mission.jpg"} // Conditionally render the image based on modal content
                alt={modalContent === "vision" ? "Our Vision" : "Our Mission"}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <div className="space-y-4 text-gray-600">
                {modalContent === "vision" ? (
                  <>
                    <h4 className="text-xl font-semibold text-orange-400 mb-2">Facilitating Economic Growth:</h4>
                    <ul className="list-disc pl-6">
                      <li>Investment in Infrastructure: Build and improve physical infrastructure (e.g., roads, energy) to enhance productivity and economic activity.</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-orange-400 mb-2">Enhancing the Financial Ecosystem:</h4>
                    <ul className="list-disc pl-6">
                      <li>Access to Credit: Ensure individuals and businesses have fair access to credit for growth and development.</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-orange-400 mb-2">Equipping Stakeholders:</h4>
                    <ul className="list-disc pl-6">
                      <li>Training and Resources: Provide necessary financial literacy and support programs to stakeholders.</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <h4 className="text-xl font-semibold text-orange-400 mb-2">Addressing Key Economic Issues:</h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Communicate economic challenges such as unemployment or poverty to the government for targeted intervention.</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-orange-400 mb-2">Influencing Policies:</h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Gather beneficiary input to shape policies that reflect the real needs of the community.</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-orange-400 mb-2">Navigating Regulations:</h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Simplify legal language to help beneficiaries understand and comply with government regulations.</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-orange-400 mb-2">Facilitating Collaboration with Stakeholders:</h4>
                    <ul className="list-disc pl-6">
                      <li>Encourage cooperation among the government, private sector, and civil society for effective policy implementation.</li>
                    </ul>
                  </>
                )}
              </div>

              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-orange-400 text-white rounded-full w-full hover:bg-orange-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
