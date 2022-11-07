import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Post.module.scss';
/* import styles from './PostHorisontal.module.scss'; */
import CommentForm from '../CommentForm/CommentForm';

function Post(props) {
  const {
    postId, userName, mainImg, title, description, isLiked, handleCklickLike, handleCklickComments, isFavorite, handleCklickFavorite, comments, isMore, handleCklickShowMore, style, showIsMoreButton,
  } = props;

  let postStyles = styles;
  if (style) {
    postStyles = style;
  }

  return (
    <div key={postId} className={postStyles.postContainier}>
      <div className={postStyles.postWrapper}>
        {userName}
        <div className={postStyles.maneFoto}>
          <img src={mainImg} onDoubleClick={handleCklickLike} alt={title} />
        </div>
        <div className={postStyles.buttonBox}>
          <div className={postStyles.groupBtn}>
            <img src={isLiked ? './images/heart-red.svg' : './images/heart-white.svg'} onClick={handleCklickLike} alt={isLiked ? 'liked' : 'not liked'} data-testid="likeBtn" />
            <img src="./images/comment.svg" onClick={handleCklickComments} alt="see all comments" data-testid="commentBtn" />
          </div>
          <img src={isFavorite ? './images/favorite-marked.svg' : './images/favorite.svg'} onClick={handleCklickFavorite} alt="favorite" data-testid="favoriteBtn" />
        </div>
        <p className={postStyles.description}>{description}</p>
        <div className={postStyles.comments}>
          {comments}
          {showIsMoreButton && <button type="button" className={postStyles.showMoreBtn} onClick={handleCklickShowMore} data-testid="showMoreBtn">{isMore ? '-----Показати більше-----' : '-----Показати меньше-----'}</button>}
        </div>
        <div className={postStyles.addComment}>
          <CommentForm postId={postId} />
        </div>
      </div>
    </div>
  );
}

Post.prototype = {
  postId: PropTypes.string.isRequired,
  userName: PropTypes.element.isRequired,
  mainImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
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
  description: '',
  isLiked: false,
  handleCklickLike: () => {},
  handleCklickComments: () => {},
  isFavorite: false,
  handleCklickFavorite: () => {},
  comments: <> </>,
  isMore: false,
  handleCklickShowMore: () => {},
};

export default memo(Post);
