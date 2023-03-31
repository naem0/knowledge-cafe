import './App.css'
import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';

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
    console.log(previousBookmark, bookmark.length);
    
    if (previousBookmark) {
      console.log('aca');
      const isBlogBookmark= previousBookmark.find(bl=>bl.id==id);
      if (isBlogBookmark) {
        alert("aca")
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
        </div>
      </div>

    </div>
  )
}

export default App
