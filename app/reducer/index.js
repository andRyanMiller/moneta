import { combineReducers } from 'redux';

import app from './app';
import board from './board';

const reducer = combineReducers({ app, board });

export default reducer;
