import styled from "styled-components";

export const StarshipName = styled.div`
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 800;
  color: white;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
`;

export const StarshipImg = styled.div`
  background-image: url("https://www.udacity.com/blog/wp-content/uploads/2021/02/img8.png");
  background-repeat: no-repeat;
  background-position-x: center;
  width: auto;
  height: 40vh;
  margin: 0;
  padding: 0;
`;

export const StarshipDetailsContainer = styled.div`
  background-color: #151515;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid blue;
`;

export const DetailsTop = styled.div`
  color: #c0c0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 15px;
  margin: 2px 0;
  border: 1px solid yellow;
`;

export const DetailsLeft = styled.p`
  font-size: 1.1rem;
  color: #ececec;
`

export const DetailsRight = styled.p`
  font-size: 1rem;
  color: #c0c0c0;
`