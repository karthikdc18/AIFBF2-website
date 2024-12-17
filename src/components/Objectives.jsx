import { useState } from 'react';
import { Briefcase, Users, Bolt, Banknote } from 'lucide-react'; // Import necessary icons
import AnimatedCard from './common/AnimatedCard';
import SectionTitle from './common/SectionTitle';

const sectors = [
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: "Growth",
    description: (
      <div>
        <h3 className="font-semibold text-lg">Empowering Progress, Expanding Opportunities</h3>
        <p>At AIFBF, growth is more than just a goal; it is a commitment to empowering financial borrowers and creating a robust ecosystem that drives India’s economic progress. Our growth-focused initiatives include:</p>
        <ul>
          <li><strong>Strategic Partnerships:</strong> Collaborating with key stakeholders to expand opportunities and build a sustainable financial future.</li>
          <li><strong>Access to Resources:</strong> Offering access to funding, market insights, and expert guidance to help businesses thrive.</li>
          <li><strong>Knowledge Sharing:</strong> Hosting seminars, webinars, and forums where industry leaders and members discuss cutting-edge growth strategies.</li>
          <li><strong>Promoting Innovation:</strong> Supporting technology adoption to boost efficiency and competitiveness.</li>
        </ul>
        <p>Explore how AIFBF fosters sustainable growth by connecting members with resources and opportunities tailored to their success.</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Discover Growth Opportunities</button>
      </div>
    ),
    images: ["growth2.png"] // Replace with actual image paths
  },
  {
    icon: <Users className="h-12 w-12 text-secondary" />,
    title: "Excellence",
    description: (
      <div>
        <h3 className="font-semibold text-lg">Delivering Unmatched Quality and Professionalism</h3>
        <p>Excellence is the cornerstone of AIFBF’s services. We strive to provide unparalleled support to our members by:</p>
        <ul>
          <li><strong>Tailored Solutions:</strong> Crafting customized approaches to address members' unique challenges in legal, financial, and operational spheres.</li>
          <li><strong>Service Evaluation:</strong> Regularly monitoring and improving our offerings to meet evolving needs.</li>
          <li><strong>Training and Development:</strong> Organizing workshops and training programs to enhance professional capabilities.</li>
          <li><strong>Expert Guidance:</strong> Partnering with industry veterans to offer strategic insights and mentorship.</li>
        </ul>
        <p>Learn how AIFBF upholds its commitment to quality, ensuring every member experiences the highest standards of service.</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Elevate Your Excellence</button>
      </div>
    ),
    images: ["Slide1.jpg"] // Replace with actual image paths
  },
  {
    icon: <Bolt className="h-12 w-12 text-primary" />,
    title: "Impact",
    description: (
      <div>
        <h3 className="font-semibold text-lg">Making a Meaningful Difference</h3>
        <p>AIFBF’s impact-driven approach ensures that our initiatives create tangible benefits for members and society. Key elements of our impact strategy include:</p>
        <ul>
          <li><strong>Community Empowerment:</strong> Initiatives to uplift underserved communities through skill development and financial inclusion.</li>
          <li><strong>Inclusive Policies:</strong> Advocating for borrower-friendly policies to address inequalities in the financial ecosystem.</li>
          <li><strong>Financial Literacy:</strong> Launching educational campaigns to empower members with essential knowledge.</li>
          <li><strong>Measurable Outcomes:</strong> Evaluating and showcasing the real-world impact of our programs on society and businesses.</li>
        </ul>
        <p>Find out how AIFBF’s efforts translate into meaningful changes that drive economic and social progress.</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">See Our Impact in Action</button>
      </div>
    ),
    images: ["impact.png", "Slide2.jpg"] // Replace with actual image paths
  },
  {
    icon: <Banknote className="h-12 w-12 text-secondary" />,
    title: "Reputation",
    description: (
      <div>
        <h3 className="font-semibold text-lg">Building Trust Through Transparency and Integrity</h3>
        <p>AIFBF’s reputation is built on a foundation of trust and reliability. We prioritize ethical practices and transparent communication by:</p>
        <ul>
          <li><strong>Ethical Standards:</strong> Upholding the highest ethical benchmarks in every interaction and initiative.</li>
          <li><strong>Transparent Operations:</strong> Ensuring clear and open communication with members and stakeholders.</li>
          <li><strong>Credible Networks:</strong> Partnering with reputable organizations and experts to deliver reliable services.</li>
          <li><strong>Showcasing Success:</strong> Sharing member success stories to highlight the value of our community.</li>
        </ul>
        <p>Discover how AIFBF maintains a trustworthy reputation through its ethical practices and reliable partnerships.</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Discover Our Reputation</button>
      </div>
    ),
    images: ["reputation.png"] // Replace with actual image paths
  },
];

const initiatives = [
  {
    title: "Member Services",
    description: "Legal, financial, and corporate advisory services."
  },
  {
    title: "Community Services",
    description: "Societal development initiatives."
  },
  {
    title: "Public Services",
    description: "Arbitration and reconciliation solutions for trade and business challenges."
  },
  {
    title: "Transformative Education Loan Reform",
    description: "A strategic initiative to overhaul India’s education loan framework, focusing on affordability, accessibility, and inclusivity. This reform seeks to cap interest rates, extend repayment periods, and eliminate collateral requirements, fostering a more educated and skilled workforce."
  },
];

export default function Sectors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);
  const [isInitiativeModalOpen, setIsInitiativeModalOpen] = useState(false);

  const handleOpenModal = (sector) => {
    setSelectedSector(sector);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSector(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  const handleOpenInitiativeModal = () => {
    setIsInitiativeModalOpen(true);
  };

  const handleCloseInitiativeModal = () => {
    setIsInitiativeModalOpen(false);
  };

  return (
    <div id="sectors" className="py-20 bg-gradient-to-bl from-orange-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={<span className="text-orange-400 text-5xl font-bold">Our Objectives</span>}
          subtitle="AIFBF supports various sectors that significantly contribute to India's GDP"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <div className="p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{sector.title}</h3>

                <button
                  onClick={() => handleOpenModal(sector)}
                  className="absolute bottom-4 right-4 px-4 py-2 bg-transparent text-primary border border-primary rounded-lg hover:text-orange-500 hover:bg-transparent transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Learn More about Initiatives Button */}
        <div className="mt-10 text-center">
          <button
            onClick={handleOpenInitiativeModal}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Learn More About Our Initiatives
          </button>
        </div>
      </div>

      {/* Modal for displaying detailed information about Initiatives */}
      {isInitiativeModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 modal-overlay"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-8 rounded-lg max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold mb-4">Our Initiatives</h2>
            <div className="grid grid-cols-1 gap-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">{initiative.title}</h3>
                  <p className="text-gray-700">{initiative.description}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleCloseInitiativeModal}
              className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
