import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterCopyrightTextProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const FooterCopyrightText = ({
  children,
  className,
}: FooterCopyrightTextProps) => {
  return (
    <div
      className={twMerge(
        'mt-2 justify-start leading-6 font-normal text-slate-500',
        className
      )}
    >
      {children}
    </div>
  );
};
