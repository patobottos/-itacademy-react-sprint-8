import React, { useEffect, useState } from "react";
import axios from "axios";
import { StarshipContainer } from "../StarshipList/Starships.styled";
import {StarshipName, StarshipDetailsContainer, DetailsTop, DetailsMiddle, StarshipImg} from './StarshipCard.styles';
import { useParams } from "react-router-dom";

const StarshipCard = () => {
  const { id } = useParams(null);

  const [starshipData, setStarshipData] = useState(null);
  const [error, setError] = useState(null);

  // FUNCTION TO GET STARSHIP DATA
  const getStarshipData = async () => {
    const response = await axios
      .get("https://swapi.dev/api/starships/"+ id )
      .then((res) => res.data)
      .catch((error) => {
        setError(error);
      });
    setStarshipData(response);
  };

  // GET API DATA ON PAGE LOAD
  useEffect(() => {
    getStarshipData();
  }, []);

  // PRINT ERROR
  if (error) return `There has been an error!`;

  const starship = {...starshipData}; // QUITAR ESTA LINEA, NO ES NECESARIO

  const starshipImg =
    "https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg";

  // console.log("starshipImg", starshipImg);

  return (
    <div>
      {starshipData && (
        <div>
          <StarshipContainer>
            <StarshipName>
              {starship.name}
              <h1>Viendo id: {id}</h1>
            </StarshipName>

            <StarshipImg>
              <img src={starshipImg} alt={"starship-img"}/>
            </StarshipImg>
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
