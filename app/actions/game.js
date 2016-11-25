import _ from 'lodash'

import {
  NEW_GAME,
  EVALUATE_GAME,
  SET_BOARD_PATTERN
} from '../constants/actions.js'

import { enableBoardEditing, disableBoardEditing, setBoardPattern } from './board.js'

import { generatePattern, generateBlankPattern } from '../utilities'

export function newGame() {

  const pattern = generatePattern(5)

  return dispatch => {

    dispatch(disableBoardEditing())

    dispatch({ 
      type: NEW_GAME,
      payload: { pattern }
    })

    dispatch(setBoardPattern(pattern))

    setTimeout(() => {

      dispatch(setBoardPattern(generateBlankPattern(5)))
      dispatch(enableBoardEditing())

    }, 2000)

  }

}

// Evaluates the state of the game given the selection of a specific piece,
// and triggers appropriate actions given said selection.
export function evaluateGame(row, column) {

  return (dispatch, getState) => {

    dispatch({ type: EVALUATE_GAME, payload: { row, column }})

    const state = getState()
    const gamePattern = _.clone(state.game.pattern)


    if (gamePattern[row][column]) {

      const boardPattern = _.clone(state.board.pattern)
      boardPattern[row][column] = true

      dispatch(setBoardPattern(boardPattern))

      if (_.isEqual(boardPattern, gamePattern)) {

        setTimeout(() => { alert('You win!') }, 500)

      }

    } else {
      alert('Not a value!')
    }

  }

}
