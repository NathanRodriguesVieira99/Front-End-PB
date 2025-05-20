import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardHeaderProps extends ComponentProps<'header'> {
  children: ReactNode;
}

export const CardHeader = ({
  children,
  className,
  ...props
}: CardHeaderProps) => {
  return (
    <header {...props} className={twMerge('w-full', className)}>
      {children}
    </header>
  );
};
