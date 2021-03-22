import { AppBar, Paper, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {StylesContext} from '../../styles/Styles';

export const HeaderComponent = () =>{

    const classes = React.useContext(StylesContext);

    return (
        <AppBar position="static" className={classes.AppBar}>
                    <Toolbar>
                        <Paper className="AppBar-Paper" elevation={3}>
                            <Typography variant="h6" className="AppBar-Typography">
                                C O L L A B R O
                            </Typography>
                        </Paper>
                    </Toolbar>
        </AppBar>
    )
}