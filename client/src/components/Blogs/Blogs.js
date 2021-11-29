import React from 'react';
import Blog from './Blog/Blog';
import {Grid,CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';

const Blogs = () => {
    const blogs= useSelector((state) => state.blogs);

    return (
        !blogs.length ? <CircularProgress/> :(
            <Grid container>
                {blogs.map((blog)=>(
                    <Grid key={blog._id} item xs={12} sm={6}>
                        <Blog blog={blog}/>  
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Blogs;
