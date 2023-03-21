import { StarshipContainer, StarshipTitle } from "./Starships.styled";
import React, { useEffect, useState} from 'react';
import axios from "axios";

function StarshipList() {

  const [starshipArray, setStarshipArray] = useState();

  const getStarshipsData = async () => {
    const response = await axios
    .get("https://swapi.dev/api/starships/")
    .then((res) => res.data.results);
    setStarshipArray(response);
  }

  useEffect(() => {
    getStarshipsData();
  }, [])


  return (
    <div>
      {starshipArray &&
        starshipArray.map((starship) => (
          <div>
          <StarshipContainer>
            <ul>
              <li>
                <StarshipTitle>{starship.name}</StarshipTitle>
              </li>
              <li>{starship.model}</li>
            </ul>
          </StarshipContainer>
          </div>
        ))  
      }
    </div>
  )
}

export default StarshipList;