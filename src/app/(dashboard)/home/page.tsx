// import { motion } from 'motion/react';

import { CarouselSize } from '@/components/Carousel/Carousel';

//TODO adicionar animações com motion quando tudo estiver pronto nessa página
/*  
 <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >

*/

export default function Home() {
  return (
    <main className="h-screen bg-[linear-gradient(180deg,var(--color-store-dark)_0%,var(--color-store-darker)_80%)]">
      <div className="flex items-center justify-center">
        <CarouselSize />
      </div>
    </main>
  );
}
