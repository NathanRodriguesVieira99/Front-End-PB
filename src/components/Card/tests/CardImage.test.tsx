import { render, screen } from '@/tests/test-utils';

import { CardImage } from '../CardImage';

describe('<CardImage/>', () => {
  it('should render CardImage ', () => {
    const view = render(
      <CardImage
        alt="TestImage"
        src="https://cdn2.steamgriddb.com/thumb/9082c3bee32f5d2395af3f5c56f937f1.jpg"
      />
    );

    const cardImageContent = screen.getByAltText('TestImage');

    expect(cardImageContent).toBeInTheDocument();
  });
});
