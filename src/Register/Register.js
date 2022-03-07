import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
const Register = () => {
  const schemaModel = yup.object().shape({
    name: yup.string().required("This field has to be filled"),
    email: yup.string().email().required("This field has to be filled"),
    password: yup.string().required("This field has to be filled"),
    confirm: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaModel),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const { name, email, password } = data;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post("http://localhost:4000/register", data, config);

    reset();
  });

  return (
    <div>
      <Container>
        <Wrapper>
          <Card onSubmit={onSubmit}>
            <Title>Create an Account here</Title>

            <Label> {errors.name && errors.name.message}</Label>
            <Input placeholder="Enter your Name" {...register("name")} />

            <Label> {errors.email && errors.email.message}</Label>
            <Input placeholder="Enter your email" {...register("email")} />

            <Label> {errors.password && errors.password.message}</Label>
            <Input
              placeholder="Enter your password"
              {...register("password")}
            />
            <Label> {errors.confirm && errors.confirm.message}</Label>
            <Input placeholder="Enter your confirm" {...register("confirm")} />
            <Button type="submit">Register</Button>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;

const Label = styled.label`
  font-size: 12px;
  color: red;
  font-weight: bold;
`;
const Button = styled.button`
  color: white;
  padding: 15px 30px;
  /* background: ${({ bg }) => bg}; */
  font-size: 20px;
  transition: all 350ms;
  transform: scale(1);
  background: #f8003f;
  border-radius: 3px;
  margin: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border: 0;

  :hover {
    cursor: pointer;
    transform: scale(0.97);
  }
`;

const Input = styled.input`
  margin: 10px 0;
  padding-left: 10px;
  height: 35px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 3px;
  outline: none;

  ::placeholder {
    font-family: Poppins;
    font-size: 16px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const Card = styled.form`
  width: 500px;
  min-height: 300px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  padding-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);

  justify-content: center;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
  background-color: lightgray;
`;
