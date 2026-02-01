import mongoose from "mongoose";
import { Schema } from "mongoose";

const LinkSchema = new Schema({
    hash: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        required: true
    },
    contentId: {
        type: Schema.Types.ObjectId,
        ref: "Content",
        unique: true,
    }
})

export const LinkModel = mongoose.model("Link", LinkSchema);