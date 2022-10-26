import reduser from './reducer';
import { OPEN_MODAL, CLOSE_MODAL } from './actiions';

const initialState = {
  content: '<></>',
  isOpenModal: false,
};

const openModal = {
  content: '<p>Test Content</p>',
  isOpenModal: true,
};

const closeModal = {
  content: '<></>',
  isOpenModal: false,
};

describe('Reducers testing', () => {
  test('Should return the initial value', () => {
    const state = JSON.stringify(reduser(undefined, { type: undefined }));
    expect(state).toEqual(JSON.stringify(initialState));
  });

  test('Should return with action OPEN_MODAL', () => {
    expect(JSON.stringify(reduser(undefined, {
      type: OPEN_MODAL,
      payload: '<p>Test Content</p>',
    }))).toEqual(JSON.stringify(openModal));
  });

  test('Should return with action CLOSE_MODAL', () => {
    const state = JSON.stringify(reduser(undefined, { type: CLOSE_MODAL }));
    expect(state).toEqual(JSON.stringify(closeModal));
  });
});
