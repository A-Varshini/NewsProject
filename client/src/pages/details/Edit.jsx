import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useContext, useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { Axios } from "axios";
import { deleteUser } from "../../service/api";

export const Edit = () => {
 const [postInfo,setPostInfo] = useState(null);

 const {id} =useParams();
 useEffect(() => {
  fetch(`http://localhost:4000/details/edit/${id}`)
  .then(response =>{
    response.json().then(postInfo => {
      setPostInfo(postInfo);
    });
  });
 }, []);

 const deleteUserdetails =async (req) => {
  const data = new FormData();
    // data.set('file',file);
    
    data.delete('_id', id);
 console.log(data, "data")
 let payload={
  _id: id,
  
}
console.log(payload, "payload")
const response = await fetch(`http://localhost:4000/details/edit/${id}`, {
method:"DELETE",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)

    });
    if (response.ok) {

    }
  
    // const id= req.params.id;
    // await postInfo.deleteOne({_id: id});
    // const res = await fetch(`http://localhost:4000/details/edit/${id}`, {
    // method:"DELETE",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(id)
    
    //     });
    //     if (res.ok) {
    // console.log(id)
    //     }
      
  
  // await deleteUser(id);
  
 }

 

 
 if(!postInfo) return ' ';
  return(
<section className='singlePage'>
          <div className='container'>
          <div className='left'>
              
            </div>
            
            <h1>{postInfo.title}</h1>
              <p>{postInfo.description}</p>
              
            <div className='right'>
              <div className='buttons'>
                <Link to={`/editinfo/${postInfo._id}`}>
                <button className='button'>
                  <BsPencilSquare />
                </button></Link>
                <button className='button'
                 onClick={() => deleteUserdetails(postInfo._id)}
                  >
                
                  <AiOutlineDelete />
                </button>
              </div>
             
              <p>Read More on:</p>
              
            </div>
          </div>
        </section>
)}