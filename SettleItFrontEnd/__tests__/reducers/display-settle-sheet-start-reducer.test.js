import displaySettleSheetStartReducer from '../../src/reducers/display-settle-sheet-start-reducer';
import * as action from './../../src/actions';

describe('displaySettleSheetReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(displaySettleSheetStartReducer({}, { type: null
    })).toEqual({});
  });

  test('Should return a positive toggle if DISPLAY_SETTLE_SHEET_START_TOGGLE is called', () =>{
    expect(displaySettleSheetStartReducer({}, action.displaySettleSheetStart()))
      .toEqual({ isModalDisplayed: true });
  });

  test('Should return a null value for toggle if HIDE_SETTLE_SHEET_START_TOGGLE is called', () => {
    expect(
      displaySettleSheetStartReducer({}, action.hideSettleSheetStart()))
    .toEqual({ isModalDisplayed: null });
  });
});
