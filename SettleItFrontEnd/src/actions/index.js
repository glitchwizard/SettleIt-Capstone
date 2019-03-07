import * as types from './../constants/ActionTypes';

export const hideSettleSheetStart = () => ({
  type: types.HIDE_SETTLE_SHEET_START_TOGGLE,
  payload: {
    modalIsDisplayed: null     
  }
});

export const displaySettleSheetStart = () => ({ 
  type: types.DISPLAY_SETTLE_SHEET_START_TOGGLE,
  payload: {
    modalIsDisplayed: true
  }
});

