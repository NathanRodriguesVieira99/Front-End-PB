import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardPriceProps extends ComponentProps<'div'> {
  price: number;
}

export const CardPrice = ({ price, className, ...props }: CardPriceProps) => {
  return (
    <div
      {...props}
      className={(twMerge('mt-4 flex items-end justify-end'), className)}
    >
      <p
        className={twMerge(
          'text-heading-medium font-bold text-accent-green md:text-heading-medium',
          className
        )}
      >
        ${price}
      </p>
    </div>
  );
};
