import './styles.scss';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './containers/App.jsx';
import chatApp from './reducers/index';

const store = createStore(chatApp);

import socket from './socket';
socket(store);

 ReactDOM.render(
	 <Provider store={store}>
		 <App />
	 </Provider>,
	 document.getElementById('root')
 );
