import actionType from './../constants';

export default (state = {}, action) => {
  let newState;
  switch (action.type) {

    case actionType.ADD_NEW_SETTLE_SHEET: 
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

  default:
    return state;
  }
};
