import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const hideSettleSheetStart = () => ({
  type: types.HIDE_SETTLE_SHEET_START_TOGGLE,
  payload: {
    isModalDisplayed: null     
  }
});

export const displaySettleSheetStart = () => ({ 
  type: types.DISPLAY_SETTLE_SHEET_START_TOGGLE,
  payload: {
    isModalDisplayed: true
  }
});

export const submitNewShow = (_venueName, _headlinerBandName, _dateSettleSheetCreated, _dateOfShow) => ({
  type: types.ADD_NEW_SETTLE_SHEET,
  id: v4(),
  venueName: _venueName,
  headlinerBandName: _headlinerBandName,
  dateSettleSheetCreated: _dateSettleSheetCreated,
  dateOfShow: _dateOfShow
});

