import { render } from '@testing-library/react';
import SaveSvg from './SaveSvg';

describe('SaveSvg renders', () => {
  test('Should SaveSvg render', () => {
    const { asFragment } = render(<SaveSvg />);
    expect(asFragment()).toMatchSnapshot();
  });
});
