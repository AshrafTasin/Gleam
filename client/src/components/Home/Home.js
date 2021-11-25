import React from 'react';
import {Grid,Card,CardActionArea,CardActions,CardMedia,Button} from '@material-ui/core';
import useStyles from './styles'


const Home = () => {

    const classes = useStyles();

    return (
            <Grid container spacing={0} direction="row" alignItems="center" justify="center" style={{ minHeight: '70vh' }}>
                <Grid item xs={12} sm={6} md={4} className={classes.gridContainer}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/blog.jpg"
                                title="Blogs"/>
                        </CardActionArea>
                    </Card>
                    <CardActions>
                        <Button size="small" color="primary">
                        Blog/Tutorial
                        </Button>
                    </CardActions>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/qa.jpg"
                                title="Discussion"/>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Q/A
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
    )
}

export default Home
