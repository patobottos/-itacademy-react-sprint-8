import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cairo";
  font-size: 0.95rem;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  background-color: #000;
  padding: 0;

  ul {
    display: flex;
    list-style: none;
    align-content: center;
    padding: 0;
  }

  li {
    text-align: center;
    color: #bfbfbf;
    padding: 10px;
    width: 8rem;
    border-right:1px solid grey;
    border-left:1px solid grey;

      &:hover {
        color: white;
        border-bottom: solid #528dda;
    }
  }
`