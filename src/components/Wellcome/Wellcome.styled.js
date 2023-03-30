import styled from "styled-components";

export const WellcomeContainer = styled.div`
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const WellcomeButton = styled.button`
  font-family: "Cairo";
  font-size: 0.95rem;
  border: 0.5px solid #bfbfbf;
  border-radius: 7px;
  background-color: #000;
  color: #bfbfbf;
  cursor: pointer;
  padding: 6px 12px;
  text-align: center;
  width: 20vw;
  margin: 20px;
  transition: 0.3s;
  align-self: center;

  &:hover {
    color: white;
    border: 1px solid white;
    box-shadow: 0px 0px 6px 1px white;
  }
`;
