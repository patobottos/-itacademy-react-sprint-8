import React, { useEffect, useState } from "react";
import axios from "axios";
import { StarshipContainer } from "../Starships/Starships.styled";
import {
  StarshipName,
  StarshipImg,
  StarshipDetailsContainer,
  DetailsTop,
  DetailsMiddle,
} from "./StarshipCard.styles";

function StarshipCard() {
  // CODI IDEAL
  //const id = index;

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
                <div className="item">
                  <div className="title">MODEL:</div>
                  <div className="data">{starship.model}</div>
                </div>
                <div className="item">
                  <div className="title">STARSHIP CLASS:</div>
                  <div className="data">{starship.starship_class}</div>
                </div>
                <div className="item">
                  <div className="title">MANUFACTURER:</div>
                  <div className="data">{starship.manufacturer}</div>
                </div>
                <div className="item">
                  <div className="title">COST:</div>
                  <div className="data">{starship.cost_in_credits} credits</div>
                </div>
              </DetailsTop>

              <DetailsMiddle>
                <div className="left">
                  <div className="item">
                    <div className="title">CREW:</div>
                    <div className="data">{starship.crew}</div>
                  </div>

                  <div className="item">
                    <div className="title">PASSENGER CAPACITY:</div>
                    <div className="data">{starship.passengers}</div>
                  </div>

                  <div className="item">
                    <div className="title">CARGO CAPACITY:</div>
                    <div className="data">{starship.cargo_capacity}</div>
                  </div>

                  <div className="item">
                    <div className="title">CONSUMABLES:</div>
                    <div className="data">{starship.consumables}</div>
                  </div>
                </div>

                <div className="right">
                  <div className="item">
                    <div className="title">LENGTH:</div>
                    <div className="data">{starship.length}</div>
                  </div>

                  <div className="item">
                    <div className="title">MAXIMUM ATMOSPHERING SPEED:</div>
                    <div className="data">
                      {starship.max_atmosphering_speed}
                    </div>
                  </div>

                  <div className="item">
                    <div className="title">HYPERDRIVE RATING:</div>
                    <div className="data">{starship.hyperdrive_rating}</div>
                  </div>

                  <div className="item">
                    <div className="title">MAXIMUM SPEED IN REALSPACE:</div>
                    <div className="data">{starship.MGLT}</div>
                  </div>
                </div>
              </DetailsMiddle>
              <DetailsMiddle>
                <div className="item">
                  <div className="title">PILOTS:</div>
                  <div className="data">{starship.pilots}</div>
                </div>
              </DetailsMiddle>
            </StarshipDetailsContainer>
          </StarshipContainer>
        </div>
      )}
    </div>
  );
}

export default StarshipCard;
