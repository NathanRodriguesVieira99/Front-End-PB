import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderButtonContentProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const HeaderButtonContent = ({
  children,
  className,
  ...props
}: HeaderButtonContentProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-[3px] px-7 py-3',
        className
      )}
    >
      {children}
    </div>
  );
};
