import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UsersContainer from './UsersContainer';
import * as actions from '../../store/users/actionCreators';
import '@testing-library/jest-dom';

jest.mock('react-redux');
const user = {
  _id: '635429e5461d59d5a106db66',
  avatar: 'https://res.cloudinary.com/dx84fdyhd/image/upload/v1667755687/instagram/avatar/1_wfz4lc.jpg',
  nik: 'Milda',
  name: 'Patrisia Mumamba',
  followBy: [
    '6355802bab5157181c8ed0d2',
    '6355802bab5157181c8ed0d4',
    '6355802bab5157181c8ed0d5',
    '6355802bab5157181c8ed0d3',
    '635ad2dece62ea7848f38ea9',
    '6355802bab5157181c8ed0da',
  ],
};

const users = [user];

describe('Post snapshot testing', () => {
  test('Should UserContainer to render where isButton with value true', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <UsersContainer
          isButton
          users={users}
          loggedUser={user}
        />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should UserContainer to render where isButton with value false', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <UsersContainer
          isButton={false}
          users={users}
          loggedUser={user}
        />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Subscribe buttons work', () => {
  test('Click on button Subscribe', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const mockedUpdateUser = jest.spyOn(actions, 'updateUser');
    const mockedGetUserById = jest.spyOn(actions, 'getUserById');

    render(
      <BrowserRouter>
        <UsersContainer
          isButton
          users={users}
          loggedUser={user}
        />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('subscribeBtn'));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedUpdateUser).toHaveBeenCalledTimes(1);
    expect(mockedGetUserById).toHaveBeenCalledTimes(1);
  });
});
