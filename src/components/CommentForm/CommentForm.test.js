import { render } from '@testing-library/react';
import CommentForm from './CommentForm';
import '@testing-library/jest-dom';

jest.mock('react-redux');

describe('CommentForm snapshot testing', () => {
  test('Should Modal to render', () => {
    const { asFragment } = render(<CommentForm postId="1" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
