import { StarshipContainer, StarshipTitle } from "./Starships.styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { cutUrl } from "../../app/utils";

function StarshipList() {

  const [starshipArray, setStarshipArray] = useState(null);

  const getStarshipsData = async () => {
    const response = await axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => res.data.results);
    setStarshipArray(response);
  };

  useEffect(() => {
    getStarshipsData();
  }, []);

  return (
    <div>
      {starshipArray &&
        starshipArray.map((starship, index) => (
          <div>
            <StarshipContainer>
              <ul>
                <li>
                  <StarshipTitle key={index}>
                    <Link to={"/starships/" + cutUrl(starship.url)}>
                      {starship.name}
                    </Link>
                  </StarshipTitle>
                </li>
                <li>{starship.model}</li>
                <li>ID nave: {cutUrl(starship.url)}</li>
              </ul>
            </StarshipContainer>
          </div>
        ))}
    </div>
  );
}

export default StarshipList;