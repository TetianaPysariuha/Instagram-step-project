/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal/Modal';
import { getPosts } from './store/posts/actionCreators';
import { getUsers } from './store/users/actionCreators';

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
    <div className="App">
      {isOpenModal && <Modal />}
    </div>
  );
}

export default App;
