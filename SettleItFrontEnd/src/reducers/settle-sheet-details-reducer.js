import actionType from '../constants';

export default (state = {}, action) => {
  let newState;
  switch (action.type) {

  case actionType.GET_SETTLE_SHEET_DETAILS_BY_ID: {
    return Object.assign( { }, state, action.payload);
  }

  default:
    return state;
  }
};
