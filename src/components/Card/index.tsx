import { CardActions } from './CardActions';
import { CardBuyButton } from './CardBuyButton';
import { CardContent } from './CardContent';
import { CardDescription } from './CardDescription';
import { CardFooter } from './CardFooter';
import { CardFooterItem } from './CardFooterItem';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';
import { CardPrice } from './CardPrice';
import { CardRoot } from './CardRoot';
import { CardTitle } from './CardTitle';

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Content: CardContent,
  Title: CardTitle,
  Image: CardImage,
  Description: CardDescription,
  Actions: CardActions,
  BuyButton: CardBuyButton,
  Price: CardPrice,
  Footer: CardFooter,
  FooterItem: CardFooterItem,
};

// TODO adicionar tailwind merge em todos os subcomponentes de Card
