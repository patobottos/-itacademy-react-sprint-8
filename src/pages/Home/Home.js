import React, { useState } from "react";
import { TextHome } from "./Home.styled";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
// DE MOMENT NO EL FAIG SERVIR  import Wellcome from "../../components/Wellcome/Wellcome";
// DE MOMENT NO EL FAIG SERVIR import Starships from "../Starships/Starships";

export default function Home() {
  //SENSE USAR ARA: const [hasStarted, setHasStarted] = useState(false);
  const [currentContext, setCurrentContext] = useState('login');

  const toggleContext = (contextName) => {
    setCurrentContext(contextName); 
  }

 // SENSE USAR ARA: const handleStart = () => { setHasStarted(true); };

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
