import * as Redux from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducer';

const Store = Redux.createStore(reducer, Redux.applyMiddleware(ReduxThunk, ReduxLogger()));

export default Store;
