import React from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';


export const StylesContext = React.createContext();

export const Nbsp = () => <>{'\u00A0'}</>;

const useStyles = makeStyles((theme)=>({
    AppBar:{
        background:'#232F34',
        padding:"10px",
    },
    contentTabPanel:{
        padding:"1%",
        display:'flex',
        flexGrow:'1'
    },
    contentContainer:{
        // display:"grid",
        // gridTemplateAreas:'"mediaContainer tagContainer"',
        // gridTemplateColumns: "775px 250px",
        // gap: "10px",
        // gridAutoRows: "minmax(100px, auto)",
    },
    mediaContainer:{
        display:"grid",
        justifyContent:"center",
        alignItems:"flex-start",
        gridRow:1,
        gridColumn:" 1 / 2",
        gridArea:"mediaContainer",
    },
    media:{
        height:"300px",
        maxWidth:500,
    },
    cardCss:{
        width:500,
        margin:"auto",
        marginTop:20,
        marginBottom:20,
    },
    tagContainer:{
        gridRow:1,
        gridColumn:2,
        gridArea:"tagContainer"
    },
    tagInverse: {
        color:"black",
        backgroundColor:"white",
        "&:hover":{
            backgroundColor:"white",
            color:"black"
        }
    },
    tagNormal:{
        "&:hover":{
            color:"white",
        }
    },
    selectedButton:{
        backgroundColor:"#171212"
    }
}));

const darkTheme = createMuiTheme({
    palette:{
        type:'dark'
    },
    typography: {
        fontFamily: [
          'monospace',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
});

export const StylesProvider = ({children}) => {
    return (
        <ThemeProvider theme={darkTheme}>
             <CssBaseline/>
            <StylesContext.Provider value={useStyles(darkTheme)}>
                {children}
            </StylesContext.Provider>
        </ThemeProvider>
    )
}