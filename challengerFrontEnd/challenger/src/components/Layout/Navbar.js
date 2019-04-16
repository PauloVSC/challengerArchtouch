import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './Card.css';


const Navbar = () => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar className="card">
          <Typography variant="title" color="inherit">
            TMDb - The Movie Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default Navbar;
