/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal/Modal';
import { getUsers, loggedUserReceiveData } from './store/users/actionCreators';
import styles from './App.module.scss';
import AppRoutes from './AppRoutes';

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);
  const { posts } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.users);

  const loggedUserId = '635429e5461d59d5a106db66';

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('imitial load');
    dispatch(loggedUserReceiveData(loggedUserId));
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
