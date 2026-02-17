
import React from 'react';
import { TEAM } from '../constants.tsx';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">The Architects</h2>
            <p className="text-white/40 max-w-lg">
              A diverse group of engineers focused on high-utility, open-source software that solves everyday problems.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-xs mono px-3 py-1 bg-white/5 rounded text-white/60">4 Members</span>
            <span className="text-xs mono px-3 py-1 bg-white/5 rounded text-white/60">Global Contributors</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div key={member.github} className="group relative glass p-6 rounded-3xl transition-all hover:bg-white/5 hover:-translate-y-2 border border-white/5">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover rounded-2xl relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">{member.role}</p>
              <div className="flex items-center justify-between">
                <p className="text-white/40 text-xs italic">{member.specialty}</p>
                <a 
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
