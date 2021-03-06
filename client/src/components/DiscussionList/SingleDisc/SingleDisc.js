import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { deleteDisc } from '../../../actions/discussionList';
import axios from 'axios';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./SingleDisc.css";
import { updateDisc } from '../../../api';
import Comment from '../../Comment/Comment' 

var fetchRun=0;

const SingleDiscPage = () => {
  const parent_margin_top='5vh';

  const [CommentLists, setCommentLists]= useState([]);
  
  const updateComment= (newComment)=>{
      
      setCommentLists(CommentLists.concat(newComment))
      fetchRun=0;
  }

  const getComments =  () => {

      if(fetchRun>5) return ;
      // axios.get("http://localhost:5000/comment/getComments",
      // {
         
      // } )
      // .then( (e)=>{
      //     console.log(e.data);
      //     ///console.log(JSON.stringify(e.data));
      //     fetchRun++;
      //     setCommentLists((e.data));
      //     return e.data;  
      // });

      const res = axios.get("http://localhost:5000/comment/getComments");
     
      console.log(res.data);
          ///console.log(JSON.stringify(e.data));
      fetchRun++;
      setCommentLists(res.data);
      //return res.data;  
      ;


     //chk browser
      //return JSON.stringify(res);
  };
  getComments();
  
  const dispatch = useDispatch();
  const location = useLocation();

  const id = location.pathname.split("/")[2];
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [disc, setDisc] = useState({disc:''});
  const [updateMode, setUpdateMode] = useState(false);

  
  useEffect(() => {
    
    const getDisc = async () => {
      const res = await axios.get("http://localhost:5000/discussion/" + id);
      setDisc(res.data);
    };
    getDisc();
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[id]);

  const handleDelete = async () => {
      dispatch(deleteDisc(id));
      window.location.replace('/discussion');
  };

  const handleUpdate = async () => {
      dispatch(updateDisc(disc));
      window.location.replace(`/discussion/${id}`);
  };

  const handleCkeditor = (event,editor) => {
    const data = editor.getData();
    console.log(user.result)
    setDisc({
      ...disc, body: data,author:user.result.name
    })
  };

    return (
      <div className="singleDisc">
      <div className="singleDiscWrapper">
         <img
          className="singleDiscImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        {updateMode ? (
          <input
            type="text"
            value={disc.title}
            className="singleDiscTitleInput"
            autoFocus
            onChange={(e) => setDisc({...disc,title:e.target.value})}
          />
        ) : (
          <h1 className="singleDiscTitle">
            {disc.title}
            {disc.author === user?.result.name && (
              <div className="singleDiscEdit">
                <i
                  className="singleDiscIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singleDiscIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singleDiscInfo">
          <span className="singleDiscAuthor">
            Author:
            <Link to='/discussion' className="link">
              <b> {disc.author}</b>
            </Link>
          </span>
          <span className="singleDiscDate">
            {new Date(disc.createdAt).toDateString()}
          </span>
        </div>
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
                uploadUrl: '/discussion/upload'
              },
            }
          }
          onChange={handleCkeditor}> 
      </CKEditor>
        ) : (
          <p className="singleDiscDesc">{ReactHtmlParser(disc.body)}</p>
        )}
        {updateMode && (
          <button className="singleDiscButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>


      <Comment CommentLists={CommentLists}
         postId={id}    refreshFunction={updateComment}/>
        
    </div>
      );
}
export default SingleDiscPage;
