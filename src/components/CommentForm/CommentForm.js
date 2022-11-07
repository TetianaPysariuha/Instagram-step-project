/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import styles from './CommentForm.module.scss';
import { updatePost } from '../../store/posts/actionCreators';

function CommentForm({ postId }) {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts.posts);
  const loggedUser = useSelector((store) => store.users.loggedUser);

  const initialValues = {
    comment: '',
  };

  const validationChema = yup.object().shape({
    comment: yup.string().required('For adding a comment you need to write something'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newOne = posts.find((el) => el._id === postId);
    const newComments = newOne.comments;
    newComments.push({ userId: loggedUser._id, text: values.comment });
    dispatch(updatePost({ id: postId, data: { comments: newComments } }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationChema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className={styles.form}>

          <Field
            className={styles.formField}
            name="comment"
            type="text"
            placeholder="Напишіть коментар"
          />

          <button
            className={styles.btnSubmit}
            disabled={!dirty || !isValid}
            type="submit"
          >
            Опублікувати
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CommentForm;
