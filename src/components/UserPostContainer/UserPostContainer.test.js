import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import UserPostContainer from './UserPostContainer';

function Component() {
  return (
    <Provider store={store}>
      <UserPostContainer />
    </Provider>
  );
}

describe('UserPostContainer renders', () => {
  test('Should UserPostContainer render', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
