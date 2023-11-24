import axios from 'axios';


const URL=`http://localhost:8000`;
export const addInfo = async(data) =>{
    try{
       await axios.post(`${URL}/create`, data);

     

    }catch(error){
        console.log("Error while calling add info Api", error);
    }
}

export const deleteUser = async (id)=> {
    try{
        return await axios.delete(`http://localhost:4000/details/edit/${id}`);
    }catch (error){
        console.log('error while deleteing user api', error);
    }
}