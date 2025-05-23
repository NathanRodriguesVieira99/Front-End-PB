import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchInputContentProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const SearchInputContent = ({
  children,
  className,
  ...props
}: SearchInputContentProps) => {
  return (
    <div {...props} className={twMerge('flex h-11 items-center', className)}>
      {children}
    </div>
  );
};
