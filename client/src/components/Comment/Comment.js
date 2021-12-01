<<<<<<< HEAD
import React, { Component } from "react";
import {TextField,Button } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';


import RateReviewIcon from '@material-ui/icons/RateReview';
import AddCommentIcon from '@material-ui/icons/AddComment';


import  "./Comment.css"

export class Comment extends Component {

     render(){
      
      
      const parent_width=1080;
      const parent_margin_top='5vh';
      const parent_margin_bottom='3vh';

    
      return (
          
          <div  className="Textarea container" style={{height:'75vh',width:parent_width, }  }     >
               <br></br>

               
              <br/>
              <TextField id="outlined-basic"
                    variant="standard"  
                    defaultValue="write Your Comment"
                    color="secondary"
                    // required 
                    InputLabelProps={{style: {fontSize: 25}}} 
                    style={{ marginTop:-1.5,width:parent_width,fontSize:'25px',height:'80px',marginBottom:-40, opacity:100,marginLeft:10,  }}
                    InputProps={{
                      
                      readOnly: true,
                      style: {fontSize: 17, fontFamily:"Ubuntu" },
                      startAdornment: (
                        <InputAdornment position="start">
                          <RateReviewIcon />
                        </InputAdornment>
                      ),
                  
                    }}
                    
               />
              <br/>
              <br/>
              <CKEditor  
              editor={ClassicEditor}
              style={ { marginLeft:"50px" }}
              onReady={editor=>{
                editor.editing.view.change((writer) => {
                    writer.setStyle(
                        "height",
                        "150px",
                        editor.editing.view.document.getRoot()
                    );
                    });
              }}
              config={
                
                {
                  ckfinder:{
                    uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                  },

                }
              } 
              > 
              </CKEditor>
          

            <Button 
                size="large" id="submit_button" 
                variant="outlined" color="primary"
                style={{  backgroundColor: '#212121', color:'#fafafa' }}
                startIcon={<AddCommentIcon/>}
            > Comment 
            </Button>
          </div>
         
      );
     }

}
export default Comment;
=======
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
             writer: 'wow',
             timexdate: datenTimeString,
        }
        return packedComment;
    }

    const onSubmit= (e)=>{

        e.preventDefault();
        props.refreshFunction(Comment);
        dispatch(createComment( RepackComment(Comment))); 
        setComment("")
    }
    return (
        <div>
           <br />
           <p> replies</p>
        
           {/* list cmnt */}
            { console.log(props.CommentLists) }

           { /* cmnt root form */}
           {props.CommentLists && props.CommentLists.map((comment,index) =>(

                //if its a root cmnt
               (!comment.responseTo &&
               <React.Fragment>
                     <SingleComment comment={comment}
                      refreshFunction={props.refreshFunction}
                     />
               </React.Fragment>
               )


           ))}

           <form style = {{ display: 'flex'}} onSubmit={onSubmit} >
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
>>>>>>> comment
