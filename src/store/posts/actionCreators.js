import {
  GET_POSTS, GET_POST_BY_ID, GET_POSTS_BY_USER_ID, ADD_POST, UPDATE_POST, DELETE_POST,
} from './actiions';

export const getPosts = () => async (dispatch) => {
  const posts = await fetch('http://localhost:3001/posts').then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_POSTS, payload: posts });
};

export const getPostById = (payload) => async (dispatch) => {
  const post = await fetch(`http://localhost:3001/posts/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_POST_BY_ID, payload: post });
};

export const getPostsByUserId = (payload) => async (dispatch) => {
  const post = await fetch(`http://localhost:3001/posts/user/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_POSTS_BY_USER_ID, payload: post });
};

export const addNewPost = (payload) => async (dispatch) => {
  const post = await fetch('http://localhost:3001/posts', {
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
  console.log(payload);
  const posts = await fetch(`http://localhost:3001/posts/${payload.id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload.data),
  }).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: UPDATE_POST, payload: posts });
};

export const deletePost = (payload) => async (dispatch) => {
  const posts = await fetch(`http://localhost:3001/posts/${payload}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: { 'Content-Type': 'aplication/json' },
  }).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: DELETE_POST, payload: posts });
};
