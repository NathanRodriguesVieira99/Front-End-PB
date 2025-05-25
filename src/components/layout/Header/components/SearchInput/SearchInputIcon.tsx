import type { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchInputIconProps {
  icon: ElementType;
  className?: string;
}

export const SearchInputIcon = ({
  icon: Icon,
  className,
}: SearchInputIconProps) => {
  return <Icon className={twMerge('size-4 text-text-main', className)} />;
};
