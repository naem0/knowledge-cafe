import React, { useEffect, useState } from "react";


const Sidebar = ({readTime,bookmark}) => {

    // Read Time data lode from localStorage 
    const [time, setTime] = useState(readTime);
    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime");
        setTime(getReadTimeFromStorage);
     }, [readTime]);
    
    //  Bookmark data lode from localStorage 
    const [bookmarks, setBookmark] = useState([]);
    useEffect(()=>{
        const getBookmarkData= JSON.parse(localStorage.getItem("bookmark"));
        setBookmark(getBookmarkData);
    },[bookmark]);
 
    return (
        <div>
            <div className="text-bg-light px-4 py-3 border border-primary rounded text-primary my-4">
                <h5>Spent time on read : {time} min</h5>
            </div>
            <div className='text-bg-light p-4 rounded'>
                <h3 className='my-4'>Bookmarked Blogs : {bookmarks?.length}</h3> 
                {
                    bookmarks?.map(bookmark =><h6 className='bg-white p-3 my2'>{bookmark.blogTitle}</h6>)
                }
            </div>
        </div>
    );
};

export default Sidebar;