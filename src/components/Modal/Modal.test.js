import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import * as actions from '../../store/modal/actionCreators';
import '@testing-library/jest-dom';

jest.mock('react-redux');

describe('Modal snapshot testing', () => {
  test('Should Modal to render', () => {
    const content = useSelector.mockReturnValue('<p>Test Content</p>');
    const { asFragment } = render(<Modal content={content} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Modal closing work', () => {
  test('Close modal by click on background', () => {
    const content = useSelector.mockReturnValue('<p>Test Content</p>');
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const mockedCloseModalAC = jest.spyOn(actions, 'closeModalAC');
    render(<Modal content={content} />);
    fireEvent.click(screen.getByTestId('closeModal'));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedCloseModalAC).toHaveBeenCalledTimes(1);
  });
});
