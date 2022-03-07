import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);

  const onToggle = async () => {
    setToggle(!toggle);
  };

  const handleSignUp = async () => {
    await axios
      .post("http://localhost:4000/loginApi/signup", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };

  const handleSignUp1 = async () => {
    await axios
      .post("http://localhost:4000/loginApi/Login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };

  return (
    <Container>
      {toggle ? (
        <Wrapper>
          <Text>Register</Text>
          <Text1>Create an account now</Text1>
          <Inputs>
            <input
              placeholder="UserName"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Inputs>
          <div style={{ color: "red" }}>{error}</div>
          <Button onClick={handleSignUp}>Register</Button>
          <div
            onClick={onToggle}
            style={{ paddingTop: "30px", cursor: "pointer" }}
          >
            Login
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <Text>Have an account</Text>
          <Text1>Sign in</Text1>
          <Inputs>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Inputs>
          <div style={{ color: "red" }}>{error}</div>
          <Button onClick={handleSignUp1}>Register</Button>
          <div
            onClick={onToggle}
            style={{ paddingTop: "30px", cursor: "pointer" }}
          >
            Sign up
          </div>
        </Wrapper>
      )}
    </Container>
  );
};

export default Registration;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 400px;
  width: 400px;
  background-color: lavender;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  border-radius: 5px;
`;

const Text = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
`;

const Text1 = styled.div``;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  input {
    height: 50px;
    width: 350px;
    margin-top: 10px;
  }
`;

const Button = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  background-color: tomato;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
