import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUserReceiveData, updateUser } from '../../store/users/actionCreators';
import styles from './FollowBtn.module.scss';

function FollowBtn({ currentUserId, loggedUserId }) {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);
  const followBy = useSelector((store) => store.users.loggedUser.followBy) || [];

  useEffect(() => {
    if (loggedUserId) {
      dispatch(loggedUserReceiveData(loggedUserId));
    }
  }, [dispatch, users, loggedUserId]);

  if (loggedUserId === currentUserId) {
    return (<span className={styles.yourAccSpan}>це ваш аккаунт</span>);
  }

  const handleClickSubscribe = (userId) => {
    let newFollowBy;
    if (followBy.includes(userId)) {
      newFollowBy = followBy.filter((el) => el !== userId);
    } else {
      newFollowBy = [...followBy];
      newFollowBy.push(userId);
    }
    dispatch(updateUser({ id: loggedUserId, data: { followBy: newFollowBy } }));
    /* dispatch(loggedUserReceiveData(loggedUserId)); */
  };

  return (
    <button
      onClick={() => {
        handleClickSubscribe(currentUserId);
      }}
      className={styles.followBtn}
      type="button"
    >
      {followBy.includes(currentUserId) ? 'Відписатись' : 'Підписатися'}
    </button>
  );
}

FollowBtn.prototype = {
  currentUserId: PropTypes.string.isRequired,
  loggedUserId: PropTypes.string.isRequired,
};

FollowBtn.defaultProps = {
  followBy: [],
};

export default FollowBtn;
