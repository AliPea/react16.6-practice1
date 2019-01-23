import React, { Component } from 'react';
import './App.css';
import UserInput from './Input/UserInput';
import UserOutput from './Output/UserOutput';


class App extends Component {
  state = {
    username: "alipea"
  }

  changeUserName = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUserName} currentUserName={this.state.username}/>
        <UserOutput userName="alipea"/>
        <UserOutput userName= {this.state.username}/>
      </div>
    );
  }
}

export default App;
