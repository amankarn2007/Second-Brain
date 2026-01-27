import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../config/JWT_TOKEN.js";

export const isLogedin = (req: Request, res: Response, next: NextFunction) => {
    try{
        const header = req.headers["authorization"]; //header se token uthaya

        if(!header){
            return res.status(403).json({ message: "token mising" });
        }

        // header = logedin time token
        const decoded = jwt.verify(header as string, JWT_TOKEN); //token 
    
        if(decoded){
            //@ts-ignore
            req.userId = decoded.id;
            next();
        }
    } catch(err){
        console.log(err);
        return res.json({ message: "you have to login first" });
    }
}

//we've genrated token with the help of "username", here we'll verify token "is our token correct", if correct then we'll add that token's id(user id) in "Request" object , and use it in controllers to find the user.