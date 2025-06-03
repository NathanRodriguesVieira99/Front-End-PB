import { render, screen } from '@/tests/test-utils';

import { CardHeader } from '../CardHeader';
import { CardTitle } from '../CardTitle';

describe('<CardHeader/>', () => {
  it('should render CardHeader', () => {
    const view = render(
      <CardHeader>
        <h1>Title Test</h1>
      </CardHeader>
    );

    const cardHeaderContent = screen.getByRole('heading');

    expect(cardHeaderContent).toBeInTheDocument();
  });
});
