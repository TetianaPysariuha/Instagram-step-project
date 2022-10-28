/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal/Modal';
import { getPosts } from './store/posts/actionCreators';
import { getUsers } from './store/users/actionCreators';
import styles from './App.module.scss';
import UserPage from './pages/UserPage/UserPage';

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);
  /*   const { posts } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.users); */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  /*   useEffect(() => {
    console.log(posts);
    console.log(users);
  }, [posts, users]); */

  return (
    <div className={styles.body}>
      {isOpenModal && <Modal />}
      {/* <UserName
        image="./images/1.jpg"
        nickname="test_user123423"
        additionalString="Пожаловаться"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam asperiores voluptate a molestias ab, reprehenderit illum temporibus ut animi quos cupiditate, esse odio tempore dolorem dignissimos quaerat fugiat expedita enim, distinctio explicabo sed repellendus? Quia sunt accusantium cupiditate ratione."
      />
      <UserName
        image="./images/2.jpg"
        nickname="test_user1234"
      />
      <UserName
        image="./images/3.jpg"
        nickname="test_user1"
        additionalString="4 HOURS AGO"
      />
      <UserName /> */}
      <UserPage />
    </div>
  );
}

export default App;
