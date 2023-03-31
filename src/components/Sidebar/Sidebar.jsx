
import React, { useEffect, useState } from "react";

const Sidebar = ({redTime,blogTitle}) => {
    const [time, setTime] = useState(redTime);

  useEffect(() => {
    const getRedTimeFromStorage = localStorage.getItem("redTime");
    setTime(getRedTimeFromStorage);
  }, [redTime]);
  console.log(redTime)
    return (
        
        <div>

            <div className='text-bg-light p-4'>
                 <h3 className='my-4'>Bookmarked Blogs : {time}</h3> 
                <h6 className='bg-white p-3 my2'>{blogTitle}</h6>
            </div>
          
        </div>
    );
};

export default Sidebar;