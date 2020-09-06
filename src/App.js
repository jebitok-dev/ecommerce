import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

//switch gives control of our code
//route takes a number of components (exact- false or true/path-localhost:3000/, /component)
class App extends React.Component() {
  constructor() {
    super();

    //to understand how firebase what firebase gives us we have to we've
    // to properly understand concept of subscription
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  //open-subscription
componentDidMount() {
  //user signedin or signed-out
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user })
    console.log(user);
  })
}

//aware of all auth changes in firebase
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch> 
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignAndSignUpPage} />
      </Switch>
      </div>
    );
  }
}

export default App;
