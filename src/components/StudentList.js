import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button } from './StyledComponents';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://192.168.4.112:8081/api/v1/estudiantes');
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    await axios.delete(`http://192.168.4.112:8081/api/v1/estudiantes/${id}`);
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <Container>
      <h2>Lista Estudiantes</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Grado</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.nombre}</td>
              <td>{student.edad}</td>
              <td>{student.grado}</td>
              <td>
                <Button onClick={() => deleteStudent(student.id)}>Delete</Button>
                {/* Add Edit Button and logic here */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default StudentList;
