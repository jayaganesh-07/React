import React, { useState } from "react";
import Array from "./component/Array";

const App = () => {
  const [color, setColor] = useState(true);

  const changeColor = () => {
    setColor(!color);
  };

  return (
    <>
     <Array/>
      <div
        className={
          color
            ? "bg-fuchsia-400 w-screen h-screen"
            : "bg-amber-200 w-screen h-screen"
        }
      >
        <button
               onClick={changeColor}
          className="bg-white px-4 py-2 rounded m-5"
        >
              Click
        </button>
      </div>

     
    </>
  );
};

export default App;