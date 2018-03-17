import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Farmer from './Farmer';
import Investor from './Investor';
import Merchant from './Merchant';

const Main = () => (
  <main>
    <Switch>
		  <Route exact path='/' component={Home}/>
      <Route exact path='/farmer' component={Farmer}/>
      <Route exact path='/merchant' component={Merchant}/>
      <Route exact path='/investor' component={Investor}/>
    </Switch>
  </main>
)

export default Main
