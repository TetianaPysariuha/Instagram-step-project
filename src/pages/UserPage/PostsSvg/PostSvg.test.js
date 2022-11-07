import { render } from '@testing-library/react';
import PostSvg from './PostSvg';

describe('PostSvg renders', () => {
  test('Should PostSvg render', () => {
    const { asFragment } = render(<PostSvg />);
    expect(asFragment()).toMatchSnapshot();
  });
});
