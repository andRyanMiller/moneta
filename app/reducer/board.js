import _ from 'lodash'

import {
  SELECT_PIECE
} from '../constants/actions.js'

const pattern = [
  [true, true, false, true, false],
  [false, false, true, false, true],
  [true, false, false, false, false],
  [true, true, false, false, true],
  [false, false, true, false, false]
]

const board = (state = { pattern }, action) => {

  switch (action.type) {
    case SELECT_PIECE: 
      const pattern = _.clone(state.pattern)
      const selectedRow = action.payload.row
      const selectedColumn = action.payload.column
      const currentPieceValue = pattern[selectedRow][selectedColumn]
      pattern[selectedRow][selectedColumn] = !currentPieceValue
      return Object.assign({}, state, { pattern })
    default:
      return state;
  }

}

export default board
