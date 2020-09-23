import { createStore } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

export const store = createStore(
    connectRouter(history)
)