// import React from 'react';
// import { ButtonBase,makeStyles,Typography } from '@material-ui/core';
// import useStyles from './styles';

// const images = [
//   {
//     url: '/static/images/cards/blog.jpg',
//     title: 'Blogs',
//     width: '50%',
//     link : '/blogs'
//   },
//   {
//     url: '/static/images/cards/qa.jpg',
//     title: 'Q/A',
//     width: '50%',
//     link : '/discussion'
//   },
// ];


// const Home = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root} style={{marginRight:"10%"}}>
//       {images.map((image) => (
//         <ButtonBase
//           focusRipple
//           key={image.title}
//           className={classes.image}
//           focusVisibleClassName={classes.focusVisible}
//           style={{
//             width: image.width,
//           }}
//           onClick={(e)=> {window.location.assign(`${image.link}`)}} 
//         >

//           <span
//             className={classes.imageSrc}
//             style={{
//               backgroundImage: `url(${image.url})`,
//             }}
            
//           />
//           <span className={classes.imageBackdrop} />
//           <span className={classes.imageButton}>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               className={classes.imageTitle}
//             >
              
//               {image.title}
//               <span className={classes.imageMarked} />
//             </Typography>
//           </span>
//         </ButtonBase>
//       ))}
//     </div>
//   );
// }
// export default Home;





import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const Home = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Grid container 
    direction="row"
    alignItems="center"
    justify="center"
    style={{ minHeight: '75vh' }}>
        <Grid item item xs={12} sm={6}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={styles.media}
              image={
              '/static/images/cards/blog.jpg'
              }
            />
          
          <CardContent>
          <TextInfoContent
            classes={contentStyles}
            // overline={'28 MAR 2019'}
            heading={'Blogs'}
            body={
              'Discover Finest of Turtorials'
            }
          />
          <Button className={buttonStyles} onClick={(e)=> {window.location.assign('/blogs')}} >Go</Button>
        </CardContent>
        </Card>
      </Grid>

      <Grid item item xs={12} sm={6}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={styles.media}
              image={
              '/static/images/cards/qa.jpg'
              }
            />
          
          <CardContent>
          <TextInfoContent
            classes={contentStyles}
            // overline={'28 MAR 2019'}
            heading={'Q/A'}
            body={
              'Have a Question? We have answers'
            }
          />
          <Button className={buttonStyles} onClick={(e)=> {window.location.assign('/discussion')}}>Go</Button>
        </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
});

export default Home