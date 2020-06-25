import React, { useState } from 'react';
import axios from 'axios';
import { Container, Header, Input, Button, Message } from 'semantic-ui-react'
import { useForm } from 'hooks/useForm'

export const Register = ({ history }) => {
    const [[form, setValue], [errors, setErrors]] = useForm({
      email: '',
      password: '',
      username: ''
    })


    const onSubmit = () => {
      console.log(form)
      setErrors({})
      axios.post('/register', form).then(() => {
        history.push('/')
      }).catch((err) => {
        const errors = {};
        // console.log(err.response.data, '##############')
        err.response.data.errors.forEach(({ path, message }) => {
          errors[path] = message
        })
        setErrors(errors)
        return false
      })
      console.log(form)
    }

    const errorList = [];

    if (errors.username) {
      errorList.push(errors.username);
    }

    if (errors.email) {
      errorList.push(errors.email);
    }

    if (errors.password) {
      errorList.push(errors.password);
    }

    return (
    <Container text>
      {console.log(errors)}
    <Header as='h2'>Register</Header>
    <Input error={!!errors.username} name="username" onChange={(e) => setValue(e.target.name, e.target.value)} value={form.username || ''} placeholder="Username" fluid />
    <Input error={!!errors.email} name="email" onChange={(e) => setValue(e.target.name, e.target.value)} value={form.email || ''} placeholder="Email" fluid />
    <Input error={!!errors.password} name="password" onChange={(e) => setValue(e.target.name, e.target.value)} value={form.password || ''} placeholder="Password" fluid />
    <Button onClick={onSubmit}>Submit</Button>
    {(errors.username || errors.email || errors.password) ? <Message
          error
          header="There was some errors with your submission"
          list={errorList}
        />
        : null}
  </Container>
    )
}