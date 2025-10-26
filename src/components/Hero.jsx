import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="w-full px-6 md:px-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-800">
              Serene Buddhism
            </h1>
            <p className="mt-4 text-slate-600 text-lg md:text-xl leading-relaxed">
              A calm space to explore compassion, mindfulness, and wisdom.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#principles"
                className="group rounded-xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-md px-6 py-3 text-slate-800 hover:bg-white/60 transition-colors"
              >
                Explore Teachings
              </a>
              <a
                href="#meditate"
                className="rounded-xl bg-sky-600/90 text-white px-6 py-3 shadow-md hover:bg-sky-600 transition-colors"
              >
                Begin Meditation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
