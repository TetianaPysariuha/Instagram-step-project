import {
  LOGGING_USER, GET_USERS, GET_USER_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER, GET_SUBSCRIBERS_BY_USER_ID,
} from './actiions';

const initialState = {
  users: [],
  currentUser: {},
  loggedUser: {},
  subscribers: [],
};

// the rule is switched off because state shoul be first in props
// eslint-disable-next-line default-param-last
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_USER: {
      // eslint-disable-next-line no-unused-vars
      const { posts, __v, ...other } = action.payload;
      return { ...state, loggedUser: other };
    }
    case GET_USERS: {
      return { ...state, users: action.payload };
    }
    case GET_USER_BY_ID: {
      return { ...state, currentUser: action.payload };
    }
    case ADD_USER: {
      const newUsers = [...state.users];
      newUsers.push(action.payload);
      return { ...state, users: newUsers };
    }
    case UPDATE_USER: {
      return { ...state, users: action.payload };
    }
    case DELETE_USER: {
      return { ...state, users: action.payload };
    }
    case GET_SUBSCRIBERS_BY_USER_ID: {
      return { ...state, subscribers: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
