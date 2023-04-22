import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../blog/Blog';
import Bookmark from '../bookmark/Bookmark';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blogs = () => {
    const [blogs, setBlogs] =useState([]);
    const [blogInfo ,setBlogInfo] =useState([]);
    const [readTime, setReadTime] =useState(0);

    useEffect(()=>{
        fetch('info.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])

    const showToastMessage = () => {
        toast.warning('You have already added this to bookmark !', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    const addToBookmark = (info) =>{
        console.log(info);
        let alreadyAvailable = blogInfo.find(blog=>blog.blogTitle === info.blogTitle);
        if(!alreadyAvailable){
            let newBlogInfo = [...blogInfo,info];
            setBlogInfo(newBlogInfo);
        } 
        else{
            showToastMessage();
        }
        // console.log(newBlogInfo);
    }
    
    const markAsRead = (read) =>{
        let newTime = readTime + read;
        setReadTime(newTime);
    }

    const numberOfBookmark = blogInfo.length;
    
    return (
        <div className='blogs-container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    addToBookmark={addToBookmark}
                    markAsRead={markAsRead}
                    ></Blog>)
                }
            </div>
            <div className="bookmark-container">
            <div className='time-spent'>Time spent on read : {readTime} min</div>
            <div className='bookmark-blogs'>Bookmarked Blogs : {numberOfBookmark}
                {
                    blogInfo.map(blog => <Bookmark 
                        key={blog.authorName}
                        blogInfo={blog}
                        numberOfBookmark={numberOfBookmark}></Bookmark>)
                }
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blogs;