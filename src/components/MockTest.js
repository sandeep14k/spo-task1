import React from 'react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const mockProblems = [
  { id: 1, title: "Two Sum", description: "Find two numbers that add up to a target value." },
  { id: 2, title: "Reverse String", description: "Reverse the given string." },
  // Add more problems
];

const MockTest = () => {
  const [selectedProblem, setSelectedProblem] = React.useState(null);

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Mock Coding Test
      </Typography>
      <List>
        {mockProblems.map(problem => (
          <ListItem button key={problem.id} onClick={() => setSelectedProblem(problem)}>
            <ListItemText primary={problem.title} />
          </ListItem>
        ))}
      </List>
      {selectedProblem && (
        <Box mt={4}>
          <Typography variant="h5" component="h3" gutterBottom>
            {selectedProblem.title}
          </Typography>
          <Typography variant="body1">
            {selectedProblem.description}
          </Typography>
          {/* Here you can add a code editor like AceEditor or MonacoEditor */}
        </Box>
      )}
    </Container>
  );
};

export default MockTest;
