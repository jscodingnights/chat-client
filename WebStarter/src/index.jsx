import './styles.scss';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App.jsx';

// If you want redux...
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);