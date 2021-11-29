import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Render = ({blog}) => {
    return (
        <div>
            {ReactHtmlParser(blog.body)}
        </div>
    )
}

export default Render;
