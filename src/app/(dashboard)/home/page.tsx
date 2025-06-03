'use client';

import { motion } from 'motion/react';
import { Suspense } from 'react';

import { CarouselSize } from '@/components/Carousel';
import { Hero } from '@/components/layout/Hero';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-slate-800">
      <div className="flex flex-col items-center justify-center">
        <Suspense
          fallback={
            <div className="text-2xl text-text-main">Carregando...</div>
          }
        >
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
          >
            <Hero />
          </motion.div>
          <CarouselSize />
        </Suspense>
      </div>
    </main>
  );
}
