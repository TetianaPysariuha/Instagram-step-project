/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PostsContainer.module.scss';
import Post from '../Post/Post';
import UserName from '../UserName/UserName';
import { updatePost, showMoreChange } from '../../store/posts/actionCreators';

function PostsContainer(props) {
  const dispatch = useDispatch();
  const { posts } = props;
  const postsStore = useSelector((store) => store.posts.posts);
  const showMoreComments = useSelector((store) => store.posts.showMoreComments);
  const loggedUser = useSelector((store) => store.users.loggedUser);
  const users = useSelector((store) => store.users.users);

  const postsList = posts || filteredPosts;
  const filteredPosts = postsList.filter((post) => post.userid !== loggedUser._id);

  const handleCklickLike = (postId, userId) => {
    const post = postsList.find((el) => el._id === postId);
    let newLikes;
    if (post.likes.includes(userId)) {
      newLikes = post.likes.filter((el) => el !== userId);
      dispatch(updatePost({ id: postId, data: { likes: newLikes } }));
    } else {
      newLikes = [...post.likes];
      newLikes.push(userId);
    }
    dispatch(updatePost({ id: postId, data: { likes: newLikes } }));
  };

  const handleCklickFavorite = (postId, userId) => {
    const post = postsList.find((el) => el._id === postId);
    let newFavorite;
    if (post.favorite.includes(userId)) {
      newFavorite = post.favorite.filter((el) => el !== userId);
    } else {
      newFavorite = [...post.favorite];
      newFavorite.push(userId);
    }
    dispatch(updatePost({ id: postId, data: { favorite: newFavorite } }));
  };

  const handleCklickShowMore = (postId) => {
    dispatch(showMoreChange({ postId }));
  };

  const createCommentElement = (postId, comments) => {
    if (showMoreComments.includes(postId)) {
      return (
        <ul>
          {comments.map((el) => (
            <li key={el._id}>
              <span>{users.find((elem) => elem._id === el.userId).nik}</span>
              {' '}
              {el.text}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul>
        <li key={comments._id}>
          <span>{users.find((elem) => elem._id === comments[comments.length - 1].userId).nik}</span>
          {' '}
          {comments[comments.length - 1].text}
        </li>
      </ul>
    );
  };

  const getPostElement = (post) => {
    const {
      _id: postId, user: { avatar, nik }, img, title, description,
    } = post;
    const isLiked = post.likes.includes(loggedUser._id);
    const isFavorite = post.favorite.includes(loggedUser._id);
    let comments = null;
    if (post.comments.length > 0) {
      comments = createCommentElement(postId, post.comments);
    }
    const isMore = !(post.comments.length > 1 && showMoreComments.includes(postId));

    return (
      <Post
        key={postId}
        postId={postId}
        userName={<UserName image={avatar} nickname={nik} additionalString={title} />}
        mainImg={img}
        title={title}
        description={description}
        isLiked={isLiked}
        handleCklickLike={() => handleCklickLike(postId, loggedUser._id)}
        handleCklickComments={() => {}}
        isFavorite={isFavorite}
        handleCklickFavorite={() => handleCklickFavorite(postId, loggedUser._id)}
        comments={comments}
        isMore={isMore}
        handleCklickShowMore={() => handleCklickShowMore(postId)}
      />
    );
  };

  return (
    <div className={styles.postContainer}>
      {postsList.length > 0 && users.length > 0 && postsList.map((post) => getPostElement(post))}
    </div>
  );
}

PostsContainer.prototype = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    img: PropTypes.string,
    userid: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.arrayOf(PropTypes.string),
    favorite: PropTypes.arrayOf(PropTypes.string),
    comments: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      userid: PropTypes.string,
      text: PropTypes.string,
    })),
    seeCount: PropTypes.number,
    __v: PropTypes.number,
    user: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      avatar: PropTypes.string,
      nik: PropTypes.string,
      name: PropTypes.string,
      followBy: PropTypes.arrayOf(PropTypes.string),
      __v: PropTypes.number,
    })),
  })),
};

Post.defaultProps = {
  posts: [],
};

export default PostsContainer;
