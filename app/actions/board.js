import {
  DISABLE_BOARD_EDITING,
  ENABLE_BOARD_EDITING,
  SET_BOARD_PATTERN
} from '../constants/actions.js'

export function enableBoardEditing() {

  return {
    type: ENABLE_BOARD_EDITING
  } 

}

export function disableBoardEditing() {

  return {
    type: DISABLE_BOARD_EDITING
  } 

}

export function setBoardPattern(pattern) {

  return {
    type: SET_BOARD_PATTERN,
    payload: { pattern }
  } 

}
