import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Add = () => {
    const navigate = useNavigate();
    const[form,setForm]=useState({
    todo:'',
    completed:'',
    userId:''
  })
    let fetchvalue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    let submitdata = () => {
        console.log(form);
        navigate('/'); 

    }
  return (
    <div>
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Todo" variant="outlined" value={form.todo} onChange={fetchvalue} name="todo" /><br />
      <TextField id="outlined-basic" label="Completion" variant="outlined" value={form.completed} onChange={fetchvalue} name="completed" /><br />
      <TextField id="outlined-basic" label="UserId" variant="outlined" value={form.userId} onChange={fetchvalue} name="userId" />< br />
         <Button variant="contained" style={{backgroundColor:'green'}} onClick={submitdata}>Submit</Button>
    </Box>

    </div>
  )
}

export default Add