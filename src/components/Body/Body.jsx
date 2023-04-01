import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import Blog from '../Blog/Blog';


const Body = ({hendleReadTime, hendleBookmark}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    return (
        <div>
           <div className="blog-container">
                {
                    blogs.map((blog) => <Blog
                        blog={blog}
                        hendleReadTime={hendleReadTime}
                        key={blog.id}
                        hendleBookmark={hendleBookmark}
                    ></Blog> )
                }
           </div>
        </div>
    );
};

export default Body;