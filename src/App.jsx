import { useState } from 'react';
import React from 'react';
import './App.css';
import InputOne from './inputOne.jsx';
import InputTwo from './InputTwo.jsx';

function App() {

    const [firstWord, setFirstWord] = useState('');
    const [secondWord, setSecondWord] = useState('');


  return (
    <div className='container center-flex'>
        <div className='box center-flex'>
            <h1>Anagram Checker</h1>

            <InputOne firstWord={firstWord} setFirstWord={setFirstWord}/>

            <InputTwo secondWord={secondWord} setSecondWord={setSecondWord}/>


            <button className='button' type='button'>Check</button>

        </div>
    </div>
  )
}

export default App
