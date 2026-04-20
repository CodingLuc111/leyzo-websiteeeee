import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-emerald-400 tracking-tight">HUGOSMP.NET</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-emerald-400 transition">Über uns</a>
          <a href="/login" className="bg-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-500 transition">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h2 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Willkommen auf <br /> Hugosmp.net
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl">
          Der ultimative Minecraft-Server mit Fokus auf Community, RTP-Abenteuer und unvergleichlichem Gameplay.
        </p>
        <div className="flex space-x-4">
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105">
            Jetzt Beitreten
          </button>
          <button className="border border-gray-700 hover:bg-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition">
            Discord Community
          </button>
        </div>
      </section>

      {/* Info Bereich */}
      <section id="about" className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8 text-center">Warum Hugosmp.net?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">
              <h4 className="text-xl font-bold mb-2">RTP-Tracker</h4>
              <p className="text-gray-400">Verfolge deine Sprünge in der Wildnis mit unserem exklusiven Tracking-Tool.</p>
            </div>
            <div className="p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">
              <h4 className="text-xl font-bold mb-2">Community</h4>
              <p className="text-gray-400">Ein aktives und freundliches Umfeld mit täglichen Events.</p>
            </div>
            <div className="p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">
              <h4 className="text-xl font-bold mb-2">High Performance</h4>
              <p className="text-gray-400">Lags sind Geschichte. Genieße flüssiges Gameplay ohne Unterbrechungen.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
