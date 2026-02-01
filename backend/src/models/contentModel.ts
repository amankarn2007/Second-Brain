import mongoose from "mongoose";
import { Schema } from "mongoose";

const contentTypes = ['image', 'video', 'audio', 'article'];

const contentSchema = new Schema({
    link: { 
        type: String,
    },
    type: { 
        type: String,
        enum: ['notes', 'x', 'youtube'], 
        required: true 
    },
    title: { 
        type: String,
        required: true
    },
    heading: {
        type: String,
    },
    description: {
        type: String,
    },
    tags: [{type: String}],
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const contentModel = mongoose.model("Content", contentSchema);