import React, { useState } from "react"
import Button from "../../../shared/Button"
import Form from "../../../shared/Form"
import Input from "../../../shared/Input"


const LoginForm = () => {
  const [form, setForm] = useState({
    user: '',
    password: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleLogin = () => {
    console.table(form)
  }


  return (
    <Form title="Login - AlgaStock" onSubmit={handleLogin}>
      <Input
        label="User"
        name="user"
        value={form.user}
        onChange={handleInputChange}
        placeholder="E.g: your_user_name"
      />
      <Input
        type="password"
        label="Password"
        value={form.password}
        onChange={handleInputChange}
        name="password"
      />
      <Button>Login</Button>
    </Form>
  ); 
}

export default LoginForm