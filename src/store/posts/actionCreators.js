import {
  GET_POSTS, GET_POST_BY_ID, GET_POSTS_BY_USER_ID, ADD_POST, UPDATE_POST, DELETE_POST, SHOW_MORE_CHANGE, GET_NEW_PAGE_POSTS, CLEAR_POSTS, GET_FAVORITE_POSTS, CHANGE_ISOPENPOST,
} from './actiions';

const SERVER_URL = 'https://nameless-lake-66137.herokuapp.com';

export const getPosts = () => async (dispatch) => {
  const posts = await fetch(`${SERVER_URL}/posts`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_POSTS, payload: posts });
};

export const clearPosts = () => ({ type: CLEAR_POSTS });

export const loadNewPagePosts = (payload) => async (dispatch) => {
  if (payload.start !== null && payload.end) {
    const response = await fetch(`${SERVER_URL}/posts/quantity/${payload.start}&${payload.end}`).then((res) => res.json()).then((data) => data);
    dispatch({ type: GET_NEW_PAGE_POSTS, payload: { data: response.data, countAll: response.totalCount } });
  } else {
    console.error(`For loafing posts should be start, end and userId parametres. Received: start=${payload.start},  end=${payload.end}`);
  }
};

export const getPostById = (payload) => async (dispatch) => {
  const post = await fetch(`${SERVER_URL}/posts/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_POST_BY_ID, payload: post });
};

export const getPostsByUserId = (payload) => async (dispatch) => {
  const post = await fetch(`${SERVER_URL}/posts/user/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_POSTS_BY_USER_ID, payload: post });
};

export const addNewPost = (payload) => async (dispatch) => {
  const post = await fetch(`${SERVER_URL}/posts`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: ADD_POST, payload: post });
};

export const updatePost = (payload) => async (dispatch) => {
  const post = await fetch(`${SERVER_URL}/posts/${payload.id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload.data),
  }).then((res) => res.json()).then((data) => data);
  dispatch({ type: UPDATE_POST, payload: post });
};

export const deletePost = (payload) => async (dispatch) => {
  const post = await fetch(`${SERVER_URL}/posts/${payload}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: { 'Content-Type': 'aplication/json' },
  }).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: DELETE_POST, payload: post });
};

export const showMoreChange = (payload) => ({ type: SHOW_MORE_CHANGE, payload });

export const getFavoritePostsByUserId = (payload) => async (dispatch) => {
  const posts = await fetch(`${SERVER_URL}/posts/favorite/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_FAVORITE_POSTS, payload: posts });
};

export const changeIsOpenPost = (payload) => ({ type: CHANGE_ISOPENPOST, payload });
