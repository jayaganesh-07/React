import React, { useState } from "react";

const Array = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6]);
  const [obj,setObj] = useState({Model:"Iphone",Rate:"1Lakhs",Storage:256})





  const changeData = () => {
    setArray([...array, 10003]);
  };
  const chaneName = ()


  return (
    <>
    
      <h1>{array.map((e)=>(
        <h1>
          {e}
        </h1>
      ))}</h1>
      <button onClick={changeData}>Click</button>
    </>
  );
};

export default Array;