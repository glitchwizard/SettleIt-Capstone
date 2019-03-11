import APItools from '../tools';

const APIhandler = store => next => action => {

  if (action.type == 'ADD_NEW_SETTLE_SHEET') {
    APItools.postToAPI(action.payload)
      .then(res => {

        let newAction = Object.assign({}, action, {
          payload: res
        });
        
        next(newAction);
        console.log('------------------\n');
      });
  } else {
    console.log('other action');
    next(action);
  }

};

export default APIhandler;