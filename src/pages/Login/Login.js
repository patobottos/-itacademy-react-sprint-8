import React, { useEffect, useState } from "react";
import { LoginMainContainer, LoginContainer } from "./Login.styled.js";
import {LoginButton, LoginFooter} from './Login.styled';

const savedUserData = localStorage.getItem("userInfo");
const savedUserDataParsed = savedUserData
  ? JSON.parse(savedUserData)
  : { userName: "", userPassword: "" };

console.log("savedUserDataParsed a l'inici", savedUserDataParsed);

export default function Login(props) {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // GUARDANT INFO USUARIS
  useEffect(() => {
    const userData = { userEmail, userPassword };
    localStorage.setItem("userInfo", JSON.stringify(userData));
    console.log('userData post guardado', userData);
  }, [userEmail, userPassword]);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Sending login!");
  }

  return (
    <LoginMainContainer>
      <form onSubmit={handleLogin}>
        <LoginContainer>
          <label htmlFor="email">email: </label>
          <input
            type="email"
            value={userEmail}
            id="userEmail"
            name="userEmail"
            placeholder="Enter your email"
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </LoginContainer>

        <LoginContainer>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={userPassword}
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(event) => setUserPassword(event.target.value)}
          />
        </LoginContainer>
        <LoginButton type="submit">Log in</LoginButton>
      </form>
      <LoginFooter onClick={() => props.onFormSwitch('signup')}>Don't you have an account? Register here!</LoginFooter>
    </LoginMainContainer>
  );
}
