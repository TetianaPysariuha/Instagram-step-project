import reduser from './reducer';
import {
  LOGGING_USER, GET_USERS, GET_USER_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER, GET_SUBSCRIBERS_BY_USER_ID,
} from './actiions';

const user = {
  _id: '635429e5461d59d5a106db66',
  avatar: 'https://res.cloudinary.com/dx84fdyhd/image/upload/v1667755687/instagram/avatar/1_wfz4lc.jpg',
  nik: 'Milda',
  name: 'Patrisia Mumamba',
  followBy: [
    '6355802bab5157181c8ed0d2',
    '6355802bab5157181c8ed0d4',
    '6355802bab5157181c8ed0d5',
    '6355802bab5157181c8ed0d3',
    '635ad2dece62ea7848f38ea9',
    '6355802bab5157181c8ed0da',
  ],
  __v: 0,
  posts: [{
    _id: '63558b3d161b35a6d8b4d9ff',
    img: 'https://res.cloudinary.com/dx84fdyhd/image/upload/v1667755090/instagram/post14_dmu9vm.jpg',
    userid: '635429e5461d59d5a106db66',
    title: 'Some post for deleting user',
    description: 'Some description about post',
    likes: [],
    favorite: [],
    comments: [],
    seeCount: 999,
    __v: 0,
  }],
};

const logedUser = {
  users: [],
  currentUser: {},
  loggedUser: {
    _id: '635429e5461d59d5a106db66',
    avatar: 'https://res.cloudinary.com/dx84fdyhd/image/upload/v1667755687/instagram/avatar/1_wfz4lc.jpg',
    nik: 'Milda',
    name: 'Patrisia Mumamba',
    followBy: [
      '6355802bab5157181c8ed0d2',
      '6355802bab5157181c8ed0d4',
      '6355802bab5157181c8ed0d5',
      '6355802bab5157181c8ed0d3',
      '635ad2dece62ea7848f38ea9',
      '6355802bab5157181c8ed0da',
    ],
  },
  subscribers: [],
};

const initialState = {
  users: [],
  currentUser: {},
  loggedUser: {},
  subscribers: [],
};

const addUser = {
  users: [{
    nik: 'ADD_USER',
  }],
  currentUser: {},
  loggedUser: {},
  subscribers: [],
};

const getUserById = {
  users: [],
  currentUser: {
    nik: 'GET_USER_BY_ID',
  },
  loggedUser: {},
  subscribers: [],
};

const getUsers = {
  users: [{
    nik: 'GET_USERS',
  }],
  currentUser: {},
  loggedUser: {},
  subscribers: [],
};

const updateUser = {
  users: [{
    nik: 'UPDATE_USER',
  }],
  currentUser: {},
  loggedUser: {},
  subscribers: [],
};

const deleteUser = {
  users: [{
    nik: 'DELETE_USER',
  }],
  currentUser: {},
  loggedUser: {},
  subscribers: [],
};

const getSubscribersByUserId = {
  users: [],
  currentUser: {},
  loggedUser: {},
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

  test('Should return with action LOGGING_USER', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: LOGGING_USER,
      payload: user,
    }))).toEqual(JSON.stringify(logedUser));
  });
});
