import React from 'react';
import './Blog.css'
import Person from '../person/Person';

const Blog = (props) => {
    const {blogImg, authorName, blogTitle, authorImg} = props.blog;
    return (
        <div className='blog'>
            <img src={blogImg} alt="" />
            <Person user={props.blog}></Person>
            <h3>{blogTitle}</h3>
        </div>
    );
};

export default Blog;