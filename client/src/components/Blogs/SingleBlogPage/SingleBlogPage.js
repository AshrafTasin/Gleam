import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { getSingleBlog } from '../../../actions/blogs';
import "./singleBlogPage.css";

const SingleBlogPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [blog, setBlog] = useState({
    blog:''
  });

  useEffect(() => {
     dispatch(getSingleBlog(id))
    // setBlog({...blog,ans})
    // const ans = dispatch(getSingleBlog(id));
    // console.log(blog);
    // setBlog(dispatch(getSingleBlog(id)))  
  },[id]);

    return (
        <div className="singlePost">
          <div className="singlePostWrapper">
            <img
              className="singlePostImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <h1 className="singlePostTitle">
              {blog.title}
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
              </div>
            </h1>
            <div className="singlePostInfo">
              <span>
                Author:
                <b className="singlePostAuthor">
                  <Link className="link" to="/posts?username=Safak">
                    Safak
                  </Link>
                </b>
              </span>
              <span>1 day ago</span>
            </div>
            <p className="singlePostDesc">
              {/* {ReactHtmlParser(blog.body)} */}
              {blog.title}
            </p>
          </div>
        </div>
      );
}
export default SingleBlogPage;
