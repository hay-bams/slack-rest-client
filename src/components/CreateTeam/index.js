import React, { useState } from "react";
import axios from "axios";
import { Container, Header, Input, Button, Message } from "semantic-ui-react";
import { useForm } from "hooks/useForm";

export const CreateTeam = ({ history }) => {
  const [[form, setValue], [errors, setErrors]] = useForm({
    name: "",
  });

  const onSubmit = () => {
    setErrors({});
    axios
      .post("/teams", form)
      .then((response) => {
        console.log(response.data, '++++++++++++++')
        history.push("/");
      })
      .catch((err) => {
        const errors = {};
        console.log()
        err.response.data.errors.forEach(({ path, message }) => {
          errors[path] = message;
        });
        setErrors(errors);
        return false;
      });
    console.log(form);
  };

  const errorList = [];

  if (errors.name) {
    errorList.push(errors.name);
  }

  return (
    <Container text>
      <Header as="h2">Create a Team</Header>
      <Input
        error={!!errors.name}
        name="name"
        onChange={(e) => setValue(e.target.name, e.target.value)}
        value={form.name || ""}
        placeholder="Name"
        fluid
      />
      <Button onClick={onSubmit}>Submit</Button>
      {errors.name ? (
        <Message
          error
          header="There was some errors with your submission"
          list={errorList}
        />
      ) : null}
    </Container>
  );
};
