import React from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

import { createComment } from '../../actions/comment';
import {useDispatch} from 'react-redux';
import datentime from '../Date&Time/datentime';
import moment from 'moment';

import SingleComment from './SingleComment';


// const Textarea = Input ;


const Comment = (props) => {

    const dispatch = useDispatch();
    
    const [Comment,setComment] = useState("");
    // const handleChange = (e)=>{
    //     setComment({content:e.target.value})
    // }

    const RepackComment =(Comment)=>{

        const datenTimeString= datentime(new Date()).concat("..."+moment().format("Do MMM YY"));
        
        
        const packedComment ={
             content: Comment,
             writer: 'xxx',
             postId: props.postId,
             timexdate: datenTimeString,
        }
        return packedComment;
    }
    
    const onSubmit= (e)=>{
   
        e.preventDefault();
        props.refreshFunction(Comment);
        dispatch(createComment( RepackComment(Comment))); 
        setComment("")
        //getComments();

    }
    // const getComments =  () => {
    //     const res =  axios.get("http://localhost:5000/comment/getComments")
    //     .then( (e)=>{
    //         console.log(e.data);
    //         console.log(JSON.stringify(e.data));
    //         setCommentLists((e.data));
    //         return e.data;  
    //     });
    //    //chk browser
    //     //return JSON.stringify(res);
    // };

    return (
        <div>
           <br />
           <p> <b>Discussion replies </b> </p>
        
           {/* list cmnt */}
           <br/>
           
            {/* { console.log("Comment.js filed \n"+props.CommentLists) } */}
            {console.log("OKOK "+props.postId)}
           { /* cmnt root form */}
           {props.CommentLists && props.CommentLists.map((comment,index) =>(

                //if its a root cmnt
            //    console.log("singlecomm\n"+comment)
               (!comment.responseTo &&  comment.postId == props.postId && 
                //  console.log( (comment.postId == props.id ))
                // &&
               <React.Fragment>
                     <SingleComment comment={comment}
                      refreshFunction={props.refreshFunction}
                     />
               </React.Fragment>
               )


           ))}

           <form style = {{ display: 'flex'}} /*onSubmit={onSubmit} */>
                <Input
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange={ (e)=>setComment(e.target.value)}
                    value={Comment}
                    placeholder=" Write your Comment"
                    />
                 <br/>
                 <Button style={{width: '20%',height: '52px'}} onClick={onSubmit} >Submit</Button>
                

           </form>

        </div>
    )
}

export default Comment
