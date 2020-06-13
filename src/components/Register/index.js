import React, { useState } from 'react';
import axios from 'axios';
import { Container, Header, Input, Button } from 'semantic-ui-react'
import { useForm } from 'hooks/useForm'

export const Register = () => {
    const [form, setValue] = useForm()

    const onSubmit = () => {
      axios.post('/register', form).then(() => {
        
      }).catch((err) => {
        console.log(err)
        return false
      })
      console.log(form)
    }

    return (
    <Container text>
    <Header as='h2'>Register</Header>
    <Input name="username" onChange={(e) => setValue(e.target.name, e.target.value)} value={form.username || ''} placeholder="Username" fluid />
    <Input name="email" onChange={(e) => setValue(e.target.name, e.target.value)} value={form.email || ''} placeholder="Email" fluid />
    <Input name="password" onChange={(e) => setValue(e.target.name, e.target.value)} value={form.password || ''} placeholder="Password" fluid />
    <Button onClick={onSubmit}>Submit</Button>
  </Container>
    )
}