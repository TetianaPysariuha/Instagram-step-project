import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import FollowBtn from './FollowBtn';

function Component({ currentUserId, loggedUserId }) {
  return (
    <Provider store={store}>
      <FollowBtn currentUserId={currentUserId} loggedUserId={loggedUserId} />
    </Provider>
  );
}

describe('FollowBtn renders', () => {
  test('Should FollowBtn render with equal id', () => {
    const { asFragment } = render(<Component currentUserId="12345" loggedUserId="12345" />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should FollowBtn render with different id', () => {
    const { asFragment } = render(<Component currentUserId="12345" loggedUserId="54321" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
