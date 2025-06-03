import { render, screen } from '@/tests/test-utils';

import { CardFooterItem } from '../CardFooterItem';

describe('<CardFooterItem/>', () => {
  it('should render CardFooterItem', () => {
    const view = render(<CardFooterItem text="Text test" />);

    const cardFooterItemContent = screen.getByText('Text test');

    expect(cardFooterItemContent).toBeInTheDocument();
  });
});
