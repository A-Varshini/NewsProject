import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './userpost.css'
import { Link } from "react-router-dom"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt,AiFillHeart,AiOutlineHeart} from "react-icons/ai"
import { FaHeart, FaThumbsUp } from 'react-icons/fa';

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

  // const [isRed, setIsRed] = useState(true);

  // const handleHeartClick = () => {
    // setIsRed(!isRed);
  // };
  const [isLiked, setIsLiked] = useState(false);
  const icon = isLiked ? <AiOutlineHeart color="#ddd" /> : <AiFillHeart color="inherit" />;

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
 
  return (
    <section className='blog'>
    <div className='container grid3'>
      {arr.map((value) => (

       
         <div className='box boxItems'  key={value._id}>
          <div className="card-body">
            
          <Link to={`/details/edit/${value._id}`} className='link'>
          <div className='img'>
          <img  alt='cover' className="category"
          src={
            value.urlToImage == null
              ? "https://i.insider.com/6492daec65b9ce0018a443c8?width=1200&format=jpeg"
              : value.urlToImage
          } /></div>
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
            {/* <div className="heart-toggle" onClick={handleClick} >
      {icon}
    </div>  */}
            {/* <div className={`heart ${isRed ? 'red' : ''}`} onClick={handleHeartClick}>
      <i className="fas fa-heart"></i>
    </div> */}
    
    {/* <button
						variant="unstyled"
						fontSize={{ base: 18, md: 24 }}
						minW={6}
						color="accent.main"
            // onClick={handleClick}
						>
						{icon?.favorites?.includes(value?._id) ? (
							<AiFillHeart color="inherit" />
						) : (
							<AiOutlineHeart color="#ddd" />
						)}
					</button> */}
         
          </div>
        </div>
      ))}
      
    </div>
    
    </section>
  );
}

