import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path_name:{
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
});

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;