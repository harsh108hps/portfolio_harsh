import React from "react";

const FunFacts = () => {
  const funFacts = [
    "🏏 Love playing Cricket & ⚽ Football",
    "☕ I debug better with coffee in hand",
    "💡 Favorite quote: 'First, solve the problem. Then, write the code.' – John Johnson",
    "🎯 Always up for a coding challenge",
    "🌍 Dream to work on projects impacting millions globally",
    "🛠 Can spend hours perfecting UI animations",
    "🚀 Constant learner — one more tutorial won't hurt!",
    "🎶 Coding playlists keep me in the zone"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white px-6 py-24 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-14 text-center animate-pulse">
        Fun Facts About Me
      </h2>

      {/* Fun Facts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-pink-500/50 transition-all duration-500 ease-in-out 
            bg-gradient-to-br from-purple-800/30 via-indigo-800/30 to-pink-800/30 backdrop-blur-md 
            hover:scale-105 group"
          >
            {/* Glow border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
            
            {/* Fact Text */}
            <p className="relative text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 group-hover:from-green-300 group-hover:via-blue-300 group-hover:to-pink-300 transition-all duration-500">
              {fact}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
