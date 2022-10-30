import reduser from './reducer';
import {
  GET_USERS, GET_USER_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER, GET_SUBSCRIBERS_BY_USER_ID,
} from './actiions';

const initialState = {
  users: [],
  currentUser: {},
  loggedUser: {
    _id: '635429e5461d59d5a106db66',
    avatar: './images/3.jpg',
    nik: 'Milda',
    name: 'Patrisia Mumamba',
  },
  subscribers: [],
};

const addUser = {
  users: [{
    nik: 'ADD_USER',
  }],
  currentUser: {},
  loggedUser: {
    _id: '635429e5461d59d5a106db66',
    avatar: './images/3.jpg',
    nik: 'Milda',
    name: 'Patrisia Mumamba',
  },
  subscribers: [],
};

const getUserById = {
  users: [],
  currentUser: {
    nik: 'GET_USER_BY_ID',
  },
  loggedUser: {
    _id: '635429e5461d59d5a106db66',
    avatar: './images/3.jpg',
    nik: 'Milda',
    name: 'Patrisia Mumamba',
  },
  subscribers: [],
};

const getUsers = {
  users: [{
    nik: 'GET_USERS',
  }],
  currentUser: {},
  loggedUser: {
    _id: '635429e5461d59d5a106db66',
    avatar: './images/3.jpg',
    nik: 'Milda',
    name: 'Patrisia Mumamba',
  },
  subscribers: [],
};

const updateUser = {
  users: [{
    nik: 'UPDATE_USER',
  }],
  currentUser: {},
  loggedUser: {
    _id: '635429e5461d59d5a106db66',
    avatar: './images/3.jpg',
    nik: 'Milda',
    name: 'Patrisia Mumamba',
  },
  subscribers: [],
};

const deleteUser = {
  users: [{
    nik: 'DELETE_USER',
  }],
  currentUser: {},
  loggedUser: {
    _id: '635429e5461d59d5a106db66',
    avatar: './images/3.jpg',
    nik: 'Milda',
    name: 'Patrisia Mumamba',
  },
  subscribers: [],
};

const getSubscribersByUserId = {
  users: [],
  currentUser: {},
  loggedUser: {
    _id: '635429e5461d59d5a106db66',
    avatar: './images/3.jpg',
    nik: 'Milda',
    name: 'Patrisia Mumamba',
  },
  subscribers: [{ nik: 'GET_SUBSCRIBERS_BY_USER_ID' }],
};

describe('Reducers testing', () => {
  test('Should return the initial value', () => {
    const state = JSON.stringify(reduser(undefined, { type: undefined }));
    expect(state).toEqual(JSON.stringify(initialState));
  });

  test('Should return with action ADD_USER', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: ADD_USER,
      payload: {
        nik: 'ADD_USER',
      },
    }))).toEqual(JSON.stringify(addUser));
  });

  test('Should return with action GET_USER_BY_ID', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: GET_USER_BY_ID,
      payload: {
        nik: 'GET_USER_BY_ID',
      },
    }))).toEqual(JSON.stringify(getUserById));
  });

  test('Should return with action GET_USERS', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: GET_USERS,
      payload: [{
        nik: 'GET_USERS',
      }],
    }))).toEqual(JSON.stringify(getUsers));
  });

  test('Should return with action UPDATE_USER', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: UPDATE_USER,
      payload: [{
        nik: 'UPDATE_USER',
      }],
    }))).toEqual(JSON.stringify(updateUser));
  });

  test('Should return with action DELETE_USER', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: DELETE_USER,
      payload: [{
        nik: 'DELETE_USER',
      }],
    }))).toEqual(JSON.stringify(deleteUser));
  });

  test('Should return with action GET_SUBSCRIBERS_BY_USER_ID', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: GET_SUBSCRIBERS_BY_USER_ID,
      payload: [{
        nik: 'GET_SUBSCRIBERS_BY_USER_ID',
      }],
    }))).toEqual(JSON.stringify(getSubscribersByUserId));
  });
});
