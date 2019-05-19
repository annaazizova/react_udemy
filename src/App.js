import React, { Component } from 'react';
import './App.css';
import './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "Anna",
  };

  changeNameHandler = (event) => {
      this.setState({
        username: event.target.value,
      })
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeNameHandler} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
