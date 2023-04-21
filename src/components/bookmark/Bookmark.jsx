import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const {blogTitle} = props.blogInfo;
    return (
        <div className='bookmark-container'>
            <p>{blogTitle}</p>
        </div>
    );
};

export default Bookmark;