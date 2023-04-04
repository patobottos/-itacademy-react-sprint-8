import styled from "styled-components";

export const SignupMainContainer = styled.div`
  width: 400px;
  padding: 10px;
  margin: 7% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #252525;
  color: white;
  font-size: 1.1rem;
`;

export const SignupContainer = styled.div`
  width: 350px;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;

  label {
    text-transform: uppercase;
    color: #ebd900;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
  }

  input {
    padding: 5px 20px;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.075rem;
    color: #ebd900;
    background-color: #484848;
    border: 0.5px solid #ebd900;
    margin-bottom: 10px;

    :focus {
      border: 0.5px solid #ebd900;
    }
  }
`;

export const SignupButton = styled.button`
  min-width: 350px;
  margin: 10px 20px;
  padding: 5px 20px;
  justify-content: center;
  line-height: 2rem;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  background-color: #484848;
  color: #f5f5f5;
  border: 1px solid transparent;
  cursor: pointer;

  :hover {
    background-color: #3f6eac;
  }
`;

export const SignupFooter = styled.div`
  margin: 20px 0;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const SuccessfulRegistration = styled.div`
  width: 400px;
  padding: 10px;
  margin: 7% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  font-size: 1.1rem;
  font-size: 2rem;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  
  :hover {
    color: green;
  }
`