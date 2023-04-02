import React, { useState } from 'react';
import {SignupMainContainer, SignupContainer, SignupFooter, SignupButton} from './Signup.styled';


export default function Signup(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    console.log("Sending Signup");
  }

  return (
    <SignupMainContainer>
      <form id="signup-form">
        <SignupContainer>

          <label htmlFor="username">Your full name: </label>
          <input 
            type="text"
            value={userName}
            id="username"
            name="username"
            placeholder="Enter your full name"
            onChange={(event) => setUserName(event.target.value)}
            />
        </SignupContainer>

        <SignupContainer>
          <label htmlFor="email">email: </label>
          <input
            type="email"
            value={userEmail}
            id="userEmail"
            name="userEmail"
            placeholder="Enter your email"
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </SignupContainer>

        <SignupContainer>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={userPassword}
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(event) => setUserPassword(event.target.value)}
          />
        </SignupContainer>
        <SignupButton type="submit">Sign up</SignupButton>
      </form>
      <SignupFooter onClick={() => props.onFormSwitch('login')}>You already have an account? Log in here!</SignupFooter>
    </SignupMainContainer>
  );
}
