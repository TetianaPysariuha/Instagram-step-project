/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModalAC } from '../../store/modal/actionCreators';
import styles from './UserPostContainer.module.scss';
import PostsContainer from '../PostContainer/PostsContainer';
import postStyle from '../Post/PostHorisontal.module.scss';
import { getPostById, clearCurrentPost } from '../../store/posts/actionCreators';

function UserPostContainer({
  posts, nik, avatar, _id,
}) {
  const dispatch = useDispatch();
  return (
    <ul className={styles.list}>
      {posts.map((post) => {
        post.user = {
          nik,
          avatar,
          _id,
        };

        return (
          <li className={styles.listItem} key={post._id}>
            <div
              onClick={() => {
                dispatch(clearCurrentPost());
                dispatch(getPostById(post._id));
                dispatch(openModalAC(<PostsContainer postStyles={postStyle} /* posts={[post]} */ />));
              }}
              className={styles.post}
            >
              <div className={styles.image} style={{ backgroundImage: `url(${post.img})` }} />
              <div className={styles.postHoverBG}>
                <div className={styles.postHover}>
                  <div className={styles.counterWrraper}>
                    <svg color="#fff" fill="#fff" height="24" role="img" viewBox="0 0 48 48" width="20"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" /></svg>
                    <span className={styles.counter}>{post.likes.length}</span>
                  </div>
                  <div className={styles.counterWrraper}>
                    <svg width="20" height="20" viewBox="0 0 511.626 511.626" xmlSpace="preserve" fill="#fff">
                      <path d="M477.371,127.44c-22.843-28.074-53.871-50.249-93.076-66.523c-39.204-16.272-82.035-24.41-128.478-24.41   c-34.643,0-67.762,4.805-99.357,14.417c-31.595,9.611-58.812,22.602-81.653,38.97c-22.845,16.37-41.018,35.832-54.534,58.385   C6.757,170.833,0,194.484,0,219.228c0,28.549,8.61,55.3,25.837,80.234c17.227,24.931,40.778,45.871,70.664,62.811   c-2.096,7.611-4.57,14.846-7.426,21.693c-2.855,6.852-5.424,12.474-7.708,16.851c-2.286,4.377-5.376,9.233-9.281,14.562   c-3.899,5.328-6.849,9.089-8.848,11.275c-1.997,2.19-5.28,5.812-9.851,10.849c-4.565,5.048-7.517,8.329-8.848,9.855   c-0.193,0.089-0.953,0.952-2.285,2.567c-1.331,1.615-1.999,2.423-1.999,2.423l-1.713,2.566c-0.953,1.431-1.381,2.334-1.287,2.707   c0.096,0.373-0.094,1.331-0.57,2.851c-0.477,1.526-0.428,2.669,0.142,3.433v0.284c0.765,3.429,2.43,6.187,4.998,8.277   c2.568,2.092,5.474,2.95,8.708,2.563c12.375-1.522,23.223-3.606,32.548-6.276c49.87-12.758,93.649-35.782,131.334-69.097   c14.272,1.522,28.072,2.286,41.396,2.286c46.442,0,89.271-8.138,128.479-24.417c39.208-16.272,70.233-38.448,93.072-66.517   c22.843-28.062,34.263-58.663,34.263-91.781C511.626,186.108,500.207,155.509,477.371,127.44z" />
                    </svg>
                    <span className={styles.counter}>{post.comments.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

UserPostContainer.prototype = {
  posts: PropTypes.array,
  nik: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

UserPostContainer.defaultProps = {
  posts: [],
};

export default UserPostContainer;
