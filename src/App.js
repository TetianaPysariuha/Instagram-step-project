import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Modal from './components/Modal/Modal';
import UserName from './components/UserName/UserName';
import styles from './App.module.scss';

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);

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
    </div>
  );
}

export default App;
