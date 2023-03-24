import { StarshipContainer, StarshipTitle } from "./Starships.styled";
import ArrayOfStarships from "../../api/ArrayOfStarships";
import { Link } from "react-router-dom";
import { cutUrl } from "../../app/utils";

function StarshipList() {
  ArrayOfStarships();
  const arrayList = ArrayOfStarships();

  return (
    <div>
      {arrayList &&
        arrayList.map((starship, index) => (
          <div>
            <StarshipContainer key={index}>
              <ul>
                <li>
                  <StarshipTitle>
                    <Link to={"/starships/" + cutUrl(starship.url)}>
                      {starship.name}
                    </Link>
                  </StarshipTitle>
                </li>
                <li>{starship.model}</li>
              </ul>
            </StarshipContainer>
          </div>
        ))}
    </div>
  );
}

export default StarshipList;
