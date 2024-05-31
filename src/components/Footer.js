import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 'auto' }} component="footer">
      <Typography variant="body1" color="white" align="center">
        &copy; 2024 Students' Placement Office, IIT Kanpur
      </Typography>
    </Box>
  );
};

export default Footer;
