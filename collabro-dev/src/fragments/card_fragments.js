import { Card, CardActionArea, CardContent, CardMedia, Typography,Button, CardActions } from '@material-ui/core';
import React from 'react';
import { StylesContext } from '../styles/Styles';

export const DefaultCardFragment = ({responseObjects}) => {

    const classes = React.useContext(StylesContext);
    console.log(responseObjects);

    return(responseObjects.map((response,index) => {

            const {imageUrl, title, id, summary, url} = response;
    
            return( <Card className={classes.cardCss} key={id}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={imageUrl}
                            title={title}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {summary}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                                <a href={url}>Learn More</a>
                            </Button>
                        </CardActions>
                    </Card>
                )
                }
            )
    )

}