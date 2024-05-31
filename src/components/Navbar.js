import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {  useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleNavigation = (path) => {
    handleMenuClose();
    navigate(path);
  };

  const handleScroll = (id) => {
    handleMenuClose();
    navigate(`/#${id}`);
  };

  return (
    <AppBar position="fixed" style={{ background: 'white', color: 'black' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src="https://www.iitk.ac.in/hss/templates/iitk-simple/images/iitk-logo-black.png"
            alt="IITK Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <Typography variant="p" component="div" sx={{ fontWeight: 'bold' }}>
            SPO Preparation Portal
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="body1"
            sx={{ mr: 3, cursor: 'pointer', fontWeight: 'bold', color: 'rgb(100, 99, 99)' }}
            onClick={() => handleNavigation('/insights')}
          >
            Insights
          </Typography>
          <Typography
            variant="body1"
            sx={{ mr: 3, cursor: 'pointer', fontWeight: 'bold', color: 'rgb(100, 99, 99)' }}
            onClick={() => handleScroll('roadMap')}
          >
            Roadmaps
          </Typography>
          <Typography
            variant="body1"
            sx={{ mr: 3, cursor: 'pointer', fontWeight: 'bold', color: 'rgb(100, 99, 99)' }}
            onClick={() => handleScroll('resumes')}
          >
            Resumes of Seniors
          </Typography>
          <Typography
            variant="body1"
            sx={{ mr: 3, cursor: 'pointer', fontWeight: 'bold', color: 'rgb(100, 99, 99)' }}
            onClick={() => handleScroll('resources')}
          >
            Preparation Resources
          </Typography>
          <Typography
            variant="body1"
            sx={{ mr: 3, cursor: 'pointer', fontWeight: 'bold', color: 'rgb(100, 99, 99)' }}
            onClick={() => handleNavigation('/mocktest')}
          >
            Mock Test
          </Typography>
          <Typography
            variant="body1"
            sx={{ mr: 3, cursor: 'pointer', fontWeight: 'bold', color: 'rgb(100, 99, 99)' }}
            onClick={() => handleScroll('faq')}
          >
            FAQs
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={menuAnchorEl}
            keepMounted
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleNavigation('/insights')}>Insights</MenuItem>
            <MenuItem onClick={() => handleScroll('roadMap')}>Roadmaps</MenuItem>
            <MenuItem onClick={() => handleScroll('resumes')}>Resumes of Seniors</MenuItem>
            <MenuItem onClick={() => handleScroll('resources')}>Preparation Resources</MenuItem>
            <MenuItem onClick={() => handleNavigation('/mocktest')}>Mock Test</MenuItem>
            <MenuItem onClick={() => handleScroll('faq')}>FAQs</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
