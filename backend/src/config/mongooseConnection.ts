import mongoose from "mongoose";

const MONGO_URL = 'mongodb://127.0.0.1:27017/brainly';

async function connectDb() {
    try{
        await mongoose.connect(MONGO_URL, {
            auth: {
                username: "amanAdmin",
                password: "Backend@987",
            },
            authSource: "admin",
        });
        console.log("db connected");

    } catch (err){
        console.log("Error connecting to DB", err);
    }
}

connectDb();

export default connectDb;