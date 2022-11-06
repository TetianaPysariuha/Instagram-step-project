import reduser from './reducer';
import {
  GET_POSTS, GET_POST_BY_ID, GET_POSTS_BY_USER_ID, ADD_POST, UPDATE_POST, DELETE_POST, SHOW_MORE_CHANGE, GET_NEW_PAGE_POSTS, CLEAR_POSTS, GET_FAVORITE_POSTS,
} from './actiions';

const initialState = {
  posts: [],
  currentPost: {},
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const addPost = {
  posts: [{
    _id: 1,
    title: 'POST',
  }],
  currentPost: {},
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const getPostById = {
  posts: [],
  currentPost: {
    title: 'GET_POST_BY_ID',
  },
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const getPostByUserId = {
  posts: [],
  currentPost: {
    title: 'GET_POSTS_BY_USER_ID',
  },
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const getPosts = {
  posts: [{
    title: 'GET_POSTS',
  }],
  currentPost: {},
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const updatePost = {
  posts: [{
    _id: 1,
    title: 'UPDATE_POST_NEW',
  }],
  currentPost: {},
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const deletePost = {
  posts: [],
  currentPost: {},
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const showMoreChange = {
  posts: [],
  currentPost: {},
  showMoreComments: [1],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const getNewPagePosts = {
  posts: [{
    title: 'GET_NEW_PAGE_POSTS',
  }],
  currentPost: {},
  showMoreComments: [],
  page: 1,
  postsOnPage: 3,
  totalPostsOnServer: 5,
  favorites: [],
};

const clearPosts = {
  posts: [],
  currentPost: {},
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [],
};

const getFavoritePosts = {
  posts: [],
  currentPost: {},
  showMoreComments: [],
  page: 0,
  postsOnPage: 3,
  totalPostsOnServer: 0,
  favorites: [{
    title: 'GET_FAVORITE_POSTS',
  }],
};

describe('Reducers testing', () => {
  test('Should return the initial value', () => {
    const state = JSON.stringify(reduser(undefined, { type: undefined }));
    expect(state).toEqual(JSON.stringify(initialState));
  });

  test('Should return with action ADD_POST', () => {
    expect(JSON.stringify(reduser(addPost, {
      type: ADD_POST,
      payload: {
        _id: 1,
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
    expect(JSON.stringify(reduser(addPost, {
      type: UPDATE_POST,
      payload: {
        data: {
          _id: 1,
          title: 'UPDATE_POST_NEW',
        },
        status: 'success',
      },
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

  test('Should return with action SHOW_MORE_CHANGE', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: SHOW_MORE_CHANGE,
      payload: { postId: 1 },
    }))).toEqual(JSON.stringify(showMoreChange));
  });

  test('Should return with action GET_NEW_PAGE_POSTS', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: GET_NEW_PAGE_POSTS,
      payload: {
        data: [{ title: 'GET_NEW_PAGE_POSTS' }],
        countAll: 5,
      },
    }))).toEqual(JSON.stringify(getNewPagePosts));
  });

  test('Should return with action CLEAR_POSTS', () => {
    expect(JSON.stringify(reduser(getNewPagePosts, {
      type: CLEAR_POSTS,
    }))).toEqual(JSON.stringify(clearPosts));
  });

  test('Should return with action GET_FAVORITE_POSTS', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: GET_FAVORITE_POSTS,
      payload: [{ title: 'GET_FAVORITE_POSTS' }],
    }))).toEqual(JSON.stringify(getFavoritePosts));
  });
});
