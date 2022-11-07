import {
  LOGGING_USER, GET_USERS, GET_USER_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER, GET_SUBSCRIBERS_BY_USER_ID,
} from './actiions';

const SERVER_URL = 'https://nameless-lake-66137.herokuapp.com';

export const loggedUserReceiveData = (payload) => async (dispatch) => {
  const user = await fetch(`${SERVER_URL}/users/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: LOGGING_USER, payload: user });
};

export const getUsers = () => async (dispatch) => {
  const users = await fetch(`${SERVER_URL}/users`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_USERS, payload: users });
};

export const getUserById = (payload) => async (dispatch) => {
  const user = await fetch(`${SERVER_URL}/users/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_USER_BY_ID, payload: user });
};

export const addNewUser = (payload) => async (dispatch) => {
  const user = await fetch(`${SERVER_URL}/users`, {
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
  const users = await fetch(`${SERVER_URL}/users/${payload.id}`, {
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
  const users = await fetch(`${SERVER_URL}/users/${payload}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: { 'Content-Type': 'aplication/json' },
  }).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: DELETE_USER, payload: users });
};

export const getSubscribersByUserId = (payload) => async (dispatch) => {
  const subscribers = await fetch(`${SERVER_URL}/users/${payload}`).then((res) => res.json()).then((data) => data.data);
  dispatch({ type: GET_SUBSCRIBERS_BY_USER_ID, payload: subscribers });
};
