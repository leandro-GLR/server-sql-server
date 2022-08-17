/* // DEPENDENCYS
const jwt = require("jsonwebtoken");

// CONFIG
const {jwtSecret} = require("../configs/env/index");

// MODELS / CLIENT
const client = require("../libs/singletonPrisma");

const protect =  (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, jwtSecret);

      req.user = await client.USUARIO.findUnique({
        where: {
          id: decoded.id,
        },
        select: {
          id: true,
          USUARIO:true,
          PASSWORD:true,
          DESCRIPCION:true,
          EMAIL:true,
          NIVEL1:false,
          NIVEL2:false,
        }
      })
      next();
    } catch (error) {
      console.log(error)
      return res.status(401).json({
        success: false,
        message: "Not authorized, token failed",
      })
    }
  }
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, no token provided",
    })
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      success: false,
      message: "Not authorized, not admin",
    })
  }
};

module.exports = { protect, admin }; */
