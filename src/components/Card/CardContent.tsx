import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardContentProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

export const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps) => {
  return (
    <div {...props} className={twMerge('flex flex-col', className)}>
      {children}
    </div>
  );
};
