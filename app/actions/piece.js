import {
  SELECT_PIECE
} from '../constants/actions.js'

import { evaluateGame } from './game.js'

export function selectPiece(row, column) {
  
  return (dispatch, getState) => {

    if (!getState().board.isEditable) { return }

    dispatch({ type: SELECT_PIECE, payload: { row, column }})

    dispatch(evaluateGame(row, column))

  }

}
