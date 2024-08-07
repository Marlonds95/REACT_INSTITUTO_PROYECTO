import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, Error, Success, Container } from './StyledComponents';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('estudiante'); // Valor por defecto
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/register', { username, password, tipo });
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
      <h2>Register</h2>
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
        <FormGroup>
          <Label>Tipo:</Label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="estudiante">Estudiante</option>
            <option value="maestro">Maestro</option>
          </select>
        </FormGroup>
        {error && <Error>{error}</Error>}
        {success && <Success>{success}</Success>}
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}

export default Register;
