import styled from "styled-components";

export const WelcomeContainer = styled.div`
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
`;

export const WelcomeButton = styled.button`
  font-family: "Cairo";
  font-size: 0.95rem;
  letter-spacing: 0.04rem;
  font-weight: 700;
  border: 0.5px solid #bfbfbf;
  border-radius: 7px;
  background-color: #000;
  color: #bfbfbf;
  cursor: pointer;
  padding: 5px 10px;
  text-align: center;
  width: 19vw;
  margin: 20px;
  transition: 0.3s;
  align-self: center;

  &:hover {
    color: white;
    border: 1px solid white;
    box-shadow: 0px 0px 6px 1px white;
  }
`;
