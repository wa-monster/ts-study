import React from 'react'
import {Route,HashRouter,Switch} from 'react-router-dom'
import PageHome from './page/home'
import PageLogin from './page/login'

export const App: React.FC =()=>{
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={PageHome}></Route> 
          <Route path="/login" exact component={PageLogin}></Route> 
        </Switch>
      </HashRouter>  
    </div> 
  )
}