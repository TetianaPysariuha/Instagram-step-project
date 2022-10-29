import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Post from './Post';
import UserName from '../UserName/UserName';
import '@testing-library/jest-dom';

jest.mock('react-redux');
const userName = <UserName />;
const comments = (
  <>
    <p>comment1</p>
    <p>comment2</p>
    <p>comment3</p>
  </>
);

describe('Post snapshot testing', () => {
  test('Should Post to render where isLiked and isFavorite and isMore with value true', () => {
    const { asFragment } = render(
      <BrowserRouter>
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
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should Post to render where isLiked and isFavorite and isMore with value false', () => {
    const { asFragment } = render(
      <BrowserRouter>
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
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Post buttons work', () => {
  test('Click on button Like', () => {
    const handleCklickLike = jest.fn();
    render(
      <BrowserRouter>
        <Post
          postId="1"
          userName={userName}
          maneImg="./images/post1.jpeg"
          title="Big Dog and Small Girl"
          isLiked
          handleCklickLike={handleCklickLike}
          handleCklickComments={() => {}}
          isFavorite
          handleCklickFavorite={() => {}}
          comments={comments}
          isMore
          handleCklickShowMore={() => {}}
          handleClickSubmit={() => {}}
        />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('likeBtn'));
    expect(handleCklickLike).toHaveBeenCalledTimes(1);
  });

  test('Click on button comments', () => {
    const handleCklickComments = jest.fn();
    render(
      <BrowserRouter>
        <Post
          postId="1"
          userName={userName}
          maneImg="./images/post1.jpeg"
          title="Big Dog and Small Girl"
          isLiked
          handleCklickLike={() => {}}
          handleCklickComments={handleCklickComments}
          isFavorite
          handleCklickFavorite={() => {}}
          comments={comments}
          isMore
          handleCklickShowMore={() => {}}
          handleClickSubmit={() => {}}
        />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('commentBtn'));
    expect(handleCklickComments).toHaveBeenCalledTimes(1);
  });

  test('Click on button favorite', () => {
    const handleCklickFavorite = jest.fn();
    render(
      <BrowserRouter>
        <Post
          postId="1"
          userName={userName}
          maneImg="./images/post1.jpeg"
          title="Big Dog and Small Girl"
          isLiked
          handleCklickLike={() => {}}
          handleCklickComments={() => {}}
          isFavorite
          handleCklickFavorite={handleCklickFavorite}
          comments={comments}
          isMore
          handleCklickShowMore={() => {}}
          handleClickSubmit={() => {}}
        />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('favoriteBtn'));
    expect(handleCklickFavorite).toHaveBeenCalledTimes(1);
  });

  test('Click on button ShowMore', () => {
    const handleCklickShowMore = jest.fn();
    render(
      <BrowserRouter>
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
          handleCklickShowMore={handleCklickShowMore}
          handleClickSubmit={() => {}}
        />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Show more comments', { exact: false }));
    expect(handleCklickShowMore).toHaveBeenCalledTimes(1);
  });
});
