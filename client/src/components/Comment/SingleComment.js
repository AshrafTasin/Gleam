import React from 'react'
import {Comment, Avatar,Button,Input } from 'antd';
import  { useEffect, useState } from "react";
import moment from 'moment';
import datentime from '../Date&Time/datentime';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import { IconButton,Typography} from "@material-ui/core";


const SingleComment = (props) => {


    const dispatch = useDispatch();

    const [CommentValue,setCommentValue]= useState("")
    const [OpenReply, setOpenReply] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    setUser(JSON.parse(localStorage.getItem('profile')));

    const openReply= ()=>{

        setOpenReply(!OpenReply)    
    }

    const handleChange = (e)=>{
           
        setCommentValue(e.target.value)
         
    }
    const RepackComment =(CommentValue)=>{

        const datenTimeString= datentime(new Date()).concat("..."+moment().format("Do MMM YY"))
        
        const packedComment ={
             content: CommentValue,
             writer: 'x007xSingle',
             timexdate: datenTimeString,
             responseTo: props.comment.writer
        }
       // console.log("WOWWWWW\n\n"+CommentValue);
        return packedComment;
    }
    const onSubmit= (e)=>{

        e.preventDefault();
        const Comdata= RepackComment(CommentValue);
        // dispatch(createComment(Comdata));
        axios.post('http://localhost:5000/comment/saveComment',Comdata)
        .then(res => {
            
         ///   console.log( "484848484848\n" +res);
            setCommentValue("")
            setOpenReply(!OpenReply)    
            props.refreshFunction(res.data);

        })
      ///  console.log("WOWWWWW\n\n"+Comdata);

    }
    const action= [

        // <span onClick={openReply}
        // key="comment-basic-reply-to">Reply to 
        // </span>
    ]
    return (
        <div>
           <Comment actions={action} >

            <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={null}
            aria-haspopup="true"
            onClick={null}
            color="inherit"
            >
            {
              user?(
                <Avatar style={{ fontSize: 30 }} alt={user.result.firstName} src={user.result.imageURL}>{user.result.firstName.charAt(0)}</Avatar>
              ) :(
                <></>
              )
            }
            
            {/* <AccountCircle style={{ fontSize: 30 }}/> */}
          </IconButton>

            {/* avatar={<Avatar src="" alt /> } */}
            content={
                <p>
                    {props.comment.content}
               </p>
            }
           </Comment>
           
          
          
        </div>
    )
}

export default SingleComment


