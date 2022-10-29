import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import CommentForm from '../CommentForm/CommentForm';

function Post(props) {
  const {
    postId, userName, maneImg, title, isLiked, handleCklickLike, handleCklickComments, isFavorite, handleCklickFavorite, comments, isMore, handleCklickShowMore,
  } = props;

  return (
    <div className={styles.postContainier}>
      <div className={styles.postWrapper}>
        {userName}
        <img className={styles.maneFoto} src={maneImg} onDoubleClick={handleCklickLike} alt={title} />
        <div className={styles.buttonBox}>
          <div className={styles.groupBtn}>
            <img src={isLiked ? './images/heart-red.svg' : './images/heart-white.svg'} onClick={handleCklickLike} alt={isLiked ? 'liked' : 'not liked'} data-testid="likeBtn" />
            <img src="./images/comment.svg" onClick={handleCklickComments} alt="see all comments" data-testid="commentBtn" />
          </div>
          <img src={isFavorite ? './images/favorite-marked.svg' : './images/favorite.svg'} onClick={handleCklickFavorite} alt="favorite" data-testid="favoriteBtn" />
        </div>
        <div className={styles.commentBox}>
          <div className={styles.comments}>
            {comments}
            {isMore && <button type="button" className={styles.showMoreBtn} onClick={handleCklickShowMore}>--------------Show more comments--------------</button>}
          </div>
          <div className={styles.addComment}>
            <CommentForm postId={postId} />
          </div>
        </div>
      </div>
    </div>
  );
}

Post.prototype = {
  postId: PropTypes.string.isRequired,
  userName: PropTypes.element.isRequired,
  maneImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  isLiked: PropTypes.bool,
  handleCklickLike: PropTypes.func,
  handleCklickComments: PropTypes.func,
  isFavorite: PropTypes.bool,
  handleCklickFavorite: PropTypes.func,
  comments: PropTypes.element,
  isMore: PropTypes.bool,
  handleCklickShowMore: PropTypes.func,
};

Post.defaultProps = {
  title: '',
  isLiked: false,
  handleCklickLike: () => {},
  handleCklickComments: () => {},
  isFavorite: false,
  handleCklickFavorite: () => {},
  comments: <> </>,
  isMore: false,
  handleCklickShowMore: () => {},
};

export default Post;
