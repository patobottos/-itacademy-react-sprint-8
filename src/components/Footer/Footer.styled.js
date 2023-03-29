import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Cairo";
  font-size: 0.85rem;
  word-spacing: 2px;
  color: white;
  background-color: #000;
  border: 1px solid transparent;
  margin-bottom: 100px;

  p {
    justify-content: center;
    align-self: center;
  }

  ul {
    justify-content: center;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-bottom: 10px;
    margin-bottom: 10px;
    max-height: 10px;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  li {
    justify-content: center;
    text-align: center;
    align-items: center;
    color: white;
    padding: 5px 7px;

    .laser {
      height: 1px;
      background-color: white;
    }

    &:hover {
      .laser {
        box-shadow: 0px 0px 6px 1px white;
      }
    }
  }

  .grey-bar {
    height: 0.9rem;
    width: 0.5px;
    background-color: grey;
    align-self: center;
  }

  .icons {
    border: 1px solid blue;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    ul {
      display: flex;
      list-style: none;
      align-content: center;
      padding: 0;
      margin: 0;
    }

    li {
      text-align: center;
      padding: 5px;
      width: 8rem;
    }

    img {
      width: auto;
      height: 4vh;
      margin: 40px 0px;
      align-items: center;
      justify-content: center;
    }


  }
`;
