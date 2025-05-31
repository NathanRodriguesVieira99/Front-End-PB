import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CategoryTitleProps extends ComponentProps<'h2'> {
  children: React.ReactNode;
}

export const CategoryTitle = ({
  children,
  className,
  ...props
}: CategoryTitleProps) => {
  return (
    <h2
      {...props}
      className={twMerge(
        'justify-start text-lg font-bold text-text-main md:text-xl',
        className
      )}
    >
      {children}
    </h2>
  );
};
