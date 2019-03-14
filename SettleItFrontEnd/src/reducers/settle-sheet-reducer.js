import actionType from './../constants';

export default (state = {}, action) => {
  let newState;
  let updatedState;
  switch (action.type) {

  case actionType.ADD_NEW_SETTLE_SHEET: {
    const { venueName, headlinerBand, dateCreated, dateOfShow, settleSheetId } = action.payload;
    newState = Object.assign( {}, state, { 
      [settleSheetId]: {
        venueName: venueName,
        headlinerBand: headlinerBand,
        dateCreated: dateCreated,
        dateOfShow: dateOfShow,
        settleSheetId: settleSheetId
      }
    });
    return newState;
  }

  case actionType.UPDATE_SETTLE_SHEET_INFO: {
    const { venueName, headlinerBand, dateCreated, dateOfShow, settleSheetId } = action.payload;
    updatedState = Object.assign( {}, state, {
      [settleSheetId]: {
        settleSheetId: settleSheetId,
        dateCreated: dateCreated,
        dateOfShow: dateOfShow,
        headlinerBand: headlinerBand,
        venueName: venueName
      }
    });
    return updatedState;
  }
  
  case actionType.GET_SETTLE_SHEETS_FROM_LOCAL_API: {
    return Object.assign( {}, state, action.payload);
  }

  case actionType.CLEAR_SETTLE_SHEET_LIST_FROM_STORE: {
    return Object.assign({});
  }

  case actionType.DELETE_SETTLE_SHEET_FROM_LOCAL_API: {
    return Object.assign({}, state, action.payload);
  }

  default:
    return state;
  }
};
