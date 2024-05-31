import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import { Button, Typography, Paper, TextField } from '@mui/material';

const CodingTest = () => {
  const { id } = useParams();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = () => {
    // Logic to run the code and set the output
    setOutput('Code output here...');
  };

  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h5">Coding Test {id}</Typography>
      <Typography variant="subtitle1">Problem description goes here...</Typography>
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={newCode => setCode(newCode)}
        name="codeEditor"
        editorProps={{ $blockScrolling: true }}
        value={code}
        width="100%"
        height="300px"
      />
      <Button variant="contained" color="primary" onClick={handleRunCode} style={{ marginTop: 16 }}>
        Run Code
      </Button>
      <TextField
        label="Output"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        margin="normal"
        value={output}
        InputProps={{
          readOnly: true,
        }}
      />
    </Paper>
  );
};

export default CodingTest;
