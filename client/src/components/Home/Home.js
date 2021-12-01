import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> comment
=======
>>>>>>> DiscussionWOrks
import { ButtonBase,makeStyles,Typography } from '@material-ui/core';
import useStyles from './styles';

const images = [
  {
    url: '/static/images/cards/blog.jpg',
    title: 'Blogs',
    width: '50%',
  },
  {
    url: '/static/images/cards/qa.jpg',
    title: 'Q/A',
    width: '50%',
  },
];


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
export default Home;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> discuss works
=======
>>>>>>> comment
=======
>>>>>>> DiscussionWOrks
