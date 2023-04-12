import styled from "styled-components";

export const PilotsContainer = styled.div`
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

export const PilotsName = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    color: #E6E6E6;
`;


export const PilotImg = styled.div`
  background-image: url("https://www.udacity.com/blog/wp-content/uploads/2021/02/img8.png");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  display: flex;
  width: auto;
  height: 10vh;
  margin: 40px 20px 60px 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const PilotDetailsContainer = styled.div`
  background-color: #151515;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  margin: 10px 0;
`;

export const DetailsTop = styled.div`
  color: #c0c0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 15px;
  margin: 10px 0;

  .item {
    display: flex;
    flex-direction: row;
    line-height: 20px;
  }

  .title {
    justify-content: flex-end;
    font-weight: 600;
    color: white;
    margin-right: 5px; 
  }

  .data {
    justify-content: flex-start;
    font-weight: 500;
    color: #808080;
    margin-left: 5px;
    text-transform: uppercase;
  }
`;

export const DetailsMiddle = styled.div`
  color: #c0c0c0;
  display: flex;
  flex-direction: row;
  line-height: 15px;
  margin: 10px 0;

  .left {
    flex: 48%;
  }

  .right {
    flex: 48%;
  }

  .item {
    display: flex;
    flex-direction: row;
    line-height: 20px;
    font-size: 0.95rem;
  }

  .title {
    justify-content: flex-end;
    font-weight: 600;
    color: #ececec;
    margin-right: 5px; 
  }

  .data {
    justify-content: flex-end;
    font-weight: 500;
    color: #808080;
    margin-left: 5px;
    text-transform: uppercase;
  }
`;