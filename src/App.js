import React, { Fragment } from 'react'
import { Route, Switch, } from 'react-router-dom'
import PostIts from './components/PostIts'

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path='/' component={PostIts} />
      <Route path='/postits' component={PostIts} />
    </Switch>
  </Fragment>
)

export default App
