/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import PostsContainer from './PostsContainer';
import * as actions from '../../store/posts/actionCreators';
import '@testing-library/jest-dom';

const midlewares = [thunk];
const mockStore = configureStore(midlewares);

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
  test('Should PostContainer to render without props', () => {
    const store = mockStore({
      modal: {
        content: '<></>',
        isOpenModal: false,
      },
      users: {
        users: usersArray,
        currentUser: user,
        loggedUser: user,
        subscribers: [],
      },
      posts: {
        posts,
        currentPost: {},
        showMoreComments: [],
        page: 0,
        postsOnPage: 3,
        totalPostsOnServer: 0,
        favorites: [],
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PostsContainer />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should PostContainer to render with props', () => {
    const store = mockStore({
      modal: {
        content: '<></>',
        isOpenModal: false,
      },
      users: {
        users: usersArray,
        currentUser: user,
        loggedUser: user,
        subscribers: [],
      },
      posts: {
        posts: [],
        currentPost: {},
        showMoreComments: [],
        page: 0,
        postsOnPage: 3,
        totalPostsOnServer: 0,
        favorites: [],
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PostsContainer posts={posts} />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should PostContainer to render with open Modal', () => {
    const store = mockStore({
      modal: {
        content: '<></>',
        isOpenModal: true,
      },
      users: {
        users: usersArray,
        currentUser: user,
        loggedUser: user,
        subscribers: [],
      },
      posts: {
        posts: [],
        currentPost: post,
        showMoreComments: [],
        page: 0,
        postsOnPage: 3,
        totalPostsOnServer: 0,
        favorites: [],
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PostsContainer />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('PostContainer functions work', () => {
  test('Click on button Like', () => {
    const handleCklickLike = jest.spyOn(actions, 'updatePost');

    const store = mockStore({
      modal: {
        content: '<></>',
        isOpenModal: false,
      },
      users: {
        users: usersArray,
        currentUser: user,
        loggedUser: user,
        subscribers: [],
      },
      posts: {
        posts: [],
        currentPost: {},
        showMoreComments: [],
        page: 0,
        postsOnPage: 3,
        totalPostsOnServer: 0,
        favorites: [],
      },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <PostsContainer posts={posts} />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId('likeBtn'));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(handleCklickLike).toHaveBeenCalledTimes(1);
  });

  test('Click on button favorite', () => {
    const handleCklickFavorite = jest.spyOn(actions, 'updatePost');

    const store = mockStore({
      modal: {
        content: '<></>',
        isOpenModal: false,
      },
      users: {
        users: usersArray,
        currentUser: user,
        loggedUser: user,
        subscribers: [],
      },
      posts: {
        posts: [],
        currentPost: {},
        showMoreComments: [],
        page: 0,
        postsOnPage: 3,
        totalPostsOnServer: 0,
        favorites: [],
      },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <PostsContainer posts={posts} />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId('favoriteBtn'));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(handleCklickFavorite).toHaveBeenCalledTimes(1);
  });

  test('Click on button ShowMore', () => {
    const handleCklickShowMore = jest.spyOn(actions, 'showMoreChange');

    const store = mockStore({
      modal: {
        content: '<></>',
        isOpenModal: false,
      },
      users: {
        users: usersArray,
        currentUser: user,
        loggedUser: user,
        subscribers: [],
      },
      posts: {
        posts: [],
        currentPost: {},
        showMoreComments: [],
        page: 0,
        postsOnPage: 3,
        totalPostsOnServer: 0,
        favorites: [],
      },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <PostsContainer posts={posts} />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId('showMoreBtn'));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(handleCklickShowMore).toHaveBeenCalledTimes(1);
  });

  test('Click on button comments', () => {
    const getPostById = jest.spyOn(actions, 'getPostById');

    const store = mockStore({
      modal: {
        content: '<></>',
        isOpenModal: false,
      },
      users: {
        users: usersArray,
        currentUser: user,
        loggedUser: user,
        subscribers: [],
      },
      posts: {
        posts,
        currentPost: {},
        showMoreComments: [],
        page: 0,
        postsOnPage: 3,
        totalPostsOnServer: 0,
        favorites: [],
      },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <PostsContainer />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId('commentBtn'));
    expect(store.dispatch).toHaveBeenCalledTimes(3);
  });
});
