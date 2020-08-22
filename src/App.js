import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
      meaningOfLife: 47
    }
  //state updates are ascynchronous if you want to use or manipulate the state use
  //after the update add the second parameter which will be a function

    handleClick = () => {
      this.setState((prevState, prevProps) => {
        return {meaningOfLife: prevState.meaningOfLife + 1}
      }, 
        () => console.log(this.state.meaningOfLife))
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                {this.state.meaningOfLife}
              </p>
              <button
                onClick={this.handleClick}
              >
                Update State
              </button>
            </header>
          </div>
        );
    }
}

export default App;
