import React from 'react';
import { Paper, Typography } from '@mui/material';

const Result = () => {
  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h5">Result</Typography>
      <Typography variant="subtitle1">Your test results will be displayed here...</Typography>
    </Paper>
  );
};

export default Result;
