import React, { useState } from "react";
import { TextHome } from "./Home.styled";

export default function Home() {

  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => { setHasStarted(true)};


  return (
    <div>
    {}


      <main>
        <TextHome>UNDER CONSTRUCTION: Aquí texto Wellcome page</TextHome>
      </main>
      <footer>
        <>Aquí footer</>
      </footer>
    </div>
  );
}
