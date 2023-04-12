import { useState } from "react";
import { PilotsContainer } from "./PilotCard.styles";
import axios from "axios";

const PilotsList = ({ pilots }) => {
  const [pilotsUrlArray, setPilotsUrlArray] = useState(pilots);
  const [infoPilots, setInfoPilots] = useState([]);

  console.log("array pilotos=>", pilotsUrlArray);

  const getPilotData = async () => {
    const response = await axios
      .get(pilotUrl)
      .then((res) => res.data);
    setInfoPilots([...infoPilots, ...response]);
  };

  if (pilotsUrlArray.length > 0) {
    getPilotData()
  } else {
    return "no pilots available";
  }

  return (
    <div>
      <PilotsContainer>
        <p>Listado de URLs: {pilotsUrlArray}</p>
        <ul>
          <li>
            <div key={index}>{infoPilots}</div>
          </li>
        </ul>
      </PilotsContainer>
    </div>
  );
};

export default PilotsList;
