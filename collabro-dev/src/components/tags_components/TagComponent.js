import { Button } from '@material-ui/core';
import React from 'react';
import { StylesContext } from '../../styles/Styles';


export const RenderTags = ({tags,handleTagChange}) =>{

    const classes = React.useContext(StylesContext);

    return(
        tags.map((tag) =>    
            <Button
                key={tag.tagKey}
                className = {tag.isSelected?classes.tagInverse:classes.tagNormal}
                variant='outlined'
                onClick = {(e) => handleTagChange(e,tag)}
            >{tag.tagName}
            </Button>
        )
    )
}