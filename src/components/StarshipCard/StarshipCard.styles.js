import styled from "styled-components";

export const StarshipName = styled.div`
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 800;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 10px 0;
`;

export const StarshipImg = styled.div`
  display: flex;
  width: auto;
  height: 40vh;
  margin: 40px 0px;
  align-items: center;
  justify-content: center;
`;

export const StarshipDetailsContainer = styled.div`
  background-color: #151515;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 10px;
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