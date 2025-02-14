const mongoose = require('mongoose')


const schema = mongoose.Schema({
    firstName_lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    

})


const consultingModel = mongoose.models.Consulting || mongoose.model("Consulting",schema)

export default consultingModel