import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSecretWord} from './actions/'


import GuessWord from './guessword';
import Message from './message';
import Input from './input';

const gussedWords =[
  {guessWord:'store', letterCount: 3},
  {guessWord:'water', letterCount: 2},
  {guessWord:'life', letterCount: 3},
]

class App extends Component {
  componentDidMount(){
    this.props.getSecretWord();
  }  
  render(){
  return (
    <div className="wrapper">
      <h1>Jotto</h1>
      <Message success={true}  />
      <Input/>
      <GuessWord guessword={gussedWords}/>     
    </div>
  )}
}

const mapStateToProps = (state) => {
  const {success,GussedWords,SecretWord} = state;
  return {
    success,GussedWords,SecretWord
  }
}


export default connect(mapStateToProps,{getSecretWord})(App);