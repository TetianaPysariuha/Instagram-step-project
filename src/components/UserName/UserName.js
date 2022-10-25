import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './UserName.module.scss';

function UserName({ image, nickname, additionalString }) {
  return (
    <div>
      <img src={image} alt="avatar" className={styles.avatar} />
      <Link to="/" className={nickname}>
        <span>{nickname}</span>
      </Link>
      <p>{additionalString}</p>
    </div>
  );
}

UserName.prototype = {
  image: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  additionalString: PropTypes.string,
};

export default UserName;
