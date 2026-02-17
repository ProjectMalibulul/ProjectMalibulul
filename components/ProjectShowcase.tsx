
import React, { useEffect, useState } from 'react';
import { GeminiService } from '../services/geminiService.ts';
import { INITIAL_PROJECTS } from '../constants.tsx';
import { GroundingSource } from '../types.ts';

const ProjectShowcase: React.FC = () => {
  const [inferredData, setInferredData] = useState<any>(null);
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const [loading, setLoading] = useState(true);
  const gemini = new GeminiService();

  useEffect(() => {
    gemini.fetchOrgInsights().then(res => {
      if (res) {
        setInferredData(res.data);
        setSources(res.sources);
      }
      setLoading(false);
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Inferred Mission</h2>
          <div className="glass p-8 rounded-3xl border-l-4 border-blue-500">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
              </div>
            ) : (
              <p className="text-lg text-white/70 leading-relaxed italic">
                "{inferredData?.identity || "A collective of technical minds dedicated to shipping clean, functional, and accessible tools that bridge the gap between complex engineering and everyday user needs."}"
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {INITIAL_PROJECTS.map((p, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
              <span className="text-[10px] mono font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-6 inline-block">
                {p.tag}
              </span>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                {p.description}
              </p>
              <div className="flex gap-4">
                <button className="text-xs font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-1">
                  Explore Code <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {inferredData?.nextProjects && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">AI Roadmap <span className="text-sm font-normal text-white/30">(Suggested by Gemini)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inferredData.nextProjects.map((p: any, i: number) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-dashed border-white/10 hover:border-purple-500/50 transition-all">
                  <h4 className="font-bold mb-2 text-purple-400"># {p.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {sources.length > 0 && (
          <div className="mt-12 pt-12 border-t border-white/5">
            <h5 className="text-xs mono text-white/20 mb-4 uppercase tracking-tighter">Verified Sources</h5>
            <div className="flex flex-wrap gap-4">
              {sources.map((s, i) => (
                <a 
                  key={i} 
                  href={s.uri} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] text-white/40 hover:text-white underline decoration-blue-500/30 underline-offset-4 transition-all"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
