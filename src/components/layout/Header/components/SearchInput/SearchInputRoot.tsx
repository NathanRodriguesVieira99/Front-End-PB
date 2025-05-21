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
    <div {...props} className={twMerge('', className)}>
      {children}
    </div>
  );
};
