import React, { useState } from "react";
import {
  LoginMainContainer,
  LoginContainer,
  LoginButton,
  LoginFooter,
} from "./Login.styled.js";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPasswordLogin, setUserPasswordLogin] = useState("");
  //const userData = { userEmailLogin, userPasswordLogin };
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    let savedUserData = localStorage.getItem("userInfo");
    let savedUserDataParsed = JSON.parse(savedUserData);

    console.log("saved user data al inicio", savedUserDataParsed);
    console.log("userEmailLogin", userEmailLogin);
    console.log("userPasswordLogin", userPasswordLogin);
    console.log("savedUserDataParsed.email", savedUserDataParsed.email);
    console.log("savedUserDataParsed.password", savedUserDataParsed.password);

    if ((savedUserDataParsed = false)) {
      alert("Please, sign up first");
    }

    if (
      userEmailLogin === savedUserDataParsed.email &&
      userPasswordLogin === savedUserDataParsed.password
    ) {
      console.log("Succesful login!");
      setSuccessfulLogin(true);
    } else {
      console.log("Login error!");
    }
  };

  return (
    <div>
      {successfulLogin ? (
        <div>
          <Link to="/welcome">Successful login!</Link>
        </div>
      ) : (
        <LoginMainContainer>
          <form onSubmit={handleLogin}>
            <LoginContainer>
              <label htmlFor="email">email: </label>
              <input
                type="email"
                value={userEmailLogin}
                id="userEmail"
                name="userEmail"
                placeholder="Enter your email"
                required
                onChange={(event) => setUserEmailLogin(event.target.value)}
              />
            </LoginContainer>

            <LoginContainer>
              <label htmlFor="password">password: </label>
              <input
                type="password"
                value={userPasswordLogin}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={(event) => setUserPasswordLogin(event.target.value)}
              />
            </LoginContainer>
            <LoginButton type="submit">Log in</LoginButton>
          </form>
          <LoginFooter onClick={() => props.onFormSwitch("signup")}>
            Don't you have an account? Register here!
          </LoginFooter>
        </LoginMainContainer>
      )}
    </div>
  );
}
