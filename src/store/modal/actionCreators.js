import { OPEN_MODAL, CLOSE_MODAL } from './actiions';

export const openModalAC = (payload) => ({ type: OPEN_MODAL, payload });
export const closeModalAC = () => ({ type: CLOSE_MODAL });
