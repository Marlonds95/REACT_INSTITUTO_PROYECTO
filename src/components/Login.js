import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, Error, Container } from './StyledComponents';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/v1/usuarios', { username, password });
      localStorage.setItem('token', response.data.token);
      if (response.data.tipo === 'maestro') {
        window.location.href = '/maestro-dashboard';
      } else {
        window.location.href = '/estudiante-dashboard';
      }
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Usuario:</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        {error && <Error>{error}</Error>}
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Login;

