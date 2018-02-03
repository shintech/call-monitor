import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation.jsx'
import Home from './components/Home.jsx'
import Page from './components/Page.jsx'
import About from './components/About.jsx'

require('../public/css/style.scss')

ReactDOM.render((
  <Router>
    <div>
      <Route component={Navigation} />
      <div className='container-fluid'>
        <Route exact path='/' component={Home} />
        <Route exact path='/page' component={Page} />
        <Route exact path='/about' component={About} />
      </div>
    </div>
  </Router>
), document.getElementById('container'))
