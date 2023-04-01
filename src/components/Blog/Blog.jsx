import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({blog, hendleReadTime, hendleBookmark}) => {
    return (
        <div className="blog-card my-4 mb-5">
                <div className="blog-img">
                    <img className='w-100' src={blog.picture} alt="" />
                </div>
                <div className="blog-text-continar">
                    <div className='d-flex align-items-center justify-content-between my-4'>
                        <div className='d-flex gap-4'>
                            <img className='author-img' src={blog.author_picture} alt="" />
                            <div>
                                <h5>{blog.name}</h5>
                                <p className='text-secondary'>{blog.publish}</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <p className='text-secondary'>{blog.read_time} min read</p>
                            <div onClick={()=>hendleBookmark(blog.title, blog.id)}>
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                            
                        </div>
                    </div>
                    <h3>{blog.title}</h3>
                    <p className='my-3 text-secondary fs-6 '>#{blog.tags[0]}  #{ blog.tags[1]}</p>
                    <a onClick={()=>hendleReadTime(blog.read_time)} className=' text-decoration-underline'>Mark as read</a>
                </div>
            </div>
    );
};

export default Blog;