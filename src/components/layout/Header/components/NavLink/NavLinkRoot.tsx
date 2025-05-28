'use client';
import { motion } from 'motion/react';
import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface NavLinkRootProps extends ComponentProps<typeof motion.div> {
  children: ReactNode;
}

const animation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const NavLinkRoot = ({
  children,
  className,
  ...props
}: NavLinkRootProps) => {
  return (
    <motion.div
      {...animation}
      transition={{ duration: 0.4, delay: 0.1 }}
      {...props}
      className={twMerge(
        'mt-3 inline-flex h-[45] cursor-pointer items-center justify-start gap-2.5 text-base font-semibold text-text-main',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
