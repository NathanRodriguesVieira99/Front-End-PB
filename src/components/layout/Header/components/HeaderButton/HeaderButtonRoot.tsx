import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderButtonRootProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const HeaderButtonRoot = ({
  children,
  className,
  ...props
}: HeaderButtonRootProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'mt-3 flex inline-flex h-[45] cursor-pointer items-center justify-start gap-2.5 text-base font-semibold text-text-main',
        className
      )}
    >
      {children}
    </div>
  );
};
