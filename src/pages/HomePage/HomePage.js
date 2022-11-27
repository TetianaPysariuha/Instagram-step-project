/* eslint-disable no-debugger */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './HomePage.module.scss';
import PostsContainer from '../../components/PostContainer/PostsContainer';
import UsersContainer from '../../components/UsersContainer/UsersContainer';
import UserName from '../../components/UserName/UserName';
import useScrollY from '../../hooks/useScrollY';
import { loadNewPagePosts, clearPosts } from '../../store/posts/actionCreators';
import Preloaders from '../../components/preloaders/Preloaders';

let followByListUsers;
let otherUsers;

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const posts = useSelector((store) => store.posts.posts);
  const users = useSelector((store) => store.users.users);
  const loggedUser = useSelector((store) => store.users.loggedUser);
  const loggedUserfull = users.find((el) => el._id === loggedUser._id);
  const scrollPosition = useScrollY(0);
  const { page, postsOnPage, totalPostsOnServer } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(clearPosts());
    dispatch(loadNewPagePosts({ start: 0, end: postsOnPage }));
  }, [dispatch]);

  useEffect(() => {
    if (scrollPosition > 0 && totalPostsOnServer > posts.length && document.documentElement.scrollHeight - window.innerHeight - scrollPosition < 100) {
      dispatch(loadNewPagePosts({ start: (page) * postsOnPage, end: (page + 1) * postsOnPage }));
    }
  }, [dispatch, scrollPosition]);

  useEffect(() => {
    if (loggedUser && loggedUser._id && users.length > 0) {
      otherUsers = users.filter((user) => !loggedUser.followBy.includes(user._id) && user._id !== loggedUser._id);
      followByListUsers = users.filter((user) => loggedUser.followBy.includes(user._id));
    }
    if (isLoading && followByListUsers && followByListUsers.length > 0 && otherUsers && posts.length > 0) {
      setIsLoading(false);
    }
  }, [loggedUser, users, posts]);

  if (!posts.length) {
    return (
      <Preloaders />
    );
  }

  return (
    <div className={styles.homePage}>
      { !isLoading && (
      <>
        <PostsContainer />
        <div className={styles.users}>
          <UserName image={loggedUser.avatar} nickname={loggedUser.nik} additionalString={loggedUser.name} />
          <UsersContainer isButton={false} users={followByListUsers} loggedUser={loggedUserfull} />
          <UsersContainer isButton users={otherUsers} loggedUser={loggedUserfull} />
        </div>
      </>
      )}
    </div>
  );
}

export default HomePage;
