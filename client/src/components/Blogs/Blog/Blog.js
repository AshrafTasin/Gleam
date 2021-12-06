import React,{memo} from 'react';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

/////
import cx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
///

// import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import "./Blog.css";


///// Card Imports
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
////////

// const Blog = ({blog}) => {
//   // const dispatch = useDispatch();
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="post">
//       {/* <img
//         className="postImg"
//         // src={img}
//         alt=""
//       /> */}
//       <div className="postInfo">
//         {/* <div className="postCats">
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Music
//             </Link>
//           </span>
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Life
//             </Link>
//           </span>
//         </div> */}
//         <span className="postTitle">
//           <Link to={`/blog/${blog._id}`} className="link">
//           {ReactHtmlParser(blog.title)}
//           </Link>
//         </span>
//         <hr />
//         <span className="postDate">{new Date(blog.createdAt).toDateString()}</span>
//       </div>
//       <p className="postDesc">
//         {ReactHtmlParser(blog.body)}
//       </p>
//     </div>
//   );
// };

// export default Blog;

export const Blog = memo(function BlogCard({blog}) {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={blog.coverPhoto}
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={new Date(blog.createdAt).toDateString()}
          heading={blog.title}
          body={blog.summary}
        />
        <Link to={`/blog/${blog._id}`} className="link">
          <Button className={buttonStyles}>Read more</Button>
        </Link>
      </CardContent>
    </Card>
  );
});

export default Blog;