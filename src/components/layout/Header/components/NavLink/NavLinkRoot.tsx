import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface NavLinkRootProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const NavLinkRoot = ({
  children,
  className,
  ...props
}: NavLinkRootProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'mt-3 inline-flex h-[45] cursor-pointer items-center justify-start gap-2.5 text-base font-semibold text-text-main',
        className
      )}
    >
      {children}
    </div>
  );
};
