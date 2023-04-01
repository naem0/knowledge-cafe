import './App.css'
import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // Read time hendel
  const [readTime, setReadTime] = useState(0);
  const hendleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };

  // bookmark hendle 
  const [bookmark, setBookmark] = useState(0);
  const hendleBookmark = (blogTitle, id) =>{
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark= [];
    const setBlogBookmark= { blogTitle, id };
    
    if (previousBookmark) {
      const isBlogBookmark= previousBookmark.find(bl=>bl.id==id);
      if (isBlogBookmark) {
        toast("Already bookmark");
      }
      bookmark= [...previousBookmark, setBlogBookmark];
      setBookmark(bookmark);
    }
    else{
      bookmark.push(setBlogBookmark);
      setBookmark(bookmark);
    }
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  };
  return (
    <div className="App container-xl">
      <div>
        <Header></Header>
      </div>
      <div className='row'>
        <div className='col-md-8'>
          <Body hendleReadTime={hendleReadTime} hendleBookmark= {hendleBookmark}></Body>
        </div>
        <div className='col-md-4'>
          <Sidebar readTime={readTime} bookmark={bookmark}></Sidebar>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  )
}

export default App
