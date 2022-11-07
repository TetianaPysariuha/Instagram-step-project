import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import usersReducer from './users/reducer';
import postsReduser from './posts/reducer';

const appReducer = combineReducers({
  modal: modalReducer,
  users: usersReducer,
  posts: postsReduser,
});

export default appReducer;
