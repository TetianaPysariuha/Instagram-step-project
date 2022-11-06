import PropTypes from 'prop-types';
import styles from './FollowBtn.module.scss';

function FollowBtn({ currentUserId, loggedUserId }) {
  if (loggedUserId === currentUserId) {
    return (<span className={styles.yourAccSpan}>це ваш аккаунт</span>);
  }
  // else if(currentUserId != followBy.indexOf...) { return(<button onClick=(() => {}) type="button">Відписатись</button>)}
  return <button className={styles.followBtn} type="button">Стежити</button>;
}

FollowBtn.prototype = {
  currentUserId: PropTypes.string.isRequired,
  loggedUserId: PropTypes.string.isRequired,
};

export default FollowBtn;
