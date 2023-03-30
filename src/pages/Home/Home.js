import React, { useState } from "react";
import { TextHome } from "./Home.styled";
import Wellcome from "../../components/Wellcome/Wellcome";
import Starships from "../Starships/Starships";

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div>
      {hasStarted ? (
        <Starships />
      ) : (
        <div>
          <Wellcome handleStart={handleStart} />
        </div>
      )}
    </div>
  );
}
