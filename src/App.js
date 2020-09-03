import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//switch gives control of our code
//route takes a number of components (exact- false or true/path-localhost:3000/, /component)
function App() {
        return (
          <div>
          <Header />
          <Switch> 
            <Route exact path='/' component={HomePage} /> 
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignAndSignUpPage} />
          </Switch>
          </div>
        );
}

export default App;
