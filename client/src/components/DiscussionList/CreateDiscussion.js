import React, {useState} from 'react';
import { Paper,Grid,TextField,InputAdornment,Button } from '@material-ui/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import Autocomplete from '@mui/material/Autocomplete';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AirplayIcon from '@material-ui/icons/Airplay'; 
import PublishIcon from '@material-ui/icons/Publish';
import {useDispatch} from 'react-redux';
import {createDisc}  from '../../actions/discussionList';



const CreateDiscussion = () => {

    const parent_width=1080;
    const parent_margin_top='5vh';
    const parent_margin_bottom='3vh';


    const toptags=[{ title: 'BlockChain' },
    { title: 'Network.sh' },
    { title: 'BitCoin'},
    { title: 'App devolopment'} ,
    { title: 'Decentralized App'} ,
    { title: 'Privacy'}, 
    { title: 'Git'},
    { title: 'DevRant'}, 
    { title: 'Wallet'},
    ];
    

    // const classes = useStyles();

    const [DiscData,setDiscData] = useState({
        title:'',tags:'',body:'1' 
    });

   const dispatch = useDispatch();

    const handleTags = (event,value) => {
      let json=JSON.stringify(value);
      let result=[];
      
      if(json.search("BlockChain")!=-1){
          result.push("Blockchain");
      }
      if(json.search("BitCoin")!=-1){
        result.push("BitCoin");
    }
       setDiscData({...DiscData,tags:result});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(JSON.stringify(DiscData));
        dispatch(createDisc(DiscData));
        window.location.replace('/discussion');
    }

    const handleCkeditor = (event,editor) => {
        const data = editor.getData();
        setDiscData({
          ...DiscData, body: data
        })
    }

    return (

        <Paper>
          <form autoComplete='off' noValidate onSubmit={handleSubmit}>
              <TextField name="dis_title" 
                      id="outlined-basic" 
                      label="Question/Discussion Title" 
                      variant="outlined"  
                      color="secondary"
                      InputLabelProps={{style: {fontSize: 20}}} 
                      style={{ marginTop:parent_margin_top,width:parent_width,fontSize:'25px',
                      height:'80px'  }}
                      InputProps={{
                        style: {fontSize: 20, fontFamily:"Ubuntu" },
                        startAdornment: (
                          <InputAdornment position="start">
                            <TextFieldsIcon />
                          </InputAdornment>
                        ),
                      }}
                       value={DiscData.title}
                       onChange={(e) => setDiscData({...DiscData,title:e.target.value})}
                  
              />
              <br></br>

              <div className="auto__complete"   style={{ marginBottom:'2vh'}} >
                    <Autocomplete
                        multiple
                        id="size-small-outlined-multi"
                        size="large"
                        options={toptags}
                        
                        // onChange={(_event, value) => console.log(value)} 
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField {...params} label="Tag(s)" placeholder="Choose/Type letters" />
                        )}
                        onChange={handleTags}
                        // onChange={(e,value) => setBlogData({...blogData,tags:JSON.stringify(value)})}
                    />
              </div>  

              <br/>
              <TextField id="outlined-basic"
                  variant="standard"  
                  defaultValue="write your Discussion"
                  color="secondary"
                  InputLabelProps={{style: {fontSize: 25}}} 
                  style={{ marginTop:-2.5,width:parent_width,fontSize:'25px',height:'80px',marginBottom:-10, opacity:100,marginLeft:10,  }}
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
                        uploadUrl: '/discussion/upload'
                        
                      },

                    }
                  }
                  
                  onChange={handleCkeditor}> 
              </CKEditor>
              </div>

              <Button 
                  size="large" id="submit_button" 
                  variant="outlined" color="primary"
                  style={{  backgroundColor: '#212121', color:'#fafafa', marginLeft:'500px' }}
                  startIcon={<PublishIcon />}
                  type='submit'
              > Post 
              </Button>
          </form>
        </Paper>
    )
};

export default CreateDiscussion;


