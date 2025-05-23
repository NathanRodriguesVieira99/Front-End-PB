import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchInputRootProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const SearchInputRoot = ({
  children,
  className,
  ...props
}: SearchInputRootProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-[507px] items-center justify-between',
        className
      )}
    >
      {children}
    </div>
  );
};
