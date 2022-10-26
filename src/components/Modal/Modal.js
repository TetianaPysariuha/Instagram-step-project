/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Modal.module.scss';
import { closeModalAC } from '../../store/modal/actionCreators';

function Modal() {
  const dispatch = useDispatch();
  const { content } = useSelector((store) => store.modal);

  return (
    <div className={styles.container}>
      <div data-testid="closeModal" onClick={() => { dispatch(closeModalAC()); }} className={styles.containerBackground} />
      <div className={styles.content}>
        {content}
      </div>
    </div>
  );
}

export default Modal;
