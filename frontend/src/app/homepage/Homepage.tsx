import React from 'react';

const Homepage: React.FC = () => {
  return (
    <main className="bg-[url('/nbabackground.jpeg')] bg-cover bg-center h-screen w-full">
      {/* Main content overlay */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              NBA Stats Hub
            </h1>
            
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-2">Previous Games</h3>
                <p className="text-white">Scores and stats</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-2">Player Stats</h3>
                <p className="text-white">Compare player analytics</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-2">Team Rankings</h3>
                <p className="text-white">League standings and stats</p>
              </div>
            </div>

            <div className="mt-12">
              <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full transform transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg">
                Explore Stats
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Homepage;