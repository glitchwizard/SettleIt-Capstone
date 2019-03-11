import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './/reducers/index';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import APIhandler from './middleware/APImiddleware';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

/*eslint-disable */
store.subscribe(() =>
  {
    console.log('Current State FROM SUBSCRIBE: \n', store.getState());
    console.log('');
  }
);
/*eslint-enable */

function getReduxState() {
  return console.log(store.getState());
}

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Component />
          <button onClick={getReduxState}>Get Redux State</button>
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
/*eslint-enable */