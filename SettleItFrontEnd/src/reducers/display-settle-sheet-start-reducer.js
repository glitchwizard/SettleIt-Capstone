import type from '../constants';

export default (state = {}, action) => {
  let newState;

  switch (action.type) {
  case type.DISPLAY_SETTLE_SHEET_START_TOGGLE:
    newState = Object.assign({}, state, action.payload);
    return newState;

  case type.HIDE_SETTLE_SHEET_START_TOGGLE:
    newState = Object.assign({}, state, action.payload);
    return newState;

  case type.DISPLAY_SETTLE_SHEET_DETAILS_TOGGLE:
    newState = Object.assign({}, state, action.payload);
    return newState;

  case type.HIDE_SETTLE_SHEET_DETAILS_TOGGLE:
    newState = Object.assign({}, state, action.payload);
    return newState;

  default:
    return state;
  }
};