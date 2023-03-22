import ArrayOfStarships from "../../api/ArrayOfStarships";
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
  ArrayOfStarships();
  const arrayLista = ArrayOfStarships();
  console.log("array naves 2023", arrayLista);

  const starship = arrayLista[1];

  return (
    <div>
      {arrayLista &&
        
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
                <DetailsTop>Detalles 2</DetailsTop>
                <DetailsTop>Detalles 3</DetailsTop>
              </StarshipDetailsContainer>
            </StarshipContainer>
          </div>
        }
    </div>
  );
}

export default StarshipCard;
