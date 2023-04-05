import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Cairo";
  font-size: 0.85rem;
  word-spacing: 2px;
  color: white;
  background-color: black;
  margin-bottom: 10px;

  p {
    justify-content: center;
    align-self: center;
  }

  .lucasfilm {
    position: relative;
    font-size: 0.75rem;
    margin-bottom: 10px;
    line-height: 0.8rem;
  }

  .icons {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 20px;
    gap: 30px;

    ul {
      display: flex;
      list-style: none;
      align-content: center;
      padding: 0;
      margin: 0;
      gap: 30px;
      font-size: 20px;
    }
  }

  .lastline {
    margin-bottom: 50px;
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
    font-size: 0.7rem;
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
`;
