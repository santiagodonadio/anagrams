import { useState } from 'react';
import React from 'react';
import './App.css';
import First from './First.jsx';
import Second from './Second.jsx';
import { checkAnagram } from './AnagramChecker';


function App() {

    const [firstWord, setFirstWord] = useState('');
    const [secondWord, setSecondWord] = useState('');

    const handleCheck = () => {
        const result = checkAnagram(firstWord, secondWord);

        if(result){
            alert("Yes");
        } else {
            alert("No");
        }
    }



  return (
    <div className='container center-flex'>
        <div className='box center-flex'>
            <h1>Anagram Checker</h1>

            <First firstWord={firstWord} setFirstWord={setFirstWord}/>

            <Second secondWord={secondWord} setSecondWord={setSecondWord}/>


            <button className='button' type='button' onClick={handleCheck}>Check</button>

        </div>
    </div>
  )
}

export default App
