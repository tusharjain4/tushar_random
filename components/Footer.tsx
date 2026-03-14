import React from 'react';
import portfolioData from '@/data/portfolio.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { name } = portfolioData;

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} {name.trim()}. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;