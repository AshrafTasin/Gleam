import React, {useState} from 'react';
import { Paper,Grid,TextField,InputAdornment,Button } from '@material-ui/core';
import useStyles from './styles';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';

// import { WithContext as ReactTags } from 'react-tag-input';
// import { Helmet } from "react-helmet";
// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';

import TextFieldsIcon from '@material-ui/icons/TextFields';
// import AppsIcon from '@material-ui/icons/Apps';
import AirplayIcon from '@material-ui/icons/Airplay'; 
import PublishIcon from '@material-ui/icons/Publish';

import {useDispatch} from 'react-redux';
import { createBlog } from '../../actions/blogs';




const CreateBlog = () => {
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
    

    // const classes = useStyles();

    const [blogData,setBlogData] = useState({
        title:'',tags:'',body:'1' 
    });

    const dispatch = useDispatch();

    const handleTags = (event,value) => {
      let json=JSON.stringify(value);
      let result=[];
      
      if(json.search("BlockChain")!=-1){
          result.push("Blockchain");
      }
      if(json.search("CSE")!=-1){
        result.push("CSE");
    }

      setBlogData({...blogData,tags:result});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(createBlog(blogData)); 
    }

    const handleCkeditor = (event,editor) => {
        const data = editor.getData();
        setBlogData({
          ...blogData, body: data
        })
    }


    return (

        <Paper>
          <form autoComplete='off' noValidate onSubmit={handleSubmit}>
              <TextField name="blog_title" 
                      id="outlined-basic" 
                      label="Blog Title" 
                      variant="outlined"  
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
                      value={blogData.title}
                      onChange={(e) => setBlogData({...blogData,title:e.target.value})}
                  
              />
              <br></br>

              <div className="auto__complete">
                    <Autocomplete
                        multiple
                        id="size-small-outlined-multi"
                        size="large"
                        options={toptags}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField {...params} label="Tag(s)" placeholder="Choose/Type letters" />
                        )}
                        onChange={handleTags}
                    />
              </div>  

              <br/>
              <TextField id="outlined-basic"
                  variant="standard"  
                  defaultValue="Body"
                  color="secondary"
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
              </div>

              <Button 
                  size="large" id="submit_button" 
                  variant="outlined" color="primary"
                  // style={{  backgroundColor: '#212121', color:'#fafafa' }}
                  startIcon={<PublishIcon />}
                  type='submit'
              > Post 
              </Button>
          </form>
        </Paper>
    )
};

export default CreateBlog;


