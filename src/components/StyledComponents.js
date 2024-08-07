import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  padding: 20px;
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    color: #0056b3;
  }
`;

export const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
`;

export const Success = styled.p`
  color: green;
  font-weight: bold;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #007bff;
    color: white;
  }
`;

export const Header = styled.header`
  background-color: #007bff;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 24px;
`;

export const Footer = styled.footer`
  background-color: #007bff;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 0;
`;
