import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardDescriptionProps extends ComponentProps<'div'> {
  description: string;
}

export const CardDescription = ({
  description,
  className,
  ...props
}: CardDescriptionProps) => {
  return (
    <div {...props} className={twMerge('', className)}>
      <p className={twMerge('', className)}>{description}</p>
    </div>
  );
};
