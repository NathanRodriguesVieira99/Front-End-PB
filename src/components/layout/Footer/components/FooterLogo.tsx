'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterLogoProps extends ComponentProps<typeof motion.div> {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export const Footerlogo = ({
  src,
  alt,
  height,
  width,
  className,
}: FooterLogoProps) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Image
        src={src}
        alt={alt}
        className={twMerge('', className)}
        height={height}
        width={width}
      />
    </motion.div>
  );
};
