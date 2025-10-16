import React from 'react';

function Second({secondWord, setSecondWord}) {
    return (
        <input
        type='text'
        className='input'
        placeholder='Enter another word'
        value={secondWord}
        onChange={(e) => setSecondWord(e.target.value)}
        >
        </input>
    )
}

export default Second;