import { render, screen } from '@/tests/test-utils';

import { CardDescription } from '../CardDescription';

describe('<CardDescription/>', () => {
  it('should render CardDescription ', () => {
    const view = render(<CardDescription description="Test Description" />);

    const cardDescriptionContent = screen.getByRole('paragraph');

    expect(cardDescriptionContent).toBeInTheDocument();
  });
});
