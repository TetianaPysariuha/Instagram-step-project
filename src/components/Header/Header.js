import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from './Logo';
import defaultAvatar from './default-avatar.jpg';

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className={styles.profile}>
            <Link to="/"><svg aria-label="Главная страница" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" /></svg></Link>
            <Link to="userpage"><img src={defaultAvatar} alt="avatar" className={styles.avatar} /></Link>
          </div>
        </div>
      </div>
      <div className={styles.headerPlug} />
    </>
  );
}

export default Header;
