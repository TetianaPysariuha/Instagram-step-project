import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Modal from './components/Modal/Modal';

function App() {
  const { isOpenModal, content } = useSelector((store) => store.modal);

  return (
    <div className="App">
      {isOpenModal && <Modal content={content} />}
    </div>
  );
}

export default App;
