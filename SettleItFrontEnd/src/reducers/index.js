import { combineReducers } from 'redux';
import settleSheetReducer from './settle-sheet-reducer';
import displaySettleSheetStartReducer from './display-settle-sheet-start-reducer';

const rootReducer = combineReducers({
  settleSheets: settleSheetReducer,
  settleSheetModalVisibility: displaySettleSheetStartReducer
});

export default rootReducer;