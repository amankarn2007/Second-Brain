import express from "express";
import bcrypt from "bcrypt";
import "./config/mongooseConnection.js";
import { userModel } from "./models/userModel.js";
import { contentModel } from "./models/contentModel.js";
import { genrateToken } from "./utils/genrateToken.js";
import cookieParser from "cookie-parser";
import { isLogedin } from "./middlewares/userMiddleware.js";


const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    try{
        const { username, password } = req.body;
    
        const findUser = await userModel.findOne({username: username});
        if(findUser) {
            //console.log("user pakad liye");
            return res.json({
                message: "user already exists",
            })
        }
    
        const user = await userModel.create({
            username: username,
            password: password,
        })
    
        res.json({
            message: "user signed up",
        });
    } catch(err) {
        console.log("error catched in signup endpoint");
    }
})

app.post("/api/v1/signin", async (req, res) => {
    try{
        const { username, password } = req.body;
    
        const user = await userModel.findOne({username: username}); //user

        if(!user){
            return res.json({message: "user does not exists"})
        }
        
        if(user.password === password){
            const id = user._id;
            const token = await genrateToken(id, username); //we've sending username, username will help us to find user with the help of token

            //res.cookie(token);

            return res.json({ token: token });
        }

        return res.json({
            message: "enter correct password",
        })

    } catch(err) {
        console.log("error catched in signin endpoint");
    }
})

app.post("/api/v1/content", isLogedin, async (req, res) => {
    try{
        const { link, type, title } = req.body;

        const createContent = await contentModel.create({
            link,
            type,
            title,
            //tags,
            //@ts-ignore
            userId: req.userId,
        })

        res.json({ createContent });

    } catch(err){
        return res.send({message: "error in content endpoint"});
    }

})

app.get("/api/v1/content", isLogedin, async (req, res) => {
    //@ts-ignore
    const userId = req.userId; //"isLogedin" se userId nikala ,and searched all contents
    const contents = await contentModel.find(
        {userId}
    ).populate("userId", "username"); //only populate username, not password

    res.json({
        contents,
    })
})

app.delete("/api/v1/content", isLogedin, async (req, res) => {
    try{
        //@ts-ignore
        const userId = req.userId; //through isLogedin middleware

        const contentId = req.body.contentId;
        console.log(`contentId: ${contentId}`);

        await contentModel.findOneAndDelete({ userId });
        res.json({ message: "user deleted successfully" });

    } catch(err) {
        res.json({ message: "error in content deleting" });
    }

})

app.post("/api/v1/brain/share", (req, res) => {
    res.send("hi");
})

app.get("/api/v1/brain/:shareLink", (req, res) => {
    res.send("hi");
})

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});