import React, { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  const incremnetCount = () => {
    setCounter((prev) => prev + 1 )
  }

  const decrementCount = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <>
    <div className="container">
      <h1>Counter : { counter }</h1>
      <div>
        <button type='button' onClick={incremnetCount}>Increment (-)</button>
        <button type='button' onClick={decrementCount}>Decrement (+)</button>
      </div>
    </div>
    </>
  )
}

export default App