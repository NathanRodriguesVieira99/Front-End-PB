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
        'mt-3 ml-2.5 flex h-[45] w-[103px] cursor-pointer items-center justify-center text-base font-semibold text-text-main',
        className
      )}
    >
      {children}
    </div>
  );
};
