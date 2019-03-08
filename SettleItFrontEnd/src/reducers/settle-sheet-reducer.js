import constants from './../constants';

export default (state = {}, action) => {
  let newState;
  const { headlinerBandName, dateSettleSheetCreated, dateOfShow, id } = action;
  switch (action.type) {
  case constants.ADD_NEW_SETTLE_SHEET:
    newState = Object.assign( {}, state, { 
      [id]: {
        headlinerName: headlinerBandName,
        dateSettleSheetCreated: dateSettleSheetCreated,
        dateOfShow: dateOfShow,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
