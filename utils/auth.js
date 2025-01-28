import { hashوcompare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

// hash Password
const hashPassword = async (password) => {

    const hashedPassword = await hash(password, 12)
    return hashedPassword
}

// Making Token
const generateToken = (data) => {

    const token = sign({ ...data }, process.env.privatekey, {
        algorithm: "HS256",
        expiresIn: "24h",
    })
    return token
}


//Dehashing Password
const verifyPassword = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
};

// Generate Token And Get Payload and Information
const verifyToken = (token) => {

    try {
        const validationResult = verify(token, process.env.privatekey)
        return validationResult
    } catch (error) {
        console.log("ERORR==>" + error)
        return false
    }

}

export { hashPassword, generateToken, verifyPassword, verifyToken }