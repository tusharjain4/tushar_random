import React from 'react';
import portfolioData from '@/data/portfolio.json';

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="space-y-8">
          {skills.map((category, catIndex) => (
            <div key={catIndex} className="glass-card">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.length > 0 ? (
                  category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium hover:shadow-lg transition-shadow cursor-default"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 italic">No specific skills listed.</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;