import React,{memo} from 'react';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

import cx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

import useStyles from './styles';
import "./Discussion.css";



// const Disc = ({disc}) => {

//   //const dispatch = useDispatch();
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="disc">
//       <div className="discInfo">
//         <span className="discTitle">
//           <Link to={`/discussion/${disc._id}`} className="link">
//           {ReactHtmlParser(disc.title)}
//           </Link>
//         </span>
//         <hr />
//         <span className="postDate">{new Date(disc.createdAt).toDateString()}</span>
//       </div>
//       <p className="postDesc">
//         {ReactHtmlParser(disc.body)}
//       </p>
//     </div>
//   );
// };

// export default Disc;

export const Disc = memo(function BlogCard({disc}) {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      {/* <CardMedia
        className={styles.media}
        image="{blog.coverPhoto}"
      /> */}
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={new Date(disc.createdAt).toDateString()}
          heading={disc.title}
          // body={"Ekhane Edit Hobe"}
          //{blog.summary}
        />
        <Link to={`/discussion/${disc._id}`} className="link">
          <Button className={buttonStyles}>Read more</Button>
        </Link>
      </CardContent>
    </Card>
  );
});

export default Disc;