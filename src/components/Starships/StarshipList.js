import { StarshipContainer, StarshipTitle } from "./Starships.styled";
import ArrayOfStarships from "../../api/ArrayOfStarships";

function StarshipList() {

  ArrayOfStarships(); 
  const arrayLista = ArrayOfStarships();  

  return (
    <div>
      {arrayLista &&
        arrayLista.map((starship) => (
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