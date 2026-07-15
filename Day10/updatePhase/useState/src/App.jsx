import React from "react";
import Counter from "./component/Counter";
import NameChange from "./component/nameChange";
import LoginStatus from "./component/LoginStatus ";

const App = () => {
  return (
    <>
      <Counter />
      <NameChange />
      <LoginStatus/>
    </>
  );
};

export default App;