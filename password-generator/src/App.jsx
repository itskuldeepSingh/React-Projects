import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(number) str+= "0123456789"
    if(number) str+= "~!@#$%^&*()_+"

    for(let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char)
      pass+= str.charAt(char)
    }

    setPassword(pass)
    
  }, [length, number, character, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  

  return (
    <>
    <div className="container">
      <div className="row">
        <h1>Password Generator</h1>
        <div className="passwordArea">
          <input type="text"
          value={password}
          readOnly
          ref={passwordRef} />
          <button 
          type='button'
          onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="options">

          <div className='inputs'>
            <input type="range"
            min={8}
            max={100}
            value={length}
            className='range'
            onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length} </label> 
          </div>

          <div className='inputs'>
            <input type="checkbox"
            defaultValue={number}
            className='number'
            onChange={() => setNumber((prev) => (!prev))} />
            <label>Number Allowed </label> 
          </div>

          <div className='inputs'>
            <input type="checkbox"
            defaultValue={character}
            className='character'
            onChange={() => setCharacter((prev) => (!prev))} />
            <label>Character Allowed </label> 
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default App