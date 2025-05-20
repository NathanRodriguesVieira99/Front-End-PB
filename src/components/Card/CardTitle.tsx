import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardTitleProps extends ComponentProps<'h1'> {
  title: string;
  className?: string;
}

export const CardTitle = ({ title, className, ...props }: CardTitleProps) => {
  return (
    <h1
      {...props}
      className={twMerge(
        'text-heading-small font-bold text-text-main sm:text-heading-medium',
        className
      )}
    >
      {title}
    </h1>
  );
};
