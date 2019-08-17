import {GetletterMatchingCount} from '../helpers';
export const actionTypes ={
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD:'GUESS_WORD'
}

// export function correctGuess(){
//     return {
//         type: actionTypes.CORRECT_GUESS
//     };
// }

export const GussedWord = (gussedWord) =>{
    return function(dispatch, getState){
        const SecretWord = getState().SecretWord;        
        const letterMatchingCount = GetletterMatchingCount(gussedWord, SecretWord);

        dispatch({
            type:actionTypes.GUESS_WORD,
            payloads: {gussedWord,letterMatchingCount}
        })
        if(gussedWord === SecretWord){
            dispatch({
                type:actionTypes.CORRECT_GUESS
            })
        }
    }
}