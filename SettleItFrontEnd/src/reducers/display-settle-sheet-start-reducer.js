import constants from '../constants';

export default (state = {}, action) => {
  let newState;

  switch (action.type) {
  case constants.DISPLAY_SETTLE_SHEET_START_TOGGLE:
    newState =  Object.assign({}, state, {
      modalIsDisplayed: true
    });
    return newState;

  case constants.HIDE_SETTLE_SHEET_START_TOGGLE:
    newState = Object.assign ({}, state, {
      modalIsDisplayed: null
    });
    return newState;

  default: 
    return state;
  }   
};