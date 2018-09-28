import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var value1 = 0;
var value2 = 0;
var value3 = 0;
var proposedAnswer = 0;

class App extends Component {
  constructor(){
    super();
    this.state={
      numQuestions: 0,
      numCorrect: 0
    }
    this.correct = this.correct.bind(this);
    this.incorrect = this.incorrect.bind(this);
    this.refreshData();
  }

refreshData(){
    this.value1 = Math.floor(Math.random() * 100);
	this.value2 = Math.floor(Math.random() * 100);
	this.value3 = Math.floor(Math.random() * 100);
	this.proposedAnswer = Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3;

}
checkTrueAnswer = () =>{
  (this.value1 + this.value2 + this.value3 === this.proposedAnswer) ? this.correct() : this.incorrect()
}
checkFalseAnswer = () =>{
  (this.value1 + this.value2 + this.value3 !== this.proposedAnswer) ? this.correct() : this.incorrect()
}  
correct(){
  this.setState((prevState) => ({
  numQuestions: prevState.numQuestions + 1,
  numCorrect: prevState.numCorrect + 1
	}))
}
incorrect(){
  this.setState((prevState) => ({
  numQuestions: prevState.numQuestions + 1,
	}))
}
  
  render() {
    this.refreshData();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.value1} + ${this.value2} + ${this.value3} = ${this.proposedAnswer}`}</p>
          </div>
          <button onClick={this.checkTrueAnswer}>True</button>
          <button onClick={this.checkFalseAnswer}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
