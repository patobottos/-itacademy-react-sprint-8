import styled from "styled-components";

export const HeaderButton = styled.button`
  font-family: "Cairo";
  font-size: 0.95rem;
  border: 1px solid transparent;
  border-radius: 7px;
  background-color: #000;
  color: #bfbfbf;
  cursor: pointer;
  padding: 6px 12px;
  text-align: center;
  width: 20vw
  margin: 10px;
  transition: 0.3s;

    &:hover {
      color: white;
      border: 1px solid white;
    }
`