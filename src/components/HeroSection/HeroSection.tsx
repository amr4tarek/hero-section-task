import React from "react";
import Navbar from "../Navbar/Navbar";
import useRandomHero from "../../hooks/useRandomHero";
import EditableText from "../EditableText/EditableText";
import AINetworkBackground from "./AINetworkBackground/AINetworkBackground";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const { headline, subtext, image, regenerate } = useRandomHero();

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#0A0C1A] to-[#1A1C3A] overflow-hidden flex flex-col">
      <AINetworkBackground className="absolute inset-0 z-0 opacity-60" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full filter blur-[80px] animate-pulse-slower"></div>
      
      <Navbar />
      
      <div className="flex flex-1 flex-col md:flex-row items-center justify-between px-6 md:px-24 pt-16 pb-16 gap-8">
        <div className="flex-1 z-10 max-w-lg backdrop-blur-sm p-6 rounded-lg border border-white/5">
          
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug tracking-wide">
            <span className="relative">
              <EditableText initialText={headline} className="relative z-10" />
              <span className="absolute left-0 right-0 bottom-0 h-2 bg-indigo-500/60 -skew-y-3 z-0"></span>
            </span>
            </h1>

            <p className="text-white/80 mb-10 text-xl max-w-lg backdrop-blur-sm relative leading-relaxed">
            <EditableText initialText={subtext} className="text-white/80" />
            <span className="absolute -left-4 top-0 bottom-0 w-1 bg-indigo-500/70"></span>
            </p>
          
          <div className="flex gap-6">
            <button className="flex items-center space-x-3 backdrop-blur-md bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-full px-8 py-4 text-white border-t border-indigo-500/30 hover:shadow-indigo-500/30 hover:shadow-lg transition-all group transform hover:scale-105 duration-300 ease-in-out">
              <span className="inline-block w-9 h-9 flex items-center justify-center border border-white/30 rounded-full bg-gradient-to-tr from-indigo-500/50 to-purple-500/50 group-hover:from-indigo-500 group-hover:to-purple-500 transition">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
              <EditableText initialText="Explore" className="font-semibold text-lg" />
            </button>

            <button
              className="flex items-center space-x-3 backdrop-blur-md bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-full px-7 py-4 text-blue-200 border-t border-blue-400/30 hover:shadow-blue-400/30 hover:shadow-lg transition-all group transform hover:scale-105 duration-300 ease-in-out relative"
              onClick={regenerate}
              type="button"
            >
              <svg className="animate-spin-slow" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356-2A9 9 0 1 0 5 19.584"/><path d="M20 9V4h-5"/></svg>
              Regenerate with AI
            </button>
          </div>
        </div>
        
        <div className="relative w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem] flex justify-center items-center">
          <div className="absolute w-[28rem] h-[28rem] border-2 border-dashed border-purple-500/20 rounded-full animate-spin-very-slow"></div>
          
          <div className="relative z-10 w-72 h-72 md:w-[24rem] md:h-[24rem] border border-white/20 overflow-hidden bg-gradient-to-b from-[#2A0E4D]/80 to-[#1E0A3A]/90 backdrop-filter backdrop-blur-sm perspective-container transform transition-all duration-700 hover:rotate-y-15 hover:rotate-x-10"
              style={{
                clipPath: "polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)",
                boxShadow: "0 0 30px rgba(109, 40, 217, 0.4) inset"
              }}>
            <div className="absolute inset-0 z-30 scanner-line"></div>
            
            <div className="absolute inset-0 z-20 bg-[rgba(0,0,0,0.2)]">
              <div className="neural-network-grid"></div>
            </div>

            <div className="w-full h-full p-3 relative">
              <img
                src={image}
                alt={headline}
                className="w-full h-full object-contain pointer-events-none select-none transform transition-all duration-700 mix-blend-luminosity"
              />
              
              <div className="absolute inset-0 z-25 data-processing-overlay opacity-40"></div>
              
              <div className="absolute bottom-4 left-4 right-4 z-30 bg-black/40 backdrop-blur-sm rounded p-2 border border-white/10">
                <div className="flex justify-between text-xs text-cyan-300 font-mono">
                  <EditableText initialText="Processing..." className="font-mono" />
                  <EditableText initialText="Status: Active" className="font-mono" />
                </div>
                <div className="w-full bg-gray-800 h-1 mt-1 rounded overflow-hidden">
                  <div className="bg-cyan-400 h-full animate-progress-bar"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 z-30 opacity-30 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent enhanced-pulse-animation"></div>
          </div>
          
          <div className="absolute z-5 enhanced-circuit-lines w-[28rem] h-[28rem] pointer-events-none"></div>

          <div className="absolute inset-0 z-0 pointer-events-none reactive-glow"
              style={{
                background: 'transparent',
                boxShadow: '0 0 320px 100px rgba(109,40,217,0.95), 0 0 200px 40px rgba(168,85,247,0.8)',
                opacity: 1,
                filter: 'blur(164px)',
              }} />
              
          <div className="absolute top-10 right-10 z-20 floating-element">
            <div className="w-12 h-12 border border-indigo-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 11M12 16L17 11M12 16V4M6 20H18" stroke="rgba(165, 180, 252, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="absolute bottom-20 left-0 z-20 floating-element-reverse">
            <div className="w-16 h-16 border border-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3H3.6C3.26863 3 3 3.26863 3 3.6V9M9 21H3.6C3.26863 21 3 20.7314 3 20.4V15M21 9V3.6C21 3.26863 20.7314 20.7314 21 20.4 21H15M21 15V20.4C21 20.7314 20.7314 21 20.4 21H15M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="rgba(216, 180, 254, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;