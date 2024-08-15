import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, Error, Success, Container } from './StyledComponents';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('estudiante');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      username,
      password,
      tipo
    });
    try {
      await axios.post('http://localhost:8081/api/v1/usuarios', { username, password, tipo });
      setSuccess('Registration successful!');
      setUsername('');
      setPassword('');
      setTipo('estudiante');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Container>
      <h2>Registro</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Usuario:</Label>
          <Input
            type="txt"
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
        <FormGroup>
          <Label>Tipo:</Label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="ESTUDIANTE">ESTUDIANTE</option>
            <option value="MAESTRO">MAESTRO</option>
          </select>
        </FormGroup>
        {error && <Error>{error}</Error>}
        {success && <Success>{success}</Success>}
        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  );
}

export default Register;
