import { OPEN_MODAL, CLOSE_MODAL } from './actiions';

const initialState = {
  content: '<></>',
  isOpenModal: false,
};

// the rule is switched off because state shoul be first in props
// eslint-disable-next-line default-param-last
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return { content: action.payload, isOpenModal: true };
    }
    case CLOSE_MODAL: {
      return { ...state, isOpenModal: false };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
