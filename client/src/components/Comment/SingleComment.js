import React from 'react'
import {Comment, Avatar,Button,Input } from 'antd';
import  { useEffect, useState } from "react";
import moment from 'moment';
import datentime from '../Date&Time/datentime';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import axios from 'axios';
const SingleComment = (props) => {


    const dispatch = useDispatch();

    const [CommentValue,setCommentValue]= useState("")
    const [OpenReply, setOpenReply] = useState(false)

    
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
            
            console.log( "484848484848\n" +res);
            setCommentValue("")
            setOpenReply(!OpenReply)    
            props.refreshFunction(res.data);

        })
        console.log("WOWWWWW\n\n"+Comdata);

    }
    const action= [

        <span onClick={openReply}
        key="comment-basic-reply-to">Reply to 
        
        </span>
    ]
    return (
        <div>
           <Comment actions={action}
            avatar={<Avatar src="" alt /> }
            content={
                <p>
                    {props.comment.content}
               </p>
            }>

           </Comment>
           
           {OpenReply && 
            <form style = {{ display: 'flex'}}  /*</div>={onSubmit}*/  >
                <Input
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange ={ handleChange}
                    value={CommentValue}
                    placeholder=" Write your Comment"
                    />
                 <br/>
                 <Button style={{width: '20%',height: '52px'}}  onClick={onSubmit}>Submit</Button>
                

           </form>
           }
          
        </div>
    )
}

export default SingleComment
