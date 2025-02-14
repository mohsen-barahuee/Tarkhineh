const mongoose = require("mongoose")


const shcema = mongoose.Schema({
    branchName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    workTime: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


const branchModel = mongoose.models.Branch || mongoose.model("Branch", shcema)


export default branchModel