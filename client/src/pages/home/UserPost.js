import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './userpost.css'
import { Link } from "react-router-dom"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"

export function UserPost() {
  const [arr, setArr] = useState([]);
  
 
  useEffect(() => {
    Axios.get("http://localhost:4000/news")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setArr(res.data);
        } else {
          return Promise.reject();
          
        }
      })
      .catch((err) => alert(err));
  }, []); // Added an empty dependency array to make the effect run only once

  // const [isRed, setIsRed] = useState(false);

  // const handleHeartClick = () => {
  //   setIsRed(!isRed);
  // };
  return (
    <section className='blog'>
    <div className='container grid3'>
      {arr.map((value) => (

       
         <div className='box boxItems'  key={value._id}>
          <div className="card-body">
            
          <Link to={`/details/edit/${value._id}`} className='link'>
          <div className='img'>
          <img src={value.file} alt='cover' className="category" /></div>
          <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#Go Apptiv</a>
                </div>
          <div className='details'>
          {/* <Link to={`/details/edit/${value._id}`} className='link'> */}
          <h4 className="card-title">{value.title}</h4>
               
            {/* <h4 className="card-title">{value.title}</h4> */}
            <p>{value.description && value.description.slice(0,180)}...</p>
           
            <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>November 22 2023</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <a  href="https://www.addtoany.com/share_save?linkurl=http%3A%2F%2Fcodepen.io%2Fsunnysingh%2Fpen%2FOPxbgq"> <AiOutlineShareAlt className='icon'  href="https://www.addtoany.com/share_save?linkurl=http%3A%2F%2Fcodepen.io%2Fsunnysingh%2Fpen%2FOPxbgq"  /></a><label htmlFor='' >SHARE</label>
                </div>
            </div>
            </Link>
            {/* <div className={`heart ${isRed ? 'red' : ''}`} onClick={handleHeartClick}>
      <i className="fas fa-heart"></i>
    </div> */}
          </div>
        </div>
      ))}
      
    </div>
    
    </section>
  );
}

