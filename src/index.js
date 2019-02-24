import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import  {loadTasks} from '../src/actions/taskAction';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
store.dispatch(loadTasks());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);