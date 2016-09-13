import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Home from '../../ui/components/home';
import Lists from '../../ui/components/lists';

$(document.body).append('<div id="AppBody"></div>');

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          {/*<li><Link to='/about'>About</Link></li>*/}
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='lists' component={Lists} />
    </Route>
  </Router>
), document.getElementById('AppBody'))