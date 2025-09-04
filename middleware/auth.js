const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

const SECRET_KEY = "NotesAPI";

const auth = (req, res, next) => {

    try {

        let token = req.headers.authorization;
        console.log("Authorization header:", token); // Add this line

       if (token && token.startsWith("Bearer ")) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY);
            console.log("Decoded user:", user);
            req.userId = user.id;
            return next();
        } else {
            console.log("No or malformed token");
            return res.status(401).json({ message: "Unauthorized user" });
        }
       

        //pass request to next function

    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized user" });

    }

}
module.exports = auth;