import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app/app.jsx'
import Store from './store'
import { initializeApplication } from './actions/app.js'

Store.dispatch(initializeApplication())

ReactDOM.render(<App />, document.querySelector('root'));
