import { render, screen } from '@/tests/test-utils';

import { CardRoot } from '../CardRoot';
describe('<CardRoot/>', () => {
  it('should render CardRoot', () => {
    const view = render(<CardRoot>Test children</CardRoot>);

    const childrenContent = screen.getByText('Test children');

    expect(childrenContent).toBeInTheDocument();
  });
});
