import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
const Blogs = () => {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('./BlogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className='blog-container'>
            <h1 className='blogs-title'>Our Blogs</h1>
            <div className='blogs'>

                {
                    blogs.map(blog => <Blog blog={blog}></Blog>)
                }


            </div>
        </div>
    );
};

export default Blogs;