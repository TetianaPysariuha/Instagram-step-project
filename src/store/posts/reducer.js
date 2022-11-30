/* eslint-disable no-underscore-dangle */
import {
  GET_POSTS, GET_POST_BY_ID, GET_POSTS_BY_USER_ID, ADD_POST, UPDATE_POST, DELETE_POST, SHOW_MORE_CHANGE, GET_NEW_PAGE_POSTS, CLEAR_POSTS, GET_FAVORITE_POSTS, CLEAR_CURRENT_POST,
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

// the rule is switched off because state shoul be first in props
// eslint-disable-next-line default-param-last
const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, posts: action.payload };
    }
    case CLEAR_POSTS: {
      return {
        ...state, posts: [], page: 0, totalPostsOnServer: 0,
      };
    }
    case CLEAR_CURRENT_POST: {
      return { ...state, currentPost: {} };
    }
    case GET_NEW_PAGE_POSTS: {
      if (action.payload.data.length > 0 && state.posts.length < action.payload.countAll) {
        const newPosts = [...state.posts, ...action.payload.data];
        const newPage = state.page + 1;
        return {
          ...state, posts: newPosts, page: newPage, totalPostsOnServer: action.payload.countAll,
        };
      }
      return state;
    }
    case GET_POST_BY_ID: {
      return { ...state, currentPost: action.payload };
    }
    case GET_POSTS_BY_USER_ID: {
      return { ...state, currentPost: action.payload };
    }
    case GET_FAVORITE_POSTS: {
      return { ...state, favorites: action.payload };
    }
    case ADD_POST: {
      /* const newPosts = [...state.posts];
      newPosts.push(action.payload);
      return { ...state, posts: newPosts }; */
      return state;
    }
    case UPDATE_POST: {
      if (action.payload.status === 'success') {
        const newPosts = [...state.posts];
        newPosts.splice(newPosts.findIndex((el) => el._id === action.payload.data._id), 1, action.payload.data);
        return { ...state, posts: newPosts, currentPost: action.payload.data };
      }
      return state;
    }
    case DELETE_POST: {
      if (action.payload.status === 'success') {
        const newPosts = state.posts.filter((post) => post._id !== action.payload.data._id);
        return { ...state, posts: newPosts };
      }
      return state;
    }
    case SHOW_MORE_CHANGE: {
      const showMoreComments = [...state.showMoreComments];
      if (showMoreComments.filter((el) => el === action.payload.postId).length > 0) {
        const newShowMoreComments = showMoreComments.filter((el) => el !== action.payload.postId);
        return { ...state, showMoreComments: newShowMoreComments };
      }
      showMoreComments.push(action.payload.postId);
      return { ...state, showMoreComments };
    }
    default: {
      return state;
    }
  }
};

export default postsReduser;
