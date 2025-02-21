import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})



const foodLabelModel = mongoose.models.FoodLabe || mongoose.model("FoodLabe", schema)

export default foodLabelModel