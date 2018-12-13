import React, { Component } from 'react';
//import './App.css';


import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Den'
  }

  userNameChangeNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.userNameChangeNameHandler}
          currentName={this.state.userName}>
        </UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;
