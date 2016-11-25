import {
  INITIALIZE_APPLICATION
} from '../constants/actions.js'

import { newGame } from './game.js'

export function initializeApplication() {

  return dispatch => {

    dispatch({ type: INITIALIZE_APPLICATION });

    dispatch(newGame())

  } 

}
