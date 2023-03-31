
import React, { useEffect, useState } from "react";

const Sidebar = ({redTime,bookmark}) => {
    const [time, setTime] = useState(redTime);
    const [bookmarks, setBookmark] = useState([]);

  useEffect(() => {
    const getRedTimeFromStorage = localStorage.getItem("redTime");
    setTime(getRedTimeFromStorage);
  }, [redTime]);
  useEffect(()=>{
    const getBookmarkData= JSON.parse(localStorage.getItem("bookmark"));
    setBookmark(getBookmarkData);
  },[bookmark]);
  console.log(bookmarks)
 
    return (
        
        <div>

            <div className='text-bg-light p-4'>
                <h3 className='my-4'>Bookmarked Blogs : {bookmarks.length}</h3> 
                {
                    bookmarks.map(bookmark =><h6 className='bg-white p-3 my2'>{bookmark.blogTitle}</h6>)
                }
            </div>
        </div>
    );
};

export default Sidebar;