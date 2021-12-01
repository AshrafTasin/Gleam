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
import Comment from '../Comment/Comment'
import  { useEffect, useState } from "react";


const Blogs = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import Blog from './Blog/Blog';
import { useSelector } from 'react-redux';
import Comment from '../Comment/Comment'
import  { useEffect, useState } from "react";
const Blogs = () => {
=======
>>>>>>> blog/disc !

    const [CommentLists, setCommentLists]= useState([]);
    const updateComment= (newComment)=>{
        
        setCommentLists(CommentLists.concat(newComment))
    }
<<<<<<< HEAD
>>>>>>> comment
=======
>>>>>>> DiscussionWOrks
=======
>>>>>>> blog/disc !
    const blogs=useSelector((state) => state.blogs);
    console.log(blogs);
    return (
        <>
        <Blog />
        <Blog />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Comment CommentLists={CommentLists}
         postId={"ooo"}  refreshFunction={updateComment}/>
>>>>>>> comment
=======
>>>>>>> DiscussionWOrks
=======
        <Comment CommentLists={CommentLists}
         postId={"ooo"}  refreshFunction={updateComment}/>
>>>>>>> blog/disc !
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
