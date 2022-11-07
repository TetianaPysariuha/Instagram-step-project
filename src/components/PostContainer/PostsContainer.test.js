/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PostsContainer from './PostsContainer';
import * as actions from '../../store/posts/actionCreators';
import '@testing-library/jest-dom';
import * as modalActions from '../../store/modal/actionCreators';

jest.mock('react-redux');

const post = {
  _id: '63558b3d161b35a6d8b4d9ff',
  img: 'https://res.cloudinary.com/dx84fdyhd/image/upload/v1667755090/instagram/post14_dmu9vm.jpg',
  userid: '635429e5461d59d5a106db66',
  title: 'Some post for deleting user',
  description: 'Some description about post',
  likes: [],
  favorite: [],
  comments: [{
    userId: '635429e5461d59d5a106db66',
    text: 'zxcvxzcv',
    _id: '635d1bac9809759d382628e9',
  },
  {
    userId: '635429e5461d59d5a106db66',
    text: 'asdasdasd',
    _id: '635d258705351e1ae65b6b47',
  },
  {
    userId: '635429e5461d59d5a106db66',
    text: 'xzzzxcxzc',
    _id: '635d2d4305351e1ae65b6ddd',
  }],
  seeCount: 999,
  __v: 0,
  user: {
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
    __v: 0,
  },
};
const posts = [post];
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
const usersArray = [user];

describe('Post snapshot testing', () => {
/*   test('Should PostContainer to render without props', () => {
    const postsStore = useSelector.mockReturnValue(posts);
    const showMoreComments = useSelector.mockReturnValue([]);
    const loggedUser = useSelector.mockReturnValue(user);
    const users = useSelector.mockReturnValue(usersArray);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { asFragment } = render(
      <BrowserRouter>
        <PostsContainer />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  }); */

  test('Should PostContainer to render with props', () => {
    const postsStore = useSelector.mockReturnValue(posts);
    const showMoreComments = useSelector.mockReturnValue([]);
    const loggedUser = useSelector.mockReturnValue(user);
    const users = useSelector.mockReturnValue(usersArray);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { asFragment } = render(
      <BrowserRouter>
        <PostsContainer posts={posts} />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('PostContainer functions work', () => {
  test('Click on button Like', () => {
    const handleCklickLike = jest.spyOn(actions, 'updatePost');
    const showMoreComments = useSelector.mockReturnValue([]);
    const loggedUser = useSelector.mockReturnValue(user);
    const users = useSelector.mockReturnValue(usersArray);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <BrowserRouter>
        <PostsContainer posts={posts} />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByTestId('likeBtn'));
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(handleCklickLike).toHaveBeenCalledTimes(1);
  });

  test('Click on button favorite', () => {
    const handleCklickFavorite = jest.spyOn(actions, 'updatePost');
    const showMoreComments = useSelector.mockReturnValue([]);
    const loggedUser = useSelector.mockReturnValue(user);
    const users = useSelector.mockReturnValue(usersArray);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <BrowserRouter>
        <PostsContainer posts={posts} />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('favoriteBtn'));
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(handleCklickFavorite).toHaveBeenCalledTimes(1);
  });

  /* test('Click on button ShowMore', () => {
    const handleCklickShowMore = jest.spyOn(actions, 'showMoreChange');
    const showMoreComments = useSelector.mockReturnValue([]);
    const loggedUser = useSelector.mockReturnValue(user);
    const users = useSelector.mockReturnValue(usersArray);
    const currentPost = useSelector.mockReturnValue(post);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <BrowserRouter>
        <PostsContainer posts={posts} />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('showMoreBtn'));
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(handleCklickShowMore).toHaveBeenCalledTimes(1);
  }); */

  test('Click on button comments', () => {
    const changeIsOpenPost = jest.spyOn(actions, 'changeIsOpenPost');
    const getPostById = jest.spyOn(actions, 'getPostById');
    const showMoreComments = useSelector.mockReturnValue([]);
    const loggedUser = useSelector.mockReturnValue(user);
    const users = useSelector.mockReturnValue(usersArray);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <BrowserRouter>
        <PostsContainer posts={posts} />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('commentBtn'));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(getPostById).toHaveBeenCalledTimes(1);
    expect(changeIsOpenPost).toHaveBeenCalledTimes(1);
  });
});
