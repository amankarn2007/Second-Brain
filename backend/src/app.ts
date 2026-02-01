import express from "express";
import bcrypt from "bcrypt";
import "./config/mongooseConnection.js";
import { userModel } from "./models/userModel.js";
import { contentModel } from "./models/contentModel.js";
import { genrateToken } from "./utils/genrateToken.js";
import cookieParser from "cookie-parser";
import { isLogedin } from "./middlewares/userMiddleware.js";
import { LinkModel } from "./models/LinkModel.js";
import { randomString } from "./utils/genrateLink.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); //accept api req from frontent

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
        console.log(user);
        
        res.json({
            message: "user signed up",
        });
    } catch(err) {
        console.log("error catched in signup endpoint", err);
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
        console.log("error catched in signin endpoint", err);
    }
})

app.post("/api/v1/content", isLogedin, async (req, res) => {
    try{
        const { link, type, title, tags } = req.body;

        const createContent = await contentModel.create({
            link,
            type,
            title,
            tags,
            //@ts-ignore
            userId: req.userId,
        })

        res.json({ createContent });

    } catch(err){
        return res.send({message: `error in content endpoint, ${err}`});
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

app.delete("/api/v1/content/:contentId", isLogedin, async (req, res) => {
    try{
        //@ts-ignore
        const userId = req.userId; //through isLogedin middleware

        const { contentId } = req.params;
        //console.log(`contentId: ${contentId}`);

        await contentModel.findByIdAndDelete(contentId);
        res.json({ message: "user deleted successfully" });

    } catch(err) {
        res.json({ message: "error in content deleting" });
    }

})

app.post("/api/v1/brain/share", isLogedin, async(req, res) => { //used to genrate the link
    const share = req.body.share;

    if(share) {

        const existingLink = await LinkModel.findOne({ //agar link already gen hai
            userId: (req as any).userId 
        })

        if(existingLink){
            return res.json({ 
                message: "Link already exists",
                link: "/brain/" + existingLink.hash 
            });
        }

        const hashedString = randomString(15);
        await LinkModel.create({ //LinkModel needs userId and hashed link
            userId: (req as any).userId,
            hash: hashedString,
        })

        res.json({
            link: "/brain/" + hashedString,
        })

    } else { //if share is false, delete old link
        await LinkModel.deleteOne({
            userId: (req as any).userId,
        })

        res.json({
            message: "Link removed"
        })
    }
})

app.get("/api/v1/brain/:shareLink",  async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({hash});

    if(!link){
        return res.json({
            message: "Sorry Incorrect Input",
        })
    }

    const content = await contentModel.find({ //link se sare content find
        userId: link.userId,
    })

    const user = await userModel.findOne({ //link se user find
        _id: link.userId,
    })

    if(!user){
        return res.json({
            message: "User not found"
        })
    }

    res.json({
        username: user.username,
        content: content,
    })
    
})

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});