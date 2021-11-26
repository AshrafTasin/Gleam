
//eslint-disable no-use-before-define 
/* eslint-disable no-use-before-define */

import React, { Component } from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import {TextField,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';

import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import AppsIcon from '@material-ui/icons/Apps';
import AirplayIcon from '@material-ui/icons/Airplay'; 
import PublishIcon from '@material-ui/icons/Publish';

import  "./Post.css"
import { Helmet } from "react-helmet";


// import { config } from './config';


import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';


export class Post extends Component {
  
  
  render() {
      
      const parent_width=1080;
      const parent_margin_top='5vh';
      const parent_margin_bottom='3vh';

    

      const toptags=[{ title: 'BlockChain' },
      { title: 'Tech' },
      { title: 'CSE'},
      { title: 'App devolopment'} ,
      { title: 'Software Review'} ,
      { title: 'Privacy'}, 
      { title: 'Recruitment'},
      { title: 'Devoloping'}, 
      { title: 'ADB'},
      ];
      
    
      // ClassicEditor.defaultConfig = config;
    
      return (
          
          <div  className="Textarea container" style={{height:'75vh',width:parent_width, }  }     >
              {/* <h6>Using CKEditor 4 in React</h6> */}
            
              <TextField id="outlined-basic" label="Blog Title" 
                    variant="outlined"  
                    // required 
                    color="secondary"
                    InputLabelProps={{style: {fontSize: 20}}} 
                    style={{ marginTop:parent_margin_top,width:parent_width,fontSize:'25px',height:'80px',marginBottom:parent_margin_bottom  }}
                    InputProps={{

                      style: {fontSize: 20, fontFamily:"Ubuntu" },
                      startAdornment: (
                        <InputAdornment position="start">
                          <TextFieldsIcon />
                        </InputAdornment>
                      ),
                  
                    }}
                    
               />
               <br></br>

               <div className="auto__complete">

                      <Autocomplete
                          multiple
                          id="size-small-outlined-multi"
                          size="large"
                          options={toptags}
                          onChange={(_event, value) => console.log(JSON.stringify(value))} 
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => (
                            <TextField {...params} label="Tag(s)" placeholder="Choose/Type letters" />
                          )}

                          // renderTags={(value, getTagProps) =>
                          //   value.map((option, index) => (
                          //     <Chip
                          //       variant="outlined"
                          //       label={option.title}
                          //       size="large"
                          //       {...getTagProps({ index })}
                          //     />
                          //   ))
                          // }
                      />
                     {/* <Autocomplete>
                          multiple
                          id="tags-outlined"
                          options={toptags}
                          getOptionLabel={(option) => option.title}
                          onChange={(_event, value) => console.log(JSON.stringify(value))} 
                          /// CONSOLE e dekhabe ,selected tag is printed
                          filterSelectedOptions
                          renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Tags"
                          placeholder="Choose/Type letters"
                        />
                      )}
                    </Autocomplete> */}
               </div>  

              <br/>
              <TextField id="outlined-basic"
                    variant="standard"  
                    defaultValue="Body"
                    color="secondary"
                    // required 
                    InputLabelProps={{style: {fontSize: 25}}} 
                    style={{ marginTop:-1.5,width:parent_width,fontSize:'25px',height:'80px',marginBottom:-10, opacity:100,marginLeft:10,  }}
                    InputProps={{
                      
                      readOnly: true,
                      style: {fontSize: 17, fontFamily:"Ubuntu" },
                      startAdornment: (
                        <InputAdornment position="start">
                          <AirplayIcon />
                        </InputAdornment>
                      ),
                  
                    }}
                    
               />
              <br/>
              <div className="EditorClass" >
              <CKEditor  
              editor={ClassicEditor}
              name="editor1"
              // data="<br><br><br><br>
              //   <br><br><br><br>"
              style={ {  marginTop:parent_margin_top }}
              style={{height:'75vh',width:1280, }  }
              onReady={editor=>{
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                      "height",
                      "450px",
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
              </div>

            <Button 
                size="large" id="submit_button" 
                variant="outlined" color="primary"
                style={{  backgroundColor: '#212121', color:'#fafafa' }}
                startIcon={<PublishIcon />}
            > Post 
            </Button>
          </div>
         
      );
  }
}

export default Post;
