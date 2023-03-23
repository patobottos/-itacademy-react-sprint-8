import { StarshipContainer, StarshipTitle } from "./Starships.styled";
import ArrayOfStarships from "../../api/ArrayOfStarships";

function StarshipList() {

  ArrayOfStarships(); 
  const arrayList = ArrayOfStarships();
  
  const handleClick = (index) => {
    console.log('clicked index:', index);
  }

  return (
    <div>
      {arrayList &&
        arrayList.map((starship, index) => (
          <div>
          <StarshipContainer >
            <ul>
              <li>
                <StarshipTitle 
                data-value={index} 
                onClick={() => handleClick(index)}>
                {starship.name}</StarshipTitle>
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