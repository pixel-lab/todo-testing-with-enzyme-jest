import React from 'react';


import GuessWord from './guessword';
import Message from './message';



function App() {
  return (
    <div className="wrapper">
      <Message success={false}  />
      
      <GuessWord guessword={[]}/>
     
    </div>
  );
}

export default App;
