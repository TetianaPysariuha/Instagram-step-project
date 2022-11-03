import {
  GET_POSTS, GET_POST_BY_ID, GET_POSTS_BY_USER_ID, ADD_POST, UPDATE_POST, DELETE_POST, SHOW_MORE_CHANGE,
} from './actiions';

const initialState = {
  posts: [],
  currentPost: {},
  showMoreComments: [],
};

// the rule is switched off because state shoul be first in props
// eslint-disable-next-line default-param-last
const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, posts: action.payload };
    }
    case GET_POST_BY_ID: {
      return { ...state, currentPost: action.payload };
    }
    case GET_POSTS_BY_USER_ID: {
      return { ...state, currentPost: action.payload };
    }
    case ADD_POST: {
      const newPosts = [...state.posts];
      newPosts.push(action.payload);
      return { ...state, posts: newPosts };
    }
    case UPDATE_POST: {
      return { ...state, posts: action.payload };
    }
    case DELETE_POST: {
      return { ...state, posts: action.payload };
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
