import React from 'react';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';

export default function Vision() {
  return (
    <div id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-4 text-xl text-gray-600">Building a future of financial equality and opportunity</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Target className="h-8 w-8 text-primary" />,
              title: "Mission-Driven",
              description: "Committed to financial inclusion and borrower advocacy"
            },
            {
              icon: <Users className="h-8 w-8 text-secondary" />,
              title: "Community Focus",
              description: "Supporting underserved communities with financial solutions"
            },
            {
              icon: <Shield className="h-8 w-8 text-primary" />,
              title: "Fair Practices",
              description: "Promoting transparent and ethical lending standards"
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-secondary" />,
              title: "Sustainable Growth",
              description: "Creating long-term financial stability for all"
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}