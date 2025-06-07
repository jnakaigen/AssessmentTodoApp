import React, { use, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => { 
        axios.get('https://dummyjson.com/todos')
            .then((response) => {
                setTodos(response.data.todos);
            })
            .catch((error) => {
                console.error('Error fetching todos:', error);
            });
    }, []);

    
  return (
    <div>
         <TableContainer component={Paper} sx={{ backgroundColor: '#f0fff0', padding: '20px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: '#ffdab9' }}>Todo</TableCell>
            <TableCell sx={{ backgroundColor: '#ffdab9' }} align="right">Completed</TableCell>
            <TableCell sx={{ backgroundColor: '#ffdab9' }}align="right">UserId</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todos) => (
            <TableRow
              key={todos.todo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {todos.todo}
              </TableCell>
              <TableCell align="right">{todos.completed ? 'Yes' : 'No'}</TableCell>
              <TableCell align="right">{todos.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home