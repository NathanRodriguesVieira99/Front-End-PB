import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardRootProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

export const CardRoot = ({ children, className, ...props }: CardRootProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full max-w-96 flex-col flex-wrap gap-2 rounded-[5px] bg-store-darkest p-4',
        className
      )}
    >
      {children}
    </div>
  );
};
