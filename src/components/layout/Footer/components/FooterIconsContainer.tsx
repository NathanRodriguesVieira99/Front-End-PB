import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterIconsContainerProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const FooterIconsContainer = ({
  children,
  className,
  ...props
}: FooterIconsContainerProps) => {
  return (
    <div {...props} className={twMerge('flex flex-row gap-1.5', className)}>
      {children}
    </div>
  );
};
