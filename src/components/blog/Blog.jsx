import React from 'react';
import './Blog.css'
import Person from '../person/Person';

const Blog = (props) => {
    const {blogImg, authorName, blogTitle, authorImg} = props.blog;
    return (
        <div className='blog'>
            <img src={blogImg} alt="" />
            <Person user={props.blog} addToBookmark={props.addToBookmark}></Person>
            <h3>{blogTitle}</h3>
            
            <div className='hash'>
                <p>#beginners</p>
                <p>#programming</p>
            </div>
            <p className='mark'>Mark as read</p>
        </div>
    );
};

export default Blog;