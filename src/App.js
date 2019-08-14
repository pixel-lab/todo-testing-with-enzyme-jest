import React from 'react';


import GuessWord from './guessword';
import Message from './message';

const gussedWords =[
  {guessWord:'tank', letterCount: 3},
  {guessWord:'water', letterCount: 2},
  {guessWord:'life', letterCount: 3},
]

function App() {
  return (
    <div className="wrapper">
      <Message success={false}  />
      
      <GuessWord guessword={gussedWords}/>
     
    </div>
  );
}

export default App;
