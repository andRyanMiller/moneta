import { combineReducers } from 'redux';

import app from './app';
import board from './board';
import game from './game';

const reducer = combineReducers({ app, board, game });

export default reducer;
