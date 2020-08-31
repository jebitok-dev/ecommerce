import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shoppage/shop.component';

//switch gives control of our code
//route takes a number of components (exact- false or true/path-localhost:3000/, /component)
function App() {
        return (
          <div>
          <Switch> 
            <Route exact path='/' component={HomePage} /> 
            <Route path='/shop' component={ShopPage} />
          </Switch>
          </div>
        );
}

export default App;
