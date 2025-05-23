import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface NavlinkTextProps extends ComponentProps<'a'> {
  children: ReactNode;
}

export const NavlinkText = ({
  children,
  className,
  ...props
}: NavlinkTextProps) => {
  return (
    <a {...props} className={twMerge('', className)}>
      {children}
    </a>
  );
};
