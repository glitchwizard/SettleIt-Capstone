import constants from '../constants'

export default (state = {}, action) => {
    let newState;
    const { modalIsDisplayed } = action;

    switch (action.type) {
        case constants.DISPLAY_SETTLE_SHEET_START_TOGGLE:
            newState =  Object.assign({}, state, {
                modalIsDisplayed: modalIsDisplayed
            });
            return newState;

        case constants.HIDE_SETTLE_SHEET_START_TOGGLE:
            newState = {...state,
                modalIsDisplayed: modalIsDisplayed
            };
            return newState;

        default: 
            return state;
    }   
}