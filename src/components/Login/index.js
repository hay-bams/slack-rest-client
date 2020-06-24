import React, { useState } from "react";
import axios from "axios";
import { Container, Header, Input, Button, Message } from "semantic-ui-react";
import { useForm } from "hooks/useForm";

export const Login = ({ history }) => {
  const [[form, setValue], [errors, setErrors]] = useForm({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log(form);
    setErrors({});
    axios
      .post("/login", form)
      .then((data) => {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        history.push("/");
      })
      .catch((err) => {
        const errors = {};
        err.response.data.errors.forEach(({ path, message }) => {
          errors[path] = message;
        });
        setErrors(errors);
        return false;
      });
    console.log(form);
  };

  const errorList = [];

  if (errors.email) {
    errorList.push(errors.email);
  }

  if (errors.password) {
    errorList.push(errors.password);
  }

  return (
    <Container text>
      <Header as="h2">Login</Header>
      <Input
        error={!!errors.email}
        name="email"
        onChange={(e) => setValue(e.target.name, e.target.value)}
        value={form.email || ""}
        placeholder="Email"
        fluid
      />
      <Input
        error={!!errors.password}
        name="password"
        onChange={(e) => setValue(e.target.name, e.target.value)}
        value={form.password || ""}
        placeholder="Password"
        fluid
      />
      <Button onClick={onSubmit}>Submit</Button>
      {errors.email || errors.password ? (
        <Message
          error
          header="There was some errors with your submission"
          list={errorList}
        />
      ) : null}
    </Container>
  );
};
