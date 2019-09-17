import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import configureStore from './modules/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

const store = configureStore();
const TARGET_ROOT = document.getElementById('root');

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('message', JSON.stringify(state.messages.message));
});

// window.addEventListener('storage', e => {
//     const state = store.getState();
//     const msg = state.messages.message
//     localStorage.setItem('message', JSON.stringify(msg));
//     console.log('storage update')
// });

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    TARGET_ROOT
)