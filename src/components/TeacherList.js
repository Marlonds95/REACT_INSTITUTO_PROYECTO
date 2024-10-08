import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button } from './StyledComponents';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await axios.get('http://192.168.4.112:8081/api/v1/maestros');
      setTeachers(response.data);
    };
    fetchTeachers();
  }, []);

  const deleteTeacher = async (id) => {
    await axios.delete(`http://192.168.4.112:8081/api/v1/maestros/${id}`);
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <Container>
      <h2>Lista Maestros</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Asignatura</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.nombre}</td>
              <td>{teacher.materia}</td>
              <td>
                <Button onClick={() => deleteTeacher(teacher.id)}>Delete</Button>
                {/* Add Edit Button and logic here */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TeacherList;
