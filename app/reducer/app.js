import {
  HANDLE_APPLICATION_INITIALIZATION_SUCCESS,
  HANDLE_APPLICATION_INITIALIZATION_FAILURE
} from '../constants/actions.js'

const app = (state = { initialized: false }, action) => {

  switch (action.type) {
    case HANDLE_APPLICATION_INITIALIZATION_SUCCESS:
      return Object.assign({}, state, { initialized: true })
    case HANDLE_APPLICATION_INITIALIZATION_FAILURE:
      return Object.assign({}, state, { initialized: false })
    default:
      return state
  }

}

export default app
