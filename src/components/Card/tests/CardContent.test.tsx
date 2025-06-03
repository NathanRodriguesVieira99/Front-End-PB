import { render, screen } from '@/tests/test-utils';

import { CardContent } from '../CardContent';

describe('<CardContent/>', () => {
  it('should render CardContent', () => {
    const view = render(
      <CardContent>
        <div>Test Children</div>
      </CardContent>
    );

    const cardContentChildren = screen.getByText('Test Children');

    expect(cardContentChildren).toBeInTheDocument();
  });
});
