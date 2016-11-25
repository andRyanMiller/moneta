import './app.scss'

import React from 'react'
import * as ReactRedux from 'react-redux'

import Board from '../board/board.jsx'
import Store from '../../store';

const App = props => (
  <ReactRedux.Provider store={Store}>
    <Board />
  </ReactRedux.Provider>
)

export default App
