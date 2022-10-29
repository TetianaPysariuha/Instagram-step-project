import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './UserPage.module.scss';
import defaultAvatar from './default-avatar.jpg';

function UserPage() {
  return (
    <div className={styles.userPage}>
      <div className={styles.header}>
        <div className={styles.avatarImgWrraper}>
          <img src={defaultAvatar} alt="avatar" className={styles.avatarImg} />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.headerNicknameWrrapper}>
            <h1>maximka</h1>
            <button type="button">Стежити</button>
          </div>
          <ul className={styles.headerUserInfo}>
            <li>
              <span>9</span>
              дописів
            </li>
            <li>
              <span>148</span>
              читачів
            </li>
            <li>
              <span>158</span>
              стежать
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.userPageMenu}>
        <NavLink end to="/userpage/" exact className={({ isActive }) => (isActive ? `${styles.userPageMenuLinkAcite} ${styles.userPageMenuLink}` : styles.userPageMenuLink)}>
          <svg aria-label="" className="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12">
            <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985" />
          </svg>
          <span>ДОПИСИ</span>
        </NavLink>
        <NavLink to="saved" className={({ isActive }) => (isActive ? `${styles.userPageMenuLinkAcite} ${styles.userPageMenuLink}` : styles.userPageMenuLink)}>
          <svg aria-label="" className="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          <span>ЗБЕРЕЖЕНІ</span>
        </NavLink>
      </div>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <h1>posts</h1>
              <h1>posts</h1>
              <h1>posts</h1>
              <h1>posts</h1>
            </>
          )}
        />
        <Route
          path="/saved/"
          element={(
            <>
              <h1>saved</h1>
              <h1>saved</h1>
              <h1>saved</h1>
              <h1>saved</h1>
            </>
          )}
        />
      </Routes>
    </div>
  );
}

export default UserPage;
