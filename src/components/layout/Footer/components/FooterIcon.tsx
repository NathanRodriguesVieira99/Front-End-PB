import type { ComponentProps, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterIconProps extends ComponentProps<'a'> {
  icon: ElementType;
  className?: string;
}

export const FooterIcon = ({
  icon: Icon,
  className,
  ...props
}: FooterIconProps) => {
  return (
    <a {...props} className="">
      <Icon className={twMerge('size-5 text-text-main', className)} />{' '}
    </a>
  );
};
