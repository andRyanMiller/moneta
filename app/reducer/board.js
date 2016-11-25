import _ from 'lodash'

import {
  SET_BOARD_PATTERN,
  ENABLE_BOARD_EDITING,
  DISABLE_BOARD_EDITING
} from '../constants/actions.js'

import { generatePattern } from '../utilities';

const board = (state = { isEditable: false }, action) => {

  switch (action.type) {
    case SET_BOARD_PATTERN:
      return Object.assign({}, state, { pattern: action.payload.pattern })
    case ENABLE_BOARD_EDITING:
      return Object.assign({}, state, { isEditable: true })
    case DISABLE_BOARD_EDITING:
      return Object.assign({}, state, { isEditable: false })
    default:
      return state;
  }

}

export default board
