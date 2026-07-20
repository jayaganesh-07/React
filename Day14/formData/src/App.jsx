import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState("")
  const [change, setChange] = useState([])

  const changeName = (e) => {
    setData(e.target.value)
  }

  const summit = (e) => {
    e.preventDefault()

    setChange([...change, data]);
    setData("") // Clear the input after adding
  };

  return (
    <>
      <form>{change.map((e, i) => (
          <h2 key={i}>{e}</h2>
        ))}

        <input type="text" value={data} onChange={changeName} placeholder="Enter a name" /> <br /> <br />
     <button onClick={summit}>Click</button>
      </form>
    </>
  )
}

export default App