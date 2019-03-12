import { combineReducers } from 'redux';
import settleSheetReducer from './settle-sheet-reducer';
import displaySettleSheetReducer from './display-settle-sheet-reducer';
import settleSheetDetailsReducer from './settle-sheet-details-reducer';

const rootReducer = combineReducers({
  settleSheets: settleSheetReducer,
  settleSheetModalVisibility: displaySettleSheetReducer,
  settleSheetDetails: settleSheetDetailsReducer
});

export default rootReducer;