import React from 'react';
import { motion, useCycle } from 'framer-motion';

const MeditateSection = () => {
  const [phase, cyclePhase] = useCycle('inhale', 'exhale');

  React.useEffect(() => {
    const interval = setInterval(() => cyclePhase(), 4000);
    return () => clearInterval(interval);
  }, [cyclePhase]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl">
      <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Gentle Breathing</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Sit comfortably. Soften your gaze. Breathe in and out with ease. Follow the animation and let your mind settle in calm awareness.
          </p>
          <div className="mt-6 inline-flex gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white/60 border border-white/30 px-3 py-1">4s inhale</span>
            <span className="rounded-full bg-white/60 border border-white/30 px-3 py-1">4s exhale</span>
          </div>
        </div>
        <div className="flex items-center justify-center py-6">
          <motion.div
            key={phase}
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: phase === 'inhale' ? 1.15 : 0.85, opacity: 1 }}
            transition={{ duration: 4, ease: 'easeInOut' }}
            className="relative h-48 w-48 md:h-56 md:w-56 rounded-full bg-gradient-to-br from-sky-400/50 to-sky-200/50 border border-white/40 backdrop-blur-xl shadow-2xl"
          >
            <div className="absolute inset-0 rounded-full bg-white/30" style={{ mixBlendMode: 'soft-light' }} />
            <div className="absolute -inset-6 blur-3xl rounded-full bg-sky-300/30 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-700 font-medium">
                {phase === 'inhale' ? 'Inhale' : 'Exhale'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeditateSection;
