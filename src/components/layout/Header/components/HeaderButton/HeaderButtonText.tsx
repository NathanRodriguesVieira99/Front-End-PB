import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderButtonTextProps extends ComponentProps<'h1'> {
  children: ReactNode;
}

export const HeaderButtonText = ({
  children,
  className,
  ...props
}: HeaderButtonTextProps) => {
  return (
    <h1 {...props} className={twMerge('', className)}>
      {children}
    </h1>
  );
};
