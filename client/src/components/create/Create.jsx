import React, { useState } from "react";
import "./create.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { addInfo } from "../../service/api";
import Axios from "axios";
import ReactQuill from "react-quill";

import 'react-quill/dist/quill.snow.css';

export const Create = () => {
  // const[postImage,setPostImage]= useState({myFile:""})
  const [image,setImage] = useState("");
const [content, setcontent] = useState([]);
  const [files, setFiles] = useState([]);
  const [info, setInfo] = useState({
    file: "",
    title: "",
    textarea: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addInfoDetails();
    
  };
  
  // const modules = {
  //   toolbar: [
      
  //     [
  //       {
  //         font:[
  //           'monospace',
  //           'serif',
  //           'raleway',
  //           'montserrat',
  //           'lato',
  //           'rubik',
  //           'roboto'        
  //           ],
  //       },
  //     ],
  //   ],
  // };

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length < 7) {
      // Handle image submission logic if needed
    }
  };

  const onValueChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    const file= e.target.files[0];
    console.log(file);
    setImage(e.target.files[0]);
  };

  const addInfoDetails = async () => {
    const data = {
      file:info.file,
      title: info.title,
      description: info.textarea,
    };

    try {
      const response = await Axios.post("http://localhost:4000/news", data);
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error("Failed to create post");
      }
    } catch (err) {
      console.error(err);
    }
  };
  // const handleFileUpload =async(e)=>{
  //   const file=e.target.file;
  //   const base64 =await convertToBase64(file);
  //  console.log(base64);
  // }
 
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img'>
            <img src='' alt='image' className='image-preview' />
          </div>
          <form onSubmit={handleSubmit} action='/create' enctype="multipart/form-data" method="post">
            <div className='inputfile flexCenter'>
            {image ? <img src={URL.createObjectURL(image)} alt=""/> :<img src="" width={100} height={100} alt=""/>}
              <input
                type='file'
                accept='image/*'
                alt='img'
                onChange={(e) => onValueChange(e)}
                name='file'
                
                
              />

              <button onClick={handleImageSubmit} type='button'>
                Upload
              </button>
            </div>
            <input
              type='text'
              placeholder='Title'
              onChange={(e) => onValueChange(e)}
              name='title'
            />

            <textarea
              id=''
              cols='30'
              rows='10'
              onChange={(e) => onValueChange(e)}
              name='textarea'
            ></textarea>
            {/* <ReactQuill value={content} theme="snow" 
             id=''
              cols='30'
              rows='10'
              onChange={(e) => onValueChange(e)}
              name='textarea'/> */}

            <button className='button' onClick={addInfoDetails}>
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};


// function convertToBase64(file){
//   return new Promise((resolve, reject) =>{
//     const fileReader = new FileReader();
//     fileReader.readAsArrayBuffer(file);
//     fileReader.onload =() =>{
//       resolve(fileReader.result)
//     };
//     fileReader.onerror =(error) =>{
//       reject(error)
//     }
//   })
// }