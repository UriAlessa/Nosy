import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from "./pages/Home"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import NotFound from './pages/NotFound'
import AccountSection from './components/AccountSection'
import GamepadButton from './pages/GameButtons'
import QuestionCard from './components/QuestionCard';

const App = (props) => {

  // useEffect( () => {
  //   if(localStorage.getItem('token')) {
  //     props.(localStorage.getItem('token'))
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/prueba' component={QuestionCard}/>
        <Route exact path='/' component={Home} />
        <Route path='/terms' component={Terms} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/notfound' component={NotFound} />
        <Route path='/accounts' component={AccountSection} />
        <Route path='/selectgame' component={GamepadButton} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

// const mapStateToProps = (state) => {
//   return {

//   }
// }

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
