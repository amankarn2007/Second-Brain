import jwt from "jsonwebtoken";
import type { Types } from "mongoose";
import { JWT_TOKEN } from "../config/JWT_TOKEN.js";


export const genrateToken = async function(id: Types.ObjectId, username: string) {
    const token = jwt.sign({
        id,
        username,
    }, JWT_TOKEN, {expiresIn: "7d"});

    //console.log(token);
    return token;
}