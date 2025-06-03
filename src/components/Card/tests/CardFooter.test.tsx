import { render, screen } from '@/tests/test-utils';

import { CardFooter } from '../CardFooter';

describe('<CardFooter/>', () => {
  it('should render CardFooter', () => {
    const view = render(
      <CardFooter>
        <div>Footer Test</div>
      </CardFooter>
    );

    const cardFooterContent = screen.getByRole('contentinfo');

    expect(cardFooterContent).toBeInTheDocument();
  });
});
