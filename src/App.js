import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TeacherList from './components/TeacherList';
import StudentList from './components/StudentList';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import { Container, Nav, NavList, NavItem, StyledLink } from './components/StyledComponents';

function App() {
  return (
    <Router>
      <Container>
        <AppHeader />
        <Nav>
          <NavList>
            <NavItem>
              <StyledLink to="/login">Login</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/register">Registro</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/teachers">Maestros</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/students">Estudiantes</StyledLink>
            </NavItem>
          </NavList>
        </Nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/students" element={<StudentList />} />
        </Routes>
        <AppFooter />
      </Container>
    </Router>
  );
}

export default App;

