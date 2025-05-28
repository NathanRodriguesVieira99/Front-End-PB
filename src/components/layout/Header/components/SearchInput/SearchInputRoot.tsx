'use client';
import { motion } from 'motion/react';
import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchInputRootProps extends ComponentProps<typeof motion.div> {
  children: ReactNode;
}

export const SearchInputRoot = ({
  children,
  className,
  ...props
}: SearchInputRootProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      {...props}
      className={twMerge(
        'flex w-[507px] items-center justify-between',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
