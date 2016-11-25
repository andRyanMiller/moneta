import * as Redux from 'redux';
import ReduxLogger from 'redux-logger';

import reducer from '../reducer';

const Store = Redux.createStore(reducer, Redux.applyMiddleware(ReduxLogger()));

export default Store;
