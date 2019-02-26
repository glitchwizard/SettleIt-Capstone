import settleSheetReducer from "../../src/reducers/settle-sheet-reducer";

describe('settleSheetReducer', () => {

    // let action;
    // const sampleSettleSheet = {
    //     bandNames: {'Blue Ember', 'pseudoboss', 'The Heavy Hustle'},
    //     dateSettleSheetCreated: "2018-02-26",
    //     dateOfShow: 'jest is being a diva and won\'t work with webpack!',
    //     id: 0
    // };

    test('Should return default state if no action type is recognized', () => {
        expect(2+2).toBe(0);
    });

    // test('should successfully add new settle sheet data to masterSettleSheet list', () => {
    //     const { bandNames, dateSettleSheetCreated, dateOfShow, id } = sampleSettleSheet;
    //     action = {
    //         type: 'ADD_TICKET',
    //         bandNames: bandNames,
    //         dateSettleSheetCreated: dateSettleSheetCreated,
    //         dateOfShow: dateOfShow,
    //         id: id
    //     };
    //     expect(settleSheetReducer({}, action)).toEqual({
    //         [id]: {
    //         bandNames: bandNames,
    //         dateSettleSheetCreated: dateSettleSheetCreated,
    //         dateOfShow: dateOfShow,
    //         id: id
    //         }
    //     });
    // });
});
