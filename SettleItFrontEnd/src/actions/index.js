import * as types from './../constants/ActionTypes';
import APItools from '../tools';

export const displaySettleSheetStart = () => ({ 
  type: types.DISPLAY_SETTLE_SHEET_START_TOGGLE,
  payload: {
    isModalDisplayed: true
  }
});

export const hideSettleSheetStart = () => ({
  type: types.HIDE_SETTLE_SHEET_START_TOGGLE,
  payload: {
    isModalDisplayed: null     
  }
});

export function submitNewShow(payload) {

  const initialAction = {
    type: types.ADD_NEW_SETTLE_SHEET,
    payload: payload
  };

  return dispatch => {
    return APItools.postToAPI(initialAction.payload)
      .then(jsonResult => {
        const returnedAction = Object.assign({}, initialAction, { payload: jsonResult });
        console.log('---------\n returnedAction\n', returnedAction);
        
        dispatch(returnedAction);
      });
  };

}


