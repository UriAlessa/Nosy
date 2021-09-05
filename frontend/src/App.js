import './App.css'
import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import Home from "./pages/Home"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import NotFound from './pages/NotFound'

const App = (props) => {

  // useEffect( () => {
  //   if(localStorage.getItem('token')) {
  //     props.(localStorage.getItem('token'))
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/terms'  component={Terms} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/notfound' component={NotFound} />
        <Redirect to='/'/>
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