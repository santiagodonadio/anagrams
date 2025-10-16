import React from 'react'

function InputOne({firstWord, setFirstWord}) {
    return (
        <input
        type='text'
        className='input'
        placeholder='Enter a word'
        value={firstWord}
        onChange={(e) => setFirstWord(e.target.value)}
        >
        </input>
    )
}

export default InputOne;