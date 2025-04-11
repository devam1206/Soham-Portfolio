import React from "react";

export default function Home() {
  const handleNavPopup = () => {
    // Simulate pressing Ctrl + K
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      ctrlKey: true,
      bubbles: true
    });
    document.dispatchEvent(event);
  };

  return (
    <div className="py-44 px-4">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white font-['Inter',_sans-serif]">
          Soham Desai
        </h1>
        <p className="text-lg md:text-xl mt-4">
        Wireless Systems Lead at <a href="https://www.skylo.tech/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-8 hover:text-gray-400">Skylo</a>
        </p>
        <p className="text-lg md:text-xl text-gray-400 mt-4">
        Passionate Explorer of Extreme Environment Wireless Communications
        </p>
        <button 
          onClick={handleNavPopup}
          className="mt-8 flex items-center justify-center gap-1 text-sm mx-auto transition-colors duration-200 p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-0 outline-none ring-0 border-none focus:border-none active:outline-none group"
        >
          <span>Press</span>
          <kbd className="px-2 py-1 bg-gray-800 rounded text-xs transition-colors duration-200 group-hover:bg-white group-hover:text-black">ctrl</kbd>
          <kbd className="px-2 py-1 bg-gray-800 rounded text-xs transition-colors duration-200 group-hover:bg-white group-hover:text-black">K</kbd>
          <span>to start</span>
          <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
} 