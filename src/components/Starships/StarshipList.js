import { StarshipContainer, StarshipTitle } from "./Starships.styled";
import ArrayOfStarships from "../../api/ArrayOfStarships";

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