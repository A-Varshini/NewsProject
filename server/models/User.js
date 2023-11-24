// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    "fname": { type: String },
    "lname": { type: String },
    "email": { type: String ,unique: true},
    "password": { type: String }
}, {
    collection: "UserInfo"
});

const User = mongoose.model("UserInfo", userSchema);

export { User };
