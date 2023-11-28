import express from 'express';
import mongoose from 'mongoose';
import { User } from './models/User.js';
import { Article } from './models/Article.js';
import cors from 'cors';
// const bcrypt =require ("bcryptjs")

const app = express();
app.use(cors());
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://srivarshini21bce8109:0ldVpb7T7uCk78wb@hello.85x42vr.mongodb.net/?retryWrites=true&w=majority");
var db = mongoose.connection;
db.on("open", () => console.log("connected to DB"));
db.on("error", () => console.log("Error occurred"));

app.use(express.json());

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        

        const user= await User.findOne({email,password});
        
        if (!user){
            return res.json({ error: "User not found"});
        }

        const data = await User.find({ email: email, password: password }).exec();
     
     return  res.send({ status: "ok" , data: data});
    //   res.json(data);
       
       
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
app.post("/register", async (req, res) => {
    const { fname, lname, email, password } = req.body;
  
//    const encryptedPassword= await bcrypt.hash(password,10);
  
    try {
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.send({ error: "User Exists" });
        alert("The User Aldready Exists!, Please Use a different Email Id!!");
      }
      await User.create({
        fname,
        lname,
        email,
        password,
        // : encryptedPassword ,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });
app.post("/news", async (req, res) => {
    try {
        const { title, description,file } = req.body;
        console.log(req.body);

        const article = await Article.create({ title, description, file });
        return res.json(article);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

app.get("/news", async (req, res) => {
    try {
        const articles = await Article.find().exec();
        return res.json(articles);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

app.get("/details/edit/:id", async (req, res)=> {
    const {id} = req.params;
    const articles =await Article.findById(id);
    res.json(articles);
})

app.put("/details/edit/:id", async(req, res)=>{
    let newPath = "null";
    const {title,description,file= "null"} =req.body;
    const {id} = req.params;
    const articles =await Article.findById(id);
    console.log(id);
    // file ="file";
    await Article.findOneAndUpdate({"_id":id},{
        "title":title,
        "description":description
    })

    // await articles.update({
    //     title,description,file,
    //     cover:newPath ? newPath : articles.cover,
    // });
    res.json(articles);

})
app.delete("/details/edit/:id", async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        
       

        await Article.deleteOne({"_id":id});
        return res.json(Article);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});



app.listen(4000, () => {
    console.log("server started ");
});





