import React from 'react'

const GuessWord = (props)=>{

    if(!props.guessword.length){
        return <div data-test="guess-title">Guess the word</div>
    }
    else {
        const retrunHTml =  props.guessword.map((i) => <tr data-test="result-count"><td>{i.guessWord}</td><td>{i.letterCount}</td></tr>);

        return (
            <div>
            <h2 data-test="gussed-words">Gussed Words</h2>
            <table>
                <thead>
                    <tr>
                    <th>Guess Word</th>
                    <th>Count Match</th></tr>
                </thead>
                <tbody>
                    {retrunHTml}
                </tbody>
            </table>
            </div>
        )
    }



}

export default GuessWord