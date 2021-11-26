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