const mongoose = require("mongoose")


const shcema = mongoose.Schema({
    branchName: {
        type: String,
        required: true
    },

    branchOwner: {
        type: Object,
        required: true
    }
    ,
    address: {
        type: Object,
        required: true
    },

    workTime: {
        type: String,
        required: true
    },
    propertyInfo: {
        type: Object,
        required: true
    }
    ,
    propertyOptions: {
        type: Object,
    }
    ,
    image: {
        type: String,
        required: true
    }
})


const branchModel = mongoose.models.Branch || mongoose.model("Branch", shcema)


export default branchModel