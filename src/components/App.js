import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/hook" />
      <Route path="/hook" component={Home} />
    </Switch>
  )
}

export default App
