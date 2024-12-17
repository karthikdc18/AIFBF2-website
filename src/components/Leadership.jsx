import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: "Shri Dayananda Reddy",
      role: " Managing Director ",
      image: "dayananda.JPG",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Smt Pramila M. Nesargi",
      role: "Director",
      image: "pramila.jpeg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Smt Prathibha Dayananda",
      role: "Director",
      image: "prathiba.jpeg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Shri Shiv Shankar Agarwal",
      role: "Director",
      image: "shivshankar.jpeg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Shri Bhavesh Kumar Surana",
      role: "Director",
      image: "bhavesh.jpeg",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <div id="leadership" className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-400">Our Leadership</h2>
          <p className="mt-4 text-xl text-gray-600">Meet the team driving our mission forward</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Center the first leader in the first row */}
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="text-center">
              <div className="relative mb-4 group">
                <img
                  src={leaders[0].image}
                  alt={leaders[0].name}
                  className="w-48 h-48 rounded-full mx-auto object-cover first-leader-img"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-full transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 flex gap-4">
                    <a href={leaders[0].linkedin} className="text-white hover:text-primary">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={leaders[0].twitter} className="text-white hover:text-primary">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-500">{leaders[0].name}</h3>
              <p className="text-gray-600">{leaders[0].role}</p>
            </div>
          </div>

          {/* The rest of the leaders in the second row */}
          {leaders.slice(1).map((leader, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4 group">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-full transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 flex gap-4">
                    <a href={leader.linkedin} className="text-white hover:text-primary">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={leader.twitter} className="text-white hover:text-primary">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-500">{leader.name}</h3>
              <p className="text-gray-600">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
