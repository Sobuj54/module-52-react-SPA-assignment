import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../blog/Blog';
import Bookmark from '../bookmark/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] =useState([]);

    useEffect(()=>{
        fetch('info.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])

    return (
        <div className='blogs-container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </div>
            <div className="bookmark-container">
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;