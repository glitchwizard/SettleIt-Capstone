import actionType from '../constants';

export default (state = {}, action) => {
  
  switch (action.type) {

  case actionType.GET_SETTLE_SHEET_DETAILS_BY_ID: {
    return Object.assign( { }, state, action.payload);
  }

  case actionType.CLEAR_SETTLE_SHEET_DETAIL_FROM_STORE: {
    return Object.assign( { } );
  }

  default:
    return state;
  }
};
