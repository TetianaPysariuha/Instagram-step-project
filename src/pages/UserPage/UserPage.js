/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  NavLink, Route, Routes, useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './UserPage.module.scss';
import defaultAvatar from './default-avatar.jpg';
import { getUserById } from '../../store/users/actionCreators';
import Preloaders from './preloaders/Preloaders';
import FollowBtn from './FollowBtn/FollowBtn';
import PostSvg from './PostsSvg/PostSvg';
import SaveSvg from './SaveSvg/SaveSvg';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    nik, avatar, name, posts, followBy, _id,
  } = useSelector((store) => store.users.currentUser);
  const loggedUser = useSelector((store) => store.users.loggedUser);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  if (!_id) {
    return (
      <Preloaders />
    );
  }

  return (
    <div className={styles.userPage}>
      <div className={styles.header}>
        <div className={styles.avatarImgWrraper}>
          <img
            src={defaultAvatar}
            alt="avatar"
            className={styles.avatarImg}
          />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.headerNicknameWrrapper}>
            <h1>{nik.toLowerCase()}</h1>
            <FollowBtn
              currentUserId={_id}
              loggedUserId={loggedUser._id}
              followBy={followBy}
            />
          </div>
          <ul className={styles.headerUserInfo}>
            <li>
              <span>{posts.length}</span>
              дописів
            </li>
            <li>
              <span>148</span>
              читачів
            </li>
            <li>
              <span>{followBy.length}</span>
              стежить
            </li>
          </ul>
          <div className={styles.fullname}>
            <h1>{name}</h1>
          </div>
        </div>
      </div>
      <div className={styles.userPageMenu}>
        <NavLink end to="" className={({ isActive }) => (isActive ? `${styles.userPageMenuLinkAcite} ${styles.userPageMenuLink}` : styles.userPageMenuLink)}>
          <PostSvg />
          <span>ДОПИСИ</span>
        </NavLink>
        <NavLink to="saved" className={({ isActive }) => (isActive ? `${styles.userPageMenuLinkAcite} ${styles.userPageMenuLink}` : styles.userPageMenuLink)}>
          <SaveSvg />
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
        {_id === loggedUser._id && (
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
        )}
      </Routes>
    </div>
  );
}

export default UserPage;
