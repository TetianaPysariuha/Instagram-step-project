/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, updateUser } from '../../../store/users/actionCreators';
import styles from './FollowBtn.module.scss';

function FollowBtn({ currentUserId, loggedUserId }) {
  const dispatch = useDispatch();
  const followBy = useSelector((store) => store.users.loggedUser.followBy) || [];
  // const handleClickSubscribe = (userId) => {
  //   let newFollowBy;
  //   if (followBy.includes(userId)) {
  //     newFollowBy = followBy.filter((el) => el !== userId);
  //   } else {
  //     newFollowBy = [...followBy];
  //     newFollowBy.push(userId);
  //   }
  //   dispatch(updateUser({ id: loggedUserId, data: { followBy: newFollowBy } }));
  // };
  if (loggedUserId === currentUserId) {
    return (<span className={styles.yourAccSpan}>це ваш аккаунт</span>);
  }
  console.log(followBy);
  // else if(currentUserId != followBy.indexOf...) { return(<button onClick=(() => {}) type="button">Відписатись</button>)}
  return (
    <button
      onClick={() => {
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
