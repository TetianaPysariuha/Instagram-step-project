/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './HomePage.module.scss';
import PostsContainer from '../../components/PostContainer/PostsContainer';
import UsersContainer from '../../components/UsersContainer/UsersContainer';
import UserName from '../../components/UserName/UserName';
import useScrollY from '../../hooks/useScrollY';
import { loadNewPagePosts, clearPosts } from '../../store/posts/actionCreators';

function HomePage() {
  const posts = useSelector((store) => store.posts.posts);
  const users = useSelector((store) => store.users.users);
  const loggedUser = useSelector((store) => store.users.loggedUser);
  const loggedUserfull = users.find((el) => el._id === loggedUser._id);
  const followByListUsers = users.filter((user) => loggedUser.followBy.includes(user._id));
  const otherUsers = users.filter((user) => !loggedUser.followBy.includes(user._id) && user._id !== loggedUser._id);
  const scrollPosition = useScrollY(0);
  const { page, postsOnPage, totalPostsOnServer } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearPosts());
    dispatch(loadNewPagePosts({ start: 0, end: postsOnPage }));
  }, [dispatch]);

  useEffect(() => {
    if (scrollPosition > 0 && totalPostsOnServer > posts.length && document.documentElement.scrollHeight - window.innerHeight - scrollPosition < 100) {
      dispatch(loadNewPagePosts({ start: (page) * postsOnPage, end: (page + 1) * postsOnPage }));
    }
  }, [dispatch, scrollPosition]);

  return (
    <div className={styles.homePage}>
      {posts.length > 0 && <PostsContainer />}
      <div className={styles.users}>
        <UserName image={loggedUser.avatar} nickname={loggedUser.nik} additionalString={loggedUser.name} />
        {followByListUsers.length > 0 && <UsersContainer isButton={false} users={followByListUsers} loggedUser={loggedUserfull} />}
        {otherUsers.length > 0 && <UsersContainer isButton users={otherUsers} loggedUser={loggedUserfull} />}
      </div>
    </div>
  );
}

export default HomePage;
