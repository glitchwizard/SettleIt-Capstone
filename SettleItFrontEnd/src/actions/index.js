import * as types from './../constants/ActionTypes';
import APItools from '../tools';
import _ from 'lodash';

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

export const displaySettleSheetDetails = () => ({
  type: types.DISPLAY_SETTLE_SHEET_START_TOGGLE,
  payload: {
    isSettleSheetDetailModalDisplayed: true
  }
});

export const hideSettleSheetDetails = () => ({
  type: types.HIDE_SETTLE_SHEET_START_TOGGLE,
  payload: {
    isSettleSheetDetailModalDisplayed: null
  }
});

export function submitNewShow(actionPayload) {
  const initialAction = {
    type: types.ADD_NEW_SETTLE_SHEET,
    payload: actionPayload
  };
  return dispatch => {
    return APItools.postToAPI(initialAction.payload)
      .then(jsonResult => {
        const returnedAction = Object.assign({}, initialAction, { payload: jsonResult });
        dispatch(returnedAction);
      });
  };
}

export function getSettleSheetList() {
  const initialAction = {
    type: types.GET_SETTLE_SHEETS_FROM_LOCAL_API
  };
  let returnedAction = {};
  let payloadBuild = {};
  return dispatch => {
    return APItools.getSettleSheetsFromLocalAPI()
      .then(jsonResult => {
        Object.keys(jsonResult).map( (resultArrayId) => {
          const { venueName, headlinerBand, dateCreated, dateOfShow, settleSheetId } = jsonResult[resultArrayId];
          payloadBuild = _.merge( {}, payloadBuild,
            {
              [settleSheetId]: {
                venueName: venueName,
                headlinerBand: headlinerBand,
                dateCreated: dateCreated,
                dateOfShow: dateOfShow,
                settleSheetId: settleSheetId
              }
            });
        });
        returnedAction = _.merge({}, initialAction,
          {
            payload: payloadBuild
          });
        dispatch(returnedAction);
      });
  };
}

export const clearSettleSheetList= () => ({
  type: types.CLEAR_SETTLE_SHEET_LIST_FROM_STORE,
  payload: {}
});

export function getSettleSheetByID(id){
  const initialAction = {
    type: types.GET_SETTLE_SHEET_DETAILS_BY_ID
  };
  return dispatch => {
    return APItools.getSettleSheetByIdFromLocalAPI(id)
      .then(jsonResult => {
        const returnedAction = Object.assign({}, initialAction, { payload: jsonResult});
        dispatch(returnedAction);
      });
  };
}

export function updateShowInfo(actionPayload) {
  const initialAction = {
    type: types.UPDATE_SETTLE_SHEET_INFO,
    payload: actionPayload
  };
  return dispatch => {
    return APItools.updateSettleSheetInfo(initialAction.payload)
      .then(jsonResult => {
        const returnedAction = Object.assign({}, initialAction, {
          payload: jsonResult
        });
        dispatch(returnedAction);
      });
  };
}

export const clearSettleSheetDetailFromStore = () => ({
  type: types.CLEAR_SETTLE_SHEET_DETAIL_FROM_STORE,
  payload: {}
});

export function deleteSettleSheet(id){
  return APItools.deleteSettleSheet(id);
}

