import { render, screen } from '@/tests/test-utils';

import { CardTitle } from '../CardTitle';
describe('<CardTitle/>', () => {
  it('should render CardTitle ', () => {
    const view = render(<CardTitle title="Title" />);

    const titleContent = screen.getByText('Title');

    expect(titleContent).toBeInTheDocument();
  });
});
