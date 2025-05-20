import { CardActions } from './CardActions';
import { CardBuyButton } from './CardBuyButton';
import { CardContent } from './CardContent';
import { CardDescription } from './CardDescription';
import { CardImage } from './CardImage';
import { CardPrice } from './CardPrice';
import { CardRoot } from './CardRoot';
import { CardTitle } from './CardTitle';

export const Card = {
  Root: CardRoot,
  Content: CardContent,
  Title: CardTitle,
  Image: CardImage,
  Description: CardDescription,
  Actions: CardActions,
  BuyButton: CardBuyButton,
  Price: CardPrice,
};

// TODO adicionar tailwind merge em todos os subcomponentes de Card
