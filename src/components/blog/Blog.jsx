import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {blogImg, authorName, blogTitle, authorImg} = props.blog;
    return (
        <div className='blog'>
            <img src={blogImg} alt="" />
            <h3>{blogTitle}</h3>
        </div>
    );
};

export default Blog;