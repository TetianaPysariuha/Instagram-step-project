import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserName from './UserName';

function Component() {
  return (
    <BrowserRouter>
      <UserName />
    </BrowserRouter>
  );
}

describe('UserName renders', () => {
  test('Should Header render', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
