import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Render = ({disc}) => {
    return (
        <div>
            {ReactHtmlParser(disc.body)}
        </div>
    )
}
export default Render;
