import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './userpost.css'
import { Link } from "react-router-dom"


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


  return (
    <section className='blog'>
    <div className='container grid3'>
      {arr.map((value) => (
       
         <div className='box boxItems'  key={value._id}>
          <div className="card-body">
          <div className='img'>
          <img src={value.file} alt='cover' className="category" /></div>
          <div className='details'>
          <Link to={`/details/edit/${value._id}`} className='link'>
          <h4 className="card-title">{value.title}</h4>
                </Link>
            {/* <h4 className="card-title">{value.title}</h4> */}
            <p>{value.description && value.description.slice(0,180)}...</p>
            </div>
            
          </div>
        </div>
      ))}
     
    </div>
    </section>
  );
}
