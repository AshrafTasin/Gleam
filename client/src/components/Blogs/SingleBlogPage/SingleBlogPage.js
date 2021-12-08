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
import { Grid,Typography,Button } from '@material-ui/core';
import Profile from "../../Profile/Profile.js";


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

  console.log(blog);
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
      ...blog, body: data,authorID:user.result._id,authorName:`${user.result.firstName} ${user.result.lastName}`,
      authorAbout:user.result.about,authorImage:user.result.profilePicture
    })
  };

    return (
    <Grid container direction="row">
        <Grid item lg={12} >
          <img 
            className="singlePostImg"
            src={blog.coverPhoto}
            alt=""
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={3} > 
          <div>
              <figure className='image'>
                  <img src="https://picsum.photos/200/300"/>
              </figure>
              <Typography> {blog.authorName} </Typography>
              <Typography> {blog.authorAbout} </Typography>
              <Button> Like </Button>
          </div>
        </Grid>

        <Grid item lg={9} >
        
        <div className="singlePostInfo" style={{color:"#5b34eb"}}>
            <span className="singlePostDate">
              {new Date(blog.createdAt).toDateString()}
            </span>
          </div>
        
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
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
            </style> 
            {blog.title}
            {blog.authorID === user?.result._id && (
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

        {updateMode ? (
          <CKEditor  
          editor={ClassicEditor}
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
        </Grid>

    </Grid>
    );
}
export default SingleBlogPage;

// style={{position: "fixed",}}