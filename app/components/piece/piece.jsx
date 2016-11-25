import './piece.scss'

import React from 'react'
import classnames from 'classnames'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'

import * as actions from '../../actions/piece.js'

const template = props => (
  <div onClick={() => props.actions.selectPiece(props.row, props.column)} className={classnames('piece', { selected: props.selected })}></div>
)

const Piece = ReactRedux.connect(
  null,
  dispatch => Object.assign({}, { actions: Redux.bindActionCreators(actions, dispatch) })
)(template)

export default Piece
