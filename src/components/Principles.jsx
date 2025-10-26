import React from 'react';
import { Heart, Leaf, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Heart,
    title: 'Compassion',
    desc: 'Cultivate loving-kindness for yourself and all beings.',
  },
  {
    icon: Leaf,
    title: 'Mindfulness',
    desc: 'Rest your attention gently in the present moment.',
  },
  {
    icon: Sun,
    title: 'Wisdom',
    desc: 'See clearly the nature of change and interconnection.',
  },
];

const Principles = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="p-6 md:p-8">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-sky-500/10 text-sky-700 border border-sky-500/20 shadow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Principles;
