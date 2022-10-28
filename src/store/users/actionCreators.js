import {
  GET_USERS, GET_UDER_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER,
} from './actiions';

export const getUsers = () => async (dispatch) => {
  const users = await fetch('http://localhost:3001/users').then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_USERS, payload: users });
};

export const getUserById = (payload) => async (dispatch) => {
  const user = await fetch(`http://localhost:3001/users/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_UDER_BY_ID, payload: user });
};

export const addNewUser = (payload) => async (dispatch) => {
  const user = await fetch('http://localhost:3001/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: ADD_USER, payload: user });
};

export const updateUser = (payload) => async (dispatch) => {
  const users = await fetch(`http://localhost:3001/users/${payload.id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload.data),
  }).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: UPDATE_USER, payload: users });
};

export const deleteUser = (payload) => async (dispatch) => {
  const users = await fetch(`http://localhost:3001/users/${payload}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: { 'Content-Type': 'aplication/json' },
  }).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: DELETE_USER, payload: users });
};