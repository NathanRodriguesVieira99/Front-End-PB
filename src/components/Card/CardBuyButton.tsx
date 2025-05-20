import { twMerge } from 'tailwind-merge';

import { Button } from '../ui/button';

interface CardBuyButtonProps {
  text: string;
  className?: string;
}

export const CardBuyButton = ({ text, className }: CardBuyButtonProps) => {
  return (
    <div className={twMerge('', className)}>
      <Button>{text}</Button>
    </div>
  );
};
