import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input/Input'
import Output from './Output/Output'

class App extends Component {
state = {
  username: ''
};

updateUsernameHandler = (event) => {
  this.setState( {
    username: event.target.value
  } )
};

resetUsernameHandler = () => {
  this.setState({
    username: ''
  })
};

  render() {
    return (
      <div className="App">
        <h1>Username Editor</h1>
        <Input 
          username={this.state.username} 
          changed={this.updateUsernameHandler}/>
        <button onClick={() => this.resetUsernameHandler()}>Reset</button>
        <hr></hr>
        <Output username={this.state.username} />
      </div>
    );
  }
}

export default App;
