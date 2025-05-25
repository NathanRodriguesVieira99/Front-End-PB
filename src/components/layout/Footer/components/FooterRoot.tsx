import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterRootProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const FooterRoot = ({
  children,
  className,
  ...props
}: FooterRootProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};
