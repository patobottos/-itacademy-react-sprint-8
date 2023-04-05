import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cairo";
  font-size: 1rem;
  border-bottom: 1px solid grey;
  background-color: #000;
  letter-spacing: 0.04rem;

  ul {
    display: flex;
    list-style: none;
    align-content: center;
    padding: 0;
    margin: 0;
  }

  li {
    text-align: center;
    color: #bfbfbf;
    padding: 5px;
    width: 8rem;

    &:hover {
      color: white;
      
      .laser {
        box-shadow: 0px 5px 5px 1.5px white;
      }
    }
  }
`;
