import settleSheetReducer from '../../src/reducers/settle-sheet-reducer';

describe('settleSheetReducer', () => {

  let action;
  const sampleSettleSheet = {
    bandNames: ['Blue Ember', 'pseudoboss', 'The Heavy Hustle'],
    dateSettleSheetCreated: '2018-02-26',
    dateOfShow: '2019-02-26',
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(settleSheetReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new settle sheet data to masterSettleSheet list', () => {
    const { bandNames, dateSettleSheetCreated, dateOfShow, id } = sampleSettleSheet;
    action = {
      type: 'ADD_NEW_SETTLE_SHEET',
      bandNames: bandNames,
      dateSettleSheetCreated: dateSettleSheetCreated,
      dateOfShow: dateOfShow,
      id: id
    };

    expect(settleSheetReducer({}, action)).toEqual({
      [id]: {
        bandNames: bandNames,
        dateSettleSheetCreated: dateSettleSheetCreated,
        dateOfShow: dateOfShow,
        id: id
      }
    });
  });
});
