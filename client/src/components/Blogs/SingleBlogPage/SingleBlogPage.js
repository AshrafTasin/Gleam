import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { getSingleBlog } from '../../../actions/blogs';
import axios from 'axios';
import "./singleBlogPage.css";
import HtmlParser from 'react-html-parser';

const SingleBlogPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [blog, setBlog] = useState({
    blog:''
  });

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/blogs/" + id);
      setBlog(res.data);
    };
    getPost();
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
            <div className="singlePostDesc">
              {ReactHtmlParser(blog.body)}
            </div>
          </div>
        </div>
      );
}
export default SingleBlogPage;
