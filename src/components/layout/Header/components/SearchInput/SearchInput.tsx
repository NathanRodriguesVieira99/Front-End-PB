import type { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type: string;
  name: string;
}

export const SearchInput = ({
  type,
  name,
  placeholder,
  className,
  ...props
}: SearchInputProps) => {
  return (
    <input
      {...props}
      type={type}
      id={name}
      placeholder={placeholder}
      className={twMerge(
        'mr-40 h-11 w-[507px] rounded-[3px] bg-[#0E141B33] p-3.5 text-text-main placeholder-secondary outline-none',
        className
      )}
    />
  );
};
