import './App.css'
import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [redTime, setRedTime] = useState(0);
  const [bookmark, setBookmark] = useState(0);
  
  const hendleRedTime = (time) => {
    const previousRedTime = JSON.parse(localStorage.getItem("redTime"));
    if (previousRedTime) {
      const sum = previousRedTime + time;
      localStorage.setItem("redTime", sum);
      setRedTime(sum);
    } else {
      localStorage.setItem("redTime", time);
      setRedTime(time);
    }
  };
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
          <Body hendleRedTime={hendleRedTime} hendleBookmark= {hendleBookmark}></Body>
        </div>
        <div className='col-md-4'>
          <Sidebar redTime={redTime} bookmark={bookmark}></Sidebar>
          <ToastContainer></ToastContainer>
        </div>
      </div>

    </div>
  )
}

export default App
