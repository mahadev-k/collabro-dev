import React from 'react';
// import { StylesContext } from '../../styles/styles';
import '../../styles/Initializer.css';
import { HeaderComponent } from './Header';
import { ContentComponent } from './Content';


export const Initializer = () => {

   // const classes = React.useContext(StylesContext);

    return(
        <>
            <HeaderComponent/> 
            <ContentComponent/>          
        </>
    )


}
