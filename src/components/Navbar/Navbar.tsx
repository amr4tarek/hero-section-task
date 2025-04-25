import React, { useState, useEffect } from "react";
import EditableText from "../EditableText/EditableText";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 flex items-center justify-between py-4 px-6 md:px-12 transition-all duration-300 ${
      scrolled ? "bg-[#0A0C1A]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="flex items-center space-x-3 group">
        <img
          alt="Stunning Logo"
          loading="lazy"
          width={40}
          height={40}
          className="rounded-full"
          src="https://stunning.so/_next/image?url=%2Fimages%2Fstunning-animated.gif&w=64&q=75"
        />
       <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-300 group-hover:from-indigo-300 group-hover:to-purple-400 transition-all duration-500">
  <EditableText initialText="Stunning By Amr" disableHoverEffect={true} />
</h1>
      </div>

      <ul className="hidden md:flex space-x-1 text-sm">
        {["AI Agents", "Solutions", "Pricing", "Resources", "API"].map((item, index) => (
          <li
            key={item}
            onClick={() => setActiveItem(index)}
            className={`relative px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
              activeItem === index ? "bg-indigo-500/10 text-white" : "text-white/70 hover:text-white"
            } 
              before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-[70%] before:h-0.5 
              before:bg-gradient-to-r before:from-purple-500 before:to-indigo-500 before:rounded-full 
              before:transition-transform before:duration-300 before:transform before:-translate-x-1/2 
              ${activeItem === index ? "before:scale-x-100" : "before:scale-x-0 hover:before:scale-x-100"}`}
          >
            <EditableText initialText={item} />
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <button className="hidden md:flex items-center space-x-2 text-sm border border-indigo-500/30 bg-indigo-900/20 hover:bg-indigo-800/40 text-indigo-300 px-4 py-2 rounded-lg transition-all duration-300 group">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:stroke-white transition-colors">
            <path d="M8 9L11 12L8 15M13 15H16M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <EditableText initialText="Console" disableHoverEffect={true} />
        </button>

        <button
          className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm px-5 py-2 rounded-lg transition-all duration-300 border border-indigo-500/30
            w-full max-w-[140px] md:w-auto md:max-w-none mt-2 md:mt-0
            flex items-center justify-center
            "
        >
          <EditableText initialText="Sign In" disableHoverEffect={true} className="relative z-10" />
          <div
            className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rounded-full z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
              animation: "pulseGlow 3s infinite",
            }}
          />
        </button>

        <button className="md:hidden flex flex-col items-center justify-center w-8 h-8">
          {[1, 2, 3].map((_, i) => (
            <span key={i} className="w-5 h-0.5 bg-white mb-1" />
          ))}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
