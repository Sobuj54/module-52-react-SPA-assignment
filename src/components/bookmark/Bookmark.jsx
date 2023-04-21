import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const {blogTitle} = props.blogInfo;
    return (
        <div className='bookmark-container'>
            <div className='time-spent'>Time spent on read : 177 min</div>
            <div className='bookmark-blogs'>
                <div>Bookmarked Blogs : {props.numberOfBookmark}</div>
                <p>{blogTitle}</p>
            </div>
        </div>
    );
};

export default Bookmark;