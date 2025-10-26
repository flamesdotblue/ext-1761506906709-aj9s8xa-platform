import React from 'react';
import Hero from './components/Hero';
import Principles from './components/Principles';
import MeditateSection from './components/MeditateSection';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="min-h-screen text-slate-800 font-inter bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <Hero />
      <main className="relative z-10">
        <section id="principles" className="px-6 md:px-10 max-w-6xl mx-auto -mt-24 md:-mt-32">
          <Principles />
        </section>
        <section id="meditate" className="px-6 md:px-10 max-w-6xl mx-auto mt-16 md:mt-24">
          <MeditateSection />
        </section>
        <section id="wisdom" className="px-6 md:px-10 max-w-6xl mx-auto mt-16 md:mt-24 mb-20">
          <Quotes />
        </section>
      </main>
      <footer className="px-6 md:px-10 py-10 text-center text-slate-600">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/40 backdrop-blur-md border border-white/30 px-4 py-2 shadow-sm">
            <span className="text-sm">Made with calm and clarity</span>
          </div>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} Serene Buddhism</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
