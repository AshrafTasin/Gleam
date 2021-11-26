import React from 'react';
import Blog from './Blog/Blog';
import { useSelector } from 'react-redux';

const Blogs = () => {
    const blogs=useSelector((state) => state.blogs);
    console.log(blogs);
    return (
        <>
        <Blog />
        <Blog />
        </>
    )
}

export default Blogs;
