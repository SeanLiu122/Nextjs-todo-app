import React from 'react'

import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              size="large"
              edge="start" 
              color="inherit" 
              aria-label="menu" 
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
            <Button color="inherit" >Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

