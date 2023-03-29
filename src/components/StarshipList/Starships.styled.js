import styled from "styled-components";

export const StarshipContainer = styled.div`
  margin: 5px 10%;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: #151515;
    border-radius: 6px;
    padding: 10px 15px;
  }

  li {
    color: #C0C0C0;
    padding: 0 5px; 
  }
`;

export const StarshipTitle = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #E6E6E6;
`

export const ButtonViewMore = styled.button`
  font-family: "Cairo";
  font-size: 0.95rem;
  border: 1px solid white;
  border-radius: 7px;
  background-color: #000;
  color: #bfbfbf;
  cursor: pointer;
  padding: 6px 12px;
  text-align: center;
  max-width: 20vw;
  margin: 10px;
  transition: 0.3s;
  align-self: center;

  &:hover {
      color: blue;
      border: 1px solid blue;
    }
`

