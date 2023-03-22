import React, { useEffect, useState } from "react";
import axios from "axios";

import { StarshipContainer } from "../Starships/Starships.styled";
import {
  StarshipName,
  StarshipImg,
  StarshipDetailsContainer,
  DetailsTop,
  //DetailsLeft,
  //DetailsRight,
} from "./StarshipCard.styles";

function StarshipCard() {
  // ID EXAMPLE
  const id = 4;

  const [starshipData, setStarshipData] = useState();

  // FUNCTION TO GET STARSHIP DATA
  const getStarshipsData = async () => {
    const response = await axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => res.data.results[id]);
    setStarshipData(response);
  };

  // GET API DATA ON PAGE LOAD
  useEffect(() => {
    getStarshipsData();
  }, []);

  const starship = starshipData;
  console.log("my starship", starship);

  return (
    <div>
      {starshipData && (
        <div>
          <StarshipContainer>
            <StarshipName>{starship.name}</StarshipName>
            <StarshipImg />
            <StarshipDetailsContainer>
              <DetailsTop>
                <p>MODEL: {starship.model}</p>
                <p>STARSHIP CLASS: {starship.starship_class}</p>
                <p>MANUFACTURER: {starship.manufacturer}</p>
                <p>COST: {starship.cost_in_credits} credits</p>
              </DetailsTop>
              <DetailsTop>
                <p>CREW: {starship.crew}</p>
                <p>PASSENGER CAPACITY: {starship.passengers}</p>
                <p>CARGO CAPACITY: {starship.cargo_capacity}</p>
                <p>CONSUMABLES: {starship.consumables}</p>
              </DetailsTop>
              <DetailsTop>
                <p>LENGTH: {starship.length}</p>
                <p>
                  MAXIMUM ATMOSPHERING SPEED: {starship.max_atmosphering_speed}
                </p>
                <p>HYPERDRIVE RATING: {starship.hyperdrive_rating}</p>
                <p>MAXIMUM SPEED IN REALSPACE: {starship.MGLT}</p>
              </DetailsTop>
            </StarshipDetailsContainer>
          </StarshipContainer>
        </div>
      )}
    </div>
  );
}

export default StarshipCard;
