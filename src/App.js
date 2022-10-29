/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal/Modal';
import { getPosts } from './store/posts/actionCreators';
import { getUsers } from './store/users/actionCreators';
import UserName from './components/UserName/UserName';
import styles from './App.module.scss';
import Post from './components/Post/Post';

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);
  /*   const { posts } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.users); */

  const dispatch = useDispatch();
  const userName = <UserName image="./images/1.jpg" nickname="Nick" additionalString="addstring" />;
  const comments = (
    <>
      <p>comment1</p>
      <p>comment2</p>
      <p>comment3</p>
    </>
  );

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
      <UserName
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
      <UserName />
      <Post postId="63555d4a339661775b42dd76" userName={userName} maneImg="./images/post1.jpeg" title="Big Dog and Small Girl" isLiked handleCklickLike={() => {}} handleCklickComments={() => {}} isFavorite handleCklickFavorite={() => {}} comments={comments} isMore handleCklickShowMore={() => {}} />

      <Post
        postId="1"
        userName={userName}
        maneImg="./images/post1.jpeg"
        title="Big Dog and Small Girl"
        isLiked
        handleCklickLike={() => {}}
        handleCklickComments={() => {}}
        isFavorite
        handleCklickFavorite={() => {}}
        comments={comments}
        isMore
        handleCklickShowMore={() => {}}
        handleClickSubmit={() => {}}
      />
    </div>
  );
}

export default App;

/* <div className={styles.postContainier}>
      <div className={styles.postWrapper}>
        <UserName image="./images/1.jpg" nickname="Nick" additionalString="addstring" />
        <img className={styles.maneFoto} src="./images/post1.jpeg" alt="foto" />
        <div className={styles.buttonBox}>
          <div>
            <img src="./images/heart-white.svg" alt="like" />
            <img src="./images/comment.svg" alt="comment" />
          </div>
          <img src="./images/favorite.svg" alt="favorite" />
        </div>
        <div className={styles.commentBox}>
          <div className={styles.comments}>
            <p>Comment1</p>
            {isMore && <button type="button" className={styles.showMoreBtn} onClick={() => {}}>--------------Show more comments--------------</button>}
          </div>
          <div className={styles.addComment}>
            <input type="text" />
            <button type="button" className={styles.showMoreBtn} onClick={() => {}}>Add comment</button>
          </div>
        </div>
      </div>
    </div> */
