import { Target, Users, Shield, TrendingUp, X } from 'lucide-react';
import { useState } from 'react'; // Import useState for managing card states
import AnimatedCard from './common/AnimatedCard'; // Assuming this is the animated card component you're using
import SectionTitle from './common/SectionTitle';
import GradientBg from './common/GradientBg'; // Assuming you have a gradient background component

const visionItems = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Growth",
    description: "Achieve sustainable growth through strategic partnerships.",
    videoUrl: "stockVideo.mp4", // Sample video URL, replace with actual video URL
    details: (
      <div>
        <p>AIFBF prioritizes sustainable growth to strengthen India’s financial ecosystem and its members by:</p>
        <ul className="list-disc pl-5">
          <li>Forging strategic partnerships with government bodies, financial institutions, and industry leaders.</li>
          <li>Organizing knowledge-sharing forums that highlight growth strategies for businesses.</li>
          <li>Providing access to funding opportunities and market insights.</li>
          <li>Promoting innovation and technology adoption for competitive advantage.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: "Excellence",
    description: "Deliver exceptional quality services to our members.",
    videoUrl: "stockVideo3.mp4", // Sample video URL, replace with actual video URL
    details: (
      <div>
        <p>AIFBF is committed to delivering exceptional services that meet the highest standards by:</p>
        <ul className="list-disc pl-5">
          <li>Offering tailored solutions for members’ legal, financial, and operational needs.</li>
          <li>Conducting regular evaluations to ensure service quality and efficiency.</li>
          <li>Hosting training sessions and workshops to enhance professional expertise.</li>
          <li>Collaborating with renowned experts to guide businesses toward excellence.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Shield className="h-8 w-8 text-yellow-500" />,
    title: "Impact",
    description: "Make a significant difference in the business community.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Sample video URL, replace with actual video URL
    details: (
      <div>
        <p>AIFBF aims to make a meaningful difference in the financial ecosystem and broader society by:</p>
        <ul className="list-disc pl-5">
          <li>Supporting initiatives that uplift underserved communities and empower small businesses.</li>
          <li>Advocating for inclusive financial policies that address systemic inequities.</li>
          <li>Launching programs to improve financial literacy and awareness among borrowers.</li>
          <li>Measuring and showcasing the tangible outcomes of its initiatives to stakeholders.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-500" />,
    title: "Reputation",
    description: "Build a trustworthy and reliable federation.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Sample video URL, replace with actual video URL
    details: (
      <div>
        <p>Building trust and reliability is at the heart of AIFBF’s mission. The federation achieves this by:</p>
        <ul className="list-disc pl-5">
          <li>Promoting transparency in all operations and engagements.</li>
          <li>Adhering to the highest ethical standards in policy advocacy and member services.</li>
          <li>Establishing strong networks of credible partners and stakeholders.</li>
          <li>Celebrating success stories to reinforce its reputation as a dependable federation.</li>
        </ul>
      </div>
    ),
  },
];

export default function Vision() {
  const [openCard, setOpenCard] = useState(null); // State to track which card is open

  const handleOpenCard = (index) => {
    setOpenCard(index); // Open the selected card
  };

  const handleCloseCard = () => {
    setOpenCard(null); // Close the expanded card
  };

  return (
    <div id="vision" className="py-20 relative bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Add the textured background here */}
      <div className="absolute inset-0 bg-textured opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <SectionTitle
          title="Our Vision"
          subtitle={
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto text-center">
              To facilitate economic growth and enhance the financial ecosystem while equipping stakeholders with essential skills for development.
            </p>
          }
        />

        <div className="mt-16 space-y-16">
          {/* Objectives Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Objectives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {visionItems.map((item, index) => (
                <AnimatedCard key={index}>
                  <div
                    className="flex flex-col items-center text-center p-6 bg-white/50 backdrop-blur-sm shadow-2xl rounded-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl cursor-pointer"
                    onClick={() => handleOpenCard(index)}
                  >
                    {item.icon}
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                    <button className="mt-4 text-blue-500 hover:text-blue-700">Learn More</button>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Expanded Card */}
      {openCard !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <button
              onClick={handleCloseCard}
              className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <X className="h-5 w-5 text-gray-800" />
            </button>
            {/* Video Embed */}
            <div className="w-full h-64 mb-4">
              <video
                src={visionItems[openCard].videoUrl}
                controls
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">{visionItems[openCard].title}</h4>
            {visionItems[openCard].details}
          </div>
        </div>
      )}
    </div>
  );
}
