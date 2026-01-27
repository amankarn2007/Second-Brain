import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

//module.exports = mongoose.model("User", userSchema);
export const userModel = mongoose.model("User", userSchema);