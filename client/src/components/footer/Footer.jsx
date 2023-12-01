import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>News Agregator - Team 100</p>
          <div className='social'>
           <a href="https://www.facebook.com/varshini.a.581"> <BsFacebook className='icon' /> </a>
           <a href="https://www.instagram.com/27_varshu_04"> <RiInstagramFill className='icon' /></a>
           
           <a href="https://www.linkedin.com/in/adiraju-sri-varshini-00833621b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <AiFillLinkedin className='icon' /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
