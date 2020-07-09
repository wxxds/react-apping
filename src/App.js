import React from 'react';
import './App.css';
import Content from './Content';
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

function App() {
  return (

     
    <div className="App">
     <NavBar></NavBar>
     <div className="germaphobe">
      <Content></Content>
      </div>
    </div>
  );
}

export default App;
