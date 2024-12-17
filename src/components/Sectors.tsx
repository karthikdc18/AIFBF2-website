import React from 'react';
import { Home, Briefcase, GraduationCap, Store } from 'lucide-react';

export default function Sectors() {
  const sectors = [
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Housing Finance",
      description: "Supporting fair mortgage practices and affordable housing initiatives"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-secondary" />,
      title: "Business Loans",
      description: "Empowering small businesses with accessible financing options"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Education Lending",
      description: "Making education financing more accessible and manageable"
    },
    {
      icon: <Store className="h-12 w-12 text-secondary" />,
      title: "Microfinance",
      description: "Providing small-scale financial solutions for community growth"
    }
  ];

  return (
    <div id="sectors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Sectors</h2>
          <p className="mt-4 text-xl text-gray-600">Areas where we make a difference</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{sector.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{sector.title}</h3>
              <p className="text-gray-600">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}