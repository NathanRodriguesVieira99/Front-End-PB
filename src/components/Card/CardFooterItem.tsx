import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardFooterItemProps extends ComponentProps<'p'> {
  text: string;
  className?: string;
}

export const CardFooterItem = ({
  text,
  className,
  ...props
}: CardFooterItemProps) => {
  return (
    <p {...props} className={twMerge('', className)}>
      {text}
    </p>
  );
};
