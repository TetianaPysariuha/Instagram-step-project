import { render } from '@testing-library/react';
import Preloaders from './Preloaders';

describe('Preloaders renders', () => {
  test('Should Preloaders render', () => {
    const { asFragment } = render(<Preloaders />);
    expect(asFragment()).toMatchSnapshot();
  });
});
