export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_NEW_SETTLESHEET':
    const { bandNames, dateOpened, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        bandNames: bandNames,
        dateOpened: dateOpened,
        dateOfShow: dateOfShow,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
