import React from 'react';
import './Blog.css'
const Blog = (props) => {
    const {title,img} = props.blog;
    return (
        <div className='blog-item'>
            <img src={img} alt=""/>
            <div className="blog-text">
            <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Blog;