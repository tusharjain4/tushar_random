import React from 'react';
import portfolioData from '@/data/portfolio.json';

const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="glass-card hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                {project.imageUrl && (
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-900/50 rounded text-xs text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">GitHub</a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">Live Demo</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card text-center py-12">
            <p className="text-gray-400 text-lg">Projects coming soon...</p>
            <p className="text-gray-500 mt-2">Stay tuned for updates!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;