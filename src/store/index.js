import {createStore,compose} from 'redux';
import reducers from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    reducers,
    composeEnhancers()
);

export default store;