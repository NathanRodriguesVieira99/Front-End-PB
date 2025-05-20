import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardFooterProps extends ComponentProps<'footer'> {
  children: ReactNode;
}

export const CardFooter = ({
  children,
  className,
  ...props
}: CardFooterProps) => {
  return (
    <footer
      {...props}
      className={twMerge(
        'mt-2 flex items-center justify-between gap-2 text-white',
        className
      )}
    >
      {children}
    </footer>
  );
};
