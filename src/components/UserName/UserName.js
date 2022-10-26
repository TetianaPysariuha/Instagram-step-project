import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './UserName.module.scss';
import defaultAvatar from './default-avatar.jpg';

function UserName({
  image, nickname, additionalString, comment, additionalStringFunc,
}) {
  return (
    <div className={styles.userNameContainer}>
      <Link to={`/${nickname}/`} className={styles.avatarLink}>
        <img src={image} alt="avatar" className={styles.avatar} />
      </Link>
      <div className={styles.nicknameWrraper}>
        <div>
          <Link to={`/${nickname}/`} className={styles.nickname}>
            <span>{nickname}</span>
          </Link>
          <p className={styles.comment}>{comment}</p>
        </div>
        {additionalString && <p className={styles.additionalString} onClick={additionalStringFunc}>{additionalString}</p>}
      </div>
    </div>
  );
}

UserName.prototype = {
  image: PropTypes.string,
  nickname: PropTypes.string.isRequired,
  additionalString: PropTypes.string,
  comment: PropTypes.string,
  additionalStringFunc: PropTypes.func,
};

UserName.defaultProps = {
  image: defaultAvatar,
  additionalString: '',
  additionalStringFunc: () => {},
};

export default UserName;
