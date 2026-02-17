
import React, { useEffect, useState } from 'react';
import { GeminiService } from '../services/geminiService';

const Hero: React.FC = () => {
  const [greeting, setGreeting] = useState("Architecting small tools for big change.");
  const gemini = new GeminiService();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        gemini.generateGreeting({ lat: pos.coords.latitude, lng: pos.coords.longitude })
          .then(res => res && setGreeting(res));
      },
      () => {
        gemini.generateGreeting().then(res => res && setGreeting(res));
      }
    );
  }, []);

  return (
    <section id="about" className="pt-32 pb-20 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 glass rounded-full text-xs font-bold tracking-widest text-blue-400 mb-6 uppercase border border-blue-500/20">
          Small Scale Collective
        </div>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8">
          We Build for the <br />
          <span className="gradient-text">Public Domain.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          {greeting}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
            View Repositories
          </button>
          <button className="px-8 py-4 glass text-white rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all">
            Contact Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
