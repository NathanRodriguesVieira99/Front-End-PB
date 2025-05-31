import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterCreatorsListProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const FooterCreatorsList = ({
  children,
  className,
  ...props
}: FooterCreatorsListProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'mb-2 flex w-80 flex-row flex-wrap gap-2.5 md:flex-col md:gap-5',
        className
      )}
    >
      {children}
    </div>
  );
};
