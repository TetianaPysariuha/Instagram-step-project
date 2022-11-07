/* eslint-disable no-underscore-dangle */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './UsersContainer.module.scss';
import UserName from '../UserName/UserName';
import { updateUser } from '../../store/users/actionCreators';

function UsersContainer({ isButton, users, loggedUser }) {
  const dispatch = useDispatch();

  const handleClickSubscribe = (userId) => {
    let newFollowBy;
    const followBy = [...loggedUser.followBy];
    if (followBy.includes(userId)) {
      newFollowBy = followBy.filter((el) => el !== userId);
    } else {
      newFollowBy = [...followBy];
      newFollowBy.push(userId);
    }
    dispatch(updateUser({ id: loggedUser._id, data: { followBy: newFollowBy } }));
  };

  const getUserName = (user) => (
    <div className={styles.user} key={user._id}>
      <UserName image={user.avatar} nickname={user.nik} />
      {isButton && <button data-testid="subscribeBtn" type="button" onClick={() => handleClickSubscribe(user._id)}>{loggedUser.followBy.includes(user._id) ? 'Відписатись' : 'Підписатися '}</button>}
    </div>
  );

  return (
    <div className={styles.userContainer}>
      <ul>
        {users.length > 0 && loggedUser && users.map((user) => getUserName(user))}
      </ul>
    </div>
  );
}

UsersContainer.prototype = {
  isButton: PropTypes.bool,
  users: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    avatar: PropTypes.string,
    nik: PropTypes.string,
    name: PropTypes.string,
    followBy: PropTypes.arrayOf(PropTypes.string),
    __v: PropTypes.number,
    posts: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      img: PropTypes.string,
      userid: PropTypes.string,
      description: PropTypes.string,
      likes: PropTypes.arrayOf(PropTypes.string),
      favorite: PropTypes.arrayOf(PropTypes.string),
      comments: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        userid: PropTypes.string,
        text: PropTypes.string,
      })),
      seeCount: PropTypes.number,
      __v: PropTypes.number,
    })),
  })),
  loggedUser: PropTypes.shape({
    _id: PropTypes.string,
    avatar: PropTypes.string,
    nik: PropTypes.string,
    name: PropTypes.string,
    followBy: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default memo(UsersContainer);
