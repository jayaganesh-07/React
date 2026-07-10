import React from 'react'
import Object from './Object'

const App = () => {
const arr = [1,2,3,4,5,6]



  return (
    <>
    <h1>{arr}</h1>
    <div>
      <ol>
        {arr.map((e,i)=>(
            <li key={i}>{e}</li>
        ))}
      </ol>
     
    </div>
    <div>
       <p>{arr.filter ((e)=>e%2===0)}</p>
    </div>
    <div>
       <p>{arr.find ((e)=>2)}</p>
    </div>
    <Object/>
    </>
  )
}

export default App