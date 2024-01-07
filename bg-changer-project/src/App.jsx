import { useState } from "react"

function App() {

  const [ color, setColor ] = useState("red")

  return (
    <>
    <div className="container" style={{backgroundColor : color}}>
      <div className="bottomBar">
        <button type="button" onClick={() => setColor("red")} style={{backgroundColor : "red"}}>Red</button>
        <button type="button" onClick={() => setColor("blue")} style={{backgroundColor : "blue"}}>Blue</button>
        <button type="button" onClick={() => setColor("green")} style={{backgroundColor : "green"}}>Green</button>
        <button type="button" onClick={() => setColor("black")} style={{backgroundColor : "black"}}>Red</button>
      </div>
    </div>
    </>
  )
}

export default App