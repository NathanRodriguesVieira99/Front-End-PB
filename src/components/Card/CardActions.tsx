import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardActionProps extends ComponentProps<'div'> {
  // onClick?: () => void;
  children: React.ReactNode;
}

export const CardActions = ({
  children,
  className,
  ...props
}: CardActionProps) => {
  return (
    <div {...props} className={twMerge('', className)}>
      {children}
    </div>
  );
};
