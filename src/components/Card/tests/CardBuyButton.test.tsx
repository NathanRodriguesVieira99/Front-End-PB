import { render, screen } from '@/tests/test-utils';

import { CardBuyButton } from '../CardBuyButton';

describe('<CardBuyButton/>', () => {
  it('should render CardBuyButton', () => {
    const view = render(<CardBuyButton text="Button Test" />);

    const cardBuyButtonContent = screen.getByRole('button');

    expect(cardBuyButtonContent).toBeInTheDocument();
  });
});
