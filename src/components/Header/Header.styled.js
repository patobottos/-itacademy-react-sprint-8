import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  background-color: #000;

  img {
    display: inline-block;
    margin: 0 auto;
    max-height: 220px;
  }
`

export const ButtonsContainer = styled.div`
  position: absolute;
  right: 30px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`