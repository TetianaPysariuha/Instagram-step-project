/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Modal from './components/Modal/Modal';
// import { loadNewPagePosts /* getFavoritePostsByUserId  */ } from './store/posts/actionCreators';
import { getUsers } from './store/users/actionCreators';
import styles from './App.module.scss';
import UserPage from './pages/UserPage/UserPage';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadNewPagePosts({ start: 0, end: postsOnPage, userId: loggedUser._id }));
    // dispatch(loadNewPagePosts({ start: 3, end: 6/* , userId: loggedUser._id */ }));
    dispatch(getUsers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={styles.body}>
      {isOpenModal && <Modal />}
      <Header />
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
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/userpage/:id/*" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
