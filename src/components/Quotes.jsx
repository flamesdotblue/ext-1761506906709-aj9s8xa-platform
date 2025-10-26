import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES = [
  {
    text: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha',
  },
  {
    text: 'The mind is everything. What you think, you become.',
    author: 'Buddha',
  },
  {
    text: 'Three things cannot be long hidden: the sun, the moon, and the truth.',
    author: 'Buddha',
  },
  {
    text: 'Just as a candle cannot burn without fire, men cannot live without a spiritual life.',
    author: 'Buddha',
  },
];

const Quotes = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl p-8 md:p-12">
      <div className="absolute -inset-24 bg-gradient-to-tr from-sky-200/40 to-sky-100/10 blur-3xl pointer-events-none" />
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Gentle Wisdom</h2>
        <div className="mt-6 min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">“{QUOTES[index].text}”</p>
              <p className="mt-3 text-slate-600">— {QUOTES[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              aria-label={`Show quote ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? 'bg-sky-600 w-6' : 'bg-sky-300/70 hover:bg-sky-400/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
