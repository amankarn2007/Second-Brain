import mongoose from "mongoose";

const MONGO_URL = 'mongodb://127.0.0.1:27017/brainly';
const ATLAS_URI = 'mongodb+srv://amankarn187_db_user:HUDTNasmqkn7F7r4@cluster0.zlc1mp8.mongodb.net/?appName=Cluster0';

async function connectDb() {
    try{
        //await mongoose.connect(MONGO_URL, {
        //    auth: {
        //        username: "amanAdmin",
        //        password: "Backend@987",
        //    },
        //    authSource: "admin",
        //});

        await mongoose.connect(ATLAS_URI);
        console.log("db connected");

    } catch (err){
        console.log("Error connecting to DB", err);
    }
}

connectDb();

export default connectDb;