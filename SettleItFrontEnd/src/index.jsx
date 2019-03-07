import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './/reducers/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

/*eslint-disable */
store.subscribe(() =>
  {
    console.log('Current State FROM SUBSCRIBE:');
    console.log(store.getState());
    console.log('');
  }
);
/*eslint-enable */

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store = {store}>
          <Component />
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