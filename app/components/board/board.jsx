import './board.scss'

import React from 'react'
import Classes from 'classnames'

const pattern = [
  [true, true, false, true, false],
  [false, false, true, false, true],
  [true, false, false, false, false],
  [true, true, false, false, true],
  [false, false, true, false, false]
]

const Board = props => (
  <div className="board-container">
    <div className="board">
    {pattern.map(row => 
      <div className="board-row">
        {row.map(column => <div className={Classes('board-row-item', { selected: column })}></div>)}
      </div>
    )}
    </div>
  </div>
)

export default Board
