import React, { useEffect, useState } from "react";
import { LoginContainer } from "./Login.styled.js";

const savedUserData = localStorage.getItem("userInfo");
const savedUserDataParsed = savedUserData
  ? JSON.parse(savedUserData)
  : { userName: "", userPassword: "" };

console.log("savedUserDataParsed a l'inici", savedUserDataParsed);

export default function Login() {

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // GUARDANT INFO USUARIS
  useEffect(() => {
    const userData = { userName, userPassword };
    localStorage.setItem("userInfo", JSON.stringify(userData));
    console.log('userData post guardado', userData);
  }, [userName, userPassword]);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Envío de datossss!");
  }


  return (
    <LoginContainer>
      <h3>LOGUEATE EN STAR WARS!</h3>
      <form onSubmit={handleLogin}>
        <div>
          <label for="username">Username: </label>
          <input
            type="email"
            value={userName}
            id="username"
            name="username"
            placeholder="Enter your email as username"
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>

        <div>
          <label for="password">Password: </label>
          <input
            type="password"
            value={userPassword}
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(event) => setUserPassword(event.target.value)}
          ></input>
        </div>
        <button>Login</button>
      </form>
    </LoginContainer>
  );
}
