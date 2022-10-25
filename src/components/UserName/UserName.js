import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './UserName.module.scss';

function UserName({
  image, nickname, additionalString, comment,
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
        {additionalString && <p className={styles.additionalString}>{additionalString}</p>}
      </div>
    </div>
  );
}

UserName.prototype = {
  image: PropTypes.string,
  nickname: PropTypes.string.isRequired,
  additionalString: PropTypes.string,
  comment: PropTypes.string,
};

UserName.defaultProps = {
  image: './images/default-avatar.jpg',
  additionalString: '',
};

export default UserName;
