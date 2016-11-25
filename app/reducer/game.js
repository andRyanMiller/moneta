import {
  NEW_GAME,
  SELECT_PIECE
} from '../constants/actions.js'

const game = (state = {}, action) => {

  switch (action.type) {
    case SELECT_PIECE: 
      return state;
    case NEW_GAME:
      return Object.assign({}, state, {
        pattern: action.payload.pattern
      });
    default:
      return state;
  }

}

export default game
