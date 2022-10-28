/* eslint-disable no-underscore-dangle */
import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Modal from './components/Modal/Modal';

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);

  return (
    <div className="App">
      {isOpenModal && <Modal />}
    </div>
  );
}

export default App;
