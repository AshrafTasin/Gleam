import React,{memo} from 'react';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

import cx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

import useStyles from './styles';
import "./Discussion.css";

export const Disc = memo(function BlogCard({disc}) {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '45vw'
    }

  return (
    <Card className={cx(styles.root, shadowStyles.root)}   >
      {/* <CardMedia
        className={styles.media}
        image="{blog.coverPhoto}"
      /> */}

      <CardContent styles={cardStyle} >
        <TextInfoContent
          classes={contentStyles}
          overline={new Date(disc.createdAt).toDateString()}
          heading={disc.title}
          body={"Ekhane Edit Hobe"}
          // {blog.summary}
        />
        <Link to={`/discussion/${disc._id}`} className="link">
          <Button className={buttonStyles}>Read more</Button>
        </Link>
      </CardContent>
    </Card>
  );
});

export default Disc;