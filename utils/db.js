const mongoose = require("mongoose")


const connectToDB = async () => {

    try {
        // Checking  Connections
        if (mongoose.connections[0].readyState) {
            return false
        }
        await mongoose.connect("mongodb://127.0.0.1:27017/Tarkhine")
        console.log("Connected To Data Base!!")
    } catch (error) {
        console.log("Error Connecting Data Base =>", err)
    }

}

export default connectToDB;


