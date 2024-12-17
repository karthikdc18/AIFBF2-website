import { useState } from 'react';
import { Briefcase, Users, Bolt, Banknote, ArrowRightCircle, Store, Leaf, GraduationCap, Tv, Rocket, Globe } from 'lucide-react'; // Import necessary icons
import AnimatedCard from './common/AnimatedCard';
import SectionTitle from './common/SectionTitle';

const sectors = [
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: "MSME / SME",
    description: (
      <div>
        <p>Micro, Small, and Medium Enterprises (MSME) and Small and Medium Enterprises (SME) are the backbone of India’s economy. AIFBF supports these enterprises by:</p>
        <ul>
          <li>Facilitating access to financial resources, including loans and subsidies.</li>
          <li>Providing workshops on compliance, marketing strategies, and digital transformation.</li>
          <li>Advocating for policies that ease regulatory burdens and enhance market opportunities.</li>
          <li>Collaborating with industry associations to drive innovation and sustainable growth.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Users className="h-12 w-12 text-secondary" />,
    title: "Skill and Women Empowerment",
    description: (
      <div>
        <p>AIFBF emphasizes skill development and women empowerment to ensure inclusive growth:</p>
        <ul>
          <li>Organizing skill-building programs to bridge the employment gap.</li>
          <li>Promoting entrepreneurship among women through financial and advisory support.</li>
          <li>Partnering with NGOs and government initiatives to create safe work environments and equal opportunities.</li>
          <li>Launching mentorship programs to encourage women-led enterprises.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Bolt className="h-12 w-12 text-primary" />,
    title: "Clean Energy and Climate Change",
    description: (
      <div>
        <p>In response to global environmental challenges, AIFBF actively:</p>
        <ul>
          <li>Advocates for renewable energy adoption and sustainable practices.</li>
          <li>Provides funding avenues for clean energy startups.</li>
          <li>Partners with stakeholders to reduce carbon footprints in industries.</li>
          <li>Conducts awareness campaigns and workshops on climate resilience.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Banknote className="h-12 w-12 text-secondary" />,
    title: "Banking and Capital Markets",
    description: (
      <div>
        <p>AIFBF strengthens the banking and capital markets sector by:</p>
        <ul>
          <li>Promoting ethical and transparent practices in financial transactions.</li>
          <li>Providing education on investment opportunities and risk management.</li>
          <li>Supporting the adoption of cutting-edge financial technologies (Fintech).</li>
          <li>Collaborating with financial institutions to develop borrower-friendly policies.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <ArrowRightCircle className="h-12 w-12 text-primary" />,
    title: "Corporate Governance, CSR, and Laws",
    description: (
      <div>
        <p>AIFBF is committed to promoting sound corporate governance and adherence to legal frameworks:</p>
        <ul>
          <li>Conducting training sessions on corporate social responsibility (CSR) compliance.</li>
          <li>Offering advisory services on regulatory and legal challenges.</li>
          <li>Encouraging ethical business practices to enhance brand reputation.</li>
          <li>Facilitating dialogue between corporations and regulators for policy alignment.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Store className="h-12 w-12 text-secondary" />,
    title: "Fintech and Banking",
    description: (
      <div>
        <p>AIFBF drives innovation in the Fintech and Banking sectors by:</p>
        <ul>
          <li>Supporting the integration of AI and blockchain technologies.</li>
          <li>Promoting digital lending platforms to enhance financial inclusion.</li>
          <li>Facilitating partnerships between traditional banks and Fintech startups.</li>
          <li>Educating borrowers on secure and efficient digital banking practices.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: "Food Processing and Agriculture",
    description: (
      <div>
        <p>AIFBF focuses on modernizing agriculture and food processing industries:</p>
        <ul>
          <li>Providing support for mechanization and value-added food production.</li>
          <li>Facilitating credit for small-scale farmers and agribusinesses.</li>
          <li>Advocating for policies that promote sustainability in agriculture.</li>
          <li>Organizing knowledge-sharing workshops on global agricultural trends.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-secondary" />,
    title: "HR and Education",
    description: (
      <div>
        <p>In the HR and Education sector, AIFBF prioritizes:</p>
        <ul>
          <li>Addressing the skills gap by organizing upskilling programs.</li>
          <li>Supporting education loan reforms to make higher education more accessible.</li>
          <li>Partnering with institutions to improve employability among graduates.</li>
          <li>Encouraging innovation in vocational and technical education.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Tv className="h-12 w-12 text-primary" />,
    title: "Media and Entertainment",
    description: (
      <div>
        <p>AIFBF supports creative industries by:</p>
        <ul>
          <li>Facilitating funding and resources for media startups.</li>
          <li>Advocating for policies that protect intellectual property rights.</li>
          <li>Encouraging investments in regional and niche entertainment markets.</li>
          <li>Promoting ethical and responsible media practices.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Rocket className="h-12 w-12 text-secondary" />,
    title: "Startups",
    description: (
      <div>
        <p>AIFBF is a catalyst for India’s burgeoning startup ecosystem:</p>
        <ul>
          <li>Providing mentorship and incubation support for emerging entrepreneurs.</li>
          <li>Facilitating access to venture capital and angel investors.</li>
          <li>Advocating for tax benefits and regulatory ease for startups.</li>
          <li>Organizing pitch events and networking opportunities.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "International Trade: Exports and Imports",
    description: (
      <div>
        <p>AIFBF supports international trade by:</p>
        <ul>
          <li>Assisting businesses in navigating export-import regulations.</li>
          <li>Offering market insights and strategies for global competitiveness.</li>
          <li>Providing access to export credit and insurance schemes.</li>
          <li>Organizing trade fairs and international business delegations.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Banknote className="h-12 w-12 text-secondary" />,
    title: "Banking and Capital Markets",
    description: (
      <div>
        <p>AIFBF strengthens the banking and capital markets sector by:</p>
        <ul>
          <li>Promoting ethical and transparent practices in financial transactions.</li>
          <li>Providing education on investment opportunities and risk management.</li>
          <li>Supporting the adoption of cutting-edge financial technologies (Fintech).</li>
          <li>Collaborating with financial institutions to develop borrower-friendly policies.</li>
        </ul>
      </div>
    ),
  },
];

export default function Sectors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);
  const [showAllSectors, setShowAllSectors] = useState(false);

  const handleOpenModal = (sector) => {
    setSelectedSector(sector);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSector(null);
  };

  return (
    <div id="sectors" className="py-20 bg-gradient-to-bl from-orange-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
            title={<span className="text-orange-400 text-5xl font-bold">Our Sectors</span>}
          subtitle="AIFBF supports various sectors that significantly contribute to India's GDP"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(showAllSectors ? sectors : sectors.slice(0, 4)).map((sector, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <div 
                className="p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => handleOpenModal(sector)}
              >
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{sector.title}</h3>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Button to toggle between showing more or less sectors */}
        <div className="text-center mt-6">
          {showAllSectors ? (
            <button
              onClick={() => setShowAllSectors(false)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
            >
              Show Less Sectors
            </button>
          ) : (
            <button
              onClick={() => setShowAllSectors(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
            >
              View More Sectors
            </button>
          )}
        </div>
      </div>

      {/* Modal for displaying detailed information */}
      {isModalOpen && selectedSector && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">{selectedSector.title}</h2>
            <div className="text-gray-600 mb-4">{selectedSector.description}</div>
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
