import {
  StarshipContainer,
  StarshipTitle,
  ButtonViewMore,
} from "./Starships.styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { cutUrl } from "../../app/utils";

const StarshipList = () => {
  const [starshipArray, setStarshipArray] = useState([]);
  const [page, setPage] = useState(1);

  const getStarshipsData = async () => {
    const response = await axios
      .get("https://swapi.dev/api/starships/?page="+ page )
      .then((res) => res.data.results);
    setStarshipArray([...starshipArray, ...response]);
  };

  useEffect(() => {
    getStarshipsData();
  }, [page]);


  const handleViewMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <StarshipContainer>
        {starshipArray &&
          starshipArray.map((starship, index) => (
            <div>
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
            </div>
          ))}
        <ButtonViewMore onClick={handleViewMore}>View more</ButtonViewMore>
      </StarshipContainer>
    </div>
  );
}

export default StarshipList;
