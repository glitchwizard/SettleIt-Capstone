import displaySettleSheetStartReducer from '../../src/reducers/display-settle-sheet-start-reducer';
import constants from './../../src/constants';

describe('displaySettleSheetReducer', () => {

    let action;

    test('Should return default state if no action type is recognized', () => {
        expect(displaySettleSheetStartReducer({}, {
            type: null
        })).toEqual({});
    });

    test('Should return a positive toggle if DISPLAY_SETTLE_SHEET_START_TOGGLE is called', () =>{
        action = {
            type: constants.DISPLAY_SETTLE_SHEET_START_TOGGLE,
        }
        expect (displaySettleSheetStartReducer({}, action)).toEqual({
            modalIsDisplayed: true
        })
    })

        test('Should return a null value for toggle if HIDE_SETTLE_SHEET_START_TOGGLE is called', () => {
            action = {
                type: constants.HIDE_SETTLE_SHEET_START_TOGGLE,
            }
            expect(displaySettleSheetStartReducer({}, action)).toEqual({
                modalIsDisplayed: null
            })
        })

});
