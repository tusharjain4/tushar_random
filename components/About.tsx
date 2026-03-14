import React from 'react';
import portfolioData from '@/data/portfolio.json';

const About: React.FC = () => {
  const { about, experience, currentRole, highlights } = portfolioData;

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="glass-card">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{about}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-purple-400 font-semibold w-32">Experience:</span>
                <span className="text-white">{experience}+ Years</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-400 font-semibold w-32">Current Role:</span>
                <span className="text-white">{currentRole}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-purple-400 font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;