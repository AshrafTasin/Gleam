<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react'
const Blogs = () => {
    return (
        <div>
            
        </div>
    )
}

export default Blogs
=======
=======
>>>>>>> DiscussionWOrks
import React from 'react';
import Blog from './Blog/Blog';
import { useSelector } from 'react-redux';

const Blogs = () => {
<<<<<<< HEAD
=======
import React from 'react';
import Blog from './Blog/Blog';
import { useSelector } from 'react-redux';
import Comment from '../Comment/Comment'
import  { useEffect, useState } from "react";
const Blogs = () => {

    const [CommentLists, setCommentLists]= useState([]);
    const updateComment= (newComment)=>{
        
        setCommentLists(CommentLists.concat(newComment))
    }
>>>>>>> comment
=======
>>>>>>> DiscussionWOrks
    const blogs=useSelector((state) => state.blogs);
    console.log(blogs);
    return (
        <>
        <Blog />
        <Blog />
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Comment CommentLists={CommentLists}
         postId={"ooo"}  refreshFunction={updateComment}/>
>>>>>>> comment
=======
>>>>>>> DiscussionWOrks
        </>
    )
}

export default Blogs;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> discuss works
=======
>>>>>>> comment
=======
>>>>>>> DiscussionWOrks
