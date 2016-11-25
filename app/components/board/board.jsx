import './board.scss'

import React from 'react'
import Classes from 'classnames'
import * as ReactRedux from 'react-redux'

import Piece from '../piece/piece.jsx'

const template = props => (
  <div className="board-container">
    <div className="board">
    {(props.pattern || []).map((row, rowIndex) => 
      <div key={rowIndex} className="board-row">
        {row.map((column, columnIndex) => (
          <Piece key={columnIndex} row={rowIndex} column={columnIndex} selected={ column }/>
        ))}
      </div>
    )}
    </div>
  </div>
)

const Board = ReactRedux.connect(
  state => Object.assign({}, state.board)
)(template)

export default Board
