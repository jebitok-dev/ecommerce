import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

//route takes a number of components (exact- false or true/path-localhost:3000/, /component)
function App() {
        return (
          <div>
          <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route path='/hats' component={HatsPage} />
          </Switch>
          </div>
        );
}

export default App;
