const mongoose = require("mongoose")


// Building Users Structures for DataBase
const schema = mongoose.Schema({

    phoneNumber: {
        type: Number,
        required: true
    },
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String

    },
    email: {
        type: String

    },

    birthDay: {
        type: String

    },


})


const UserModel = mongoose.models.User || mongoose.model("User", schema)


export default UserModel;
