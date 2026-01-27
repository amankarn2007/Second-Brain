import mongoose from "mongoose";
import { Schema } from "mongoose";

const contentTypes = ['image', 'video', 'audio', 'article'];

const contentSchema = new Schema({
    link: { 
        type: String,
        required: true 
    },
    type: { 
        type: String,
        enum: contentTypes, 
        required: true 
    },
    title: { 
        type: String,
        required: true
    },
    //tags: [{ 
    //    type: Schema.Types.ObjectId, 
    //    ref: 'Tag'
    //}],
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const contentModel = mongoose.model("Content", contentSchema);