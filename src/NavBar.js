import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import mark from './mark.png' // relative path to image 
import Menu from './Menu';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
            <Grid container spacing={2} alignItems="center">
            <Grid item xs>
                <Typography variant="title" color="inherit">
                <img className="logo" src={mark} alt={"mark"}/> 
                </Typography>

                Rapid Prototyping Task and Ticketing
</Grid>
<Grid item>
                <Menu></Menu>
                </Grid>
                
                </Grid>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;