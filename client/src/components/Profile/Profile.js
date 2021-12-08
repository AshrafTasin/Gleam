import {Grid,Button,Typography} from "@material-ui/core";
import React from 'react';
import Blog from '../Blogs/Blog/Blog.js';
import './profile.css';

const Profile = (blog)=> {
    console.log("INSIDE : "+blog.title);
    return (
        <Grid container direction="row">
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

          <Grid item lg={9}>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>
                <Blog blog={{title:'new'}}> </Blog>

          </Grid>

        </Grid>
    )
}

export default Profile
