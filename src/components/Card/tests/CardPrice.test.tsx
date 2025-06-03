import { render, screen } from '@/tests/test-utils';

import { CardPrice } from '../CardPrice';

describe('<CardPrice/>', () => {
  it('should render CardPrice', () => {
    const view = render(
      <CardPrice price={9.99}>
        <p>9.99</p>
      </CardPrice>
    );

    const cardPriceContent = screen.getByRole('paragraph');

    expect(cardPriceContent).toBeInTheDocument();
  });
});
