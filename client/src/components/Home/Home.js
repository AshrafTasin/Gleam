import React from 'react';
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
