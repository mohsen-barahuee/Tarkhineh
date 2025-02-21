import mongoose from "mongoose";
import foodLabelModel from "./food-labe";


const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    deatails: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: mongoose.Types.ObjectId,
        ref: "FoodLabe"
    }
})


const foodModel = mongoose.models.Food || mongoose.model("Food", schema)


export default foodModel