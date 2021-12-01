import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { deleteBlog } from '../../../actions/blogs';
import axios from 'axios';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./singleBlogPage.css";
import { updateBlog } from '../../../api';

const SingleBlogPage = () => {
  const parent_margin_top='5vh';

  const dispatch = useDispatch();
  const location = useLocation();

  const id = location.pathname.split("/")[2];
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [blog, setBlog] = useState({blog:''});
  const [updateMode, setUpdateMode] = useState(false);

  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/blogs/" + id);
      setBlog(res.data);
    };
    getPost();
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[id]);

  const handleDelete = async () => {
      dispatch(deleteBlog(id));
      window.location.replace('/blogs');
  };

  const handleUpdate = async () => {
      dispatch(updateBlog(blog));
      window.location.replace(`/blogs/${id}`);
  };

  const handleCkeditor = (event,editor) => {
    const data = editor.getData();
    console.log(user.result)
    setBlog({
      ...blog, body: data,author:user.result.name
    })
  };

    return (
      <div className="singlePost">
      <div className="singlePostWrapper">
         <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        {updateMode ? (
          <input
            type="text"
            value={blog.title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setBlog({...blog,title:e.target.value})}
          />
        ) : (
          <h1 className="singlePostTitle">
            {blog.title}
            {blog.author === user?.result.name && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to='/blogs' className="link">
              <b> {blog.author}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(blog.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <CKEditor  
          editor={ClassicEditor}
          // data={ReactHtmlParser(blog.body)}
          name="editor1"
          
          style={ {  marginTop:parent_margin_top,height:'75vh',width:1280}}
          onReady={editor=>{
            editor.editing.view.change((writer) => {
              writer.setStyle(
                  "height",
                  "450px",
                  editor.editing.view.document.getRoot());
              });
          }}
          
          config={
            {
              ckfinder:{
                uploadUrl: '/blogs/upload'
              },
            }
          }
          onChange={handleCkeditor}> 
      </CKEditor>
        ) : (
          <p className="singlePostDesc">{ReactHtmlParser(blog.body)}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
      );
}
export default SingleBlogPage;
