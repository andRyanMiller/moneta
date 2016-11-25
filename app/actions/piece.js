import {
  SELECT_PIECE
} from '../constants/actions.js'

export function selectPiece(row, column) {
  return {
    type: SELECT_PIECE,
    payload: { row, column }
  }  
}
