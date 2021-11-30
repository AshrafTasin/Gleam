import React from 'react';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

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

const Blog = ({blog}) => {
  // const dispatch = useDispatch();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="post">
      {/* <img
        className="postImg"
        // src={img}
        alt=""
      /> */}
      <div className="postInfo">
        {/* <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div> */}
        <span className="postTitle">
          <Link to={`/blog/${blog._id}`} className="link">
          {ReactHtmlParser(blog.title)}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(blog.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {ReactHtmlParser(blog.body)}
      </p>
    </div>
  );
};

export default Blog;