export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TICKET':
    const { bandNames, dateSettleSheetCreated, id } = action;
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
