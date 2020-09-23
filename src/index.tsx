import './style.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './react-redux/App';


const renderApp = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

renderApp();