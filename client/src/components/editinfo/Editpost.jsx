import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Axios from "axios";
import './editpost.css';
import { Link, useParams } from "react-router-dom";

import 'react-quill/dist/quill.snow.css';
export default function Editpost() {

  const [content, setcontent] = useState('');
  const [files, setFiles] = useState('');
  const [info, setInfo] = useState({
    file: "",
    title: "",
    textarea: "",
  });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [redirect, setredirect] = useState('');
  const { id } = useParams();



  useEffect(() => {
    fetch(`http://localhost:4000/details/edit/` + id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setDescription(postInfo.description);
          //  setFiles(postInfo.files);

          // setTitle(postInfo.title);
          // setDescription(postInfo.description);
        });
      });
  }, []);
  // useEffect(() => {
  //     loadInfoDetails();
  // },[])

  // const loadInfoDetails =async()=>{
  //     const response=await getInfo(id);
  //     setInfo(response.data);
  // }
  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    // data.set('file',file);
    data.set('title', title);
    data.set('description', description);
    data.set('_id', id);
 console.log(data, "data")
 let payload={
  _id: id,
  title: title,
  description: description
}
console.log(payload, "payload")

 
    const response = await fetch(`http://localhost:4000/details/edit/${id}`, {
method:"PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)

    });
    if (response.ok) {

    }
  }

  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img'>
            <img src='' alt='image' className='image-preview' />
          </div>
          <form action='/editinfo' onSubmit={updatePost}>
            <div className='inputfile flexCenter'>
              <input
                type='file'
                accept='image/*'
                alt='img'
                onChange={ev => setFiles(ev.target.value)}

                name='file'
                value={files}
              />
              <button type='button'>
                Upload
              </button>
            </div>
            <input
              type='text'
              placeholder='Title'
              onChange={ev => setTitle(ev.target.value)}

              name='title'
              value={title}
            />


            <textarea
              id=''
              cols='30'
              rows='10'
              onChange={ev => setDescription(ev.target.value)}

              name='textarea'
              value={description}

            ></textarea>

            <button className='button'>
              Update Post
            </button>
          </form>
        </div>
      </section>
      hello motto
    </>
  );
}