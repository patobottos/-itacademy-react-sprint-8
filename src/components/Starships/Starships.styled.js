import styled from "styled-components";

export const StarshipContainer = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  background-color: #000;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: #151515;
    border-radius: 6px;
  }

  li {
    color: #C0C0C0;
    padding: 5px; 
  }
`;

export const StarshipTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`

