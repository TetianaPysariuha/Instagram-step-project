/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal/Modal';
import { loadNewPagePosts /* getFavoritePostsByUserId  */ } from './store/posts/actionCreators';
import { getUsers } from './store/users/actionCreators';
import styles from './App.module.scss';
import AppRoutes from './AppRoutes';

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);
  const { posts, /* page, */ postsOnPage } = useSelector((store) => store.posts);
  const { users, loggedUser } = useSelector((store) => store.users);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('imitial load');
    dispatch(loadNewPagePosts({ start: 0, end: postsOnPage, userId: loggedUser._id }));
    dispatch(loadNewPagePosts({ start: 3, end: 6/* , userId: loggedUser._id */ }));
    dispatch(getUsers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    console.log('from app');
    console.log(posts);
    console.log(users);
  }, [posts, users]);

  return (
    <div className={styles.body}>
      {isOpenModal && <Modal />}
      <AppRoutes />
    </div>
  );
}

export default App;
