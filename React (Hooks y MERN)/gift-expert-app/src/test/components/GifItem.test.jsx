import { render } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en <GiftItem />', () => {
  const title = 'saitama';
  const url = 'https://one-punch.com/saitama.jpg';

  test('debe hacer match con el snapshot', () => {
    const { container } = render(
      <GifItem
        title={title}
        url={url}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
