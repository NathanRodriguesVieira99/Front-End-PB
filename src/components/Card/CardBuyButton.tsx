import { Button } from '../ui/button';

interface CardBuyButtonProps {
  text: string;
}

export const CardBuyButton = ({ text }: CardBuyButtonProps) => {
  return (
    <div>
      <Button>{text}</Button>
    </div>
  );
};
