import React from 'react';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

import useStyles from './styles';
import "./Discussion.css";



const Disc = ({disc}) => {

  //const dispatch = useDispatch();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="disc">
      <div className="discInfo">
        <span className="discTitle">
          <Link to={`/discussion/${disc._id}`} className="link">
          {ReactHtmlParser(disc.title)}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(disc.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {ReactHtmlParser(disc.body)}
      </p>
    </div>
  );
};

export default Disc;