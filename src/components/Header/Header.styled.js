import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 98%;
  padding: 0 5px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  background-color: #000;

  img {
    display: inline-block;
    text-align: center;
    margin-left: 41%;
    max-height: 200px;
  }
`

export const ButtonsContainer = styled.div`
  position: relative;
  margin-right: 10px;
  display: flex;
  gap: 10px;
`