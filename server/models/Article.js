import mongoose from 'mongoose';
const articleSchema=new mongoose.Schema({
    "title":{type:String},
    "description":{type:String},
    "file":{type:Buffer},
},{
    collection:"hello"
})
 
const Article=mongoose.model("articleSchema",articleSchema);
export {Article};




// export const deleteUser = async (id)=> {
//     try{
//         return await axios.delete(`http://localhost:4000/details/edit/${id}`);
//     }catch (error){
//         console.log('error while deleteing user api', error);
//     }
// }