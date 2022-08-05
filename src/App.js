import './App.css';
import LoginCreate from './Login';
import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import OutlinedCard from './components/Dashboard';

class App extends Component {
  constructor() {
    super()

    this.state = {
      arrayOfMusic: [],
      loggedIn: false

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.loggedIn ? <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor:"black"}}>
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Music App
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Box> : <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor:"black"}}>
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Music App
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            <div className='login'><LoginCreate></LoginCreate></div>
            <OutlinedCard />
          </Box> 
          
          }
          
          
          
        </header>
      </div>
    )
  }

}

export default App;
