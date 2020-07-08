import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Cart from './Pages/Cart'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cart' component={Cart}/>
                <Route path='/checkout' component={Home} />
            </Switch>
        </BrowserRouter>
  ) ;
}
