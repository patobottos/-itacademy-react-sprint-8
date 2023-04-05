import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

export default function Home() {
  const [currentContext, setCurrentContext] = useState('signup');

  const toggleContext = (contextName) => {
    setCurrentContext(contextName); 
  }

  return (
    <div>
      {currentContext === 'login' ? (
        <Login onFormSwitch={toggleContext} />
      ) : (
        <Signup onFormSwitch={toggleContext} />
      )}
    </div>
  );
}
