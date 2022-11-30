/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  NavLink, Route, Routes, useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './UserPage.module.scss';
import defaultAvatar from './default-avatar.jpg';
import { getSubscribersByUserId, getUserById, clearCurrentUser } from '../../store/users/actionCreators';
import Preloaders from '../../components/preloaders/Preloaders';
import FollowBtn from '../../components/FollowBtn/FollowBtn';
import PostSvg from './PostsSvg/PostSvg';
import SaveSvg from './SaveSvg/SaveSvg';
import UserPostContainer from '../../components/UserPostContainer/UserPostContainer';
import { getFavoritePostsByUserId } from '../../store/posts/actionCreators';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    nik, avatar, name, posts, followBy, _id,
  } = useSelector((store) => store.users.currentUser);
  const followers = useSelector((store) => store.users.subscribers);
  const loggedUser = useSelector((store) => store.users.loggedUser);
  const favorite = useSelector((store) => store.posts.favorites);
  const allPosts = useSelector((store) => store.posts.posts);
  /* const loggedUserFollowBy = useSelector((store) => store.users.loggedUser.followBy); */

  useEffect(() => {
    dispatch(clearCurrentUser());
    dispatch(getUserById(id));
    dispatch(getSubscribersByUserId(id));
    dispatch(getFavoritePostsByUserId(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getFavoritePostsByUserId(id));
  }, [dispatch, allPosts]);

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
            src={avatar}
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
              /* followBy={loggedUserFollowBy} */
            />
          </div>
          <ul className={styles.headerUserInfo}>
            <li>
              <span>{posts.length}</span>
              дописів
            </li>
            <li>
              <span>{followers.length}</span>
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
        {_id === loggedUser._id && (
        <NavLink to="saved" className={({ isActive }) => (isActive ? `${styles.userPageMenuLinkAcite} ${styles.userPageMenuLink}` : styles.userPageMenuLink)}>
          <SaveSvg />
          <span>ЗБЕРЕЖЕНІ</span>
        </NavLink>
        )}
      </div>
      <Routes>
        <Route
          path="/"
          element={(
            <UserPostContainer posts={posts} nik={nik} avatar={avatar} _id={_id} />
          )}
        />
        {_id === loggedUser._id && (
        <Route
          path="/saved/"
          element={(
            <UserPostContainer posts={favorite} />
          )}
        />
        )}
      </Routes>
    </div>
  );
}

export default UserPage;
