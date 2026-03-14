import React from 'react';
import portfolioData from '@/data/portfolio.json';

const Hero: React.FC = () => {
  const { name, role, tagline, heroImageUrl } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">{role}</h2>
          <p className="text-lg text-gray-300 mb-8">{tagline}</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          {heroImageUrl && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={heroImageUrl}
                alt={`${name}'s profile`}
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500/50 shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;