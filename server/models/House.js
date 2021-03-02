import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
        bathrooms: { type: Number, required: true },
        bedrooms: { type: Number, required: true },
        year: { type: Number, required: true },
        levels: { type: Number, required: true },
        description: { type: String, required: true },
        imgUrl: { type: String }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default House;