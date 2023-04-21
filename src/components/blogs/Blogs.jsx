import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../blog/Blog';
import Bookmark from '../bookmark/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] =useState([]);
    const [blogInfo ,setBlogInfo] =useState([]);

    useEffect(()=>{
        fetch('info.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])

    const addToBookmark = (info) =>{
        let newBlogInfo = [...blogInfo,info];
        setBlogInfo(newBlogInfo);
        console.log(newBlogInfo);
    }

    const numberOfBookmark = blogInfo.length;
    console.log(numberOfBookmark);
    return (
        <div className='blogs-container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    addToBookmark={addToBookmark}
                    ></Blog>)
                }
            </div>
            <div className="bookmark-container">
                {
                    blogInfo.map(blog => <Bookmark 
                        key={blog.id}
                        blogInfo={blog}
                        numberOfBookmark={numberOfBookmark}></Bookmark>)
                }
                
            </div>
        </div>
    );
};

export default Blogs;