export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_NEW_SETTLE_SHEET':
    const { bandNames, dateSettleSheetCreated, dateOfShow, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        bandNames: bandNames,
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