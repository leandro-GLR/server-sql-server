const jwt = require("jsonwebtoken");

//? Yo pondría mas datos en el jwt, y que expire 1d
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = generateToken;
