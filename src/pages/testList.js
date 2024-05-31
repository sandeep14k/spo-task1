import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import Navbar from '../components/Navbar';

const TestList = () => {
  const tests = [
    { id: 1, title: 'Two Sum Problem' },
    { id: 2, title: 'Reverse Linked List' },
    // Add more test objects here
  ];
 
  return (
    <Paper elevation={3}>
    <Navbar/>
      <List sx={{marginTop:"80px"}}>
        {tests.map(test => (
          <ListItem button component={Link} to={`/test/${test.id}`} key={test.id}>
            <ListItemText primary={test.title} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TestList;
