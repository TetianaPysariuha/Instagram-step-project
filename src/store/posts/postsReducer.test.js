import reduser from './reducer';
import {
  GET_POSTS, GET_POST_BY_ID, GET_POSTS_BY_USER_ID, ADD_POST, UPDATE_POST, DELETE_POST,
} from './actiions';

const initialState = {
  posts: [],
  currentPost: {},
};

const addPost = {
  posts: [{
    title: 'ADD_POST',
  }],
  currentPost: {},
};

const getPostById = {
  posts: [],
  currentPost: {
    title: 'GET_POST_BY_ID',
  },
};

const getPostByUserId = {
  posts: [],
  currentPost: {
    title: 'GET_POSTS_BY_USER_ID',
  },
};

const getPosts = {
  posts: [{
    title: 'GET_POSTS',
  }],
  currentPost: {},
};

const updatePost = {
  posts: [{
    title: 'UPDATE_POST',
  }],
  currentPost: {},
};

const deletePost = {
  posts: [{
    title: 'DELETE_POST',
  }],
  currentPost: {},
};

describe('Reducers testing', () => {
  test('Should return the initial value', () => {
    const state = JSON.stringify(reduser(undefined, { type: undefined }));
    expect(state).toEqual(JSON.stringify(initialState));
  });

  test('Should return with action ADD_POST', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: ADD_POST,
      payload: {
        title: 'ADD_POST',
      },
    }))).toEqual(JSON.stringify(addPost));
  });

  test('Should return with action GET_POST_BY_ID', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: GET_POST_BY_ID,
      payload: {
        title: 'GET_POST_BY_ID',
      },
    }))).toEqual(JSON.stringify(getPostById));
  });

  test('Should return with action GET_POSTS_BY_USER_ID', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: GET_POSTS_BY_USER_ID,
      payload: {
        title: 'GET_POSTS_BY_USER_ID',
      },
    }))).toEqual(JSON.stringify(getPostByUserId));
  });

  test('Should return with action GET_POSTS', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: GET_POSTS,
      payload: [{
        title: 'GET_POSTS',
      }],
    }))).toEqual(JSON.stringify(getPosts));
  });

  test('Should return with action UPDATE_POST', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: UPDATE_POST,
      payload: [{
        title: 'UPDATE_POST',
      }],
    }))).toEqual(JSON.stringify(updatePost));
  });

  test('Should return with action DELETE_POST', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: DELETE_POST,
      payload: [{
        title: 'DELETE_POST',
      }],
    }))).toEqual(JSON.stringify(deletePost));
  });
});