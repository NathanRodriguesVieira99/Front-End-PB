import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterContentProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const FooterContent = ({
  children,
  className,
  ...props
}: FooterContentProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'mt-12 flex flex-col items-center justify-start gap-24 md:flex-row md:gap-48',
        className
      )}
    >
      {children}
    </div>
  );
};
